import { gsap } from "gsap";
import { setupNavbar } from "./js/navbar";
import { setupOffer } from "./js/offer";
import { setupSlider } from "./js/slider";
import { setupRealizations } from "./js/realizations";
import { ScrollTrigger } from "gsap/all";
import { setupLoader } from "./js/loader";
import { setupAbout } from "./js/about";
import { setupContact } from "./js/contact";

gsap.registerPlugin(ScrollTrigger);

setupNavbar({
  toggleMenu: document.getElementById("togglemenubutton"),
  closeMenu: document.getElementById("closemenubutton"),
  mobileMenu: document.getElementById("mobilemenu"),
  searchToggle: document.getElementById("searchtoggle"),
  searchInput: document.getElementById("searchinput"),
  subMenu: document.getElementById("submenu"),
  subMenuButton:document.getElementById("submenubutton"),
});

setupSlider({
  nextButton: document.getElementById("nextButton"),
  prevButton: document.getElementById("prevButton"),
  slider: document.getElementById("slider"),
});

setupOffer({ cards: document.querySelectorAll(".gloweffect") });

setupLoader({ loader: document.getElementById("loader"),masonryGrid: document.getElementById("masonry-grid") });

setupRealizations({
  realizations: document.getElementById("realizacje"),
  expandButton: document.getElementById("expandbutton"),
  expandLayout: document.getElementById("expandlayout"),
});

setupAbout()
setupContact()








