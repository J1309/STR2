import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Film, Heart, MapPin, Sparkles } from "lucide-react";
import { useRef } from "react";
import { Link } from "wouter";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smooth scroll animations for hero
  const heroImageScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.07]);
  const heroImageY = useTransform(scrollYProgress, [0, 0.4], [0, 30]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.85]);

  return (
    <div className="starline-page-shell" ref={containerRef}>
      <Navbar variant="light" />

      <main className="starline-page-main" style={{ paddingTop: "100px" }}>
        {/* ===================================================================
            1. GIONE DA SILVA INSPIRED EDITORIAL HERO WITH PARALLAX MOTION
            =================================================================== */}
        <section className="gione-about-hero-section">
          <div className="gione-about-hero-inner">
            {/* Editorial Lead Statement (Styled exactly like Gione da Silva) */}
            <motion.div
              className="gione-about-lead-box"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <span className="minimal-overline">STARLINE ATELIER // DALLAS, TEXAS</span>
              <h1 className="gione-about-editorial-headline">
                With a passion for storytelling and a love for bold, iconic visuals, we cater to couples who are drawn to the extraordinary. Whether your celebration takes place on an oceanfront private estate or an intimate desert gathering, we craft films and 35mm photographs as polished, enduring, and captivating as the lives you lead.
              </h1>
              <span className="gione-about-italic-kicker">
                inspired by people, atmosphere, and honest love...
              </span>
            </motion.div>

            {/* Parallax Hero Image Frame with Scroll Motion */}
            <motion.div
              className="gione-about-hero-image-wrap"
              style={{ opacity: heroOpacity }}
            >
              <div className="gione-about-hero-frame">
                <motion.img
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2000&auto=format&fit=crop"
                  alt="Starline Atelier Luxury Destination Wedding Cinema"
                  className="gione-about-hero-img"
                  style={{ scale: heroImageScale, y: heroImageY }}
                />
                <div className="gione-about-hero-badge">
                  <Sparkles size={13} />
                  <span>STARLINE ATELIER // EST. 2023 DALLAS</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===================================================================
            2. WHO WE ARE & FOUNDER SPOTLIGHT: SAJAN
            =================================================================== */}
        <section className="gione-who-we-are-section">
          <div className="gione-who-we-are-container">
            {/* Header */}
            <div className="gione-who-header">
              <span className="minimal-overline">WHO WE ARE</span>
              <h2 className="gione-who-title">SAJAN</h2>
              <p className="gione-who-pillars">
                ADVENTURE // CONNECTION // 35MM ANALOG // CINEMA // EXPERIENCES
              </p>
            </div>

            {/* 2-Column Founder Grid with Scroll Motion */}
            <div className="gione-who-grid">
              {/* Left Column: Sajan's Framed Portrait */}
              <motion.div
                className="gione-who-photo-col"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="gione-who-photo-frame">
                  <img
                    src="/wd1.jpg"
                    alt="Sajan - Founder & Lead Cinematographer"
                    className="gione-who-photo-img"
                  />
                  <span className="gione-who-photo-caption">
                    SAJAN // FOUNDER &amp; PRINCIPAL CINEMATOGRAPHER
                  </span>
                </div>
              </motion.div>

              {/* Right Column: Founder Narrative & Company Details */}
              <motion.div
                className="gione-who-text-col"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
              >
                <h3 className="gione-who-heading">
                  Dedicated to preserving the honest human connection behind every celebration
                </h3>

                <p className="gione-who-paragraph">
                  Operating out of Dallas, Texas since 2023, we travel wherever an extraordinary celebration unfolds—from Dallas private estates and Newport oceanfront cliffs to Napa Valley vineyards and Big Sur headlands.
                </p>

                <p className="gione-who-paragraph">
                  We love weddings because we believe there is something particularly profound about them: they serve as a timeless reminder of the very best in humanity—embodying love, joy, beauty, and quiet companionship.
                </p>

                <p className="gione-who-paragraph">
                  With a deep reverence for physical permanence, we film using medium format cinema lenses, vintage anamorphic glass, and 35mm analog emulsion. We value unhurried elegance over rigid staging, capturing the real laughter, tender glances, and spontaneous joy that give your memories permanent emotional gravity.
                </p>

                {/* Capability Badges */}
                <div className="gione-badges-row">
                  <div className="gione-badge-card">
                    <MapPin size={16} />
                    <div>
                      <strong>Dallas, Texas</strong>
                      <span>Operating Since 2023</span>
                    </div>
                  </div>

                  <div className="gione-badge-card">
                    <Film size={16} />
                    <div>
                      <strong>Mediums</strong>
                      <span>35mm Film + 4K Cinema</span>
                    </div>
                  </div>

                  <div className="gione-badge-card">
                    <Heart size={16} />
                    <div>
                      <strong>Commissions</strong>
                      <span>18 Celebrations / Year</span>
                    </div>
                  </div>
                </div>

                {/* Contact CTA */}
                <div style={{ marginTop: "32px" }}>
                  <Link href="/contact" className="minimal-btn-solid">
                    <span>GET IN TOUCH WITH SAJAN</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            3. CLOSING CONSULTATION CALLOUT
            =================================================================== */}
        <section className="gione-about-closing-cta">
          <div className="gione-about-closing-inner">
            <span className="minimal-overline">BESPOKE COMMISSIONS</span>
            <h2 className="gione-closing-heading">
              Ready to Document Your Wedding With Timeless Cinema?
            </h2>
            <p className="gione-closing-desc">
              Schedule an unhurried consultation to discuss your celebration itinerary and bespoke proposal.
            </p>
            <div style={{ marginTop: "24px" }}>
              <Link href="/contact" className="minimal-btn-solid">
                <span>INQUIRE WITH STUDIO</span>
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
