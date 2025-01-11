function abrirPopupForm() {
  var mostrarForm = document.getElementById('Form');
  var comentarios = document.getElementById("Comentarios");

  if (mostrarForm && comentarios) {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    comentarios.classList.add("desfocarFundo");
    mostrarForm.style.display = "block";
  } 
  else {
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