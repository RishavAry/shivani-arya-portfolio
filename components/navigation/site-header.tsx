"use client";

import { useCallback, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import { MenuOverlay } from "./menu-overlay";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <>
      <div className="site-header">
        <a className="site-wordmark" href="#home">
          Shivani Arya
        </a>
        <button
          ref={menuButtonRef}
          className="menu-control"
          type="button"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? "CLOSE" : "MENU"}
          <span className="menu-control-mark" aria-hidden="true">
            {isMenuOpen ? "×" : "+"}
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <MenuOverlay onClose={closeMenu} returnFocusRef={menuButtonRef} />
        )}
      </AnimatePresence>
    </>
  );
}
