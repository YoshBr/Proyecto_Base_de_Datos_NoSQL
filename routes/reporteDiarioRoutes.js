const express = require('express');
const router = express.Router();
const reporteDiarioController = require('../controllers/reporteDiarioController');

router.post('/', reporteDiarioController.crearReporte);
router.get('/', reporteDiarioController.obtenerReportes);
router.put('/:id', reporteDiarioController.actualizarReporte);

module.exports = router;