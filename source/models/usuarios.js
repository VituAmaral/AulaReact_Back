const baseQuery = require('./BaseQuery')

class usuarios {

    insere(usuario) {
        return baseQuery( "insert into usuario set ?", usuario)
    }

    buscarEmail(email) {
        return baseQuery('select * from usuario where email = ?', email)
    }
}

module.exports = usuarios