const mongoose = require('mongoose');

const sucursalSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    provincia: { type: String, required: true },
    telefonos: [{ 
        type: String, 
        required: true 
    }],
    encargado: { type: String, required: true }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Sucursal', sucursalSchema);