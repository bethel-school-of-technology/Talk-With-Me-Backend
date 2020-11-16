var express = require('express');
const { FailedDependency } = require('http-errors');
var router = express.Router();
let User = require('../models/User');
var authService = require('../services/auth');


router.get('/', async (req, res, next) => {
    try {
        const users = await User.find({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password
        });

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
    // try {
    //     const newUser = await User.findOne({
    //         firstname: req.body.firstname,
    //         email: req.body.email
    //     });
    //     console.log(newUser);
    //     res.status(201).json({
    //         data: { user: newUser }
    //     });
    // } catch {
    //     console.log('error is called')
    //     console.log(err);
    //     res.status(400).json({
    //         status: 'failed to find user',
    //         message: err
    //     });
    // }
        const newUser = await User.findOne({
            email: req.body.email
        }).then(user => {
            console.log(user)
            if(!user){
                console.log('error is called')
                console.log(err);
                res.status(400).json({
                status: 'failed to find user',
                message: err
                });
            } else {
                if (user) {
                    let passwordMatch = authService.comparePasswords(req.body.password, user.password)
                    if (passwordMatch) {
                        let token = authService.signUser(User);
                        res.cookie('jwt', token);
                        res.send('Login successful');
                    }
                } else {
                    res.send('wrong password')
                }
            }
        });
    });

module.exports = router;