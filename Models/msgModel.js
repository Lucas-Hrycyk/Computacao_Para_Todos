const { Sequelize, DataTypes, Model } = require('sequelize');
const database = require('../Config/dataBase');

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
            defaultValue: Sequelize.NOW,
        },
    },
    {
        sequelize: database,
        modelName: 'Mensagem',
        tableName: 'Mensagens',
        schema: '',
        timestamps: false,
    }
);

module.exports = Mensagens;
