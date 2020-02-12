const serieDao = new (require("../models/Series"))()

module.exports = {

    async listar(req, res) {
        try {
            const lista = await serieDao.lista()
            if(lista)
                return res.send(lista)
                return res.status(404).send({erro:"vazio"})  
        }catch(erro) {
            res.send(erro)
        }

                  
    },

    async insere(req,res) {
        let serie = req.body
        try {
            const resultado = await serieDao.insere(serie)
            const insertId = resultado.insertId
            serie = {id: insertId, ...serie}
            return res.status(201).send(serie)
        }catch(erro) {
            return res.status(500).send(erro)
        }
    },

    async buscarPorId(req, res) {
        const id = req.params.id

        let serie = await serieDao.buscarPorId(id)
        serie = serie[0]
        if(!serie)
            return res.status(404).send({erro:"serie não encontrada"})
        res.send(serie)
    },

    async atualiza(req, res) {
        const id = req.params.id
        const serie = req.body
        series.id = id

        const retorno = await serieDao.atualiza(serie)
        
        if(!retorno.affectedRows)
            return res.status(404).send({erro: "Serie não encontrada"})
        res.send(serie)
    },

    async delete(req, res) {
        const id = req.params.id
        const retorno = await serieDao.delete(id)
        if(!retorno.affectedRows) 
          res.status(404).send({erro:'Serie nao encontrada'})
         res.status(204).send()   
    }
}

