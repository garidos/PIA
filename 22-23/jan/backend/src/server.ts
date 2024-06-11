import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import putnikRouter from "./routes/putnik.router";
import agencijaRouter from "./routes/agencija.router";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/turizam23");
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("db connection ok");
});

const router = express.Router();
router.use("/putnici", putnikRouter);
router.use("/agencije", agencijaRouter);

app.use("/", router);

app.listen(4000, () => console.log(`Express server running on port 4000`));
