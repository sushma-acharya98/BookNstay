
const express = require('express');
const connection = require('./db/connection');
 
const app = express();
const port = process.env.PORT || 3001; // Choose a different port for the server

app.use(express.json());
require('dotenv').config();
const cors = require('cors')
app.use(cors())
const userRoute = require('./routes/user');
app.use(userRoute);

connection();

app.get('/', (req, res) => {
    res.json('hi')
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// 'use client'
// const express = require('express')
// const app = express()
// const connection = require('./db/connection')
// const cors = require('cors')
// app.use(cors())
// require('dotenv').config()
// //body parser
// app.use(express.json())
// connection()
// const userRoute = require('./routes/user')
// // const contactRoute = require('./routes/contact')

// app.use(userRoute)
// // app.use(contactRoute)

// const port = process.env.PORT

// app.post('/register', (req, res) => {
//     User.create(req.body);
//     res.send({ msg: "user registered successfully" });
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })