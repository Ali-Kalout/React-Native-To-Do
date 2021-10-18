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
        const { description, title } = req.body;
        const userId = req?.userId;
        const task = new Task({ title, description, owner: userId });
        await task.save();
        return res.status(201).json({ task });
    } catch (error) {
        return res.status(500).send(error);
    }
});

router.delete('/:id', auth, async (req: any, res: any) => {
    try {
        const { id } = req.params, task = await Task.findById(id);
        if (String(task?.owner) !== req?.userId)
            return res.status(401).json({ message: 'Not authorized' });
        await Task.findByIdAndDelete(id);
        return res.status(200).json({ id });
    } catch (error) {
        return res.status(500).send(error);
    }
});

router.patch('/:id/toggle', auth, async (req: any, res: any) => {
    try {
        const { id } = req.params, task = await Task.findById(id);
        if (String(task?.owner) !== req?.userId)
            return res.status(401).json({ message: 'Not authorized' });
        task.completed = !task.completed;
        await task.save();
        return res.status(200).json({ task });
    } catch (error) {
        return res.status(500).send(error);
    }
});

export default router;