
const personajeModel = require('../model/personajeModel');

module.exports = {
    getPersonajes: (req, res) => {
        personajeModel.getPersonajes((err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
                } 

                res.status(200).json({ data: result });
        });
    },

    getPersonajesById: (req, res) => {
        const { id } = req.params;

        personajeModel.getPersonajesById(id,(err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
                } 
                if(result.length === 0){
                    res.status(404).json({ message: "Personaje no encontrado" });
                    return;
                }

                res.status(200).json({ data: result });
        });
    },

    postPersonaje: (req, res) => {
        const { nombreCompleto, edad, altura, peso } = req.body;
        personajeModel.postPersonaje(nombreCompleto, edad, altura, peso, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(200).json({ message: "Personaje creado con exito", data: { idInsertado: result }});
        });
    },

    putPersonaje: (req, res) => {
        const { id } = req.params;
        const { nombreCompleto, edad, altura, peso } = req.body;
        personajeModel.putPersonaje(nombreCompleto, edad, altura, peso, id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return
            }
            if (result.affectedRows === 0) {
            res.status(404).json({ message: "Personaje no encontrado" });
            return;
            }
            res.status(200).json({ message: "Personaje actualizado con exito" });
        })
    },

    deletePersonaje: (req, res) => {
        const { id } = req.params;
        personajeModel.deletePersonaje(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            if (result.affectedRows === 0) {
                res.status(404).json({ message: "Personaje no encontrado" });
                return;
            }
            res.status(200).json({ message: "Personaje eliminado con exito" });
        });
    },
};