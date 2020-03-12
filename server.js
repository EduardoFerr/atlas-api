/**
 * Arquivo: server.js
 * Descrição: Arquivo responsável por levantar o serviço do Node.Js para poder
 * executar a aplicação e a API através do Express.Js.
 * Author: Eduardo de Moraes Ferreira
 * Data de Criação: 11/03/2020
 */
 
//Base do Setup da Aplicação:
 
/* Chamada das Packages que iremos precisar para a nossa aplicação */
const express     = require('express'); //chamando o pacote express
const bodyParser  = require('body-parser');  //chamando o pacote body-parser
const cors        = require('cors'); //chamando o pacote de cors
const cadastro    = require('./rotas/cadastro'); //chamando sistema de rotas

//Configuração Base da Aplicação:
//========================================================================
const app         = express(); //definção da nossa aplicação através do express
//configuração do database
const mongoose = require('./config/database');

//conexão para o mongodb
mongoose.connection.on('error', console.error.bind(console, 'Erro de conexão do MongoDB:'));


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
//var router  = express.Router(); 

/* Middleware para usar em todos os requests enviados para a nossa API- Mensagem Padrão */


/* Todas as nossas rotas serão prefixadas com '/api' */
//app.use('/api', router);
//app.use('/', cadastro);
//rota pública
app.use('/', cadastro);

/* Rota de Teste para sabermos se tudo está realmente funcionando (acessar através: GET: http://localhost:8080/api) */
/*
router.get('/', (req, res) => {
    res.json({ message: 'Raiz' });
})
*/
/* TODO - Definir futuras rotas aqui!!! */
 
//Iniciando o Servidor (Aplicação):
//==============================================================
app.listen(porta, () => {
    console.log(`Servidor escutando na porta ${porta}.`);
});
