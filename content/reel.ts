export type ReelAvailability = "coming-soon" | "available";

export type ReelContent = {
  title: string;
  videoSrc: string | null;
  posterSrc: string | null;
  posterAlt: string;
  availability: ReelAvailability;
  status: string;
};

export const reel = {
  title: "Showreel",
  videoSrc: null,
  posterSrc: null,
  posterAlt:
    "Temporary abstract curtain artwork in olive and gold. No person is depicted.",
  availability: "coming-soon",
  status: "Coming soon",
} satisfies ReelContent;
