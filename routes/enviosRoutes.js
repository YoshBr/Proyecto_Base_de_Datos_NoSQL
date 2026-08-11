const express = require('express');
const router = express.Router();
const { obtenerEnvios, crearEnvio } = require('../controllers/envioController');

router.get('/', obtenerEnvios);
router.post('/', crearEnvio);

module.exports = router;