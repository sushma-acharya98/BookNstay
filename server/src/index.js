

 'use client'
const express = require('express');
const connection = require('./db/connection');
const app = express();
const port = process.env.PORT || 3001; // Choose a different port for the server

app.use(express.json());
require('dotenv').config();

const userRoute = require('./routes/user');
app.use(userRoute);

const User = require('./models/user');
connection();

app.post('/register', (req, res) => {
    User.create(req.body);
    res.send({ msg: "user registered successfully" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
