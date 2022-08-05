const express = require('express');
const router = express.Router();

const indexController = require("../controllers/index");

/* GET home page. */
router.get('/api', indexController.apiDetails);


module.exports = router;
