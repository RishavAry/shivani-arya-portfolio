export type ProjectCategory = "Acting" | "Fashion" | "Digital" | "Editorial";
export type ProjectArtwork = "curtain" | "fold" | "frame" | "orbit";

export type Project = {
  number: string;
  title: string;
  category: ProjectCategory;
  status: "Temporary creative preview";
  year: null;
  image: {
    src: null;
    alt: string;
    artwork: ProjectArtwork;
  };
};

export const projects = [
  {
    number: "01",
    title: "Project 01",
    category: "Acting",
    status: "Temporary creative preview",
    year: null,
    image: {
      src: null,
      alt: "Abstract olive and gold curtain forms. No person is depicted.",
      artwork: "curtain",
    },
  },
  {
    number: "02",
    title: "Project 02",
    category: "Fashion",
    status: "Temporary creative preview",
    year: null,
    image: {
      src: null,
      alt: "Abstract folds of wine and ivory color. No person is depicted.",
      artwork: "fold",
    },
  },
  {
    number: "03",
    title: "Project 03",
    category: "Digital",
    status: "Temporary creative preview",
    year: null,
    image: {
      src: null,
      alt: "An abstract editorial frame composition. No person is depicted.",
      artwork: "frame",
    },
  },
  {
    number: "04",
    title: "Project 04",
    category: "Editorial",
    status: "Temporary creative preview",
    year: null,
    image: {
      src: null,
      alt: "A minimal abstract orbital composition. No person is depicted.",
      artwork: "orbit",
    },
  },
] satisfies readonly Project[];
