const { apiController } = require("../controllers");

const router = require("express").Router();
router.get('/api', apiController.api);

module.exports = router;
