const express = require('express');
const router = express.Router();
const cadastroController = require('../app/controllers/cadastro');

router.get('/', cadastroController.listar)
router.get('/:id', cadastroController.buscarPorId)
router.post('/', cadastroController.adicionar)
router.put('/:id', cadastroController.atualizar)
router.delete('/:id', cadastroController.deletar)

module.exports = router;
