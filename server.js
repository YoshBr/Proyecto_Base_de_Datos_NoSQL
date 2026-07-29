require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const conectarBD = require('./src/config/db');
const paqueteRoutes = require('./src/routes/paqueteRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

conectarBD();

app.use('/api/paquetes', paqueteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor de CorreosDB corriendo en http://localhost:${PORT}`);
});