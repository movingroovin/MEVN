const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport')

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize())
require('./config/passport')(passport)

// Setup mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://wei:wei820801@ds045632.mlab.com:45632/mevn'
mongoose.connect(mongoDB, {
  useNewUrlParser: true
})
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => console.log('Connected to Database'))

// apis
// login system
const users = require('./routes/api/users')
app.use('/api/users', users)

// other features
const posts = require('./routes/api/posts')
const products = require('./routes/api/products')
app.use('/api/posts', posts)
app.use('/api/products', products)

// Handle Production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public'))

  // Handle SPA (direct all routes to SPA index.html)
  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening to port ${port}`));