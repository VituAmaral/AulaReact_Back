const baseQuery = require('./BaseQuery')
class Series {

    lista(){
        return baseQuery('SELECT * FROM series')
    }

    insere(serie) {
        return baseQuery("INSERT INTO SERIES SET ?", serie)
    }

    atualiza(serie) {
        return baseQuery("UPDATE series SET ? WHERE id = ?", [serie, serie.id])
    }


    buscarPorId(id) {
        return baseQuery('SELECT * FROM series WHERE id = ?', id)
    }

    delete(id) {
        return baseQuery('DELETE FROM series WHERE id = ?', id)
    }
}


module.exports = Series
