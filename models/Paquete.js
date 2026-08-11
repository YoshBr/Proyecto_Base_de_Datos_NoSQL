const mongoose = require('mongoose');

const paqueteSchema = new mongoose.Schema({
  trackingCode: { 
    type: String, 
    required: [true, 'El código de tracking es obligatorio'], 
    trim: true,
    unique: true 
  },
  remitente: { 
    type: String, 
    required: [true, 'El nombre del remitente es obligatorio'], 
    trim: true 
  },
  destinatario: { 
    type: String, 
    required: [true, 'El nombre del destinatario es obligatorio'], 
    trim: true 
  },
  descripcion: { 
    type: String, 
    required: [true, 'La descripción es obligatoria'], 
    trim: true 
  },
  pesoKg: { 
    type: Number, 
    required: [true, 'El peso en kg es obligatorio'], 
    min: [0.1, 'El peso debe ser mayor a 0'] 
  },
  estado: { 
    type: String, 
    enum: ['En Bodega', 'En Tránsito', 'Entregado', 'Devuelto'], 
    default: 'En Bodega' 
  },
  sucursalOrigen: { 
    type: String, 
    required: [true, 'La sucursal u origen es obligatoria'], 
    trim: true 
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Paquete', paqueteSchema, 'Paquetes');