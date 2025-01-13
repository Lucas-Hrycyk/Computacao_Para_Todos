const { Sequelize } = require('sequelize');
require('dotenv').config();

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
      rejectUnauthorized: false
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
      rejectUnauthorized: false
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
