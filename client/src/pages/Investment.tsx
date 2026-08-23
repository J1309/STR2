import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { experienceSteps, faqItems, investmentTiers, testimonials } from "@/data/studioData";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Collections() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const filteredTiers = activeFilter === "all"
    ? investmentTiers
    : activeFilter === "featured"
    ? investmentTiers.filter((t) => t.featured)
    : investmentTiers;

  return (
    <div className="starline-page-shell">
      <Navbar variant="dark" />

      <main className="starline-page-main">
        {/* Spacious Editorial Hero */}
        <section className="collections-hero">
          <div className="collections-hero-inner">
            <div className="portfolio-header-kicker">
              <span className="dot-mark"><i /><i /><i /></span>
              <span>The Collections & Offerings</span>
            </div>
            <h1 className="collections-title">
              Crafted for presence,<br /><em>never forced.</em>
            </h1>
            <p className="collections-subtitle">
              Transparent, all-inclusive photography collections rooted in natural light, quiet intimacy, and timeless film aesthetic. Designed so you can be fully present while every subtle moment is preserved.
            </p>

            <div className="collections-quick-tags">
              <span className="tag-pill">35mm & Medium Format</span>
              <span className="tag-sep">•</span>
              <span className="tag-pill">72-Hour Sneak Peeks</span>
              <span className="tag-sep">•</span>
              <span className="tag-pill">Personal Print Rights</span>
              <span className="tag-sep">•</span>
              <span className="tag-pill">Transparent Travel</span>
            </div>
          </div>
        </section>

        {/* Airy Philosophy Row */}
        <section className="collections-philosophy-section">
          <div className="collections-philosophy-inner">
            <div className="philosophy-col">
              <span className="philosophy-index">01 / PRESENCE</span>
              <h3>Unrushed & Natural</h3>
              <p>We prioritize real presence with your people over rigid shot lists, creating breathing room for authentic emotion to unfold naturally.</p>
            </div>
            <div className="philosophy-col">
              <span className="philosophy-index">02 / CRAFT</span>
              <h3>Dual-Format Harmony</h3>
              <p>Medium format digital delivers master dynamic range; authentic 35mm analog film brings organic grain, silver depths, and rich skin tones.</p>
            </div>
            <div className="philosophy-col">
              <span className="philosophy-index">03 / EASE</span>
              <h3>Transparent Travel</h3>
              <p>No post-wedding travel invoices or confusing mileage math. Signature collections include travel logistics throughout our regular circuits.</p>
            </div>
          </div>
        </section>

        {/* Spacious Collections Grid */}
        <section className="collections-showcase-section" id="offerings">
          <div className="collections-showcase-inner">
            <div className="collections-section-header">
              <p className="sunlit-kicker">Curated Packages</p>
              <h2>The Collections</h2>
              <p className="collections-section-desc">
                Every story includes full-resolution files, private cloud gallery hosting, and lifetime personal print rights.
              </p>
            </div>

            <div className="collections-cards-grid">
              {filteredTiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`collection-card ${tier.featured ? "is-featured-collection" : ""}`}
                >
                  {tier.featured && (
                    <div className="collection-featured-ribbon">
                      <Sparkles size={12} />
                      <span>Signature Experience</span>
                    </div>
                  )}

                  <div className="collection-card-header">
                    <span className="collection-coverage-badge">{tier.coverage}</span>
                    <h3 className="collection-card-title">{tier.name}</h3>
                    <p className="collection-card-tagline">{tier.tagline}</p>
                    
                    <div className="collection-price-box">
                      <span className="collection-price-number">{tier.price}</span>
                      <span className="collection-price-sub">All-inclusive taxes & base travel</span>
                    </div>
                  </div>

                  <div className="collection-inclusions-wrap">
                    <span className="inclusions-label">Key Deliverables & Highlights:</span>
                    <ul className="collection-inclusions-list">
                      {tier.inclusions.map((inc, i) => (
                        <li key={i}>
                          <Check size={14} className="collection-check" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="collection-ideal-box">
                    <span className="ideal-label">Best Suited For:</span>
                    <p>{tier.recommendedFor}</p>
                  </div>

                  <div className="collection-action-wrap">
                    <Link
                      href={`/contact?package=${tier.id}`}
                      className={`collection-inquire-btn ${tier.featured ? "btn-featured-collection" : ""}`}
                    >
                      <span>Inquire for {tier.name}</span>
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Travel Note */}
            <div className="collections-bespoke-banner">
              <div className="bespoke-content">
                <h4>Planning a multi-day celebration or international voyage?</h4>
                <p>We create bespoke multi-destination proposals for ceremonies in Europe, Asia, and remote wilderness venues.</p>
              </div>
              <Link href="/contact" className="bespoke-cta-btn">
                <span>Request Custom Quote</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* The 4-Step Client Journey */}
        <section className="collections-journey-section">
          <div className="journey-inner">
            <div className="journey-header">
              <p className="sunlit-kicker">The Experience</p>
              <h2>How We Work Together</h2>
              <p>A seamless, thoughtful process from your initial inquiry to holding the finished print archive.</p>
            </div>

            <div className="journey-timeline-grid">
              {experienceSteps.map((step) => (
                <div key={step.step} className="journey-step-item">
                  <div className="step-num-circle">{step.step}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Words / Testimonials */}
        <section className="collections-reviews-section">
          <div className="reviews-inner">
            <div className="reviews-header">
              <p className="sunlit-kicker">Client Stories</p>
              <h2>Quiet Words of Gratitude</h2>
            </div>

            <div className="reviews-spacious-grid">
              {testimonials.map((t) => (
                <div key={t.id} className="review-quote-card">
                  <div className="quote-mark-symbol">“</div>
                  <p className="quote-body">{t.quote}</p>
                  <div className="quote-author-row">
                    <img src={t.image} alt={t.client} className="quote-avatar" />
                    <div>
                      <b className="quote-author-name">{t.client}</b>
                      <span className="quote-author-meta">{t.celebration} • {t.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spacious FAQs */}
        <section className="collections-faq-section">
          <div className="faq-spacious-inner">
            <div className="faq-header">
              <p className="sunlit-kicker">Common Inquiries</p>
              <h2>Frequently Asked Questions</h2>
              <p>Everything you need to know about booking, analog film, travel, and delivery timelines.</p>
            </div>

            <div className="faq-accordion-container">
              {faqItems.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`faq-spacious-item ${isOpen ? "is-active-faq" : ""}`}
                  >
                    <button
                      className="faq-question-trigger"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        size={18}
                        className={`faq-chevron ${isOpen ? "is-rotated" : ""}`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          className="faq-answer-container"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                        >
                          <div className="faq-answer-text">
                            <p>{item.answer}</p>
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

