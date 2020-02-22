const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')
const http = require('http')
const cors = require('cors')

const { setupWebsocket } = require('./controller/weSocket')

const app = express();
const server = http.Server(app)

setupWebsocket(server);

mongoose.connect('mongodb+srv://sandro:sandro777@cluster0-39i7z.mongodb.net/wek08?retryWrites=true&w=majority',{
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

server.listen(3333);
