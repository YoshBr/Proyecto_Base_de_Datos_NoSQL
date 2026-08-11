const Paquete = require('../models/Paquete');

// GET / Obtener todos los paquetes
exports.obtenerPaquetes = async (req, res) => {
  try {
    const paquetes = await Paquete.find();
    res.json(paquetes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener paquetes', error: error.message });
  }
};

// POST / Agregar un nuevo paquete
exports.crearPaquete = async (req, res) => {
  try {
    const nuevoPaquete = new Paquete(req.body);
    await nuevoPaquete.save();
    res.status(201).json(nuevoPaquete);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al registrar el paquete', error: error.message });
  }
};

// PUT / Actualizar un paquete
exports.actualizarPaquete = async (req, res) => {
  try {
    const paqueteActualizado = await Paquete.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    if (!paqueteActualizado) return res.status(404).json({ mensaje: 'Paquete no encontrado' });
    res.json(paqueteActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar el paquete', error: error.message });
  }
};

// DELETE / Eliminar un paquete
exports.eliminarPaquete = async (req, res) => {
  try {
    const paqueteEliminado = await Paquete.findByIdAndDelete(req.params.id);
    if (!paqueteEliminado) return res.status(404).json({ mensaje: 'Paquete no encontrado' });
    res.json({ mensaje: 'Paquete eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el paquete', error: error.message });
  }
};