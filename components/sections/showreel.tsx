"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { reel } from "@/content/reel";

export function Showreel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
    } else {
      video.pause();
    }
  }

  return (
    <motion.section
      id="reel"
      className="showreel-section"
      aria-labelledby="showreel-heading"
      initial={{ opacity: 1, y: prefersReducedMotion ? 0 : 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px 12% 0px" }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.65, ease: "easeOut" }}
    >
      <div className="showreel-inner">
        <header className="showreel-heading">
          <p className="showreel-kicker">A MOMENT IN MOTION</p>
          <h2 id="showreel-heading">SHOWREEL</h2>
        </header>

        <figure className="reel-screen">
          <div className="reel-media">
            {reel.videoSrc ? (
              <>
                <video
                  ref={videoRef}
                  className="reel-video"
                  poster={reel.posterSrc ?? undefined}
                  controls
                  preload="none"
                  playsInline
                  aria-label={reel.title}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src={reel.videoSrc} />
                  Your browser does not support video playback.
                </video>
                {!isPlaying && (
                  <motion.button
                    className="reel-play-control"
                    type="button"
                    aria-label="Play showreel"
                    onClick={togglePlayback}
                    whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
                  >
                    <span className="reel-play-icon" aria-hidden="true" />
                    <span>PLAY REEL</span>
                  </motion.button>
                )}
              </>
            ) : (
              <>
                <motion.div
                  className="reel-poster"
                  initial={{
                    opacity: 0.94,
                    scale: prefersReducedMotion ? 1 : 1.025,
                  }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.8,
                    ease: "easeOut",
                  }}
                >
                  {reel.posterSrc ? (
                    <Image
                      src={reel.posterSrc}
                      alt={reel.posterAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1199px) 92vw, 84rem"
                      priority={false}
                    />
                  ) : (
                    <div
                      className="reel-abstract-poster"
                      role="img"
                      aria-label={reel.posterAlt}
                    >
                      <span aria-hidden="true" />
                      <span aria-hidden="true" />
                      <span aria-hidden="true" />
                    </div>
                  )}
                </motion.div>
                <div
                  className="reel-unavailable"
                  role="status"
                  aria-live="polite"
                >
                  <span className="reel-status-rule" aria-hidden="true" />
                  <p>{reel.status}</p>
                  <span className="reel-status-note">
                    Temporary visual artwork <span aria-hidden="true">/</span> not
                    Shivani
                  </span>
                </div>
              </>
            )}
          </div>
          <figcaption className="reel-caption">
            <span>{reel.title}</span>
            <span>
              {reel.availability === "coming-soon" ? "IN PREPARATION" : "AVAILABLE"}
            </span>
          </figcaption>
        </figure>
      </div>
    </motion.section>
  );
}
