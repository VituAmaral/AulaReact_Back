const express = require('express');
const app = express(); 
const consign = require('consign');
const bodyParser = require('body-parser')

const customExpress = () => {
    
    app.use(bodyParser.json())

    consign()
    .include('controllers')
    .include('models')
    .into(app)

    app.use((req, res, next) => {
        const authHeader = req.headers.authorization

        if(!authHeader)
            return res.status(401).send({erro: 'Token não encontrado'})
            const parts = authHeader.split('')

        if(!parts.lenght === 2)
            return res.status(401).send({erro: 'Token mal formatado'})

        const [ bearer, token] = parts

        jwt.verify(token, authConfig.secret, (erro, decodificado) =>{
            if(erro) return res.status(401).send({erro:'token invalido'})

            req.userId = user.id;
            return next()
        })
    })
    
    return app

    
}

module.exports = customExpress()