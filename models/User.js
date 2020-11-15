const mongoose = require('mongoose');

// Define Schema
var Schema = mongoose.Schema;

var User = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    // firstname: String,
    // lastname: String,
    // email: String,
    // password: String
});


var usersModel = mongoose.model('Users', User);


module.exports = usersModel;