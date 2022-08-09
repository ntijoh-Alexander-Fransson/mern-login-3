const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT;

const app = express();

app.use('/api/goals', require('./routes/goalRoutes.js'));

app.listen(port,() => console.log('listening'+port));