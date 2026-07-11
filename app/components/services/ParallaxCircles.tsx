"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Applies a scroll-driven parallax to every decorative circle/ring on the
 * services page. Any element carrying a `data-parallax-speed` attribute is
 * animated: larger circles use a smaller speed (they drift slowly), smaller
 * circles use a larger speed (they move faster). Layering (circle z-index sits
 * between images and text) is handled in the section CSS modules.
 */
export function ParallaxCircles() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const circles = gsap.utils.toArray<HTMLElement>("[data-parallax-speed]");

      circles.forEach((el) => {
        const speed = parseFloat(el.dataset.parallaxSpeed ?? "0.2");
        // Travel scales with viewport height so the effect is resolution-stable.
        const distance = () => window.innerHeight * speed;

        gsap.fromTo(
          el,
          { y: () => distance() },
          {
            y: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: el.closest("section") ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
