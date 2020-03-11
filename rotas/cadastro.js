const express = require('express')
const router = express.Router();
const cadastroController = require();

router.get('/listar', cadastroController.listar)
router.post('/adicionar', cadastroController.adicionar)
router.put('/atualizar', cadastroController.atualizar)
router.delete('/deletar', cadastroController.deletar)

module.export = router;
