const router = require('express').Router();

router.post('/register', (req, res) => {
    res.send('You are Registered');
    });

module.exports = router;