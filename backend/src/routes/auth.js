const router = require('express').Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
    try {
        const newUser = await User.create({
            name: 'Otavio',
            age: 15
        });
        res.send(newUser);
    } catch(err){
        res.send(err)
    }
});

module.exports = router;