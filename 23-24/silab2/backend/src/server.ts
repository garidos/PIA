import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import korisnikRouter from './routes/korisnik.routes';
import proizvodRouter from './routes/proizvod.routes';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/lego');
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("db connected");
});

const router = express.Router();
router.use('/korisnici', korisnikRouter);
router.use('/proizvodi', proizvodRouter);

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));