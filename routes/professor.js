const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController');


router.get('/login', professorController.login);
router.post('/create', professorController.create);

module.exports = router;