import * as express from "express";
import Korisnik from "../models/korisnik";

export class KorisnikController {
  login = (req: express.Request, res: express.Response) => {
    let kor_ime = req.body.kor_ime;
    let lozinka = req.body.lozinka;

    Korisnik.findOne({ kor_ime: kor_ime, lozinka: lozinka, tip: req.body.tip })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => console.log(err));
  };


  updateKorisnik = (req: express.Request, res: express.Response) => {
    Korisnik.updateOne({kor_ime: req.body.kor_ime, tip: req.body.tip }, {
        $set: { narudzbine: req.body.narudzbine }
    }).then( data => {
        res.json(data.modifiedCount);
    }).catch( err => {
        console.log(err);
    })
  };
}
