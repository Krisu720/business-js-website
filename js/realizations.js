import Masonry from "masonry-layout";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export const setupRealizations = ({
  masonryGrid,
  expandLayout,
  expandButton,
  realizations,
}) => {
  expandButton.addEventListener("click", () => {
    realizations.setAttribute("data-expanded", "true");
    expandLayout.style.display = "none";
  });

  const masonry = new Masonry(masonryGrid, {
    itemSelector: ".masonry-grid-item",
    gutter: ".masonry-gutter",
    percentPosition: true,
  });

  const lightbox = new PhotoSwipeLightbox({
    gallery: "#masonry-grid",
    children: "a",
    pswpModule: () => import("photoswipe"),
  });
  lightbox.init();
};
