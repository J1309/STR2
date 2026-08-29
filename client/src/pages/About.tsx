import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowUpRight, Film, Heart, MapPin, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="starline-page-shell">
      <Navbar variant="light" />

      <main className="starline-page-main" style={{ paddingTop: "96px" }}>
        {/* ===================================================================
            1. ATELIER HERO: DALLAS HERITAGE & EDITORIAL PANORAMIC STILL
            =================================================================== */}
        <section className="about-hero-section">
          <div className="about-hero-header">
            <span className="minimal-overline">STARLINE ATELIER // DALLAS, TEXAS</span>
            <h1 className="about-hero-title">
              CRAFTING TIMELESS HEIRLOOMS<br />SINCE 2023
            </h1>
            <p className="about-hero-lead">
              Founded in Dallas, Texas in 2023, Starline Atelier crafts living heirlooms of cinema and 35mm fine-art photography for couples celebrating across Texas, California, Rhode Island, and iconic destinations nationwide.
            </p>
          </div>

          {/* Single Curated Museum-Grade Editorial Panoramic Still */}
          <div className="about-hero-single-frame-wrap">
            <div className="about-hero-single-frame">
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2000&auto=format&fit=crop"
                alt="Starline Atelier Destination Wedding Cinema"
                className="about-hero-single-img"
              />
              <div className="about-hero-single-badge">
                <Sparkles size={13} />
                <span>STARLINE ATELIER // DALLAS &amp; WORLDWIDE</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            2. FOUNDER & PRINCIPAL CINEMATOGRAPHER: SAJAN
            =================================================================== */}
        <section className="about-founder-section">
          <div className="about-founder-container">
            <div className="about-founder-grid">
              {/* Founder Image (Image 2) */}
              <div className="about-founder-photo-col">
                <div className="about-founder-frame">
                  <img
                    src="/wd1.jpg"
                    alt="Sajan - Founder & Lead Cinematographer"
                    className="about-founder-img"
                  />
                  <div className="about-founder-badge">
                    <Sparkles size={14} />
                    <span>SAJAN // FOUNDER &amp; LEAD DIRECTOR</span>
                  </div>
                </div>
              </div>

              {/* Founder Details & Philosophy */}
              <div className="about-founder-info-col">
                <span className="minimal-overline">FOUNDER &amp; PRINCIPAL CINEMATOGRAPHER</span>
                <h2 className="about-founder-heading">MEET SAJAN</h2>

                <blockquote className="about-founder-quote">
                  “I founded Starline in Dallas in 2023 with a single conviction: to capture weddings not as choreographed productions, but as living, emotional poetry. The most unforgettable moments are always the quietest—the unscripted glance, the deep breath before walking down the aisle, and the honest joy shared among closest loved ones.”
                </blockquote>

                <p className="about-founder-body">
                  Specializing in medium format cinema lenses, vintage anamorphic glass, and 35mm analog film, Sajan approaches each wedding as an heirloom commission. With a calm, unobtrusive presence, he preserves the genuine atmosphere of your day so you can remain entirely present in every moment.
                </p>

                {/* Badges Row */}
                <div className="about-badges-grid">
                  <div className="about-badge-card">
                    <MapPin size={16} />
                    <div>
                      <strong>Dallas, Texas</strong>
                      <span>Operating Since 2023</span>
                    </div>
                  </div>
                  <div className="about-badge-card">
                    <Film size={16} />
                    <div>
                      <strong>Cinema &amp; Film</strong>
                      <span>35mm Analog + 4K Cinema</span>
                    </div>
                  </div>
                  <div className="about-badge-card">
                    <Heart size={16} />
                    <div>
                      <strong>Limited Commissions</strong>
                      <span>18 Celebrations / Year</span>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "32px" }}>
                  <Link href="/contact" className="minimal-btn-solid">
                    <span>INQUIRE WITH SAJAN</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            3. CLOSING CONSULTATION BANNER
            =================================================================== */}
        <section className="about-cta-section">
          <div className="about-cta-inner">
            <span className="minimal-overline">BESPOKE COMMISSIONS</span>
            <h2 className="about-cta-title">Let’s Tell Your Story Together</h2>
            <p className="about-cta-desc">
              We travel worldwide to document timeless wedding cinema and 35mm fine-art photography.
            </p>
            <div style={{ marginTop: "24px" }}>
              <Link href="/contact" className="minimal-btn-solid">
                <span>RESERVE YOUR DATE</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer showClosingCta={false} />
    </div>
  );
}
