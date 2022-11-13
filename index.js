const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

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

app.listen(3000,() => {
    console.log(`Server started on port ${process.env.PORT}`);
});
