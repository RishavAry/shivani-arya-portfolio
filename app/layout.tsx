import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shivani Arya | Portfolio",
  description: "A woman in many frames.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
