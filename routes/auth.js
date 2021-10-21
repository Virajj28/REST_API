const router = require('express').Router();
const User = require('../models/user');
const {registerValidation, loginValidation} = require('../validation');


router.post('/register', async(req, res) => {

    // To validate the data using @hapi/joi
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    // Check if the user already exists
    const emailExists = await User.findOne({email: req.body.email});
    if(emailExists) return res.status(400).send('Email already exists');

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
  });

module.exports = router;