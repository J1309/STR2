import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Link } from "wouter";

export default function About() {
  const publications = [
    "Vogue Weddings",
    "Harper's Bazaar",
    "Junebug Weddings",
    "Rangefinder",
    "The Lane",
    "Wedding Sparrow"
  ];

  return (
    <div className="starline-page-shell">
      <Navbar variant="light" />

      <main className="starline-page-main">
        {/* Minimalist Split Hero */}
        <section className="minimal-section" style={{ paddingTop: "160px" }}>
          <div className="minimal-statement-grid" style={{ alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop"
                alt="Portrait of Lila / Lead Director"
                style={{ width: "100%", aspectRatio: "4 / 5", objectFit: "cover", display: "block" }}
              />
              <span style={{ position: "absolute", bottom: "16px", left: "16px", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#ffffff" }}>
                Lila / Lead Cinematographer
              </span>
            </div>

            <div className="minimal-statement-right">
              <p className="minimal-overline">Behind the Studio</p>
              <h1 style={{ fontFamily: "var(--font-display-condensed)", fontSize: "clamp(3.2rem, 5.5vw, 5.8rem)", lineHeight: 0.95, letterSpacing: "0.06em", textTransform: "uppercase", margin: "0 0 24px" }}>
                Telling Stories That<br />
                Outlast The Season
              </h1>
              <p style={{ fontSize: "15px", fontWeight: 300, lineHeight: 1.85, color: "var(--ink-secondary)", margin: "0 0 16px" }}>
                For over a decade, our studio has documented one thing with quiet devotion: bespoke destination weddings, intimate celebrations, and the small, honest gestures that give a memory its permanent emotional gravity.
              </p>
              <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: 1.85, color: "var(--ink-muted)", margin: "0 0 32px" }}>
                Based out of Philadelphia and California, traveling wherever an extraordinary celebration unfolds—from historic Gilded Age estates in Newport to sun-drenched vineyards in Napa Valley and coastal cliffs in Big Sur.
              </p>

              <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-subtle)" }}>
                <span>Philadelphia / California</span>
                <span>•</span>
                <span>35mm Film + 4K Cinema</span>
                <span>•</span>
                <span>Natural Light</span>
              </div>
            </div>
          </div>
        </section>

        {/* The Philosophy */}
        <section className="minimal-section" style={{ backgroundColor: "var(--bg-subtle)", borderTop: "1px solid var(--line-light)", borderBottom: "1px solid var(--line-light)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ marginBottom: "40px" }}>
              <p className="minimal-overline">The Approach</p>
              <h2 style={{ fontFamily: "var(--font-display-condensed)", fontSize: "clamp(2.8rem, 4.5vw, 4.6rem)", letterSpacing: "0.06em", textTransform: "uppercase", margin: 0 }}>
                Directed When Needed, Quiet When It Breathes
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "48px" }}>
              <div>
                <h3 style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", margin: "0 0 12px" }}>
                  Effortless Atmosphere
                </h3>
                <p style={{ fontSize: "14.5px", fontWeight: 300, lineHeight: 1.85, color: "var(--ink-muted)", margin: 0 }}>
                  Most couples worry about feeling staged or artificial in front of cameras. We understand that completely. That’s why our approach is built entirely on creating a calm, effortless atmosphere rather than commanding rigid poses.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", margin: "0 0 12px" }}>
                  Physical Permanence
                </h3>
                <p style={{ fontSize: "14.5px", fontWeight: 300, lineHeight: 1.85, color: "var(--ink-muted)", margin: 0 }}>
                  We believe deeply in the permanence of tangible heirlooms. Every commissioned celebration includes dual-format coverage, resulting in master physical art pieces and cinema films built to last across generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Studio Principles */}
        <section className="minimal-section">
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ marginBottom: "50px" }}>
              <p className="minimal-overline">Core Principles</p>
              <h2 style={{ fontFamily: "var(--font-display-condensed)", fontSize: "clamp(2.8rem, 4.5vw, 4.6rem)", letterSpacing: "0.06em", textTransform: "uppercase", margin: 0 }}>
                What We Stand For
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px" }}>
              <div>
                <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--ink-subtle)", display: "block", marginBottom: "12px" }}>01 / PRESENCE</span>
                <h3 style={{ fontSize: "15px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", margin: "0 0 8px" }}>Radical Presence</h3>
                <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: 1.8, color: "var(--ink-muted)", margin: 0 }}>
                  We don’t treat your wedding like a film set. Our priority is keeping you immersed in your day with the people you love.
                </p>
              </div>

              <div>
                <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--ink-subtle)", display: "block", marginBottom: "12px" }}>02 / CRAFT</span>
                <h3 style={{ fontSize: "15px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", margin: "0 0 8px" }}>Dual-Format Artistry</h3>
                <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: 1.8, color: "var(--ink-muted)", margin: 0 }}>
                  Authentic 35mm analog film rolls combined with medium format digital ensure your heirloom imagery will never look dated.
                </p>
              </div>

              <div>
                <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--ink-subtle)", display: "block", marginBottom: "12px" }}>03 / INCLUSIVITY</span>
                <h3 style={{ fontSize: "15px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", margin: "0 0 8px" }}>Warmth & Inclusivity</h3>
                <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: 1.8, color: "var(--ink-muted)", margin: 0 }}>
                  Love is universal. We are fiercely affirming, culturally sensitive, and honor every love story, heritage, and tradition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Publications Strip */}
        <section className="minimal-quote-section" style={{ padding: "50px 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p className="minimal-overline" style={{ marginBottom: "20px" }}>Featured & Published In</p>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "clamp(24px, 5vw, 64px)", flexWrap: "wrap" }}>
              {publications.map((pub) => (
                <span key={pub} style={{ fontFamily: "var(--font-display-condensed)", fontSize: "18px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-secondary)", opacity: 0.7 }}>
                  {pub}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer showClosingCta={true} />
    </div>
  );
}
