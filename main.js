import { setupNavbar } from "./js/navbar";

setupNavbar({
  toggleMenu: document.getElementById("togglemenubutton"),
  closeMenu: document.getElementById("closemenubutton"),
  mobileMenu: document.getElementById("mobilemenu"),
  searchToggle: document.getElementById("searchtoggle"),
  searchInput: document.getElementById("searchinput"),
});
