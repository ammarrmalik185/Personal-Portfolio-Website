const router = require("express").Router();
const { blogController } = require('../controllers');

router.post('/', blogController.createBlog)
router.put('/:id', blogController.updateBlog);
router.get('/', blogController.getAllBlogs)
router.get('/:id', blogController.getBlog);

module.exports = router;
