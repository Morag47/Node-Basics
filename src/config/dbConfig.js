// CONFIGURACIÓN DE LA BASE DE DATOS MySQL
const mysql= require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1886',
    database: 'nodejs',
    port: 3306
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Conectado...');
});

module.exports = db;