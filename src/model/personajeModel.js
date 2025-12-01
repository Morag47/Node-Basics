const db = require('../config/dbConfig');

class Personaje {

    getPersonajes(callback) {
        const sql = "select id,nombreCompleto,edad,altura,peso from personajesars";
        db.query(sql, callback);
    }

    getPersonajesById(id, callback) {
        const sql = "select id,nombreCompleto,edad,altura,peso from personajesars where id = ?";
        db.query(sql, [id], callback);
    }


}
module.exports = new Personaje();
