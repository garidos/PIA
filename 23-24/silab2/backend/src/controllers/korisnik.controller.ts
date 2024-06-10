import express from 'express';
import Korisnik from '../models/korisnik'


export class KorisnikController {
    login = (req: express.Request, res: express.Response ) => {
        Korisnik.findOne({ 
            kor_ime: req.body.kor_ime,
            lozinka: req.body.lozinka,
            tip: req.body.tip
        }).then( kor => {
            res.json(kor);
        }).catch( err => {
            console.log(err);
        })
    }

    getAll = (req: express.Request, res: express.Response ) => {
        Korisnik.find({}).then( data =>
            res.json(data)
        ).catch( err => {
            console.log(err)
        })
    }
}