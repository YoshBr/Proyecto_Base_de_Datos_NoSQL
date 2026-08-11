const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    telefono: { type: String, required: true },
    contrasena: { type: String, required: true },
    rol: { 
        type: String, 
        required: true, 
        enum: ['administrador', 'cliente común', 'jefe de IT'] 
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Usuario', usuarioSchema);