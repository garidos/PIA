import express from 'express';
import { ProizvodController } from '../controllers/proizvod.controller';


const proizvodRouter = express.Router();
const controller = new ProizvodController();

proizvodRouter.route('/getAll').get(
    (req, res) => controller.getAll(req, res)
);

proizvodRouter.route('/updateProizvod').post(
    (req, res) => controller.updateProizvod(req, res)
);

proizvodRouter.route('/addProizvod').post(
    (req, res) => controller.addProizvod(req, res)
);

export default proizvodRouter;