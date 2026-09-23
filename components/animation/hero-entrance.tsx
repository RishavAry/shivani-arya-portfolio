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

      if (reducedMotion) {
        gsap.fromTo(
          "[data-hero-image], [data-hero-title-line], [data-hero-statement], [data-hero-meta], [data-hero-cta]",
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            duration: 0.2,
            stagger: 0.035,
            clearProps: "opacity,visibility",
          },
        );
        return;
      }

      const entrance = gsap.timeline({ defaults: { ease: "power2.out" } });

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
            duration: 1.05,
            ease: "power3.inOut",
          },
        )
        .fromTo(
          "[data-hero-title-line]",
          { autoAlpha: 0, yPercent: 105 },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 0.78,
            stagger: 0.12,
          },
          "-=0.26",
        )
        .fromTo(
          "[data-hero-statement]",
          { autoAlpha: 0, y: 12 },
          { autoAlpha: 1, y: 0, duration: 0.55 },
          "-=0.12",
        )
        .fromTo(
          "[data-hero-meta]",
          { autoAlpha: 0, y: 10 },
          { autoAlpha: 1, y: 0, duration: 0.48 },
          "-=0.12",
        )
        .fromTo(
          "[data-hero-cta]",
          { autoAlpha: 0, y: 8 },
          { autoAlpha: 1, y: 0, duration: 0.45 },
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
    </section>
  );
}
