const express = require('express');
const router = express.Router();
const casillerosController = require('../controllers/casillerosController');

router.get('/', casillerosController.obtenerCasilleros);
router.post('/', casillerosController.crearCasillero);

module.exports = router;