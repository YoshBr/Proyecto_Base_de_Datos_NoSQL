const ReporteDiario = require('../models/ReporteDiario');

exports.crearReporte = async (req, res) => {
    try {
        const reporte = new ReporteDiario(req.body);
        await reporte.save();
        res.status(201).json(reporte);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear reporte', error: error.message });
    }
};

exports.obtenerReportes = async (req, res) => {
    try {
        const reportes = await ReporteDiario.find();
        res.status(200).json(reportes);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener reportes', error: error.message });
    }
};

exports.actualizarReporte = async (req, res) => {
    try {
        const reporte = await ReporteDiario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!reporte) return res.status(404).json({ mensaje: 'Reporte no encontrado' });
        res.status(200).json(reporte);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar reporte', error: error.message });
    }
};