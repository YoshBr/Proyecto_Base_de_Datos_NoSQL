const mongoose = require('mongoose');

const reporteDiarioSchema = new mongoose.Schema({
    fecha: { type: Date, required: true, unique: true },
    totalRecibidosNacional: { type: Number, required: true, default: 0 },
    entregasExitosas: { type: Number, required: true, default: 0 },
    paquetesDevueltos: { type: Number, required: true, default: 0 } // Rebotados por problemas de señas
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('ReporteDiario', reporteDiarioSchema);