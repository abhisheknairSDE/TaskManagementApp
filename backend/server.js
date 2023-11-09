const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5500;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: {
        w: 'majority'
    }
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connection was successfully estabilished to database');
})

const taskRouter = require('./routes/tasks');
const usersRouter = require('./routes/users');

app.use('/tasks',taskRouter);
app.use('/user', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})