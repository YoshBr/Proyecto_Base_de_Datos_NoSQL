const ComercioAfiliado = require('../models/ComercioAfiliado');

exports.obtenerComercios = async (req, res) => {
    try {
        const comercios = await ComercioAfiliado.find();
        res.json(comercios);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los comercios afiliados', error });
    }
};

exports.crearComercio = async (req, res) => {
    try {
        const nuevoComercio = new ComercioAfiliado(req.body);
        await nuevoComercio.save();
        res.status(201).json({ mensaje: 'Comercio creado con éxito', comercio: nuevoComercio });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear el comercio', error });
    }
};