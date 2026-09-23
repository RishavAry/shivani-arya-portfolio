import Image from "next/image";
import { HeroEntrance } from "@/components/animation/hero-entrance";

const heroImageSrc = "/images/hero-placeholder.png";

export function Hero() {
  return (
    <HeroEntrance>
      <div className="hero-copy">
        <p className="hero-meta" data-hero-meta>
          ACTRESS <span aria-hidden="true">·</span> MODEL{" "}
          <span aria-hidden="true">·</span> CREATOR
        </p>

        <h1 id="hero-heading" className="hero-title">
          <span className="hero-title-line" data-hero-title-line>
            SHIVANI
          </span>
          <span className="hero-title-line" data-hero-title-line>
            ARYA
          </span>
        </h1>

        <p className="hero-statement" data-hero-statement>
          A WOMAN
          <br />
          IN MANY
          <br />
          FRAMES
        </p>

        <a className="hero-cta" href="#about" data-hero-cta>
          <span>ENTER / EXPLORE</span>
          <span className="hero-cta-arrow" aria-hidden="true">
            ↓
          </span>
        </a>
      </div>

      <figure className="hero-image-frame" data-hero-image>
        <Image
          src={heroImageSrc}
          alt="Abstract olive velvet fabric in dramatic light. Temporary image, not Shivani Arya."
          fill
          preload
          quality={85}
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 42vw, 40vw"
        />
        <figcaption className="hero-image-note">
          TEMPORARY IMAGE <span aria-hidden="true">/</span> NOT SHIVANI
        </figcaption>
      </figure>
    </HeroEntrance>
  );
}
