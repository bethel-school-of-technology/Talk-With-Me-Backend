var express = require('express');
const { FailedDependency } = require('http-errors');
var router = express.Router();
let User = require('../models/User');
var authService = require('../services/auth');
const bcrypt = require('bcrypt-nodejs');


router.get('/', async (req, res, next) => {
    try {
        const users = await User.find({});

        res.status(200).json({
            data: { users }
        });
    } catch (err) {
        res.status(404).json({
            status: 'failed to find user',
            message: err
        });
    }
});



router.post('/', async (req, res, next) => {
    try {
        const newUser = await User.find(req.body);
        console.log(newUser);
        res.status(201).json({
            data: { user: newUser }
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed to find user',
            message: err
        });
    }
        if (user) {
            let token = authService.signUser(user); // <--- Uses the authService to create jwt token
            res.cookie('jwt', token); // <--- Adds token to response as a cookie
            res.send('Login successful');
        } else {
            console.log('Wrong password');
            res.redirect('login')
        }
    });

module.exports = router;