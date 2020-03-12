const cadastroModel = require('../models/cadastro');

module.exports = {
    listar: async (req, res, next) => {
        console.log(req.body);
        const cadastro = await cadastroModel.find({});

        try {
            res.send(cadastro);
        } catch (error) {
            res.status(500).send(err);
        }
    },
    adicionar: async (req, res, next) => {
        const cadastro = new cadastroModel(req.body);
        
        try {
            await cadastro.save()
        } catch (error) {
            res.status(500).send(err)
        }
    },
    /*
    cadastrar: (req, res, next) => {
        cadastroModel.create({
                nome: req.body,nome,
                telefone: req.body.telefone,
                midia: req.body.midia,
                social: req.body.social
        })
    },
    */
    atualizar: (req, res, next) => {},
    deletar: (req, res, next) => {}


}