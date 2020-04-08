const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function login(req, res) {
    let { email, password } = req.body;

    try {
        let newUser = await User.findOne({ email });

        if (!newUser) {
            return res.send({ message: 'User is not found' })
        }

        if (newUser.password !== password) {
            return res.send({ message: 'Password is incorrect' })
        }

        const token = jwt.sign({ id: newUser.id }, process.env.SECRET, {
            expiresIn: 300 // expires in 5min
        });

        return res.status(200).send({
            auth: true, token: token
        });

    } catch (err) {
        console.log(err)
        return res.send({ message: 'Error while create user' })
    }
}

async function register(req, res) {
    let { name, age, email, password } = req.body;

    try {
        let newUser = await User.findOne({ email });

        if (newUser) {
            return res.send({
                user: newUser,
                message: 'User already exists'
            });
        }

        newUser = await User.create({
            name,
            age,
            email,
            password
        });

        newUser.password = undefined;

        res.send({
            user: newUser
        });

    } catch (err) {
        console.log(err)
        return res.send({ message: 'Error while create user' })
    }
}

function successAuth(req, res) {
    return res.status(200).send({ auth: true, message: 'Token validate' })
};

module.exports = {
    login,
    register,
    successAuth
};