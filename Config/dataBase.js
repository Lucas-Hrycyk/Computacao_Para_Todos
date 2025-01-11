const { Sequelize } = require('sequelize');
require('dotenv').config();

// Definindo as credenciais e configurando SSL
module.exports = {
  username: 'lucas_hrycyk',
  password: 'y4tbBVtlL0WMGeqArw0O3X5yvz7ucDSO',
  database: 'computacao_todos_db',
  host: 'dpg-cu14u952ng1s73e6lqgg-a.oregon-postgres.render.com',
  port: 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Necessário para evitar problemas com certificados não verificados
    }
  }
};

const database = new Sequelize({
  username: 'lucas_hrycyk',
  password: 'y4tbBVtlL0WMGeqArw0O3X5yvz7ucDSO',
  database: 'computacao_todos_db',
  host: 'dpg-cu14u952ng1s73e6lqgg-a.oregon-postgres.render.com',
  port: 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Necessário para aceitar certificados autoassinados
    }
  }
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
