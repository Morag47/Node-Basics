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
    postPersonaje(nombreCompleto, edad, altura, peso, callback) {
    const sql = "INSERT INTO personajesars (nombreCompleto, edad, altura, peso) VALUES (?, ?, ?, ?)";
    db.query(sql, [nombreCompleto, edad, altura, peso], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result.insertId);
    });
    }

    putPersonaje(nombreCompleto, edad, altura, peso, id, callback) {
    const sql = "UPDATE personajesars SET nombreCompleto = ?, edad = ?, altura = ?, peso = ? WHERE id = ?";
    db.query(sql, [nombreCompleto, edad, altura, peso, id], callback);

    }    

    deletePersonaje(id, callback) {
        const sql = "DELETE FROM personajesars WHERE id = ?";
        db.query(sql, [id], callback);
    }
}
module.exports = new Personaje();
