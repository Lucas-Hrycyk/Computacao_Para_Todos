const express = require('express');
const path = require('path'); 
const DB = require('./dataBase');
const route = require('../Routes/Routes');

const app = express();
app.use(express.json());
app.use(route);

const PORT = 4300;

// Servir os arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, '../public'))); 

// Rota para garantir que o index.html seja enviado em todas as outras requisições
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Sincronizar o banco de dados e iniciar o servidor
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
