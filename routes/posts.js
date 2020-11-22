var express = require('express');
const { FailedDependency } = require('http-errors');
var router = express.Router();
var Post = require('../models/Posts');

router.get('/post_list', (req, res) => {
  res.send(database.users);
})
//Create
router.post ('/create_post', async (req, res) => {
  try {
    const newPost = await Post.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { posts: newPost }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
});
//Get

router.get ('/post/:id', async (req, res) => {
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
    router.put ('/edit_group', async (req, res) => {
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
    });
    //Delete
    router.post('/delete_group/:id', async (req, res) => {
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
    });
    
  }
});


module.exports = router;