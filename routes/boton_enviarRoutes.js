const express = require('express');
const boton_enviarController = require('../controllers/boton_enviarController');
const api = express.Router();

api.post('/boton_enviar', boton_enviarController.apretarBoton_enviar);

module.exports = api