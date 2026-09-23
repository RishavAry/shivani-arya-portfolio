import { SiteHeader } from "@/components/navigation/site-header";
import { Hero } from "@/components/sections/hero";

export default function HomePage() {
  return (
    <main id="home" className="site-main">
      <SiteHeader />
      <Hero />
    </main>
  );
}
