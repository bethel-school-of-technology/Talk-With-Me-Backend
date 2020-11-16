var express = require('express');
var router = express.Router();
let User = require('../models/User');
let authService = require('../services/auth');


router.get('/', function (req, res, next) {
    res.send('Working on the register part!');
});


router.post('/', async (req, res, next) => {
    try {
        const newUser = await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: authService.hashPassword(req.body.password)
        });
        console.log(newUser);
        res.status(201).json({
            data: { user: newUser }
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed to create user',
            message: err
        });
    }
});

module.exports = router;