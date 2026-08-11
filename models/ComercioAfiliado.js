const mongoose = require('mongoose');

const comercioSchema = new mongoose.Schema({
    codigoComercio: { 
        type: String, 
        required: true, 
        unique: true 
    },
    nombreComercio: { 
        type: String, 
        required: true 
    },
    contactoRepresentante: { 
        type: String, 
        required: true 
    },
    porcentajeDescuento: { 
        type: Number, 
        required: true 
    }
});

module.exports = mongoose.model('ComercioAfiliado', comercioSchema);