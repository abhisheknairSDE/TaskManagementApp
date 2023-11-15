const router = require('express').Router();
const Task = require('../models/tasks.model');
const jwtMiddleware = require('../middlewear/check-auth')


router.route('/').get(jwtMiddleware, async (req, res) => {
    const userId = req.query.createdBy;
    try {
      const tasks = await Task.find({ createdBy: userId });
      console.log(tasks);
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

router.route('/edit/:id').put(async (req, res) => {
  const taskId = req.params.id;
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { $set: { title: req.body.title, description: req.body.description } },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task updated successfully', task: updatedTask });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.route('/delete/:id').delete(async (req, res) => {
  const taskId = req.params.id;
  try {
    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task deleted successfully', task: deletedTask });
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;