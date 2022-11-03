// Tambien se puede importar de esta manera
// const express = require('express');

// Para usar El import, hay que agregar "type" : "module",
// Debajo de index.js en "Package.JSON"
import express from 'express';

//IMPORTAMOS LAS RUTAS
import employeesRoutes from './routes/employees.js';

import indexRoutes from './routes/index.js';




const app = express()

// PRIMERO RECIBE DATOS Y LUEGO LO CONVIERTE EN JSON
app.use(express.json())

app.use(indexRoutes);

// PARA QUE SE PUEDA USAR LAS RUTAS
app.use('/api',employeesRoutes);


app.use((req, res , next) => {
    res.status(404).json({
        message: 'endPoint not Found'
    })
})

export default app;