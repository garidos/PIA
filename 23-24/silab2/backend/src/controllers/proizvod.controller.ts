import express from 'express';
import Proizvod from '../models/proizvod'

export class ProizvodController {
    getAll = (req: express.Request, res: express.Response) => {
        Proizvod.find({}).then( data =>
            res.json(data)
        ).catch( err => {
            console.log(err)
        })
    }

    updateProizvod = (req: express.Request, res: express.Response) => {
        Proizvod.updateOne({ id: req.body.id }, {
            $set: { cena: req.body.cena, status: req.body.status, lajkovi: req.body.lajkovi }
        }).then( data => {
            res.json(data.modifiedCount)
        }).catch( err => {
            console.log(err);
        })
    }

    addProizvod = (req: express.Request, res: express.Response) => {

        Proizvod.find({}).sort({id: -1}).then( data => {
            let proizvod = new Proizvod(req.body);
            proizvod.id = (data.length > 0 ? data[0].id + 1 : 1 );
            proizvod.save().then( data => {
                if ( data ) res.json(1);
                else res.json(0);
            }).catch( err => {
                console.log(err);
            })
        }).catch( err => {
            console.log(err)
        })
    }
}