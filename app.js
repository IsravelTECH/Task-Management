const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const taskRoutes = require('./routes/taskroutes');
const Task = require('./models/task');

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Database connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Error connecting to MongoDB:', err));


// Routes
app.use('/', taskRoutes);
app.post('/task', (req, res) => {
    const { title, description } = req.body;

    // Create a new task
    const newTask = new Task({
        title: title,
        description: description,
        completed: false
    });

    newTask.save()
        .then(() => {
            res.redirect('/'); // Redirect to home page after task is created
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error saving task');
        });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});




