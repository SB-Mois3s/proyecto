const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const boton_enviarSchema = new Schema({
    name: {
        type: String,
        required: true,
        mainLength:1,
        maxLength: 20,
        unique: true,
    }
})

module.exports = mongoose.model('boton_enviar', boton_enviarSchema);
