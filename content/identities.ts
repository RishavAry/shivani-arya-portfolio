export type IdentityArtwork = "stage" | "drape" | "frame" | "mirror";

export type Identity = {
  number: string;
  title: string;
  description: string;
  image: {
    src: string | null;
    alt: string;
    artwork: IdentityArtwork;
  };
};

export const identities = [
  {
    number: "01",
    title: "ACTRESS",
    description:
      "Emotion, character, and storytelling — different ways a moment can take shape.",
    image: {
      src: null,
      alt: "Temporary abstract stage inspired visual. No person is depicted.",
      artwork: "stage",
    },
  },
  {
    number: "02",
    title: "MODEL",
    description:
      "Fashion, expression, and editorial form, gathered into a single frame.",
    image: {
      src: null,
      alt: "Temporary abstract fabric inspired visual. No person is depicted.",
      artwork: "drape",
    },
  },
  {
    number: "03",
    title: "CREATOR",
    description:
      "Digital storytelling begins with a concept, then makes room for experiment.",
    image: {
      src: null,
      alt: "Temporary abstract frame and composition visual. No person is depicted.",
      artwork: "frame",
    },
  },
  {
    number: "04",
    title: "WOMAN",
    description:
      "Personality, authenticity, and identity — a self seen from many angles.",
    image: {
      src: null,
      alt: "Temporary abstract mirror inspired visual. No person is depicted.",
      artwork: "mirror",
    },
  },
] satisfies readonly Identity[];
