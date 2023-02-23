const router = require('express').Router();
const { portfolioController } = require('../controllers');

router.post('/', portfolioController.createPortfolio)
router.put('/:id', portfolioController.updatePortfolio);
router.get('/', portfolioController.getAllPortfolio)
router.get('/:id', portfolioController.getPortfolio);

module.exports = router;


