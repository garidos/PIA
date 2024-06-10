import express from 'express';
import { KorisnikController } from '../controllers/korisnik.controller';

const korisnikRouter = express.Router();
const controller = new KorisnikController;

korisnikRouter.route('/login').post(
  (req, res) =>  controller.login(req, res) 
);

korisnikRouter.route('/getAll').get(
    (req, res) => controller.getAll(req, res)
);


export default korisnikRouter;