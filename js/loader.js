import { gsap } from "gsap";

export const setupLoader = ({ loader }) => {
  window.addEventListener("load", () => {
        gsap.to("#loader",{opacity:0,ease: "expo",duration: 0.6,onComplete() {loader.style.display = "none"}})
        const timeline = gsap.timeline({ defaults: { ease: "expo", opacity: 0 } });
        timeline.from(".gsap-logo", { x: -150 });
        timeline.from(".gsap-navs", { x: -150, stagger: 0.05 }, "<");
        timeline.from(".gsap-menu", { x:  150 }, "<");
        timeline.from(".gsap-slideup", { y: 50, stagger: 0.04 });
  });
};
