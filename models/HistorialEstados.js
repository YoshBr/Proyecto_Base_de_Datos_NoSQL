const mongoose = require('mongoose');

const historialEstadosSchema = new mongoose.Schema({
    codigoRastreo: { type: String, required: true },
    estadoActual: { type: String, required: true },
    fecha: { type: String, required: true }, 
    hora: { type: String, required: true },
    identificadorMensajero: { type: String, required: true }
});

module.exports = mongoose.model('HistorialEstados', historialEstadosSchema, 'HistorialEstados');