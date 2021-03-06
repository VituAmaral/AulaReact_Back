const { check,validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const usuarioDao = new (require("../models/usuarios"))()
const authconfig= require('../config/auth')
const bcrypt = require('bcryptjs')

gerarToken = (params) => {
    return jwt.sign(params, authconfig.secret, {
        expiresIn: 900,
    })
}

module.exports = {
  
    async registra(req, res) {
        console.log(req.body)
        const erros = validationResult(req)
       
        if(!erros.isEmpty()) 
            return res.status(400).send(erros)
        

        let usuario = req.body
      
        try{
            usuario.senha = await bcrypt.hash(usuario.senha, 10)
            const resultado = await usuarioDao.insere(usuario)
            usuario = {id: resultado.insertId, ...usuario}

            res.status(201).send({
                usuario,
                token: gerarToken({id: usuario.id})
            })
        }catch(erro) {

        }
        
    },

    async autenticacao(req, res) {
        const { email, senha} = req.body
        
        try {
            
        let usuario = await usuarioDao.buscarEmail(email)
        usuario = usuario[0]

            if(!usuario)
                return res.status(400).send({erro: "Usuario não cadastrado"})

            if(!await bcrypt.compare(senha, usuario.senha))
                return res.status(400).send({erro: "Senha invalida"})

            delete usuario.senha
            
            res.send({
                    usuario, 
                    token: gerarToken({id: usuario.id})
                })


        }catch(erro) {
            console.log(erro)
            res.status(500).send(erro)
        }
    }
}


