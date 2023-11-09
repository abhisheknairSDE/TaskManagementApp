const router = require('express').Router();
const User = require('../models/users.model')

router.route('/add').post((req, res) =>{
    const name = req.body.name;
    const password = req.body.password;
    const newUser = new User({
        name,
        password,
    });
    newUser.save()
    .then(() => res.json('User Added'))
    .catch(err => res.status(400).json(err));
})

module.exports = router;