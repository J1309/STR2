import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { faqItems, investmentTiers } from "@/data/studioData";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="starline-page-shell">
      <Navbar variant="light" />

      <main className="starline-page-main">
        {/* Spacious Editorial Hero */}
        <section className="portfolio-hero">
          <span className="gione-kicker">Pricing & Investment</span>
          <h1 className="portfolio-title">
            Transparent Pricing,<br />
            Built Around Presence
          </h1>
          <p className="portfolio-subtitle">
            All-inclusive wedding videography & photography packages rooted in natural light, cinema elegance, and authentic analog grain. Designed so you can be fully present while every subtle moment is preserved.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
            <span className="gione-feature-tag">35mm & Medium Format</span>
            <span className="gione-feature-tag">72-Hour Sneak Peeks</span>
            <span className="gione-feature-tag">Personal Print Rights</span>
            <span className="gione-feature-tag">Transparent Travel</span>
          </div>
        </section>

        {/* 3-Column Philosophy Strip */}
        <section className="gione-manifesto-section" style={{ padding: "60px clamp(24px, 6vw, 96px) 90px", backgroundColor: "var(--bg-secondary)" }}>
          <div className="gione-manifesto-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
            <div className="about-value-card">
              <span className="value-index">01 / PRESENCE</span>
              <h3>Unrushed & Natural</h3>
              <p>We prioritize authentic presence over rigid shot lists, creating space for emotion, laughter, and spontaneous moments to unfold naturally.</p>
            </div>
            <div className="about-value-card">
              <span className="value-index">02 / CRAFT</span>
              <h3>Dual-Format Harmony</h3>
              <p>Medium format digital delivers master color range, while real 35mm analog film brings timeless silver depths, tactile grain, and rich skin tones.</p>
            </div>
            <div className="about-value-card">
              <span className="value-index">03 / EASE</span>
              <h3>Transparent Travel</h3>
              <p>No post-event travel surprises or hidden fees. Signature collections include travel logistics throughout our regular worldwide circuits.</p>
            </div>
          </div>
        </section>

        {/* Spacious Packages Grid */}
        <section className="gione-pricing-section" style={{ backgroundColor: "var(--bg-primary)" }}>
          <div className="gione-pricing-inner">
            <div className="gione-section-head" style={{ textAlign: "center", margin: "0 auto 50px" }}>
              <span className="gione-kicker">Curated Collections</span>
              <h2>Pricing & Packages</h2>
              <p style={{ margin: "0 auto" }}>
                Every commission includes high-resolution print files, 4K master cinema film files, online private cloud gallery hosting, and unrestricted personal rights.
              </p>
            </div>

            <div className="gione-pricing-grid">
              {investmentTiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`gione-package-card ${tier.featured ? "is-featured-package" : ""}`}
                >
                  {tier.featured && (
                    <div className="gione-package-ribbon">
                      <Sparkles size={12} />
                      <span>Signature Experience</span>
                    </div>
                  )}

                  <div>
                    <div className="gione-package-header">
                      <span className="gione-package-coverage">{tier.coverage}</span>
                      <h3 className="gione-package-title">{tier.name}</h3>
                      <p className="gione-package-tagline">{tier.tagline}</p>
                    </div>

                    <div className="gione-package-price-box">
                      <span className="gione-package-price">{tier.price}</span>
                      <span className="gione-package-price-sub">All-inclusive taxes & base travel</span>
                    </div>

                    <ul className="gione-inclusions-list">
                      {tier.inclusions.map((inc, i) => (
                        <li key={i}>
                          <Check size={14} className="gione-inclusion-check" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/contact?package=${tier.id}`}
                    className="gione-package-btn"
                  >
                    <span>Inquire for {tier.name}</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              ))}
            </div>

            {/* Custom Travel Note */}
            <div className="gione-bespoke-strip" style={{ marginTop: "60px" }}>
              <div className="gione-bespoke-content">
                <h4>Planning a multi-day celebration or international voyage?</h4>
                <p>We create bespoke multi-destination proposals for ceremonies across Europe, Africa, Asia, and remote wilderness venues.</p>
              </div>
              <Link href="/contact" className="gione-btn-primary">
                <span>Request Custom Quote</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Spacious FAQs Accordion */}
        <section className="gione-manifesto-section" style={{ backgroundColor: "var(--bg-secondary)", padding: "100px clamp(24px, 6vw, 96px)" }}>
          <div style={{ maxWidth: "880px", margin: "0 auto" }}>
            <div className="gione-section-head" style={{ textAlign: "center", margin: "0 auto 48px" }}>
              <span className="gione-kicker">Common Questions</span>
              <h2>Frequently Asked Questions</h2>
              <p style={{ margin: "0 auto" }}>
                Everything you need to know regarding retainers, analog film handling, destination travel, and delivery schedules.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {faqItems.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    style={{
                      background: "#ffffff",
                      border: "1px solid var(--border-card)",
                      borderRadius: "16px",
                      overflow: "hidden",
                      boxShadow: "var(--shadow-sm)"
                    }}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      style={{
                        width: "100%",
                        padding: "22px 28px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "18px",
                        background: "transparent",
                        border: 0,
                        color: "var(--ink-primary)",
                        fontFamily: "var(--font-sans)",
                        fontSize: "15px",
                        fontWeight: 600,
                        textAlign: "left",
                        cursor: "pointer"
                      }}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        size={18}
                        style={{
                          color: "var(--cobalt-bright)",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.25s ease"
                        }}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div style={{ padding: "0 28px 24px", color: "var(--ink-muted)", fontSize: "14px", lineHeight: "1.75" }}>
                            <p style={{ margin: 0 }}>{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
