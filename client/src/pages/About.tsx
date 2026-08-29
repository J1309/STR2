import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "wouter";

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const quoteRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: quoteScroll } = useScroll({
    target: quoteRef,
    offset: ["start end", "end start"]
  });

  // Smooth scroll animations
  const heroBgY = useTransform(heroScroll, [0, 1], ["0%", "20%"]);
  const quoteBgY = useTransform(quoteScroll, [0, 1], ["-12%", "12%"]);

  const publications = [
    { name: "HARPER'S BAZAAR", label: "BAZAAR" },
    { name: "RANGEFINDER", label: "Rf" },
    { name: "STYLE ME PRETTY", label: "Style Me Pretty" },
    { name: "HELLO!", label: "HELLO!" },
    { name: "JUNEBUG WEDDINGS", label: "junebug" },
    { name: "LUXURY LIFESTYLE", label: "LLM" },
    { name: "SLR LOUNGE", label: "SLR Lounge" },
    { name: "SMASHING THE GLASS", label: "SMASHING THE GLASS" },
    { name: "BRIDES", label: "BRIDES" },
    { name: "THE LANE", label: "THE LANE" },
    { name: "WEDDING CHICKS", label: "wed" },
    { name: "WEDDING SPARROW", label: "Wedding Sparrow" }
  ];

  return (
    <div className="starline-page-shell">
      {/* Transparent Navbar over hero */}
      <Navbar variant="transparent" />

      <main className="starline-page-main">
        {/* ===================================================================
            1. EXACT GIONE DA SILVA HERO: FULL-WIDTH BACKGROUND & SPLIT OVERLAY
            =================================================================== */}
        <section className="gds-hero-section" ref={heroRef}>
          {/* Parallax Background Image */}
          <div className="gds-hero-bg-container">
            <motion.div
              className="gds-hero-bg-img"
              style={{
                y: heroBgY,
                backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2400&auto=format&fit=crop')`
              }}
            />
            <div className="gds-hero-gradient-overlay" />
          </div>

          {/* Hero Content Grid: Centered Main Heading + Right Sidebar Text */}
          <div className="gds-hero-content-container">
            {/* Centered Main Title (Exact Gione da Silva Headline) */}
            <div className="gds-hero-center-box">
              <span className="gds-hero-italic-kicker">inspired by people and love...</span>
              <h1 className="gds-hero-main-title">
                creative wedding videography and<br />
                photography led by engaging<br />
                storytelling
              </h1>
            </div>

            {/* Right Side Editorial Narrative */}
            <div className="gds-hero-right-box">
              <p className="gds-hero-right-desc">
                With a passion for storytelling and a love for bold, iconic visuals, we cater to couples who are drawn to the extraordinary. Whether your wedding takes place on an oceanfront private estate or an exclusive desert getaway, we craft films and photos as polished and captivating as the lives you lead.
              </p>
              <Link href="/portfolio" className="gds-hero-right-link">
                <span>visit portfolio</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ===================================================================
            2. MEET SAJAN (SOLE FOUNDER & PRINCIPAL CINEMATOGRAPHER)
            =================================================================== */}
        <section className="gds-owner-section">
          <div className="gds-owner-container">
            {/* Left Sidebar Tag */}
            <div className="gds-owner-sidebar-tag">
              <span>MEET SAJAN</span>
            </div>

            {/* Main Single-Owner 2-Column Split */}
            <div className="gds-owner-grid">
              {/* Left: Sajan Portrait */}
              <div className="gds-owner-photo-col">
                <div className="gds-owner-photo-box">
                  <img
                    src="/wd1.jpg"
                    alt="Sajan - Founder & Lead Cinematographer"
                    className="gds-owner-photo"
                  />
                  <span className="gds-owner-caption">
                    SAJAN // FOUNDER &amp; LEAD DIRECTOR
                  </span>
                </div>
              </div>

              {/* Right: Sajan Story, Philosophy & Badges */}
              <div className="gds-owner-info-col">
                <div className="gds-owner-header">
                  <h2 className="gds-owner-name">SAJAN</h2>
                  <p className="gds-owner-subtags">
                    ADVENTURE, CONNECTION, ART, PEOPLE, EXPERIENCES
                  </p>
                </div>

                <div className="gds-owner-bio">
                  <p>
                    I love getting to know new people. This comes from the knowledge that we all have a different journey in life and there is something exciting and deeply inspiring about that.
                  </p>
                  <p>
                    Operating out of Dallas, Texas since 2023, I travel wherever an extraordinary celebration unfolds—from Dallas private estates and Newport oceanfront mansions to Napa Valley vineyards and Big Sur coastal cliffs.
                  </p>
                  <p>
                    I love weddings because they serve as a timeless reminder of the very best about humanity—embodying love, joy, beauty, and quiet companionship. My approach is built entirely on creating a calm, effortless atmosphere rather than commanding rigid poses.
                  </p>
                  <p>
                    Specializing in 35mm analog film and 4K cinema, I allow your celebration to breathe naturally, capturing the quiet glances, gentle touch, and spontaneous laughter that give your memories permanent emotional gravity.
                  </p>
                </div>

                {/* Studio Badges */}
                <div className="gds-owner-badges">
                  <div className="gds-owner-badge-item">
                    <strong>Dallas, Texas</strong>
                    <span>Operating Since 2023</span>
                  </div>
                  <div className="gds-owner-badge-item">
                    <strong>Mediums</strong>
                    <span>35mm Film + 4K Cinema</span>
                  </div>
                  <div className="gds-owner-badge-item">
                    <strong>Commissions</strong>
                    <span>18 Celebrations / Year</span>
                  </div>
                </div>

                {/* Contact Us Button */}
                <div className="gds-owner-btn-wrap">
                  <Link href="/contact" className="gds-contact-btn">
                    <span>CONTACT US</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            3. FEATURED ON PUBLICATION LOGOS (EXACT 2-ROW EDITORIAL GRID)
            =================================================================== */}
        <section className="gds-featured-on-section">
          <div className="gds-featured-on-inner">
            <h3 className="gds-featured-on-title">featured on</h3>

            <div className="gds-logos-grid">
              {publications.map((pub, idx) => (
                <div key={idx} className="gds-logo-item">
                  <span className="gds-logo-text">{pub.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            4. FULL-WIDTH TEXTURED ARCHITECTURAL BANNER WITH TESTIMONIAL & TITLE
            =================================================================== */}
        <section className="gds-quote-parallax-section" ref={quoteRef}>
          <div className="gds-quote-bg-container">
            <motion.div
              className="gds-quote-bg-img"
              style={{
                y: quoteBgY,
                backgroundImage: `url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2400&auto=format&fit=crop')`
              }}
            />
            <div className="gds-quote-dark-overlay" />
          </div>

          <div className="gds-quote-content-container">
            {/* Top Right Testimonial Quote Box */}
            <div className="gds-testimonial-box">
              <blockquote className="gds-testimonial-text">
                “We were lucky enough to have Sajan and the Starline team capture our wedding... the film is a masterclass in honest emotion and breathtaking cinematic beauty. Everything was seamless, calm, and discreet. Watching our film brings tears of joy every single time.”
              </blockquote>
              <cite className="gds-testimonial-author">
                — Victoria &amp; Harrison
              </cite>
            </div>

            {/* Bottom Left Bold Statement (Exact Gione da Silva condensed title) */}
            <div className="gds-quote-bottom-title-wrap">
              <h2 className="gds-quote-bottom-title">
                ETERNALISING REAL LOVING MEMORIES<br />
                OF THAT UNIQUE DAY IN YOUR LIFE...
              </h2>
            </div>
          </div>
        </section>

        {/* ===================================================================
            5. VISIT OUR PORTFOLIO (3-COLUMN LUXURY CARDS)
            =================================================================== */}
        <section className="gds-portfolio-links-section">
          <div className="gds-portfolio-links-container">
            <h2 className="gds-portfolio-section-title">VISIT OUR PORTFOLIO</h2>

            <div className="gds-portfolio-3col-grid">
              {/* Card 1: Wedding Photography */}
              <Link href="/portfolio/photography" className="gds-portfolio-card">
                <div className="gds-portfolio-card-frame">
                  <img
                    src="https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop"
                    alt="Starline Wedding Photography"
                    className="gds-portfolio-card-img"
                  />
                </div>
                <h3 className="gds-portfolio-card-title">WEDDING PHOTOGRAPHY</h3>
              </Link>

              {/* Card 2: Wedding Cinematography */}
              <Link href="/portfolio/videography" className="gds-portfolio-card">
                <div className="gds-portfolio-card-frame">
                  <img
                    src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop"
                    alt="Starline Wedding Cinematography"
                    className="gds-portfolio-card-img"
                  />
                </div>
                <h3 className="gds-portfolio-card-title">WEDDING CINEMATOGRAPHY</h3>
              </Link>

              {/* Card 3: Destination & Lifestyle */}
              <Link href="/portfolio" className="gds-portfolio-card">
                <div className="gds-portfolio-card-frame">
                  <img
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop"
                    alt="Starline Travel & Lifestyle"
                    className="gds-portfolio-card-img"
                  />
                </div>
                <h3 className="gds-portfolio-card-title">TRAVEL &amp; LIFESTYLE</h3>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer showClosingCta={false} />
    </div>
  );
}
