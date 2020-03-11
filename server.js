/**
 * Arquivo: server.js
 * Descrição: Arquivo responsável por levantar o serviço do Node.Js para poder
 * executar a aplicação e a API através do Express.Js.
 * Author: Eduardo de Moraes Ferreira
 * Data de Criação: 11/03/2020
 */
 
//Base do Setup da Aplicação:
 
/* Chamada das Packages que iremos precisar para a nossa aplicação */
var express     = require('express'); //chamando o pacote express
var app         = express(); //definção da nossa aplicação através do express
var bodyParser  = require('body-parser');  //chamando o pacote body-parser
var cors = require('cors') //chamando o pacote de cors
//Configuração Base da Aplicação:
//========================================================================
var mongoose = require('mongoose');

//mongoose.connect('mongodb://root:123456@jello.modulusmongo.net:27017/ity3Ryje');
mongoose.connect('mongodb+srv://admin:admin12345@atlasteste-fmbud.mongodb.net/test?retryWrites=true&w=majority');

/** Configuração da variável 'app' para usar o 'bodyParser()'.
 * Ao fazermos isso nos permitirá retornar os dados a partir de um POST
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
 
/** Definição da porta onde será executada a nossa aplicação */
var porta = process.env.PORT || 8080; 
 
//Rotas da nossa API:
//==============================================================
 
/* Aqui o 'router' irá pegar as instâncias das Rotas do Express */
var router  = express.Router(); 
 
/* Rota de Teste para sabermos se tudo está realmente funcionando (acessar através: GET: http://localhost:8080/api) */
router.get('/', function(req, res) {
    res.json({ message: 'YEAH! Seja Bem-Vindo a nossa API' });
});
 
/* TODO - Definir futuras rotas aqui!!! */
 
/* Todas as nossas rotas serão prefixadas com '/api' */
app.use('/api', router);
app.use('/', function(req = "req nada", res = "res nada") {
    console.log(req);
    console.log(res);
    res.json({ message: 'YEAH! Seja Bem-Vindo a nossa API' });
});
 
//Iniciando o Servidor (Aplicação):
//==============================================================
app.listen(porta, function () {
    console.log(`Servidor escutando na porta ${porta}.`);
});
