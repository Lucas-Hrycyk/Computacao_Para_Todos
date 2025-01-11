const express = require('express');
const path = require('path');
const route = express.Router();
const app = express(); // Criação da instância do servidor Express

// Serve os arquivos estáticos da pasta 'public' (CSS, JS, imagens, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal - Serve o index.html da pasta public
route.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//#region Mensagens
const controllerMensage = require('../Controllers/msgController')

route.get('/ListMensagens', controllerMensage.List);
route.post('/CreateMensagens', controllerMensage.Create);
route.get('/getOneMensagens', controllerMensage.getOne)
//#endregion

app.use(route); // Usa as rotas no servidor Express

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
