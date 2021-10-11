import { Router } from 'express';
import Task from './../models/task';
import auth from './../middleware/auth';

const router = Router();

router.get('/', auth, async (req: any, res: any) => {
    try {
        const userId = req?.userId;
        const tasks = await Task.find({ owner: userId }).sort({ _id: -1 });
        return res.status(200).json({ tasks });
    } catch (error) {
        return res.status(500).send(error);
    }
});

router.post('/', auth, async (req: any, res: any) => {
    try {
        const { description, dueDate } = req.body;
        const userId = req?.userId;
        const task = new Task({ description, dueDate, owner: userId });
        await task.save();
        return res.status(201).json({ task });
    } catch (error) {
        return res.status(500).send(error);
    }
});

export default router;