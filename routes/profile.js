const e = require('express');
var express = require('express');
var router = express.Router();
var authService = require('../services/auth');

router.get('/', function(req, res, next) {
  let token = req.cookies.jwt;
  if (token){
  authService.verifyUser(token)
    .then(user => {
      if (user) {
        res.send(JSON.stringify(user));
      } else {
        res.status(401);
        res.send('Must be logged in');
      }
    });
  } else {
    res.status(401);
    res.send('Must be logged in');
    }


  });

router.get('/logout', function (req, res, next) {
  res.cookie('jwt', '', { expires: new Date(0) });
  res.send('Logged out!');
});

module.exports = router;