const cadastroModel = require('../models/cadastro');

module.exports = {
    listar: async (req, res, next) => {
        console.log(req.body);
        const cadastro = await cadastroModel.find({});

        try {
            res.send(cadastro);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    buscarPorId: async (req, res, next) => {
        try{
            const cadastro = await cadastroModel.findById(req.params.id);
            res.send(cadastro)
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    },
     adicionar: async (req, res, next) => {
        console.log(req.body)
        const cadastro = new cadastroModel(req.body);
        
        try {
            //await cadastro.save()
            
            
            await cadastro.save(function (err) {
                if (err)
                    res.json(err);
                res.json({
                    message: 'Novo cadastro adicionado!',
                    data: cadastro
                });
            });
            
            
            
        } catch (error) {
            res.status(500).send(error)
        }
    },
    
    
    

    
    adicionar2: async (req, res, next) => {
        console.log(req.body)
        const cadastro = new cadastroModel(req.body);
        
        try {
            await cadastro.save()
        } catch (error) {
            res.status(500).send(error)
        }
    },
    atualizar: async (req, res, next) => {
        try {
            await cadastroModel.findByIdAndUpdate(req.params.id, req.body)
            await cadastroModel.update()
            res.status(200).send()
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    },
    deletar: async (req, res, next) => {
        try {
            const cadastro = await cadastroModel.findByIdAndDelete(req.params.id)

            if (!cadastro) res.status(404).send("Cadastro não foi encontrado")
            res.status(200).send()
        } catch (error) {
            res.status(500).send(error)
        }
    }


}
