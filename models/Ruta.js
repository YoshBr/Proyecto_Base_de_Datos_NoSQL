const mongoose = require('mongoose');

const rutaSchema = new mongoose.Schema({
    repartidor: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Repartidor', 
        required: true 
    },
    fechaProgramada: { type: Date, required: true },
    trackingCodes: [{ 
        type: String, 
        required: true 
    }],
    completada: { type: Boolean, default: false } // false = pendiente, true = completada
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Ruta', rutaSchema);