"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";

type IdentitiesRevealProps = {
  children: ReactNode;
};

export function IdentitiesReveal({ children }: IdentitiesRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !("IntersectionObserver" in window)) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const context = gsap.context(() => {}, root);
    const chapters = root.querySelectorAll<HTMLElement>("[data-identity-chapter]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const chapter = entry.target;
          const image = chapter.querySelector<HTMLElement>("[data-identity-image]");
          const copy = chapter.querySelector<HTMLElement>("[data-identity-copy]");

          if (reducedMotion) {
            context.add(() => {
              gsap.fromTo(
                [image, copy].filter((element): element is HTMLElement => Boolean(element)),
                { autoAlpha: 0 },
                { autoAlpha: 1, duration: 0.2, stagger: 0.04 },
              );
            });
          } else {
            if (image) {
              context.add(() => {
                gsap.fromTo(
                  image,
                  { autoAlpha: 0, clipPath: "inset(0 0 100% 0)" },
                  {
                    autoAlpha: 1,
                    clipPath: "inset(0 0 0% 0)",
                    duration: 0.8,
                    ease: "power2.out",
                  },
                );
              });
            }

            if (copy) {
              context.add(() => {
                gsap.fromTo(
                  copy,
                  { autoAlpha: 0, y: 16 },
                  { autoAlpha: 1, y: 0, duration: 0.55, ease: "power2.out" },
                );
              });
            }
          }

          observer.unobserve(chapter);
        });
      },
      {
        threshold: 0.01,
        rootMargin: isMobile ? "0px 0px 18% 0px" : "0px 0px 12% 0px",
      },
    );

    chapters.forEach((chapter) => observer.observe(chapter));

    return () => {
      observer.disconnect();
      context.revert();
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
