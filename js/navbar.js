export const setupNavbar = ({
  toggleMenu,
  closeMenu,
  mobileMenu,
  searchToggle,
  searchInput,
  subMenu,
  subMenuButton,
}) => {
  const showSearchInput = () => {
    const currValue = searchInput.getAttribute("data-show");

    searchInput.setAttribute(
      "data-show",
      currValue === "true" ? "false" : "true",
    );
    if (currValue === "false") {
      searchInput.focus();
    }
  };

  const changeVisibility = (stan) => {
    if (stan) {
      const real = stan === true ? "true" : "false";
      subMenu.setAttribute("data-open", real);
    } else {
      const atr = subMenu.getAttribute("data-open");
      subMenu.setAttribute("data-open", atr === "true" ? "false" : "true");
    }
  };

  for (const item of mobileMenu.children[0].children) {
    if (item.nodeName === "A") {
      item.addEventListener("click", () => {
        mobileMenu.setAttribute("data-show", "false");
      });
    }
  }

  window.addEventListener("resize", (e) => {
    if (window.innerWidth > 768) {
      mobileMenu.setAttribute("data-show", "false");
    }
  });

  subMenuButton.addEventListener("click", () => changeVisibility());
  subMenuButton.addEventListener("mouseenter", () => changeVisibility(true));
  subMenu.addEventListener("mouseleave", () => changeVisibility());
  closeMenu.addEventListener("click", () => {
    mobileMenu.setAttribute("data-show", "false");
  });
  toggleMenu.addEventListener("click", () => {
    const currValue = mobileMenu.getAttribute("data-show");
    mobileMenu.setAttribute(
      "data-show",
      currValue === "true" ? "false" : "true",
    );
  });
  searchToggle.addEventListener("click", () => showSearchInput());
};
