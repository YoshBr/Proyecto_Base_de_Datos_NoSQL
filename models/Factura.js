const mongoose = require('mongoose');

const facturaSchema = new mongoose.Schema({
    montoTotal: { type: Number, required: true },
    impuestos: { type: Number, required: true },
    metodoPago: { type: String, required: true, enum: ['Sinpe Movil', 'Tarjeta', 'Efectivo'] },
    fechaPago: { type: Date, required: true },
    estadoTransaccion: { type: String, required: true }
});

module.exports = mongoose.model('Factura', facturaSchema);