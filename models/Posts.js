const { NotImplemented } = require('http-errors');
const mongoose = require('mongoose');

// Define Schema
const Schema = mongoose.Schema;

var Post = new Schema({
   body: String,
   title: String,
   
    
});


var PostsModel = mongoose.model('Posts', Post);


module.exports = PostsModel;