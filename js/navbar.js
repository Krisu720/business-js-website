export const setupNavbar = ({
  toggleMenu,
  closeMenu,
  mobileMenu,
  searchToggle,
  searchInput,
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

  window.addEventListener("resize", (e) => {
    if (window.innerWidth > 768) {
      mobileMenu.setAttribute("data-show", "false");
    }
  });

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
