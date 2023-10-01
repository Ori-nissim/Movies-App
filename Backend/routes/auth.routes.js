const express = require('express');
const router = express.Router();
const authLogic = require("../bll/auth.logic");
// var crypto = require('crypto');

router.post('/register', async (req, res, next) => {
    // authLogic.createUser()
    // .then(createdUser => res.json(createdUser))
    // .catch(err => res.status(500).json(err));
    try {
        console.log(req.body);
        const createdUser = await authLogic.createUser(req.body);
        res.redirect('http://localhost:3000/');
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.post('/login', async (req, res) => {
    try {
        let email = req.body.email;
        let password = req.body.password;
        let user = await authLogic.findUserByEmail(email, password);

        console.log(user);
        if (user === null) {
            // Send an error response if authentication fails
            res.status(401).json({ message: 'Authentication failed' });
        } else {
            // Send the user data in the response as JSON
            res.status(200).json({ user });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;