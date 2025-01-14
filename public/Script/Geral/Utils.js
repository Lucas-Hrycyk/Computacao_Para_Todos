document.addEventListener('DOMContentLoaded', function() {
  var menuDiv = document.getElementById('menu');
  
  // Verifique se o menuDiv existe antes de adicionar a classe
  if (menuDiv) {
    menuDiv.classList.add('hidden');
  }
  
  var toggleNavButton = document.getElementById('toggleNavButton');
  if (toggleNavButton) {
    toggleNavButton.addEventListener('click', function() {
      var menu = document.getElementById('menu');
      if (menu) {
        menu.classList.toggle('hidden');
      }
    });
  }

  fetch('/Computacao_Para_Todos/public/Views/Geral/MenuPrincipal.html')
    .then(response => response.text())
    .then(data => {
      var menuElement = document.getElementById('menu');
      if (menuElement) {
        menuElement.innerHTML = data;

        // Verifique se o toggleNavButtonPhone existe antes de adicionar o evento
        var toggleNavButtonPhone = document.getElementById('toggleNavButtonPhone');
        if (toggleNavButtonPhone) {
          toggleNavButtonPhone.addEventListener('click', function() {
            menuElement.classList.toggle('hidden');
          });
        }

        // Verifique se o FecharMenu existe antes de adicionar o evento
        var fecharMenuButton = document.getElementById('FecharMenu');
        if (fecharMenuButton) {
          fecharMenuButton.addEventListener('click', function() {
            menuElement.classList.add('hidden');
          });
        }
      }
    })
    .catch(error => console.log('Erro ao carregar MenuPrincipal.html:', error));

  fetch('/Computacao_Para_Todos/public/Views/Geral/Footer.html')
    .then(response => response.text())
    .then(data => {
      var footerElement = document.getElementById('footer');
      if (footerElement) {
        footerElement.innerHTML = data;
      }
    })
    .catch(error => console.log('Erro ao carregar Footer.html:', error));
});