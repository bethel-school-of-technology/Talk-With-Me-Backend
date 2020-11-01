const mongoose = require('mongoose');

// Define Schema
var Schema = mongoose.Schema;

var users = new Schema({
    firstname: String,
    lastname: String,
    password: String
});


var usersModel = mongoose.model('users',users);


module.exports = usersModel;