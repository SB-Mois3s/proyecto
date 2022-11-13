const express = require('express');
const comentarioController = require('../controllers/comentarioController');
const api = express.Router();

api.post('/comentario', comentarioController.ingresarComentario);

module.exports = api