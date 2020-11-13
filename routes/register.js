var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt-nodejs');


router.get('/', function (req, res, next) {
    res.send('Working on the register part!');
});

module.exports = router;