import { gsap } from "gsap";

export const setupAbout = () => {

    gsap.from(".gsap-about-slideleft", {
        scrollTrigger: {
          trigger: "#about",
          start: "top center",
        },
        opacity: 0,
        x: 20,
        stagger: 0.12,
      });
      gsap.from(".gsap-about-slideright", {
        scrollTrigger: {
          trigger: "#about",
          start: "top center",
        },
        opacity: 0,
        x: -20,
        stagger: 0.12,
      });
}