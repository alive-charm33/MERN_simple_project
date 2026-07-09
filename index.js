import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/userRoute.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(bodyParser.json());
// app.use(cors());
// app.use('/api', routes);

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;
//debug code
console.log("PORT from .env:", process.env.PORT);
console.log("MONGO_URL:", process.env.MONGO_URL);

//db
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
app.get("/", (req, res) => {
    res.send("Server is working");
});
    app.use("/api",routes);


// import express from "express";

// const app = express();

// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

// app.listen(8000, () => {
//     console.log("Listening on 8000");
// });