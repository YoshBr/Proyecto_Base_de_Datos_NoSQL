const Sucursal = require('../models/Sucursal');

exports.crearSucursal = async (req, res) => {
    try {
        const sucursal = new Sucursal(req.body);
        await sucursal.save();
        res.status(201).json(sucursal);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear sucursal', error: error.message });
    }
};

exports.obtenerSucursales = async (req, res) => {
    try {
        const sucursales = await Sucursal.find();
        res.status(200).json(sucursales);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener sucursales', error: error.message });
    }
};

exports.actualizarSucursal = async (req, res) => {
    try {
        const sucursal = await Sucursal.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!sucursal) return res.status(404).json({ mensaje: 'Sucursal no encontrada' });
        res.status(200).json(sucursal);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar sucursal', error: error.message });
    }
};

exports.eliminarSucursal = async (req, res) => {
    try {
        const sucursal = await Sucursal.findByIdAndDelete(req.params.id);
        if (!sucursal) return res.status(404).json({ mensaje: 'Sucursal no encontrada' });
        res.status(200).json({ mensaje: 'Sucursal eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar sucursal', error: error.message });
    }
};