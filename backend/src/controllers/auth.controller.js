const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');

async function login(req, res) {
    let { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            return res.send({ message: 'User is not found' })
        }

        bcrypt.compare(password, user.password, (err, success) => {
            if (err) {
                return res.status(404).send({ err: 'Password is not valid' })
            }
        });

        const token = jwt.sign({ id: user.id }, process.env.SECRET, {
            expiresIn: 300000 // expires in 5min
        });

        return res.status(200).send({
            auth: true, token: token
        });

    } catch (err) {
        console.log(err);
        return res.send({ message: 'Error while create user' });
    }
}

async function register(req, res) {
    let { name, age, email, password } = req.body;

    try {
        let newUser = await User.findOne({ email });

        if (newUser) {
            newUser.password = undefined;
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
        console.log(err);
        return res.send({ message: 'Error while create user' });
    }
}

async function successAuth(req, res) {
    try {
        const user = await User.findById(req.userId);
        user.password = undefined;
        return res.status(200).send({
            auth: true,
            message: 'Token validate',
            user
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({ err })
    }
};

module.exports = {
    login,
    register,
    successAuth
};