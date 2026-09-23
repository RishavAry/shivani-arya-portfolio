import Image from "next/image";
import type { Identity } from "@/content/identities";
import { identities } from "@/content/identities";
import { IdentitiesReveal } from "@/components/animation/identities-reveal";

function IdentityVisual({ identity }: { identity: Identity }) {
  if (identity.image.src) {
    return (
      <div className="identity-visual" data-identity-image>
        <Image
          src={identity.image.src}
          alt={identity.image.alt}
          fill
          sizes="(max-width: 767px) 90vw, (max-width: 1023px) 44vw, 38vw"
        />
      </div>
    );
  }

  return (
    <div
      className={`identity-visual identity-visual--${identity.image.artwork}`}
      data-identity-image
      role="img"
      aria-label={identity.image.alt}
    >
      <div className="identity-artwork" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <span className="identity-image-note" aria-hidden="true">
        TEMPORARY VISUAL <span>/</span> NO PERSON DEPICTED
      </span>
    </div>
  );
}

export function Identities() {
  return (
    <IdentitiesReveal>
      <section
        id="identities"
        className="identities-section"
        aria-labelledby="identities-heading"
      >
        <div className="identities-inner">
          <header className="identities-intro">
            <p className="identities-kicker">A WOMAN IN MANY FRAMES</p>
            <h2 id="identities-heading" className="identities-heading">
              <span>ONE PERSON.</span>
              <span className="identities-heading-second-line">
                <span>MANY</span>
                <em>IDENTITIES.</em>
              </span>
            </h2>
          </header>

          <ol className="identity-chapters">
            {identities.map((identity) => (
              <li
                className={`identity-chapter identity-chapter--${identity.number}`}
                data-identity-chapter
                key={identity.number}
              >
                <article aria-labelledby={`identity-title-${identity.number}`}>
                  <div className="identity-copy" data-identity-copy>
                    <p className="identity-number">{identity.number}</p>
                    <h3 id={`identity-title-${identity.number}`}>
                      {identity.title}
                    </h3>
                    <p className="identity-description">{identity.description}</p>
                  </div>
                  <IdentityVisual identity={identity} />
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </IdentitiesReveal>
  );
}
