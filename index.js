import express from 'express';
import bodyParser from 'body-parser';
// import routes from './routes';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(bodyParser.json());
// app.use(cors());
// app.use('/api', routes);

const PORT = process.env.PORT || 7000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log('MongoDB connected successfully');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error);
    });