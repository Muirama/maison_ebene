import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function createHeroScroll(camera, plant) {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  });

  timeline
    .to(camera.position, {
      z: 5,
      y: 1.3,
      duration: 1,
      ease: "none",
    })

    .to(
      plant.scale,
      {
        x: 1.5,
        y: 1.5,
        z: 1.5,
        duration: 1,
        ease: "none",
      },
      "<",
    )

    .to(camera.position, {
      z: 3,
      y: 1,
      duration: 1,
      ease: "none",
    })

    .to(
      plant.scale,
      {
        x: 2.5,
        y: 2.5,
        z: 2.5,
        duration: 1,
        ease: "none",
      },
      "<",
    );

  return timeline;
}
