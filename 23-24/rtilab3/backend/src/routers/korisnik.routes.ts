import express, { Router } from 'express';
import { KorisnikController } from "../controllers/korisnik.controller";

const korisnikRouter = express.Router();
const controller = new KorisnikController();

korisnikRouter.route('/login').post(
    (req, res) => controller.login(req, res)
);

korisnikRouter.route('/updateKorisnik').post(
    (req, res) => controller.updateKorisnik(req, res)
);

korisnikRouter.route('/getAllRegistrovani').get(
    (req, res) => controller.getAllRegistrovani(req, res)
);

korisnikRouter.route('/addProizvod').post(
    (req, res) => controller.addProizvod(req, res)
);

korisnikRouter.route('/getKorisnik').get(
    (req, res) => controller.getKorisnik(req, res)
);

korisnikRouter.route('/kupiPoklon').post(
    (req, res) => controller.kupiPoklon(req, res)
);

export default korisnikRouter;
