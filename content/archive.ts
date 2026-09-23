export type ArchiveArtwork =
  | "drape"
  | "frame"
  | "shadow"
  | "fold"
  | "geometry"
  | "light"
  | "ribbon"
  | "still-life";

export type ArchiveLayout =
  | "lead"
  | "tall"
  | "offset"
  | "wide"
  | "narrow"
  | "landscape"
  | "small"
  | "final";

export type ArchiveCategory =
  | "FORM STUDY"
  | "COMPOSITION STUDY"
  | "LIGHT STUDY"
  | "TEXTURE STUDY"
  | "SHAPE STUDY"
  | "COLOR STUDY"
  | "LINE STUDY"
  | "OBJECT STUDY";

export type ArchiveEntry = {
  id: string;
  number: string;
  title: string;
  category: ArchiveCategory;
  image: {
    src: string | null;
    alt: string;
    artwork: ArchiveArtwork;
  };
  caption: string;
  layoutVariant: ArchiveLayout;
};

export const archiveEntries = [
  {
    id: "visual-study-01",
    number: "01",
    title: "Fold / Form",
    category: "FORM STUDY",
    image: {
      src: null,
      alt: "Abstract olive and gold planes arranged like folded fabric. No person is depicted.",
      artwork: "drape",
    },
    caption: "Temporary visual study in layered shapes and muted gold.",
    layoutVariant: "lead",
  },
  {
    id: "visual-study-02",
    number: "02",
    title: "Within the Frame",
    category: "COMPOSITION STUDY",
    image: {
      src: null,
      alt: "Nested rectangular outlines over a deep wine colored field. No person is depicted.",
      artwork: "frame",
    },
    caption: "Temporary visual study in framing and negative space.",
    layoutVariant: "tall",
  },
  {
    id: "visual-study-03",
    number: "03",
    title: "Soft Shadow",
    category: "LIGHT STUDY",
    image: {
      src: null,
      alt: "Abstract overlapping oval forms in near black and muted gold. No person is depicted.",
      artwork: "shadow",
    },
    caption: "Temporary visual study of shadow against a dark ground.",
    layoutVariant: "offset",
  },
  {
    id: "visual-study-04",
    number: "04",
    title: "Surface Notes",
    category: "TEXTURE STUDY",
    image: {
      src: null,
      alt: "Angular paper-like forms in ivory and olive. No person is depicted.",
      artwork: "fold",
    },
    caption: "Temporary visual study in surface, edge, and contrast.",
    layoutVariant: "wide",
  },
  {
    id: "visual-study-05",
    number: "05",
    title: "Quiet Geometry",
    category: "SHAPE STUDY",
    image: {
      src: null,
      alt: "A muted gold circle and fine lines on a deep olive field. No person is depicted.",
      artwork: "geometry",
    },
    caption: "Temporary visual study in simple forms and measured space.",
    layoutVariant: "narrow",
  },
  {
    id: "visual-study-06",
    number: "06",
    title: "Afterimage",
    category: "COLOR STUDY",
    image: {
      src: null,
      alt: "Abstract blocks of wine, ivory, and olive suggesting a beam of light. No person is depicted.",
      artwork: "light",
    },
    caption: "Temporary visual study in color and reflected light.",
    layoutVariant: "landscape",
  },
  {
    id: "visual-study-07",
    number: "07",
    title: "A Line in Motion",
    category: "LINE STUDY",
    image: {
      src: null,
      alt: "A broad muted gold ribbon shape crosses a near black field. No person is depicted.",
      artwork: "ribbon",
    },
    caption: "Temporary visual study in a single sweeping form.",
    layoutVariant: "small",
  },
  {
    id: "visual-study-08",
    number: "08",
    title: "Still Arrangement",
    category: "OBJECT STUDY",
    image: {
      src: null,
      alt: "Minimal abstract arrangement of circles and blocks in ivory and olive. No person is depicted.",
      artwork: "still-life",
    },
    caption: "Temporary visual study in balance, shape, and tone.",
    layoutVariant: "final",
  },
] satisfies readonly ArchiveEntry[];
