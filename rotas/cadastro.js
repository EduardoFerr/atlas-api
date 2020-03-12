const express = require('express');
const router = express.Router();
const cadastroController = require('../app/controllers/cadastro');

router.use((req, res, next) => {
    console.log('Solicitação para rota cadastro........');
    next(); //aqui é para sinalizar de que prosseguiremos para a próxima rota. E que não irá parar por aqui!!!
});

router.get('/listar', cadastroController.listar);
router.post('/adicionar', cadastroController.adicionar);
router.put('/atualizar', cadastroController.atualizar);
router.delete('/deletar', cadastroController.deletar);

module.exports = router;
