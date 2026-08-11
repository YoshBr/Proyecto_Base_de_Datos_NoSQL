const express = require('express');
const router = express.Router();
const comprobantesController = require('../controllers/comprobantesController');

router.get('/', comprobantesController.obtenerComprobantes);
router.post('/', comprobantesController.crearComprobante);

module.exports = router;