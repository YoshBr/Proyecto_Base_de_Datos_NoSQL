const Factura = require('../models/Factura');

const obtenerFacturas = async (req, res) => {
    try {
        const facturas = await Factura.find();
        res.json(facturas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const crearFactura = async (req, res) => {
    try {
        const nuevaFactura = new Factura(req.body);
        await nuevaFactura.save();
        res.status(201).json({ mensaje: 'Factura registrada', dato: nuevaFactura });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { obtenerFacturas, crearFactura };