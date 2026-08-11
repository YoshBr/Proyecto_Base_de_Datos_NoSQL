const express = require('express');
const router = express.Router();
const comerciosController = require('../controllers/comerciosController');

router.get('/', comerciosController.obtenerComercios);
router.post('/', comerciosController.crearComercio);

module.exports = router;