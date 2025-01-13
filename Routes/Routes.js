const express = require('express');
const path = require('path');
const route = express.Router();

route.use(express.static(path.join(__dirname, '../public')));

route.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

const controllerMensage = require('../Controllers/msgController')

route.get('/ListMensagens', controllerMensage.List);
route.post('/CreateMensagens', controllerMensage.Create);
route.get('/getOneMensagens', controllerMensage.getOne)

const rspController = require('../Controllers/rspController.js')

route.get('/ListResposta', rspController.List);
route.post('/CreateResposta', rspController.Create)
route.get('/getOneResposta', rspController.getOne)

module.exports = route;
