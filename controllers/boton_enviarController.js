const Boton_enviar = require('../models/boton_enviar');

const apretarBoton_enviar = (req,res) =>{
    const { name} = req.body
    const newBoton_enviar = new Boton_enviar({
        name,
    })
    newBoton_enviar.save((error,boton_enviar)=>{
        if(error){
            return res.status(400).send({message: "No se ha podido crear el archivo"})
        }
        return res.status(201).send(boton_enviar)
    })
}

module.exports = {
    apretarBoton_enviar
}