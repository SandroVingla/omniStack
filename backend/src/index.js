const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const app = express();

mongoose.connect('mongodb+srv://sandro:sandro777@cluster0-39i7z.mongodb.net/wek10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json())
app.use(routes)

//metodos http: GET, POST, PUT, DELETE
//TIPOS DE PARAMETROS:
//Query Params: request.query(filtros,ordenacao e paginacao ....)
//route Params:request.params(indentificar um recurso na alteracao ou remocao)
//Body: request.body(dados para a criacao ou alteracao de um registro)

app.listen(3333);
