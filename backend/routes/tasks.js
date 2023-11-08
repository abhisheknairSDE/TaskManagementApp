const router = require('express').Router();
const Task = require('../models/tasks.model');

router.route('/').get((req, res) =>{
    res.send('THIS WORKS');
});

router.route('/add').post((req, res) =>{
    const title = req.body.title;
    const description = req.body.description;
    const newTask = new Task({
        title,
        description,
    });

    newTask.save()
    .then(() => res.json('Task Added!'))
    .catch((err) => err.status(400).json('Error' + err));
});

module.exports = router;