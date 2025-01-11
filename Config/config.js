const express = require('express');
const path = require('path'); // Para manipular caminhos de arquivos
const DB = require('./dataBase');
const route = require('./Routes/Routes'); // Corrigi para ./Routes/Routes

const app = express();
const PORT = 4300;

// Middleware para JSON (mantém o suporte à API)
app.use(express.json());

// Middleware para servir arquivos estáticos da raiz do projeto
app.use(express.static(path.join(__dirname)));

// Suas rotas da API
app.use('/api', route);

// Rota para servir o `index.html` quando o usuário acessar a raiz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Conexão com o banco de dados e inicialização do servidor
DB.sync({ alter: true })
  .then(() => {
    console.log('Banco de dados sincronizado com sucesso.');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((erro) => {
    console.error('Não foi possível sincronizar o banco de dados:', erro);
  });
