const Comentario = require('../models/comentario');

const ingresarComentario = (req,res) =>{
    const {apartado} = req.body
    const newComentario = new Comentario({apartado})

    newComentario.save((error,comentario)=>{
        if(error){
            return res.status(400).send({message: "Error al comentar"})
        }
        return res.status(201).send(comentario)
    })
}

module.exports = {
    ingresarComentario
}