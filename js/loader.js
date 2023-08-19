export const setupLoader = ({ loader }) => {
  window.addEventListener("load", () => {
    loader.style.opacity = "0%";
    setTimeout(()=>loader.style.display = "none",1000)
  });
};
