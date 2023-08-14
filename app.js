const express = require("express");
const app= express();
const path= require("path");
const publicPtah = path.resolve(__dirname, 'public');

const viewsPtah = path.resolve(__dirname, 'views');

app.use(express.static(publicPtah)); 

app.use(express.static(viewsPtah)); 

//Levantar el servidor

const port= process.env.PORT || 3001;
app.listen(port, ()=>console.log("Servidor corriendo en puerto "+port  ));

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "views/home.html"))
})
