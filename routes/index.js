var express = require('express');
const { FailedDependency } = require('http-errors');
var router = express.Router();
// var User = require('../models/User');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('working');
});




module.exports = router;
