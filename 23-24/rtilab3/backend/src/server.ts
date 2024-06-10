import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import korisnikRouter from './routers/korisnik.routes';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/darivanja');
const connection = mongoose.connection;
connection.once( 'open', () => {
    console.log("db connected");
});

const router = express.Router();
router.use('/korisnici', korisnikRouter);

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));