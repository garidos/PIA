import express from "express";
import { KorisnikController } from "../controllers/korisnik.controller";
import { ProizvodController } from "../controllers/proizvod.controller";

const proizvodRouter = express.Router();
const controller = new ProizvodController();

proizvodRouter
  .route("/getAll")
  .get((req, res) => controller.getAll(req, res));

proizvodRouter.route("/updateProizvod").post(
    (req, res) => controller.updateProizvod(req, res)
)

export default proizvodRouter;
