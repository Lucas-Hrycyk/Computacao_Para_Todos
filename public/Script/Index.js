// Função para abrir o formulário de mensagem
function abrirPopupForm() {
  const mostrarForm = document.getElementById('Form');
  const comentarios = document.getElementById("Comentarios");

  if (mostrarForm && comentarios) {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    comentarios.classList.add("desfocarFundo");
    mostrarForm.style.display = "block";
  } else {
    console.error("Um ou mais elementos não foram encontrados.");
  }
}

function fecharPopupForm() {
  const mostrarForm = document.getElementById('Form');
  const comentarios = document.getElementById("Comentarios");

  if (mostrarForm && comentarios) {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';

    comentarios.classList.remove("desfocarFundo");
    mostrarForm.style.display = "none";
  } else {
    console.error("Um ou mais elementos não foram encontrados.");
  }
}

function exibirMensagens(mensagens) {
  const cardComentarios = document.getElementById('cardComentarios');
  cardComentarios.innerHTML = '';

  mensagens.forEach(mensagem => {
    const card = document.createElement('div');
    card.classList.add('card', 'text-star', 'mb-3');

    card.innerHTML = `
      <div class="card-header">
        <span class="text-black">${mensagem.UsuarioNome}</span>
      </div>
      <div class="card-body">
        <p class="card-text text-black">${mensagem.Mensagem}</p>
      </div>
      <div class="card-footer">
        <div class="row">
          <span class="d-block text-black col text-end">${new Date(mensagem.DataCriacao).toLocaleDateString()}</span>
          <button class="btn btn-secondary btn-sm col-auto" onclick="abrirHistorico(${mensagem.id})">Histórico</button>
        </div>
      </div>
    `;

    cardComentarios.appendChild(card);
  });
}

async function abrirHistorico(comentarioId) {
  const popup = document.getElementById('popupHistorico');
  const mensagemDiv = document.getElementById('mensagemComentario');
  const respostasDiv = document.getElementById('respostas');

  try {
    popup.setAttribute('data-comentario-id', comentarioId);

    const [mensagemRes, respostasRes] = await Promise.all([
      fetch(`/comentarios/${comentarioId}`).then(res => res.json()),
      fetch(`/comentarios/${comentarioId}/respostas`).then(res => res.json())
    ]);

    mensagemDiv.innerHTML = `<strong>${mensagemRes.UsuarioNome}:</strong> ${mensagemRes.Mensagem}`;

    respostasDiv.innerHTML = respostasRes.map(
      resp => `<p><strong>${resp.autor}:</strong> ${resp.mensagem}</p>`
    ).join('');

    popup.classList.remove('d-none');
  } catch (error) {
    console.error('Erro ao carregar histórico:', error);
    alert('Erro ao carregar histórico.');
  }
}

function fecharPopupHistorico() {
  const popup = document.getElementById('popupHistorico');
  popup.classList.add('d-none');
}

async function enviarResposta() {
  const popup = document.getElementById('popupHistorico');
  const comentarioId = popup.getAttribute('data-comentario-id');
  const novaResposta = document.getElementById('novaResposta').value;

  if (!novaResposta) {
    alert('Por favor, digite sua resposta.');
    return;
  }

  try {
    await fetch(`/comentarios/${comentarioId}/respostas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mensagem: novaResposta, autor: 'Usuário Atual' }),
    });

    alert('Resposta enviada com sucesso!');
    abrirHistorico(comentarioId);
  } catch (error) {
    console.error('Erro ao enviar resposta:', error);
    alert('Erro ao enviar resposta.');
  }
}

window.onload = function() {
  fetch('/ListMensagens')
    .then(response => response.json())
    .then(mensagens => {
      exibirMensagens(mensagens);
    })
    .catch(error => {
      console.error('Erro ao carregar mensagens:', error);
    });
};
