const Repartidor = require('../models/Repartidor');

exports.crearRepartidor = async (req, res) => {
    try {
        const repartidor = new Repartidor(req.body);
        await repartidor.save();
        res.status(201).json(repartidor);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear repartidor', error: error.message });
    }
};

exports.obtenerRepartidores = async (req, res) => {
    try {
        // Usamos populate para traer también los datos del usuario vinculado
        const repartidores = await Repartidor.find().populate('usuario', 'nombre correo telefono');
        res.status(200).json(repartidores);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener repartidores', error: error.message });
    }
};

exports.obtenerRepartidorPorId = async (req, res) => {
    try {
        const repartidor = await Repartidor.findById(req.params.id).populate('usuario', 'nombre correo telefono');
        if (!repartidor) return res.status(404).json({ mensaje: 'Repartidor no encontrado' });
        res.status(200).json(repartidor);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener repartidor', error: error.message });
    }
};

exports.actualizarRepartidor = async (req, res) => {
    try {
        const repartidor = await Repartidor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!repartidor) return res.status(404).json({ mensaje: 'Repartidor no encontrado' });
        res.status(200).json(repartidor);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar repartidor', error: error.message });
    }
};

exports.eliminarRepartidor = async (req, res) => {
    try {
        const repartidor = await Repartidor.findByIdAndDelete(req.params.id);
        if (!repartidor) return res.status(404).json({ mensaje: 'Repartidor no encontrado' });
        res.status(200).json({ mensaje: 'Repartidor eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar repartidor', error: error.message });
    }
};