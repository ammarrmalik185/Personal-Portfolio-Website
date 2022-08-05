const createError = require('http-errors');

function handler (err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message,
    error: err
  });
}

module.exports = handler;
