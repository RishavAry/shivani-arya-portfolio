"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";

type HeroEntranceProps = {
  children: ReactNode;
};

export function HeroEntrance({ children }: HeroEntranceProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const context = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) return;

      const entrance = gsap.timeline({
        delay: 0.08,
        defaults: { ease: "power2.out" },
      });

      entrance
        .fromTo(
          "[data-hero-image]",
          {
            autoAlpha: 0,
            clipPath: "inset(100% 0 0 0)",
            scale: 1.035,
          },
          {
            autoAlpha: 1,
            clipPath: "inset(0% 0 0 0)",
            scale: 1,
            duration: 0.82,
            ease: "power3.out",
          },
        )
        .fromTo(
          "[data-hero-meta]",
          { autoAlpha: 0, y: 8 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.34,
          },
          "-=0.22",
        )
        .fromTo(
          "[data-hero-title-line]",
          { autoAlpha: 0, yPercent: 112, scale: 0.985 },
          {
            autoAlpha: 1,
            yPercent: 0,
            scale: 1,
            duration: 0.56,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.08",
        )
        .fromTo(
          "[data-hero-statement]",
          { autoAlpha: 0, y: 10 },
          { autoAlpha: 1, y: 0, duration: 0.4 },
          "-=0.12",
        )
        .fromTo(
          "[data-hero-cta]",
          { autoAlpha: 0, y: 6 },
          { autoAlpha: 1, y: 0, duration: 0.34 },
          "-=0.08",
        );
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-section"
      aria-labelledby="hero-heading"
    >
      <div className="hero-content">{children}</div>
      <span className="hero-edge-note" aria-hidden="true">
        SCROLL TO ENTER
      </span>
    </section>
  );
}
