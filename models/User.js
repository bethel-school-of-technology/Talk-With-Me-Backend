const mongoose = require('mongoose');

// Define Schema
var Schema = mongoose.Schema;

var User = new Schema({
    firstname: String,
    lastname: String,
    password: String
});


var usersModel = mongoose.model('Users', User);


module.exports = usersModel;