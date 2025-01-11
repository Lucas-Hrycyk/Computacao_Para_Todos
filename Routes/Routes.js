const express = require('express')
const route = express.Router();



route.get('/', (req, res) => {
    res.send('Servidor Rodando!');
});

//#region Mensagens
const controllerMensage = require('../Controllers/msgController')

route.get('/ListMensagens', controllerMensage.List);
route.post('/CreateMensagens', controllerMensage.Create);
route.get('/getOneMensagens', controllerMensage.getOne)

//#endregion

module.exports = route;