const mongoose = require('mongoose');

const repartidorSchema = new mongoose.Schema({
    usuario: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Usuario', 
        required: true 
    },
    transporte: {
        tipo: { 
            type: String, 
            required: true, 
            enum: ['moto', 'carro', 'camión'] 
        },
        placa: { type: String, required: true }
    },
    zonaAsignada: { type: String, required: true }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Repartidor', repartidorSchema);