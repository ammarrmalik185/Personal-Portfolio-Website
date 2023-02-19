require("dotenv").config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');



const indexRouter = require('./app_server/routes/index');
const errorHandler = require('./app_server/errorHandler/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server/views'));
app.set('view engine', 'jade');

// middleware
app.use(logger('dev'));
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: false, limit: '5mb'}));
// app.use(express.json({limit: '5mb'}));
// app.use(express.urlencoded({ extended: false, limit: '5mb' }));
app.use(cookieParser());
app.use(cors());

// public folder
app.use(express.static(path.join(__dirname, 'app_server/public')));

// routes
app.use('/api', indexRouter);

// error handler
app.use(errorHandler);

module.exports = app;
