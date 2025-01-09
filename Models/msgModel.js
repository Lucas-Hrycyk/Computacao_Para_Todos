const { Sequelize, DataTypes, Model, NOW } = require('sequelize');
const database = require('../Config/dataBase');
const schema = '';

class Mensagens extends Model {}

Mensagens.init(
    {
        MsgId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        UsuarioNome: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },

        Mensagem: {
            type: DataTypes.STRING(500),
            allowNull: false,

        },

        DataCriacao: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },

    },

    {
        sequelize: database, 
        modelName: 'Mensagem',
        tableName: 'Mensagens', 
        schema: schema, 
        timestamps: false 
    },

);

Usuarios.hasMany(Mensagens, { foreignKey: 'UsuarioId' });
Mensagens.belongsTo(Usuarios, { foreignKey: 'UsuarioId' });

module.exports = Mensagens;