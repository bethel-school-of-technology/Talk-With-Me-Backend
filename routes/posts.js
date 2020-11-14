var express = require('express');
const { FailedDependency } = require('http-errors');
var router = express.Router();
var Post = require('../models/Posts');

router.get('/post_list', (req, res) => {
  res.send(database.Post);
})

//Create
exports.createPost = async (req, res) => {
  const newPost = await Post.create(req.body);

  res.status(201).json({
    status: 'success',
    data: { post: newPost }
  });
};
//Get
exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: { post }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });

    //Update
    exports.updatePost = async (req, res) => {
      try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true
        });
    
        res.status(200).json({
          status: 'success',
          data: { post }
        });
      } catch (err) {
        res.status(404).json({
          status: 'fail',
          message: err
        });
      }
    };
    //Delete
    exports.deletePost = async (req, res) => {
      try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(204).json({
          status: 'success',
          data: null
        });
      } catch (err) {
        res.status(404).json({
          status: 'fail',
          message: err
        });
      }
    };
  }
};


module.exports = router;