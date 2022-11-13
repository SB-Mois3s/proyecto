const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const comentarioSchema = new Schema({
    apartado:{
        type: String,
        required: true,
        mainLength:1,
        maxLength: 10000
    }
})

module.exports = mongoose.model('comentario', comentarioSchema);
