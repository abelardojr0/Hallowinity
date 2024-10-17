const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");
const closeMenu = document.querySelector("#close-menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show"); // Alterna a classe 'show' no menu
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("show"); // Remove a classe 'show' ao clicar no botão de fechar
});

// Fecha o menu ao clicar em um item do menu
const menuItems = document.querySelectorAll(".cabecalho_menu_item");
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("show"); // Remove a classe 'show' ao clicar em um item do menu
  });
});
