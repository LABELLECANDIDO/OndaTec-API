const express = require('express');
const router = express.Router();

router.get('/', alunoController.getAll);
router.post('/', alunoController.create);

module.exports = router;