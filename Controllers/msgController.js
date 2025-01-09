const { DATE } = require('sequelize');
const ModelMsg = require('../Models/MsgModels');

module.exports = {
    async List(req, res) {
        try {
            const mensagem = await ModelMsg.findAll();
            return res.json(mensagem);
        } catch (erro) {
            console.error("Erro ao listar Mensagens: " + erro);
            return res.status(500).json({ error: "Erro ao listar Mensagens" });
        }
    },

    async Create(req, res) {
        try {
            const mensagem = await ModelMsg.create({
                Codigo: req.body.Codigo,
                Descricao: req.body.Descricao,
                DataCriacao: new Date(),
                DataAtualizacao:  new Date(),
            });
            return res.status(201).json(mensagem);
        } catch (erro) {
           return console.error("Erro ao criar nova mensagem: " + erro);
        }
    },

    async Update(req, res) {
        try {
            const mensagem = await ModelMsg.findByPk(req.body.Codigo);

            if (produto) {
                produto.Descricao = req.body.Descricao;
                produto.DataAtualizacao = new Date();
                await mensagem.save();

                // Retornar produto atualizado
                return res.json(mensagem);
            } else {
                return res.status(404).json({ error: "Mensagem não encontrado" });
            }
        } catch (erro) {
            console.error("Erro ao atualizar a Mensagem: " + erro);
            return res.status(500).json({ error: "Erro ao atualizar a Mensagem" });
        }
    },

    async getOne(req, res) {
        try {
            const mensagem = await ModelMsg.findByPk(req.body.Codigo);

            if (mensagem) {
                return res.json(mensagem);
            } else {
                return res.status(404).json({ error: "Mensagem não encontrado" });
            }
        } catch (erro) {
            console.error("Erro ao retornar produto: " + erro);
            return res.status(500).json({ error: "Erro ao retornar Mensagem" });
        }
    },

    async Delete(req, res) {
        try {
            const mensagem = await ModelMsg.findByPk(req.body.Codigo);

            if (mensagem) {
                await mensagem.destroy();
                return res.json({ message: "Mensagem deletado com sucesso" });
            } else {
                return res.status(404).json({ error: "Mensagem não encontrado" });
            }
        } catch (erro) {
            console.error("Erro ao deletar Mensagem: " + erro);
            return res.status(500).json({ error: "Erro ao deletar Mensagem" });
        }
    }
};