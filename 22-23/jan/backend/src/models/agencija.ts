import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Agencija = new Schema({
    korisnickoIme: String,
    lozinka: String,
    tip: String,
    naziv: String,
    PIB: Number,
    usluge: Array
}, {
    versionKey: false
})


export default mongoose.model('Agencija', Agencija, 'agencije');