import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Proizvod = new Schema({
    id: Number,
    naziv: String,
    opis: String,
    cena: Number,
    lajkovi: Number,
    kreator: String,
    status: String
}, {
    versionKey: false
});

export default mongoose.model('Proizvod', Proizvod, 'proizvodi');