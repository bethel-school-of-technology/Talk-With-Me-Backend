const jwt = require('jsonwebtoken');
let User = require('../models/User');

var authService = {
    signUser: function (user) {
        const token = jwt.sign(
            {
                firstname: user.firstname,
                lastname: user.lastname
            },
            'secretkey',
            {
                expiresIn: '1h'
            }
        );
        return token;
    }
}

module.exports = authService;