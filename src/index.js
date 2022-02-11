const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

// creating the MongoDB connection
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
// if connection successful
.then(r=>console.log("Connected to the database!"))
// if connection fails
.catch(err => console.log(err))

// linking the router file so that we can use it below
const router = require('./routes/router.js');

// this allows us to use the router file
app.use('/', router);

// this allows us to use JSON
app.use(express.json({type: '*/*'}));
app.use(bodyParser.json());

// starting the server on port 3000
app.listen(port, () =>
  console.log(`☕ Express Server on port ${port}! -> go to http://localhost:${port}`)
);
