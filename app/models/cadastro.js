/**
 * Arquivo: usuario.js
 * Author: Glaucia Lemos
 * Description: Arquivo onde trataremos o modelo do projeto.
 * Definição dos esquemas para serem utilizadas na Base de Dados (MongoDb)
 * Data: 11/03/2020
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CadastroSchema = new Schema({
    nome: String,
    telefone: String,
    midia: String,
    social: Array
})

module.exports = mongoose.model('Cadastro', CadastroSchema);