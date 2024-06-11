import express from "express";
import { PutnikController } from "../controllers/putnik.controller";

const putnikRouter = express.Router();
const controller = new PutnikController();

putnikRouter.route("/login").post(
    (req, res) => controller.login(req, res)
);

putnikRouter.route("/updatePutnik").post(
    (req, res) => controller.updatePutnik(req, res)
);


export default putnikRouter;
