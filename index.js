const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const bookRoute = require('./route/book.route');
const mongoose = require('mongoose');
const cors = require('cors');

// Setup MongoDB Connection
const url_db_host = 'mongodb://localhost:27017/bookstore?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
mongoose.connect(url_db_host);
mongoose.Promise = global.Promise;
const ping = mongoose.connection;
ping.on('error', console.error.bind(console, 'MongoDB Conn Error'));

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
// Setup body parser
app.use(bodyParser.json());
app.use(cors());

// Book routes
app.use('/book', bookRoute)

const port = 4000;
app.listen(port, () => {console.log('Server running on port : ' + port)});
