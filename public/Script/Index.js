// Função para abrir o formulário de mensagem
function abrirPopupForm() {
  var mostrarForm = document.getElementById('Form');
  var comentarios = document.getElementById("Comentarios");

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
  var mostrarForm = document.getElementById('Form');
  var comentarios = document.getElementById("Comentarios");

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
        </div>
      </div>
    `;

    cardComentarios.appendChild(card);
  });
}

function enviarMensagem(event) {
  event.preventDefault();

  var nomeUsuario = document.querySelector('input[type="text"]').value;
  var mensagem = document.querySelector('textarea').value;

  if (!nomeUsuario || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  var dadosMensagem = {
    UsuarioNome: nomeUsuario,
    Mensagem: mensagem
  };

  console.log("Dados enviados: ", dadosMensagem);

  fetch('/CreateMensagens', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dadosMensagem),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Mensagem enviada com sucesso:', data);
    alert("Mensagem enviada com sucesso!");
    fecharPopupForm();

    fetch('/ListMensagens')
      .then(response => response.json())
      .then(mensagens => {
        exibirMensagens(mensagens);
      })
      .catch(error => {
        console.error('Erro ao carregar mensagens:', error);
      });
  })
  .catch((error) => {
    console.error('Erro ao enviar a mensagem:', error);
    alert("Erro ao enviar mensagem. Tente novamente.");
  });
}

document.getElementById("formEnviarMensagem").addEventListener("submit", enviarMensagem);

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