import express from 'express';
import Korisnik from '../models/korisnik';
import korisnik from '../models/korisnik';

export class KorisnikController {
    login = (req: express.Request, res: express.Response) => {
        let lozinka = req.body.lozinka;
        let kor_ime = req.body.korisnickoIme;
        let tip = req.body.tip;

        Korisnik.findOne({
            korisnickoIme: kor_ime,
            lozinka: lozinka,
            tip: tip
        }).then( korisnik => {
            res.json(korisnik);
        }).catch( err => {
            console.log(err)
        });
    }

    updateKorisnik = (req: express.Request, res: express.Response) => {
        let kor_ime = req.body.korisnickoIme;


        Korisnik.updateOne({korisnickoIme: kor_ime}, {
            $inc: {naStanju: 5000}
        }).then( data => {
            res.json(data.modifiedCount);
            res.status(200);
        }).catch( err => {
            res.json(0);
            console.log(err);
        })
    }

    getAllRegistrovani = (req: express.Request, res: express.Response) => {
       Korisnik.find({tip: "registrovani"}).then( korisnici => {
        res.json(korisnici);
       }).catch(err => {
        console.log(err);
       })
    }

    addProizvod = (req: express.Request, res: express.Response) => {
        let korisnik = req.body.korisnik;
        let proizvod = {
            proizvod: req.body.proizvod,
            cena: req.body.cena,
            kupio: null,
            anonimno: false
        }

        Korisnik.updateOne({korisnickoIme: korisnik}, {
            $push: {lista: proizvod}
        }).then( data => {
            res.json(data.modifiedCount);
        }).catch( err => {
            res.json(0);
            console.log(err);
        })
    }

    getKorisnik = (req: express.Request, res: express.Response) => {
        let kor_ime = req.query.kor_ime

        Korisnik.findOne({korisnickoIme: kor_ime}).then( data => {
            res.json(data);
        }).catch( err => {
            console.log(err);
        })
    }

    kupiPoklon = (req: express.Request, res: express.Response) => {
        let kupac = req.body.kupio;
        let korisnik = req.query.korisnik;
        
        Korisnik.updateOne({korisnickoIme: kupac}, {
            $inc: {naStanju: -req.body.cena, potroseno: req.body.cena}
        }).then( data => {

            Korisnik.updateOne({korisnickoIme: korisnik}, {
                $set: {"lista.$[proizvod].kupio": req.body.kupio, "lista.$[proizvod].anonimno": req.body.anonimno}
            }, {
                arrayFilters: [{"proizvod.proizvod": req.body.proizvod}]
            }).then( data2 => {
                res.json(data2.modifiedCount + data.modifiedCount)
            }).catch( err => {
                console.log(err);
            })
        }).catch( err => {
            console.log(err);
        })
    }
}