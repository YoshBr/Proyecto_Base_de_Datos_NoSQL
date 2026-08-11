const mongoose = require('mongoose');

const casilleroSchema = new mongoose.Schema({
    codigoCasillero: { 
        type: String, 
        required: true, 
        unique: true 
    },
    usuarioId: { 
        type: String,
        required: true 
    },
    tamano: { 
        type: String, 
        required: true 
    },
    estado: { 
        type: String, 
        required: true,
        default: 'Activo'
    }
});

module.exports = mongoose.model('Casillero', casilleroSchema);