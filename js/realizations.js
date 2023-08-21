import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { gsap } from "gsap";
export const setupRealizations = ({
  expandLayout,
  expandButton,
  realizations,
}) => {
  expandButton.addEventListener("click", () => {
    realizations.setAttribute("data-expanded", "true");
    gsap.to(expandLayout, {
      opacity: 0,
      onComplete() {
        expandLayout.style.display = "none";
      },
    });
  });




  const lightbox = new PhotoSwipeLightbox({
    gallery: "#masonry-grid",
    children: "a",
    pswpModule: () => import("photoswipe"),
  });
  lightbox.init();


  gsap.from(".gsap-realizations-slide", {
    scrollTrigger: {
      trigger: "#realizacje",
      start: "top center",
    },
    y: 50,
    opacity: 0,
    stagger: 0.12,
  });

};
