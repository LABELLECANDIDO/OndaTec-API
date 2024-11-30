const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

router.get('/login', alunoController.login);
router.post('/create', alunoController.create);

module.exports = router;