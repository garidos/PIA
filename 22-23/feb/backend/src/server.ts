import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import korisnikRouter from "./routes/korisnik.router";
import proizvodRouter from "./routes/proizvod.router";
import narudzbinaRouter from "./routes/narudzbina.routes";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/pijaca2023");
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("db connection ok");
});

const router = express.Router();
router.use("/korisnici", korisnikRouter);
router.use("/proizvodi", proizvodRouter);
router.use('/narudzbine', narudzbinaRouter);

app.use("/", router);

app.listen(4000, () => console.log(`Express server running on port 4000`));
