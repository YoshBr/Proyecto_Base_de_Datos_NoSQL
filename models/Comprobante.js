const mongoose = require('mongoose');

const comprobanteSchema = new mongoose.Schema({
    codigoComprobante: { 
        type: String, 
        required: true, 
        unique: true 
    },
    montoCancelado: { 
        type: Number, 
        required: true 
    },
    fechaEmision: { 
        type: Date, 
        required: true 
    },
    detalleTransaccion: { 
        type: String, 
        required: true 
    }
});

module.exports = mongoose.model('Comprobante', comprobanteSchema);