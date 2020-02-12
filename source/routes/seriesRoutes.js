const router = require('express').Router()
const serieCntrl = require("../controllers/series")

router.get('/', serieCntrl.listar)
router.post('/', serieCntrl.insere)
router.get('/:id', serieCntrl.buscarPorId)
router.put('/:id', serieCntrl.atualiza)
router.delete('/:id', serieCntrl.delete)


module.exports = router;