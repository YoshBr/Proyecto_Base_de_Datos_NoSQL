const express = require('express');
const router = express.Router();
const { obtenerFacturas, crearFactura } = require('../controllers/facturaController');

router.get('/', obtenerFacturas);
router.post('/', crearFactura);

module.exports = router;