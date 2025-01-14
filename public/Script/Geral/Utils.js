document.addEventListener('DOMContentLoaded', function() {
  var menuDiv = document.getElementById('menu');
  
  // Verifique se o menuDiv existe antes de adicionar a classe
  if (menuDiv) {
    menuDiv.classList.add('hidden');
  }
  
  // Verifique se o toggleNavButton existe antes de adicionar o evento
  var toggleNavButton = document.getElementById('toggleNavButton');
  if (toggleNavButton) {
    toggleNavButton.addEventListener('click', function() {
      var menu = document.getElementById('menu');
      if (menu) {
        menu.classList.toggle('hidden');
      }
    });
  }

  fetch('../../Views/Geral/MenuPrincipal.html')
    .then(response => response.text())
    .then(data => {
      var menuElement = document.getElementById('menu');
      if (menuElement) {
        menuElement.innerHTML = data;

        var toggleNavButtonPhone = document.getElementById('toggleNavButtonPhone');
        if (toggleNavButtonPhone) {
          toggleNavButtonPhone.addEventListener('click', function() {
            menuElement.classList.toggle('hidden');
          });
        }

        var fecharMenuButton = document.getElementById('FecharMenu');
        if (fecharMenuButton) {
          fecharMenuButton.addEventListener('click', function() {
            menuElement.classList.add('hidden');
          });
        }
      }
    })
    .catch(error => console.log('Erro ao carregar MenuPrincipal.html:', error));

  fetch('../../Views/Geral/Footer.html')
    .then(response => response.text())
    .then(data => {
      var footerElement = document.getElementById('footer');
      if (footerElement) {
        footerElement.innerHTML = data;
      }
    })
    .catch(error => console.log('Erro ao carregar Footer.html:', error));
});