import jwt from 'jsonwebtoken';

interface userInterface {
    username: string;
    _id: string;
    password: string;
};

const generateJWT = (user: userInterface): string => (
    jwt.sign(
        { username: user.username, _id: user._id },
        'secret_key_react_native_key',
        { expiresIn: '10d' }
    )
);

export default generateJWT;