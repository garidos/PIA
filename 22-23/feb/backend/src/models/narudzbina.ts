import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Narudzbina = new Schema({
    idN: Number,
    kupac: String,
    proizvodi: Array,
    racun: Number
});

export default mongoose.model("Narudzbina", Narudzbina, "narudzbine");
