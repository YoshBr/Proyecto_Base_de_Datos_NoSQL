const Comprobante = require('../models/Comprobante');

exports.obtenerComprobantes = async (req, res) => {
    try {
        const comprobantes = await Comprobante.find();
        res.json(comprobantes);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los comprobantes', error });
    }
};

exports.crearComprobante = async (req, res) => {
    try {
        const nuevoComprobante = new Comprobante(req.body);
        await nuevoComprobante.save();
        res.status(201).json({ mensaje: 'Comprobante registrado con éxito', comprobante: nuevoComprobante });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al registrar el comprobante', error });
    }
};