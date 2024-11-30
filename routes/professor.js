const express = require('express');
const router = express.Router();


router.get('/', professorController.getAll);
router.post('/', professorController.create);

module.exports = router;