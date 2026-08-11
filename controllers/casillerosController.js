const Casillero = require('../models/Casillero');

exports.obtenerCasilleros = async (req, res) => {
    try {
        const casilleros = await Casillero.find();
        res.json(casilleros);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los casilleros', error });
    }
};

exports.crearCasillero = async (req, res) => {
    try {
        const nuevoCasillero = new Casillero(req.body);
        await nuevoCasillero.save();
        res.status(201).json({ mensaje: 'Casillero creado con éxito', casillero: nuevoCasillero });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear el casillero', error });
    }
};