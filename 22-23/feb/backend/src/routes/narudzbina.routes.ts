import express from "express";
import { NarudzbinaController } from "../controllers/narudzbina.controller";

const narudzbinaRouter = express.Router();
const controller = new NarudzbinaController();

narudzbinaRouter
  .route("/addNarudzbina")
  .post((req, res) => controller.addNarudzbina(req, res));

narudzbinaRouter.route("/getAll").get(
    (req, res) => controller.getAll(req, res)
)

export default narudzbinaRouter;
