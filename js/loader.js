import { gsap } from "gsap";
import Masonry from "masonry-layout";
import imagesLoaded from 'imagesloaded'

export const setupLoader = ({ loader,masonryGrid }) => {
  window.addEventListener("load", () => {
    const masonry = new Masonry(masonryGrid, {
      itemSelector: ".masonry-grid-item",
      gutter: ".masonry-gutter",
      percentPosition: true,
    });
  
    imagesLoaded(masonry,()=>{
      masonry.layout()
    })
        gsap.to("#loader",{opacity:0,ease: "expo",duration: 0.6,onComplete() {loader.style.display = "none"}})
        const timeline = gsap.timeline({ defaults: { ease: "expo", opacity: 0 } });
        timeline.from(".gsap-logo", { x: -150 });
        timeline.from(".gsap-navs", { x: -150, stagger: 0.05 }, "<");
        timeline.from(".gsap-menu", { x:  150 }, "<");
        timeline.from(".gsap-slideup", { y: 50, stagger: 0.04 });
  });
};
