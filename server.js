const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/correosdb')
.then(() => console.log('Conexión exitosa a MongoDB - CorreosDB'))
.catch(error => console.error('Error al conectar a MongoDB:', error));

const paquetesRoutes = require('./src/routes/paquetesRoutes');
const enviosRoutes = require('./src/routes/enviosRoutes');
const facturasRoutes = require('./src/routes/facturaRoutes');
const historialRoutes = require('./src/routes/historialEstadosRoutes');
const usuariosRoutes = require('./src/routes/usuarioRoutes');
const repartidoresRoutes = require('./src/routes/repartidorRoutes');
const rutasRoutes = require('./src/routes/rutaRoutes');
const reportesRoutes = require('./src/routes/reporteDiarioRoutes');
const sucursalesRoutes = require('./src/routes/sucursalRoutes');
const casillerosRoutes = require('./src/routes/casillerosRoutes');
const comerciosRoutes = require('./src/routes/comerciosRoutes');
const comprobantesRoutes = require('./src/routes/comprobantesRoutes');


app.use('/api/paquetes', paquetesRoutes);
app.use('/api/envios', enviosRoutes);
app.use('/api/facturas', facturasRoutes);
app.use('/api/historial', historialRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/repartidores', repartidoresRoutes);
app.use('/api/rutas', rutasRoutes);
app.use('/api/reportes', reportesRoutes);
app.use('/api/sucursales', sucursalesRoutes);
app.use('/api/casilleros', casillerosRoutes);
app.use('/api/comercios', comerciosRoutes);
app.use('/api/comprobantes', comprobantesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor de logística corriendo en el puerto ${PORT}`);
});