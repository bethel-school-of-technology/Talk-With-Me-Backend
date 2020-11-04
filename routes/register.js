var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
});
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser()); 


module.exports = router;