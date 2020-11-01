var express = require('express');
var router = express.Router();
var User = require('../models/User');

/* GET home page. */
router.get('/', async function(req, res, next) {
  
  try {
    const users = await User.find();
    
    res.status(200).json({
      data: { users }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }

});

module.exports = router;
