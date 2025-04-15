import express from "express";
import 'dotenv/config';
import connectDB from "./database/client.js";
import authRouter from "./routes/authRouter.js";
import eventRouter from "./routes/events.js";
import serviceRouter from "./routes/services.js";
import cors from "cors";
import { verifyUser } from "./middleware/verifyUser.js";
import profileRouter from "./routes/profiles.js";
import fs from "fs"; 
import path from "path"; 

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const PORT = process.env.PORT || 8000;

app.get('/', verifyUser, (req, res) => {
    res.send('Welcome to my event api');
});
app.use('/api', authRouter);
app.use('/api', eventRouter);
app.use('/api', serviceRouter);
app.use('/api', profileRouter);
app.use('/images', express.static('public/images'));
app.get('/public/images/:filename', (req, res) => {
    const file = `public/images/${req.params.filename}`;
    res.sendFile(path.resolve(file));
});
app.get('/images', (req, res) => {
    fs.readdir('public/images', (err, files) => {
        if (err) {
            return res.status(500).send({ error: err });
        }
        res.send({ images: files });
    });
});
connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
