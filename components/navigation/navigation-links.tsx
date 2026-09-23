"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

const navigationItems = [
  { number: "01", label: "HOME", href: "#home" },
  { number: "02", label: "ABOUT", href: "#about" },
  { number: "03", label: "WORK", href: "#work" },
  { number: "04", label: "REEL", href: "#reel" },
  { number: "05", label: "ARCHIVE", href: "#archive" },
  { number: "06", label: "CONTACT", href: "#contact" },
];

type NavigationLinksProps = {
  onNavigate: () => void;
};

export function NavigationLinks({ onNavigate }: NavigationLinksProps) {
  const prefersReducedMotion = useReducedMotion();
  const duration = prefersReducedMotion ? 0 : 0.32;
  const listVariants: Variants = {
    closed: {
      transition: {
        when: "beforeChildren",
        staggerChildren: prefersReducedMotion ? 0 : 0.045,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: prefersReducedMotion ? 0 : 0.12,
        staggerChildren: prefersReducedMotion ? 0 : 0.075,
      },
    },
  };
  const itemVariants: Variants = {
    closed: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <nav aria-label="Main navigation">
      <motion.ul className="navigation-links" variants={listVariants}>
        {navigationItems.map(({ number, label, href }) => (
          <motion.li key={number} variants={itemVariants}>
            <a className="navigation-link" href={href} onClick={onNavigate}>
              <span className="navigation-link-number" aria-hidden="true">
                {number}
              </span>
              <span>{label}</span>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}
