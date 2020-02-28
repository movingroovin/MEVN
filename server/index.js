const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Setup mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://wei:wei820801@ds045632.mlab.com:45632/mevn'
mongoose.connect(mongoDB)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const posts = require('./routes/api/posts')
app.use('/api/posts', posts)

// Handle Production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public'))

  // Handle SPA
  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening to port ${port}`));