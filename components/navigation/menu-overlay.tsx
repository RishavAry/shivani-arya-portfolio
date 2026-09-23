"use client";

import { useEffect, useRef, type RefObject } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { NavigationLinks } from "./navigation-links";

type MenuOverlayProps = {
  onClose: () => void;
  returnFocusRef: RefObject<HTMLButtonElement | null>;
};

export function MenuOverlay({ onClose, returnFocusRef }: MenuOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const duration = prefersReducedMotion ? 0 : 0.38;
  const overlayVariants: Variants = {
    closed: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : -12,
      transition: { duration, when: "afterChildren" },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration, when: "beforeChildren" },
    },
  };

  useEffect(() => {
    const overlay = overlayRef.current;
    const returnFocusElement = returnFocusRef.current;
    if (!overlay) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    overlay.querySelector<HTMLElement>("nav a")?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !overlay) return;

      const focusableElements = overlay.querySelectorAll<HTMLElement>(
        'a[href], button:not(:disabled)',
      );
      const firstElement = focusableElements.item(0);
      const lastElement = focusableElements.item(focusableElements.length - 1);

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      } else if (!overlay.contains(document.activeElement)) {
        event.preventDefault();
        firstElement?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      returnFocusElement?.focus();
    };
  }, [onClose, returnFocusRef]);

  return (
    <motion.div
      ref={overlayRef}
      className="menu-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Main menu"
      variants={overlayVariants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      <div className="menu-overlay-inner">
        <div className="menu-overlay-header">
          <span className="menu-overlay-wordmark">Shivani Arya</span>
          <button
            className="menu-control menu-close"
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            CLOSE <span aria-hidden="true">×</span>
          </button>
        </div>

        <NavigationLinks onNavigate={onClose} />
      </div>
    </motion.div>
  );
}
