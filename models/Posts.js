const { NotImplemented } = require('http-errors');
const mongoose = require('mongoose');

// Define Schema
const Schema = mongoose.Schema;

var Post = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    body: {
        type: String,
        required: true,
        unique: true
    }
});


var PostsModel = mongoose.model('Posts', Post);


module.exports = PostsModel;