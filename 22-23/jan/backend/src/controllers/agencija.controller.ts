import express, { json } from "express";
import Agencija from "../models/agencija"

export class AgencijaController {
  login = (req: express.Request, res: express.Response) => {
    let kor_ime = req.body.korisnickoIme;
    let lozinka = req.body.lozinka;

    Agencija.findOne({ korisnickoIme: kor_ime, lozinka: lozinka }).then(data => {
        res.json(data);
    }).catch( err => {
        console.log(err);
    })
  };

  addPonuda = (req: express.Request, res: express.Response) => {
    Agencija.aggregate([
        { $unwind: "$usluge" },
        { $sort: {"usluge.idponude": -1} },
        { $group: { _id: null, allUsluge: { $push: "$usluge" } } },
        { $project: { _id: 0, allUsluge: 1 } },
    ]).then( data => { 
        let array = data[0].allUsluge;
        const ponuda = {
            idponude: ( array.length > 0 ? array[0].idponude + 1 : 1 ),
            lokacija_od: req.body.lokacija_od,
            lokacija_do: req.body.lokacija_do,
            tip: req.body.tip,
            period: req.body.period,
            cena: req.body.cena,
            broj_mesta: req.body.broj_mesta,
        };
        Agencija.updateOne({korisnickoIme: req.query.kor_ime }, {
            $push: { usluge: ponuda }
        }).then( data => {
            res.json(data.modifiedCount);
        }).catch( err => {
            console.log(err);
        })
    }).catch(err => {
        console.log(err);
    })
  };

  updatePonuda = (req: express.Request, res: express.Response) => {
    
    Agencija.updateOne({korisnickoIme: req.query.agencija}, {
        $set: { "usluge.$[ponuda].broj_mesta": req.body.broj_mesta }
    }, {
        arrayFilters: [ {"ponuda.idponude": req.body.idponude }]
    }).then( data => {
        res.json(data.modifiedCount);
    }).catch( err => {
        console.log(err);
    })
  };

  getAllAgencije = (req: express.Request, res: express.Response) => {
    Agencija.find({}).then( data => {
        res.json(data);
    }).catch( err => {
        console.log(err);
    })
  };

  getAllPonude = (req: express.Request, res: express.Response) => {
    Agencija.aggregate([
        { $unwind: "$usluge"},
        { $replaceRoot: { newRoot: "$usluge" }}
    ]).then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
    })
  };

  search = (req: express.Request, res: express.Response) => {
    var tipovi: string[] = []
    if ( req.query.brzivoz == 'true' ) tipovi.push("brzivoz");
    if ( req.query.aviokarta == 'true') tipovi.push("aviokarta");
    if ( req.query.hotel == 'true' ) tipovi.push("hotel");
    Agencija.aggregate([
        { $unwind: "$usluge" },
        { $match: { 
            $or: [
                { "usluge.tip": "hotel" },
                { "usluge.lokacija_od": req.query.lokacija_od }
            ],
            "usluge.lokacija_do": { $regex: req.query.lokacija_do, $options: 'i' },
            "usluge.tip": {$in: tipovi},
            "usluge.cena": { $gte: Number(req.query.cena_od), $lte: Number(req.query.cena_do) }
        }},
        { $replaceRoot: { newRoot: "$usluge"} }
    ]).then( data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
    })
  };
}
