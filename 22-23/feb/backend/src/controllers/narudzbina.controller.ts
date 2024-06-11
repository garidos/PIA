import * as express from "express";
import Narudzbina from "../models/narudzbina";

export class NarudzbinaController {
    addNarudzbina = (req: express.Request, res: express.Response) => {
        Narudzbina.find({}).sort({idN: -1}).then( data => {
            req.body.idN = ( data.length > 0 ? ( data[0].idN ? data[0].idN : 0 ) + 1 : 1);
            let n = new Narudzbina(req.body);
            n.save().then( data => {
                res.json(req.body.idN)
            }).catch( err => {
                console.log(err);
            })
        }).catch( err => {
            console.log(err);
        })
    };

    getAll = (req: express.Request, res: express.Response) => {
        Narudzbina.find({}).then( data => {
            res.json(data);
        }).catch( err => {
            console.log(err);
        })
    };
}
