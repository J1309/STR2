import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowUpRight, Award, Camera, Heart, MapPin, Sparkles, Sun } from "lucide-react";
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

  const studioValues = [
    {
      title: "Radical Presence",
      desc: "We don’t treat your wedding like a production set. Our priority is keeping you immersed in your day with the people you love."
    },
    {
      title: "Dual-Format Artistry",
      desc: "Authentic 35mm analog film rolls combined with medium format digital ensure your heirloom imagery will never look dated."
    },
    {
      title: "Inclusivity & Warmth",
      desc: "Love is universal. We are fiercely affirming, culturally sensitive, and honor every love story, heritage, and tradition."
    }
  ];

  return (
    <div className="starline-page-shell">
      <Navbar variant="light" />

      <main className="starline-page-main">
        {/* About Hero / Split Section */}
        <section className="about-page-hero">
          <div className="about-page-hero-inner">
            <div className="about-portrait-frame">
              <img
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop"
                alt="Lila, Lead Artist at Starline Studio"
              />
              <span className="portrait-caption">Portrait of Lila / Lead Director & Cinematographer</span>
            </div>

            <div className="about-hero-copy">
              <span className="gione-kicker">Behind the Lens</span>
              <h1 className="about-hero-title">
                Telling Stories That<br />
                Outlast The Season
              </h1>
              <p className="about-lead">
                For over a decade, our studio has documented one thing with unwavering devotion: bespoke destination weddings, intimate celebrations, and the honest, quiet gestures that give a memory its permanent emotional gravity.
              </p>
              <p className="about-sublead">
                Based out of California and London, traveling wherever an extraordinary celebration unfolds—from historic stone villas in Lake Como to windswept desert horizons in Marrakech.
              </p>

              <div className="about-quick-specs">
                <div className="about-spec-item">
                  <MapPin size={15} color="var(--cobalt-bright)" />
                  <span>California / London / Worldwide</span>
                </div>
                <div className="about-spec-item">
                  <Camera size={15} color="var(--cobalt-bright)" />
                  <span>35mm Film + 4K Cinema</span>
                </div>
                <div className="about-spec-item">
                  <Sun size={15} color="var(--cobalt-bright)" />
                  <span>Natural & Ambient Light</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Deep Dive */}
        <section className="about-philosophy-section">
          <div className="about-philosophy-inner">
            <div className="philosophy-header">
              <span className="gione-kicker">The Approach</span>
              <h2>
                Directed When Needed,<br />
                Quiet When It Breathes
              </h2>
            </div>

            <div className="philosophy-columns">
              <div className="philosophy-text-col">
                <p>
                  Most couples worry about feeling staged or artificial in front of cameras. We understand that completely. That’s why our approach is built entirely on creating an effortless, serene atmosphere rather than commanding rigid poses.
                </p>
                <p>
                  When the light is magical, we guide you with subtle, intuitive prompts. When you are embracing your loved ones or laughing with your guests at dinner, we step back into the background, capturing honest cinema as it happens.
                </p>
              </div>

              <div className="philosophy-text-col">
                <p>
                  We believe deeply in the permanence of physical heirlooms. Every commissioned celebration includes dual-format coverage, custom typography design, and master physical art pieces built to last across generations.
                </p>
                <div style={{ marginTop: "24px" }}>
                  <Link href="/portfolio" className="gione-btn-primary">
                    <span>Explore Selected Works</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Studio Values */}
        <section className="about-values-section">
          <div className="gione-section-head" style={{ marginBottom: "40px" }}>
            <span className="gione-kicker">What We Stand For</span>
            <h2>Core Studio Principles</h2>
          </div>

          <div className="about-values-grid">
            {studioValues.map((v, i) => (
              <div key={i} className="about-value-card">
                <span className="value-index">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features & Publications */}
        <section className="gione-press-strip">
          <div className="gione-press-inner">
            <p className="gione-press-kicker">Featured & Published In</p>
            <div className="gione-press-logos">
              {publications.map((pub, idx) => (
                <div key={idx} className="gione-press-item">
                  <span>{pub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
