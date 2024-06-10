import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

let Korisnik = new Schema({
    korisnickoIme: String,
    lozinka: String,
    ime: String,
    prezime: String,
    tip: String,
    potroseno: Number,
    naStanju: Number,
    lista: Array
},{
    versionKey: false
});

export default mongoose.model('Korisnik', Korisnik, 'korisnici');