const Mensagens = require('../Models/msgModel');

module.exports = {
  async List(req, res) {
    try {
      const mensagens = await Mensagens.findAll();
      return res.json(mensagens);
    } catch (erro) {
      console.error('Erro ao listar mensagens:', erro);
      return res.status(500).json({ error: 'Erro ao listar mensagens.' });
    }
  },

  async Create(req, res) {
    const { UsuarioNome, Mensagem } = req.body;

    if (!UsuarioNome || !Mensagem) {
      return res.status(400).json({ error: 'Nome e mensagem são obrigatórios.' });
    }

    try {
      const novaMensagem = await Mensagens.create({
        UsuarioNome,
        Mensagem,
        DataCriacao: new Date(),
      });
      return res.status(201).json(novaMensagem);
    } catch (erro) {
      console.error('Erro ao criar nova mensagem:', erro);
      return res.status(500).json({ error: 'Erro ao criar nova mensagem.' });
    }
  },

  async Update(req, res) {
    const { MsgId, Mensagem } = req.body; 

    if (!MsgId || !Mensagem) {
      return res.status(400).json({ error: 'ID e mensagem são obrigatórios.' });
    }

    try {
      const mensagem = await Mensagens.findByPk(MsgId);

      if (mensagem) {
        mensagem.Mensagem = Mensagem;
        mensagem.DataCriacao = new Date();
        await mensagem.save();
        return res.json(mensagem);
      } else {
        return res.status(404).json({ error: 'Mensagem não encontrada.' });
      }
    } catch (erro) {
      console.error('Erro ao atualizar mensagem:', erro);
      return res.status(500).json({ error: 'Erro ao atualizar mensagem.' });
    }
  },

  async getOne(req, res) {
    const { MsgId } = req.body; 

    if (!MsgId) {
      return res.status(400).json({ error: 'ID é obrigatório.' });
    }

    try {
      const mensagem = await Mensagens.findByPk(MsgId);

      if (mensagem) {
        return res.json(mensagem);
      } else {
        return res.status(404).json({ error: 'Mensagem não encontrada.' });
      }
    } catch (erro) {
      console.error('Erro ao buscar mensagem:', erro);
      return res.status(500).json({ error: 'Erro ao buscar mensagem.' });
    }
  },

  async Delete(req, res) {
    const { MsgId } = req.body;

    if (!MsgId) {
      return res.status(400).json({ error: 'ID é obrigatório.' });
    }

    try {
      const mensagem = await Mensagens.findByPk(MsgId);

      if (mensagem) {
        await mensagem.destroy();
        return res.json({ message: 'Mensagem deletada com sucesso.' });
      } else {
        return res.status(404).json({ error: 'Mensagem não encontrada.' });
      }
    } catch (erro) {
      console.error('Erro ao deletar mensagem:', erro);
      return res.status(500).json({ error: 'Erro ao deletar mensagem.' });
    }
  },
};
