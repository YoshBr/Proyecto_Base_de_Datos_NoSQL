const express = require('express');
const router = express.Router();
const repartidorController = require('../controllers/repartidorController');

router.post('/', repartidorController.crearRepartidor);
router.get('/', repartidorController.obtenerRepartidores);
router.get('/:id', repartidorController.obtenerRepartidorPorId);
router.put('/:id', repartidorController.actualizarRepartidor);
router.delete('/:id', repartidorController.eliminarRepartidor);

module.exports = router;