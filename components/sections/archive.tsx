"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { ArchiveEntry } from "@/content/archive";
import { archiveEntries } from "@/content/archive";

function ArchiveImage({ entry }: { entry: ArchiveEntry }) {
  if (entry.image.src) {
    return (
      <div className="archive-image-frame">
        <Image
          src={entry.image.src}
          alt={entry.image.alt}
          fill
          sizes="(max-width: 767px) 92vw, (max-width: 1023px) 70vw, 60vw"
          loading="lazy"
        />
        <span className="archive-artwork-stamp" aria-hidden="true">
          VISUAL ARCHIVE <span>/</span> TEMPORARY
        </span>
      </div>
    );
  }

  return (
    <div
      className={`archive-image-frame archive-artwork archive-artwork--${entry.image.artwork}`}
      role="img"
      aria-label={entry.image.alt}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span className="archive-artwork-stamp" aria-hidden="true">
        VISUAL ARCHIVE <span>/</span> TEMPORARY
      </span>
    </div>
  );
}

export function Archive() {
  const prefersReducedMotion = useReducedMotion();
  const duration = prefersReducedMotion ? 0 : 0.55;
  const revealOffset = prefersReducedMotion ? 0 : 12;

  return (
    <motion.section
      id="archive"
      className="archive-section"
      aria-labelledby="archive-heading"
      initial={{ opacity: 0.98, y: revealOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08, margin: "0px 0px 12% 0px" }}
      transition={{ duration, ease: "easeOut" }}
    >
      <div className="archive-inner">
        <header className="archive-intro">
          <div>
            <p className="archive-kicker">08 <span>/</span> VISUAL STUDIES</p>
            <h2 id="archive-heading">THE ARCHIVE</h2>
          </div>
          <p className="archive-intro-note">
            A collection of forms, textures, and moments in light.
          </p>
        </header>

        <ul className="archive-gallery">
          {archiveEntries.map((entry) => (
            <motion.li
              className={`archive-entry archive-entry--${entry.layoutVariant}`}
              key={entry.id}
              initial={{ opacity: prefersReducedMotion ? 1 : 0.9, y: revealOffset }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration, ease: "easeOut" }}
            >
              <figure>
                <ArchiveImage entry={entry} />
                <figcaption>
                  <p className="archive-entry-number">{entry.number}</p>
                  <div className="archive-entry-copy">
                    <p className="archive-entry-category">{entry.category}</p>
                    <h3>{entry.title}</h3>
                    <p className="archive-entry-caption">{entry.caption}</p>
                  </div>
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
