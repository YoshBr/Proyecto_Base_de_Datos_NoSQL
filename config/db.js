const mongoose = require('mongoose');

const conectarBD = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Base de datos CorreosDB conectada exitosamente');
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error.message);
    process.exit(1);
  }
};

module.exports = conectarBD;