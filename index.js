const express = require('express');
const app = express()
//router
const { RouterIndex }= require('./routes/index');

app.use("/", RouterIndex);

app.listen(3000, ()=>{
    console.log("Servidor escuhadon en http//localhost:3000")
})