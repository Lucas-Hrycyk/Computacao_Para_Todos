const express = require('express');
const path = require('path');
const route = express.Router();

route.get('/', (req, res) => {
    // Serve o index.html da pasta public
    res.sendFile(path.join(__dirname, '../index.html'));
});

//#region Mensagens
const controllerMensage = require('../Controllers/msgController')

route.get('/ListMensagens', controllerMensage.List);
route.post('/CreateMensagens', controllerMensage.Create);
route.get('/getOneMensagens', controllerMensage.getOne)

//#endregion

module.exports = route;
