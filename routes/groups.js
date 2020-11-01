const express = require('express');
const { FailedDependency } = require('http-errors');
var router = express.Router();

const database = {
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
    ]
}

router.get('/group_list', (req, res) => {
    res.send(database.users);
})

router.post('/create_group', (req, res) => {
    const {name, description } = req.body;
    database.groups.push({
        id: '125',
        name: name,
        description: description,
        likes: 0,
        memebers: 0,
        joined: new Date()
    });
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