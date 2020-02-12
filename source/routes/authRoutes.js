const router = require('express').Router()
const authCntrl = require('../controllers/autenticacao')
const UsuarioValidators = require('../validators/Usuario')

router.post('/registrar', UsuarioValidators.validacoes() ,authCntrl.registra)
router.post('/autenticar', authCntrl.autenticacao)

module.exports = router
