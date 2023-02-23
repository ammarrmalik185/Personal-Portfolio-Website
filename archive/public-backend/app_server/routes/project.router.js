const router = require('express').Router();
const { projectController } = require('../controllers');

router.post('/', projectController.createProject)
router.put('/:id', projectController.updateProject);
router.get('/', projectController.getAllProjects)
router.get('/:id', projectController.getProject);

module.exports = router;


