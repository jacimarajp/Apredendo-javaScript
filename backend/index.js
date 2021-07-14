const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();
mongoose.connect('mongodb+srv://jacimara:123@cluster0.fbxvh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use(cors());  //libera o acesso para todo tipo de aplicação

app.use(express.json()); //para o express entende requisições no formato Json
//Métodos http get, post, delete, put
//Tipos de parâmentros 
//Query params: request.query (filtros, ordenação, psginação)
//Routes params: request. params (put, delete) request.params (identicar um recurso na alteração ou remoção)
//Body: request.body (post, put) dados para criação ou alteração de um registro

//mongodb : banco não relacional
app.use(routes);

app.listen(3333);