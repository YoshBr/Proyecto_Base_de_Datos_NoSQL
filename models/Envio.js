const mongoose = require('mongoose');

const envioSchema = new mongoose.Schema({
    descripcionPaquete: { type: String, required: true },
    nombreRemitente: { type: String, required: true },
    contactoRemitente: { type: String, required: true },
    nombreDestinatario: { type: String, required: true },
    contactoDestinatario: { type: String, required: true }
});

module.exports = mongoose.model('Envio', envioSchema);