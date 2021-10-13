import { Router } from 'express';
import bcrypt from 'bcrypt';
import User from './../models/user';
import generateJWT from './../utils/generateJWT';
import auth from './../middleware/auth';

const router = Router();

router.post('/signup', async (req, res) => {
    console.log(req.body);
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (user)
            return res.status(400).send('User already exists');

        if (username?.split(' ')?.length !== 1)
            return res.status(400).json({ message: "Username can't have spaces !" });

        if (username?.toLowerCase() !== username)
            return res.status(400).json({ message: "Username must be lowercase !" });

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const newUser = new User({ username, password: hashPassword });
        await newUser.save();

        return res.status(200).json({ token: generateJWT(newUser) });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user)
            return res.status(400).send('User not found');

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch)
            return res.status(400).send('Invalid password');

        return res.status(200).json({ token: generateJWT(user) });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.get('/', auth, async (req: any, res: any) => {
    try {
        const user = await User.findById(req?.userId);
        if (user)
            return res.status(200).json({ user: { username: user.username } });
        return res.status(400).json({ message: 'User not found' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
});

export default router;