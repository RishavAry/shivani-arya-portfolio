import { SiteHeader } from "@/components/navigation/site-header";

export default function HomePage() {
  return (
    <main id="home" className="portfolio-shell">
      <SiteHeader />
      <header className="portfolio-intro">
        <p className="portfolio-eyebrow">A woman in many frames</p>
        <h1>Shivani Arya</h1>
      </header>

      <section aria-label="Future portfolio sections" className="portfolio-placeholder">
        <p>Future portfolio sections will appear here.</p>
      </section>
    </main>
  );
}
