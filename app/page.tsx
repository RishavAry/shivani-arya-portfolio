import { SiteHeader } from "@/components/navigation/site-header";
import { Hero } from "@/components/sections/hero";
import { Identities } from "@/components/sections/identities";
import { SelectedWork } from "@/components/sections/selected-work";
import { Showreel } from "@/components/sections/showreel";
import { Archive } from "@/components/sections/archive";

export default function HomePage() {
  return (
    <main id="home" className="site-main">
      <SiteHeader />
      <Hero />
      <Identities />
      <SelectedWork />
      <Showreel />
      <Archive />
    </main>
  );
}
