import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Korisnik = new Schema({
    ime: String,
    prezime: String,
    kor_ime: String,
    lozinka: String,
    mejl: String,
    opstina: String,
    tip: String
}, {
    versionKey: false
});

export default mongoose.model('Korisnik', Korisnik, 'korisnici');