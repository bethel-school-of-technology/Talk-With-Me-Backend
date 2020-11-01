var express = require('express');
var router = express.Router();


const database = {  // Need some email object
  users: [
    {
      id: '123',
      name: 'google',
      password: 'apple',
      groups: [

        {
          id: '123',
          name: 'google',
          description: 'we google things',
          likes: 0,
          members: 0,
          created: new Date(),
          deleted: false,
        },
        {
          id: '124',
          name: 'yahoo',
          description: 'we yahoo things',
          likes: 0,
          members: 0,
          created: new Date(),
          deleted: false
        }

      ],
      created: new Date(),
      deleted: false,
    },
    {
      id: '123',
      name: 'Yahoo',
      password: 'yes',
      groups: [

        {
          id: '123',
          name: 'google',
          description: 'we google things',
          likes: 0,
          members: 0,
          created: new Date(),
          deleted: false,
        },
        {
          id: '124',
          name: 'yahoo',
          description: 'we yahoo things',
          likes: 0,
          members: 0,
          created: new Date(),
          deleted: false
        }

      ],
      created: new Date(),
      deleted: false,
    },
  ]
}


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
  console.log('were here');
});

module.exports = router;
