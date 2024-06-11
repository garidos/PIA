import * as express from "express";
import Proizvod from "../models/proizvod";

export class ProizvodController {
  getAll = (req: express.Request, res: express.Response) => {
    Proizvod.find({}).then( data => {
        res.json(data);
    }).catch( err => {
        console.log(err);
    })
  };

  updateProizvod = (req: express.Request, res: express.Response) => {
    Proizvod.updateOne({naziv: req.body.naziv }, {
        $set: { stanje: req.body.stanje }
    }).then( data => {
        res.json(data.modifiedCount);
    }).catch( err => {
        console.log(err);
    })
  };
}
