import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Proizvod = new Schema({
    naziv: String,
    kategorija: String,
    cena: Number,
    stanje: Number
});

export default mongoose.model("Proizvod", Proizvod, "proizvodi");
