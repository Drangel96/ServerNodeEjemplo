const express = require('express');
const app = express(); 

//Middlewares: funciones que se ejecutan antes de llegar a rutas 
app.use(express.json());
app.use(express.urlencoded({extended: false})); //urlencode procesa un dato de formulario y lo combierte en objeto 



//routers
app.use(require('./routers/index.js'));

app.listen(4000);
console.log('server on port 4000');