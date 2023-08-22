import { gsap } from "gsap";

export const setupContact = () => {
    gsap.from(".gsap-contact-slideleft", {
        scrollTrigger: {
          trigger: "#kontakt",
          start: "top center",
        },
        opacity: 0,
        x: 20,
        stagger: 0.12,
      });
      gsap.from(".gsap-contact-slideright", {
        scrollTrigger: {
          trigger: "#kontakt",
          start: "top center",
        },
        opacity: 0,
        x: -20,
        stagger: 0.12,
      });
      gsap.from(".gsap-contact-slide",{opacity:0,y:50,scrollTrigger: {
        trigger: "#kontakt",
        start: "top center",
      },})
}