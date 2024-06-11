import express from "express";
import Putnik from "../models/putnik"

export class PutnikController {
  login = (req: express.Request, res: express.Response) => {
    let kor_ime = req.body.korisnickoIme;
    let lozinka = req.body.lozinka;

    Putnik.findOne({ korisnickoIme: kor_ime, lozinka: lozinka })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => console.log(err));
  };

  updatePutnik = (req: express.Request, res: express.Response) => {
    Putnik.updateOne({ korisnickoIme: req.body.korisnickoIme }, {
        $set: { lokacijatrenutna: req.body.lokacijatrenutna, novac: req.body.novac, lista: req.body.lista }
    })
      .then(data => {
        res.json(data.modifiedCount);
      })
      .catch((err) => console.log(err));
  };
}
