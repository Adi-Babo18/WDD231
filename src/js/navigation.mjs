function mainMenuHandler() {
  const menu = document.querySelector(".global-nav");
  const menuButton = document.querySelector("#global-nav-toggle");
  menu.classList.toggle("show");

  const menuIsOpen = menu.classList.contains("show");
  menuButton.setAttribute("aria-expanded", menuIsOpen);
  menuButton.setAttribute(
    "aria-label",
    menuIsOpen ? "Close Menu" : "Open Menu"
  );
}

function subMenuHandler(event) {
  const button = event.currentTarget;
  const listItem = button.closest("li");
  const submenu = listItem.querySelector(".global-nav__submenu");
  const icon = button.querySelector(".icon");
  submenu.classList.toggle("show");
  icon.classList.toggle("rotate");

  const submenuIsOpen = submenu.classList.contains("show");
  button.setAttribute("aria-expanded", submenuIsOpen);
  button.setAttribute(
    "aria-label",
    submenuIsOpen ? "Close submenu" : "Open submenu"
  );
}

export default function enableNavigation() {
  const menuButton = document.querySelector("#global-nav-toggle");

  if (menuButton) {
    menuButton.addEventListener("click", mainMenuHandler);
  }

  const submenuButtons = document.querySelectorAll(
    ".global-nav__split-button__toggle"
  );

  submenuButtons.forEach((button) => {
    button.addEventListener("click", subMenuHandler);
  });
}