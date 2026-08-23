import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { experienceSteps, faqItems, investmentTiers, testimonials, type InvestmentTier } from "@/data/studioData";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, ChevronDown, ChevronRight, Clock, Heart, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Investment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="starline-page-shell">
      <Navbar variant="dark" />

      <main className="starline-page-main">
        {/* Page Hero */}
        <section className="investment-hero">
          <div className="investment-hero-inner">
            <div className="portfolio-header-kicker">
              <span className="dot-mark"><i /><i /><i /></span>
              <span>The Experience & Investment</span>
            </div>
            <h1 className="investment-title">
              Made slowly,<br /><em>built to outlast.</em>
            </h1>
            <p className="investment-subtitle">
              Transparent collections designed around closeness, presence, and organic film aesthetic. No hidden travel fees, no rush, and no artificial poses.
            </p>
          </div>
        </section>

        {/* Value Philosophy Banner */}
        <section className="investment-philosophy-section">
          <div className="investment-philosophy-grid">
            <div className="philosophy-card">
              <span className="philosophy-num">01</span>
              <h3>No Obligatory Posing</h3>
              <p>We direct with an artful eye when the light calls for it, and step back when the emotion breathes on its own.</p>
            </div>
            <div className="philosophy-card">
              <span className="philosophy-num">02</span>
              <h3>Analog & Medium Format</h3>
              <p>Analog 35mm film rolls capture real silver grain and skin tones; medium format digital delivers master dynamic range.</p>
            </div>
            <div className="philosophy-card">
              <span className="philosophy-num">03</span>
              <h3>All-Inclusive Travel</h3>
              <p>Signature packages include all travel logistics within California, Utah, and Nevada—so you never worry about mileage or hotels.</p>
            </div>
          </div>
        </section>

        {/* Collection Tiers */}
        <section className="investment-tiers-section" id="packages">
          <div className="investment-tiers-header">
            <p className="sunlit-kicker">Curated Collections</p>
            <h2>Choose the scope<br /><em>that fits your story.</em></h2>
            <p className="tiers-intro">
              Every package includes high-resolution print-ready files, private online gallery delivery, and personal printing rights.
            </p>
          </div>

          <div className="investment-tiers-grid">
            {investmentTiers.map((tier) => (
              <div
                key={tier.id}
                className={`investment-tier-card ${tier.featured ? "is-featured" : ""}`}
              >
                {tier.featured && (
                  <div className="tier-featured-badge">
                    <Sparkles size={13} />
                    <span>Most Popular Experience</span>
                  </div>
                )}

                <div className="tier-card-head">
                  <span className="tier-card-coverage">{tier.coverage}</span>
                  <h3 className="tier-card-name">{tier.name}</h3>
                  <p className="tier-card-tagline">{tier.tagline}</p>
                  <div className="tier-card-price">
                    <span className="price-val">{tier.price}</span>
                    <span className="price-note">All taxes & base travel included</span>
                  </div>
                </div>

                <div className="tier-card-body">
                  <p className="inclusions-title">What is Included:</p>
                  <ul className="tier-inclusions-list">
                    {tier.inclusions.map((inc, i) => (
                      <li key={i}>
                        <Check size={15} className="check-icon" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="tier-recommended-box">
                    <b>Ideal For:</b>
                    <p>{tier.recommendedFor}</p>
                  </div>
                </div>

                <div className="tier-card-foot">
                  <Link
                    href={`/contact?package=${tier.id}`}
                    className={`tier-select-btn ${tier.featured ? "btn-featured" : ""}`}
                  >
                    <span>Reserve {tier.name}</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The 4-Step Experience Roadmap */}
        <section className="investment-process-section">
          <div className="process-inner">
            <div className="process-header">
              <p className="sunlit-kicker">The Journey</p>
              <h2>What it feels like<br /><em>to work together.</em></h2>
            </div>

            <div className="process-timeline-grid">
              {experienceSteps.map((step) => (
                <div key={step.step} className="process-step-card">
                  <span className="step-badge">{step.step}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Reviews Section */}
        <section className="investment-reviews-section">
          <div className="reviews-inner">
            <p className="sunlit-kicker">Kind Words</p>
            <h2>In their own<br /><em>quiet words.</em></h2>

            <div className="reviews-grid">
              {testimonials.map((t) => (
                <div key={t.id} className="review-card">
                  <div className="review-quote-mark">“</div>
                  <p className="review-text">{t.quote}</p>
                  <div className="review-author">
                    <img src={t.image} alt={t.client} className="review-author-thumb" />
                    <div>
                      <b>{t.client}</b>
                      <span>{t.celebration} — {t.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive FAQs Accordion */}
        <section className="investment-faq-section">
          <div className="faq-inner">
            <div className="faq-header">
              <p className="sunlit-kicker">Frequently Asked</p>
              <h2>Questions &<br /><em>practical answers.</em></h2>
              <p>Everything you need to know about reserving your date, receiving your memories, and planning with ease.</p>
            </div>

            <div className="faq-accordion-list">
              {faqItems.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`faq-item ${isOpen ? "is-open" : ""}`}
                  >
                    <button
                      className="faq-question-btn"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        size={18}
                        className={`faq-arrow ${isOpen ? "is-rotated" : ""}`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          className="faq-answer-wrap"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                        >
                          <div className="faq-answer-inner">
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
