const express = require('express');
const bodyparser = require('body-parser');
const personajeRoutes = require('./src/route/personajeroutes');

const app = express();
const port = 3002;

app.use(bodyparser.json());

//rutas
app.use('/api/personajes', personajeRoutes);

//iniciar server
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});