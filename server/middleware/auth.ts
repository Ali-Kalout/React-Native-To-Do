import jwt from 'jsonwebtoken';

const auth = async (req: any, res: any, next: any) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded: any = jwt.verify(token, 'secret_key_react_native_key');
        req.userId = decoded?._id;

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'Please authenticate.' });
    }
};

export default auth;