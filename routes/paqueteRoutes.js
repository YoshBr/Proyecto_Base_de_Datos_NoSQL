const express = require('express');
const router = express.Router();
const paqueteController = require('../controllers/paqueteController');

router.get('/', paqueteController.obtenerPaquetes);
router.post('/', paqueteController.crearPaquete);
router.put('/:id', paqueteController.actualizarPaquete);
router.delete('/:id', paqueteController.eliminarPaquete);

module.exports = router;