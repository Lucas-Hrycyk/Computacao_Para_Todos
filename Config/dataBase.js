const { Sequelize } = require('sequelize');
const CryptoJS = require('crypto-js');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;
const encryptedUsername = process.env.DB_USERNAME;
const encryptedPassword = process.env.DB_PASSWORD;

const decryptedUsername = CryptoJS.AES.decrypt(encryptedUsername, secretKey).toString(CryptoJS.enc.Utf8);
const decryptedPassword = CryptoJS.AES.decrypt(encryptedPassword, secretKey).toString(CryptoJS.enc.Utf8);

const database = new Sequelize('computacaotodo_db', decryptedUsername, decryptedPassword, {
    dialect: 'postgres',
    host: 'dpg-ctvvn123esus73ad6ea0-a.oregon-postgres.render.com',
    port: 5432, 
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
    logging: false,
});

database.authenticate()
    .then(() => {
        console.log('Conexão estabelecida com sucesso.');
    })
    .catch(err => {
        console.error('Não foi possível conectar ao banco de dados:', err);
    });

database.sync();

module.exports = database;
