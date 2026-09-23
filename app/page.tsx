import { SiteHeader } from "@/components/navigation/site-header";
import { Hero } from "@/components/sections/hero";
import { Identities } from "@/components/sections/identities";
import { SelectedWork } from "@/components/sections/selected-work";

export default function HomePage() {
  return (
    <main id="home" className="site-main">
      <SiteHeader />
      <Hero />
      <Identities />
      <SelectedWork />
    </main>
  );
}
