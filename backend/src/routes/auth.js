const router = require('express').Router();
const User = require('../models/user');

router.post('/login', async (req, res) => {
    let { email, password } = req.body;

    try {
        let newUser = await User.findOne({ email, password })
        if (!newUser) {
            return res.send({ message: 'User is not found' })
        }

        return res.send({
            message: 'Login sucessfully',
            token: '123456'
        })

    } catch (err) {
        console.log(err)
        return res.send({ message: 'Error while create user' })
    }
});


router.post('/register', async (req, res) => {
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
});

module.exports = router;