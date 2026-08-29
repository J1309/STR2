import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowUpRight, Camera, Film, Heart, MapPin, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="starline-page-shell">
      <Navbar variant="light" />

      <main className="starline-page-main" style={{ paddingTop: "96px" }}>
        {/* ===================================================================
            1. ATELIER HERO: DALLAS HERITAGE & VISUAL TRIO
            =================================================================== */}
        <section className="about-hero-section">
          <div className="about-hero-header">
            <span className="minimal-overline">STARLINE ATELIER // DALLAS, TEXAS</span>
            <h1 className="about-hero-title">
              CRAFTING TIMELESS HEIRLOOMS<br />SINCE 2023
            </h1>
            <p className="about-hero-lead">
              Founded in Dallas, Texas in 2023, Starline crafts living heirlooms of cinema and 35mm fine-art photography for couples celebrating across Texas, California, Rhode Island, and iconic worldwide destinations.
            </p>
          </div>

          {/* Visual 3-Image Editorial Panorama Trio */}
          <div className="about-visual-trio-grid">
            <div className="about-trio-item item-left">
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1000&auto=format&fit=crop"
                alt="Newport Oceanfront Wedding Still"
                className="about-trio-img"
              />
              <span className="about-trio-tag">NEWPORT // COASTAL STILL</span>
            </div>

            <div className="about-trio-item item-center">
              <img
                src="/wd1.jpg"
                alt="Starline Dallas Atelier Bridal Editorial"
                className="about-trio-img"
              />
              <span className="about-trio-tag">DALLAS // ATELIER COMMISSIONS</span>
            </div>

            <div className="about-trio-item item-right">
              <img
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop"
                alt="Napa Valley Vineyard Golden Hour"
                className="about-trio-img"
              />
              <span className="about-trio-tag">NAPA VALLEY // 35MM EMULSION</span>
            </div>
          </div>
        </section>

        {/* ===================================================================
            2. FOUNDER & PRINCIPAL SPOTLIGHT: SAJAN
            =================================================================== */}
        <section className="about-founder-section">
          <div className="about-founder-container">
            <div className="about-founder-grid">
              {/* Founder Image Column */}
              <div className="about-founder-photo-col">
                <div className="about-founder-frame">
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
                    alt="Sajan - Founder & Lead Cinematographer"
                    className="about-founder-img"
                  />
                  <div className="about-founder-badge">
                    <Sparkles size={14} />
                    <span>SAJAN // FOUNDER &amp; LEAD DIRECTOR</span>
                  </div>
                </div>
              </div>

              {/* Founder Details & Philosophy Column */}
              <div className="about-founder-info-col">
                <span className="minimal-overline">FOUNDER &amp; LEAD CINEMATOGRAPHER</span>
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

                <div style={{ marginTop: "28px" }}>
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
            3. VISUAL GALLERY MOSAIC (IMAGE-RICH ATELIER MOMENTS)
            =================================================================== */}
        <section className="about-gallery-mosaic-section">
          <div className="about-mosaic-header">
            <span className="minimal-overline">THE ATELIER ARCHIVE</span>
            <h2 className="about-mosaic-title">GLIMPSES FROM THE FIELD</h2>
          </div>

          <div className="about-mosaic-grid">
            <div className="about-mosaic-item">
              <img
                src="https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=900&auto=format&fit=crop"
                alt="Big Sur Pacific Coastline"
                className="about-mosaic-img"
                loading="lazy"
              />
              <span className="about-mosaic-caption">Big Sur Headlands</span>
            </div>

            <div className="about-mosaic-item">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=900&auto=format&fit=crop"
                alt="Santa Fe Adobe Architecture"
                className="about-mosaic-img"
                loading="lazy"
              />
              <span className="about-mosaic-caption">High Desert Warmth</span>
            </div>

            <div className="about-mosaic-item">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=900&auto=format&fit=crop"
                alt="Sedona Red Rocks Twilight"
                className="about-mosaic-img"
                loading="lazy"
              />
              <span className="about-mosaic-caption">Sedona Twilight Vows</span>
            </div>

            <div className="about-mosaic-item">
              <img
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=900&auto=format&fit=crop"
                alt="Lowcountry Evening Gathering"
                className="about-mosaic-img"
                loading="lazy"
              />
              <span className="about-mosaic-caption">Historic Lowcountry</span>
            </div>
          </div>
        </section>

        {/* ===================================================================
            4. CLOSING CONSULTATION BANNER
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
