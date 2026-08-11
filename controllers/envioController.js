const Envio = require('../models/Envio');

const obtenerEnvios = async (req, res) => {
    try {
        const envios = await Envio.find();
        res.json(envios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const crearEnvio = async (req, res) => {
    try {
        const nuevoEnvio = new Envio(req.body);
        await nuevoEnvio.save();
        res.status(201).json({ mensaje: 'Envío registrado', dato: nuevoEnvio });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { obtenerEnvios, crearEnvio };