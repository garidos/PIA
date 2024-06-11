import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Putnik = new Schema({
    korisnickoIme: String,
    lozinka: String,
    ime: String,
    prezime: String,
    tip: String,
    imelj: String,
    lokacijatrenutna: String,
    novac: Number,
    lista: Array
}, {
    versionKey: false
})


export default mongoose.model('Putnik', Putnik, 'putnici');