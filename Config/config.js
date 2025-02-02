const express = require('express');
const path = require('path'); 
const DB = require('./dataBase');
const route = require('../Routes/Routes');

const app = express();
app.use(express.json());
app.use(route);

const PORT = 4300;

app.use(express.static(path.join(__dirname, '../public'))); 

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

DB.sync({ alter: true })
    .then(() => {
        console.log('Banco de dados sincronizados com sucesso.');
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch(erro => {
        console.error('Não foi possível sincronizar o banco de dados:', erro);
    });
