import { setupNavbar } from "./js/navbar";
import { setupCards } from "./js/offer";
import { setupSlider } from "./js/slider";

setupNavbar({
  toggleMenu: document.getElementById("togglemenubutton"),
  closeMenu: document.getElementById("closemenubutton"),
  mobileMenu: document.getElementById("mobilemenu"),
  searchToggle: document.getElementById("searchtoggle"),
  searchInput: document.getElementById("searchinput"),
});

setupSlider({
  nextButton: document.getElementById("nextButton"),
  prevButton: document.getElementById("prevButton"),
  slider: document.getElementById("slider"),
});

setupCards({cards: document.querySelectorAll(".gloweffect")})
