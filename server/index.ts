import express from 'express';
import cors from 'cors';
import mongoose, { ConnectOptions } from 'mongoose';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

mongoose.connect("mongodb://localhost:27017/rn-to-do", {
    useNewUrlParser: true,
    retryWrites: true,
    w: "majority"
} as ConnectOptions).
    then(() => app.listen(process.env.PORT || 5000, () => console.log("Server running!")));;