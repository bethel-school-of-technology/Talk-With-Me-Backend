const express = require('express');
const { FailedDependency } = require('http-errors');
var router = express.Router();
var Group = require('../models/Group');

// const database = {
//     groups: [
//         {
//             id: '123',
//             name: 'google',
//             description: 'we google things',
//             likes: 0,
//             members: 0,
//             created: new Date(),
//             deleted: false,
//         },
//         {
//             id: '124',
//             name: 'yahoo',
//             description: 'we yahoo things',
//             likes: 0,
//             members: 0,
//             created: new Date(),
//             deleted: false
//         }
//     ]
// }

router.get('/group_list', (req, res) => {
    res.send(database.users);
})


router.get('/get_all_groups', async (req, res) => {
    try {
        const groups = await Group.find();
    
        res.status(200).json({
          status: 'success',
          results: groups.length,
          data: { groups }
        });
      } catch (err) {
        res.status(404).json({
          status: 'fail',
          message: err
        });
      }
})

//Object gets created under collection: groups

router.post('/create_group', async (req, res) => {
    try {
        const newGroup = new Group(req.body);
        let group = await newGroup.save();

        res.status(201).json({
            data: {
                    group
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
    //res.json(database.groups[database.groups.length-1]);
    //   res.status(200).json({
    //     status: 'success',
    //     data: { tour }
    //   });
})

router.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    database.groups.forEach(group => {
        if (group.id === id) {
            found = true;
            return res.json(group);
        }
    })
    if (!found) {
        res.status(400).json('not found');
    }
})

router.put('/edit_group', (req, res) => {
    const { id, name, description } = req.body;
    let found = false;
    database.groups.forEach(group => {
        if (group.id === id) {
            found = true;
            group.name = name;
            group.description = description;
            return res.json(user.entries);
        }
    })
    if (!found) {
        res.status(400).json('not found');
    }
})

router.post('/delete_group/:id', (req, res) => {
    const { id } = req.body;
    let found = false;
    database.groups.forEach(group => {
        if (group.id === id) {
            found = true;
            group.deleted = true;
        }
    });

    if (!found) {
        res.status(400).json('not found');
    }
})

module.exports = router;