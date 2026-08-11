const HistorialEstados = require('../models/HistorialEstados');

const obtenerHistorialEstados = async (req, res) => {
    try {
        const historial = await HistorialEstados.find();
        res.json(historial);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const crearHistorialEstados = async (req, res) => {
    try {
        const nuevoHistorial = new HistorialEstados(req.body);
        await nuevoHistorial.save();
        res.status(201).json({ mensaje: 'Estado guardado', dato: nuevoHistorial });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { obtenerHistorialEstados, crearHistorialEstados };