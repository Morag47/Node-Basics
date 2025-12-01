
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
}