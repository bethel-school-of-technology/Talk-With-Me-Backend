const { NotImplemented } = require('http-errors');
const mongoose = require('mongoose');

// Define Schema
var Schema = mongoose.Schema;

var Group = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    members: Number,
    likes: Number
});


var groupsModel = mongoose.model('Groups', Group);


module.exports = groupsModel;