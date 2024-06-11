import express from "express";
import { AgencijaController } from "../controllers/agencija.controller";

const agencijaRouter = express.Router();
const controller = new AgencijaController();

agencijaRouter.route("/login").post(
    (req, res) => controller.login(req, res)
);

agencijaRouter.route("/addPonuda").post(
    (req, res) => controller.addPonuda(req, res)
);

agencijaRouter.route("/getAll").get(
    (req, res) => controller.getAllAgencije(req, res)
);

agencijaRouter.route("/getAllPonude").get(
    (req, res) => controller.getAllPonude(req, res)
);

agencijaRouter.route("/search").get(
    (req, res) => controller.search(req, res)
);

agencijaRouter.route("/updatePonuda").post(
    (req, res) => controller.updatePonuda(req, res)
);

export default agencijaRouter;
