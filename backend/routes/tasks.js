const router = require('express').Router();
const Task = require('../models/tasks.model');

router.route('/').get(async (req, res) => {
    const userId = req.query.createdBy;

    try {
      const tasks = await Task.find({ createdBy: userId });
      res.json(tasks);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.route('/add').post((req, res) =>{
    const title = req.body.title;
    const description = req.body.description;
    const createdBy = req.body.createdBy;
    const newTask = new Task({
        title,
        description,
        createdBy,
    });

    newTask.save()
    .then(() => res.json('Task Added!'))
    .catch((err) => res.status(400).json('Error' + err));
});

module.exports = router;