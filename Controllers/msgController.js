const Mensagens = require('../Models/Mensagens'); // Importa a model correta

module.exports = {
  // Lista todas as mensagens
  async List(req, res) {
    try {
      const mensagens = await Mensagens.findAll(); // Busca todas as mensagens
      return res.json(mensagens); // Retorna as mensagens em JSON
    } catch (erro) {
      console.error('Erro ao listar mensagens:', erro);
      return res.status(500).json({ error: 'Erro ao listar mensagens.' });
    }
  },

  // Cria uma nova mensagem
  async Create(req, res) {
    const { UsuarioNome, Mensagem } = req.body; // Captura os dados do corpo da requisição

    if (!UsuarioNome || !Mensagem) {
      return res.status(400).json({ error: 'Nome e mensagem são obrigatórios.' });
    }

    try {
      const novaMensagem = await Mensagens.create({
        UsuarioNome,
        Mensagem,
        DataCriacao: new Date(),
      }); // Cria uma nova mensagem no banco
      return res.status(201).json(novaMensagem);
    } catch (erro) {
      console.error('Erro ao criar nova mensagem:', erro);
      return res.status(500).json({ error: 'Erro ao criar nova mensagem.' });
    }
  },

  // Atualiza uma mensagem existente
  async Update(req, res) {
    const { MsgId, Mensagem } = req.body; // Captura os dados da requisição

    if (!MsgId || !Mensagem) {
      return res.status(400).json({ error: 'ID e mensagem são obrigatórios.' });
    }

    try {
      const mensagem = await Mensagens.findByPk(MsgId); // Busca a mensagem pelo ID

      if (mensagem) {
        mensagem.Mensagem = Mensagem; // Atualiza o campo Mensagem
        mensagem.DataCriacao = new Date(); // Atualiza a data de criação
        await mensagem.save(); // Salva as alterações no banco
        return res.json(mensagem); // Retorna a mensagem atualizada
      } else {
        return res.status(404).json({ error: 'Mensagem não encontrada.' });
      }
    } catch (erro) {
      console.error('Erro ao atualizar mensagem:', erro);
      return res.status(500).json({ error: 'Erro ao atualizar mensagem.' });
    }
  },

  // Retorna uma mensagem específica pelo ID
  async getOne(req, res) {
    const { MsgId } = req.body; // Captura o ID da requisição

    if (!MsgId) {
      return res.status(400).json({ error: 'ID é obrigatório.' });
    }

    try {
      const mensagem = await Mensagens.findByPk(MsgId); // Busca a mensagem pelo ID

      if (mensagem) {
        return res.json(mensagem); // Retorna a mensagem encontrada
      } else {
        return res.status(404).json({ error: 'Mensagem não encontrada.' });
      }
    } catch (erro) {
      console.error('Erro ao buscar mensagem:', erro);
      return res.status(500).json({ error: 'Erro ao buscar mensagem.' });
    }
  },

  // Deleta uma mensagem pelo ID
  async Delete(req, res) {
    const { MsgId } = req.body; // Captura o ID da requisição

    if (!MsgId) {
      return res.status(400).json({ error: 'ID é obrigatório.' });
    }

    try {
      const mensagem = await Mensagens.findByPk(MsgId); // Busca a mensagem pelo ID

      if (mensagem) {
        await mensagem.destroy(); // Deleta a mensagem
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
