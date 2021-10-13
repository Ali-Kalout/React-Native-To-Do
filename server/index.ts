import express from 'express';
import cors from 'cors';
import mongoose, { ConnectOptions } from 'mongoose';
import userRouter from './routes/user';
import taskRouter from './routes/task';

const app = express();

app.use(cors());
app.use(express.json());
app.get('/', (_, res) => res.send('Hello World!'));
app.use('/users', userRouter);
app.use('/tasks', taskRouter);

mongoose.connect("mongodb://localhost:27017/rn-to-do", {
    useNewUrlParser: true,
    retryWrites: true,
    w: "majority"
} as ConnectOptions)
    .then(() => app.listen(process.env.PORT || 5001, () => console.log("Server running!")))
    .catch(err => console.log(err));