const router = require('express').Router();

router.get('/', (req, res) => {
    res.send({ message: 'auth route get' })
});

module.exports = router;