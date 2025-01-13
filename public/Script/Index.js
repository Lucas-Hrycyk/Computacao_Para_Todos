// Função para abrir o popup
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

// Função para fechar o popup
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

// Função para enviar a mensagem
function enviarMensagem() {
  const nomeInput = document.querySelector('#usuarioNome');
  const mensagemTextarea = document.querySelector('#mensagemTexto');

  // Verifique se os campos existem
  if (!nomeInput || !mensagemTextarea) {
    console.error("Campos de nome ou mensagem não encontrados.");
    return;
  }

  const UsuarioNome = nomeInput.value.trim();
  const Mensagem = mensagemTextarea.value.trim();

  // Valida os campos
  if (!UsuarioNome || !Mensagem) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  // Enviar os dados para o servidor
  fetch('/CreateMensagens', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ UsuarioNome, Mensagem }),
  })
    .then(response => {
      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
        fecharPopupForm();

        // Limpar os campos após o envio
        nomeInput.value = '';
        mensagemTextarea.value = '';
      } else {
        alert('Erro ao enviar a mensagem. Por favor, tente novamente.');
      }
    })
    .catch(error => {
      console.error('Erro ao enviar a mensagem:', error);
      alert('Ocorreu um erro inesperado. Por favor, tente novamente.');
    });
}
