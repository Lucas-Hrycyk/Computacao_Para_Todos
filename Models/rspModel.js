const { Sequelize, DataTypes, Model } = require('sequelize');
const database = require('../Config/dataBase');

class Mensagens extends Model {}

Mensagens.init(
    {
        RspId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        UsuarioRspNome: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        Resposta: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        DataResposta: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW,
        },
    },
    {
        sequelize: database,
        modelName: 'Respostas',
        tableName: 'Respostas',
        schema: '',
        timestamps: false,
    }
);

module.exports = Mensagens;
