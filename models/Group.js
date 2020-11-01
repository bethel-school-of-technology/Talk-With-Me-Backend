const { NotImplemented } = require('http-errors');
const mongoose = require('mongoose');

// Define Schema
var Schema = mongoose.Schema;

var Group = new Schema({
    name: String,
    description: String,
    members: Number,
    likes: Number
});


var groupsModel = mongoose.model('Groups', Group);


module.exports = groupsModel;