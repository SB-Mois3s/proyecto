const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const boton_enviarRoutes = require('./routes/boton_enviarRoutes');
const comentarioRoutes = require('./routes/comentarioRoutes');
app.use(cors());
app.use(express.json());
app.options('*',cors());
app.use('/api', boton_enviarRoutes);
app.use('/api', comentarioRoutes);


const options = {
    useNewURLParser: true,
    autoIndex: true,
    keepAlive: true,
    socketTimeoutMS: 45000,
    family: 4,
    useUnifiedTopology: true
}

mongoose.connect(process.env.DB,options,(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Connected to database");
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});
