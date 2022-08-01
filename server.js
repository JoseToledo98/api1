
const express = require("express");

const PORT = 8081;
const HOST= 'Localhost';

const app= express();
app.get('/alumnos',(req,res)=>{
    res.json(
    {
    '0':
    { 
        name: 'Jose Miguel',
        matricula : 193761,
        carrera: 'ids'
    },
    '1':
    {
        name: 'Juan Escutia',
        matricula : 199089,
        carrera: 'niño heroe'  
    },
    '2':
    {
        name: 'Agustin Melgar',
        matricula : 204761,
        carrera: 'niño heroe'
    },
    '3':
    {
        name: 'Jair abisaid',
        matricula : 193761,
        carrera: 'Psicologa'
    }})
});

app.get('/',(req,res)=>{
    res.send("health check")
});

app.listen(PORT,HOST);
console.log(`Runin on http://${HOST}:${PORT}`)