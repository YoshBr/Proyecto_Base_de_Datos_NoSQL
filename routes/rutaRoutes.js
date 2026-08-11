const express = require('express');
const router = express.Router();
const rutaController = require('../controllers/rutaController');

router.post('/', rutaController.crearRuta);
router.get('/', rutaController.obtenerRutas);
router.put('/:id', rutaController.actualizarRuta);
router.delete('/:id', rutaController.eliminarRuta);

module.exports = router;