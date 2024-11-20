const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// Get all tasks
router.get('/', async (req, res) => {
    const tasks = await Task.find({});
    res.render('index', { tasks });
});


// Update a task
router.post('/task/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    await Task.findByIdAndUpdate(id, { title, description, completed: completed === 'on' });
    res.redirect('/');
});

// Delete a task
router.get('/task/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect('/');
});

// Route to display completed tasks
router.get('/completed', async (req, res) => {
    try {
        const completedTasks = await Task.find({ completed: true }); // Fetch only completed tasks
        res.render('completed', { tasks: completedTasks });  // Render completed tasks to 'completed.ejs'
    } catch (err) {
        console.log(err);
        res.status(500).send('Error fetching completed tasks');
    }
});



// POST request to add a new task
router.post('/task', async (req, res) => {
    try {
        const { title, description } = req.body;
        const newTask = new Task({
            title,
            description,
            completed: false
        });

        await newTask.save(); // Save the task to the database
        res.redirect('/'); // Redirect to the home page (or wherever you want)
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});



module.exports = router;
