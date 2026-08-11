const Ruta = require('../models/Ruta');

exports.crearRuta = async (req, res) => {
    try {
        const ruta = new Ruta(req.body);
        await ruta.save();
        res.status(201).json(ruta);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear ruta', error: error.message });
    }
};

exports.obtenerRutas = async (req, res) => {
    try {
        const rutas = await Ruta.find().populate('repartidor');
        res.status(200).json(rutas);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener rutas', error: error.message });
    }
};

exports.actualizarRuta = async (req, res) => {
    try {
        const ruta = await Ruta.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ruta) return res.status(404).json({ mensaje: 'Ruta no encontrada' });
        res.status(200).json(ruta);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar ruta', error: error.message });
    }
};

exports.eliminarRuta = async (req, res) => {
    try {
        const ruta = await Ruta.findByIdAndDelete(req.params.id);
        if (!ruta) return res.status(404).json({ mensaje: 'Ruta no encontrada' });
        res.status(200).json({ mensaje: 'Ruta eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar ruta', error: error.message });
    }
};