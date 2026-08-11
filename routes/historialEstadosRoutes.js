const express = require('express');
const router = express.Router();
const { obtenerHistorialEstados, crearHistorialEstados } = require('../controllers/historialEstadosController');

router.get('/', obtenerHistorialEstados);
router.post('/', crearHistorialEstados);

module.exports = router;