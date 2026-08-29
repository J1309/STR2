import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Sparkles
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "wouter";

export default function Contact() {
  const [formData, setFormData] = useState({
    names: "",
    email: "",
    phone: "",
    eventDate: "",
    location: "",
    service: "Dual Atelier (4K Cinema + 35mm Photo)",
    budgetRange: "$18,000 – $26,000",
    eventDetails: "",
    plannerInfo: "",
    referralSource: "Vogue / Editorial Feature"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How far in advance should we reserve our celebration date?",
      a: "Because we limit our calendar to a strictly curated number of commissions each season, peak dates typically reserve 9 to 18 months in advance. We recommend reaching out as soon as your venue or celebration date is confirmed."
    },
    {
      q: "Do you travel across the United States and internationally?",
      a: "Yes. Most of our work takes place across destination corridors worldwide—from Newport oceanfront estates and Napa Valley vineyards to Lake Como, the Amalfi Coast, and the French Riviera. Travel provisions are handled seamlessly with flat-rate quotes."
    },
    {
      q: "How do your cinema and photography teams work together on the day?",
      a: "We work in complete artistic synchronization. We share lighting, angles, and natural pacing so your day feels unhurried, organic, and beautifully effortless rather than crowded by multiple disparate crews."
    },
    {
      q: "What is the typical delivery timeframe for films and photographs?",
      a: "You will receive an editorial preview suite within 5–7 days of your wedding. Complete feature films, Super 8mm analog reels, and full master gallery archives are delivered within 8 to 12 weeks."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 600);
  };

  return (
    <div className="starline-page-shell" style={{ backgroundColor: "#faf8f5" }}>
      <Navbar variant="light" />

      <main className="starline-page-main" style={{ padding: 0 }}>
        {/* ===================================================================
            1. FULL-SIZE EDITORIAL SPLIT SECTION (GIONE DA SILVA ARCHITECTURE)
            =================================================================== */}
        <section className="gione-contact-full-wrapper">
          {/* Left Side: Full-Height Editorial Mood Image Plate */}
          <div className="gione-contact-full-image-col">
            <img
              src="/contact_editorial.png"
              alt="Destination Wedding Editorial — Starline Studio"
              className="gione-contact-full-image"
            />
            <div className="gione-contact-image-badge">
              <Sparkles size={12} />
              <span>COMMISSIONS WORLDWIDE // 2026—2027</span>
            </div>
          </div>

          {/* Right Side: Minimalist Underline Inquiries Form */}
          <div className="gione-contact-form-area">
            <div className="gione-contact-header-block">
              <span className="gione-contact-overline">LET&apos;S CONNECT</span>
              <h1 className="gione-info-title">GET IN TOUCH</h1>

              <p className="gione-info-subtitle">
                We accept a strictly limited number of commissions each season to ensure uncompromising artistry. Share the details of your celebration below.
              </p>

              {/* Direct Quick Contact Row */}
              <div className="gione-direct-row">
                <a href="tel:+12148104492" className="gione-direct-link">
                  <Phone size={13} />
                  <span>+1 (214) 810-4492</span>
                </a>
                <span className="gione-direct-divider">/</span>
                <a href="mailto:hello@starline.studio" className="gione-direct-link">
                  <Mail size={13} />
                  <span>HELLO@STARLINE.STUDIO</span>
                </a>
                <span className="gione-direct-divider">/</span>
                <span className="gione-direct-link">
                  <MapPin size={13} />
                  <span>DALLAS &amp; DESTINATIONS</span>
                </span>
              </div>
            </div>

            {/* Submitted Confirmation State */}
            {submitted ? (
              <motion.div
                className="gione-success-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="gione-success-icon-wrap">
                  <CheckCircle2 size={32} color="var(--cobalt-accent)" />
                </div>

                <h2 className="gione-success-title">
                  Inquiry Received, {formData.names || "Friend"}
                </h2>

                <p className="gione-success-desc">
                  Thank you for reaching out. We have received your celebration details for <b>{formData.location || "your destination"}</b> and will respond to <b>{formData.email}</b> within 24–48 hours with our availability and tailored commission guide.
                </p>

                <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "24px" }}>
                  <Link href="/portfolio" className="minimal-underline-btn is-active">
                    <span>Explore Portfolio →</span>
                  </Link>
                  <button
                    type="button"
                    className="minimal-underline-btn"
                    onClick={() => setSubmitted(false)}
                  >
                    <span>Send Another Note</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Minimalist Underline Form */
              <form onSubmit={handleSubmit} className="minimal-line-form">
                {/* Row 1: Names & Email */}
                <div className="minimal-form-grid-2">
                  <div className="minimal-line-group">
                    <label className="minimal-line-label">
                      YOUR NAMES <span className="req-star">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Rios & Julian Scott"
                      value={formData.names}
                      onChange={(e) => setFormData({ ...formData, names: e.target.value })}
                      className="minimal-line-input"
                    />
                  </div>

                  <div className="minimal-line-group">
                    <label className="minimal-line-label">
                      EMAIL ADDRESS <span className="req-star">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. maya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="minimal-line-input"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Celebration Date */}
                <div className="minimal-form-grid-2">
                  <div className="minimal-line-group">
                    <label className="minimal-line-label">
                      PHONE / WHATSAPP <span className="req-star">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000 / +44..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="minimal-line-input"
                    />
                  </div>

                  <div className="minimal-line-group">
                    <label className="minimal-line-label">
                      CELEBRATION DATE OR SEASON <span className="req-star">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 18 September 2026 / Autumn 2026"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="minimal-line-input"
                    />
                  </div>
                </div>

                {/* Row 3: Destination Location */}
                <div className="minimal-line-group">
                  <label className="minimal-line-label">
                    DESTINATION, CITY OR VENUE <span className="req-star">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Villa Balbiano, Lake Como / The Breakers, Newport / Dallas Estate"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="minimal-line-input"
                  />
                </div>

                {/* Row 4: Dropdowns for Service Requested & Budget Range */}
                <div className="minimal-form-grid-2">
                  <div className="minimal-line-group select-wrapper">
                    <label className="minimal-line-label">
                      SERVICE REQUESTED <span className="req-star">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="minimal-line-select"
                      required
                    >
                      <option value="Dual Atelier (4K Cinema + 35mm Photo)">
                        Dual Atelier (4K Cinema + 35mm Photo)
                      </option>
                      <option value="Living Wedding Cinema (4K + Super 8mm)">
                        Living Wedding Cinema (4K + Super 8mm)
                      </option>
                      <option value="Fine-Art Photography (35mm + Digital)">
                        Fine-Art Photography (35mm + Digital)
                      </option>
                      <option value="Bespoke Multi-Day Monograph">
                        Bespoke Multi-Day Monograph Archive
                      </option>
                    </select>
                    <ChevronDown size={14} className="minimal-select-chevron" />
                  </div>

                  <div className="minimal-line-group select-wrapper">
                    <label className="minimal-line-label">
                      ESTIMATED BUDGET RANGE
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="minimal-line-select"
                    >
                      <option value="$12,000 – $18,000">$12,000 – $18,000 (Intimate / Single-Day)</option>
                      <option value="$18,000 – $26,000">$18,000 – $26,000 (Dual Atelier Signature)</option>
                      <option value="$26,000 – $38,000">$26,000 – $38,000 (Multi-Day Destination)</option>
                      <option value="$38,000+">$38,000+ (Full Bespoke Archive)</option>
                    </select>
                    <ChevronDown size={14} className="minimal-select-chevron" />
                  </div>
                </div>

                {/* Row 5: Celebration Vision (Textarea) */}
                <div className="minimal-line-group">
                  <label className="minimal-line-label">
                    TELL US ABOUT YOUR PLANS &amp; VISION <span className="req-star">*</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Share a few words about your celebration atmosphere, setting, aesthetic priorities, or what matters most to you..."
                    value={formData.eventDetails}
                    onChange={(e) => setFormData({ ...formData, eventDetails: e.target.value })}
                    className="minimal-line-textarea"
                  />
                </div>

                {/* Row 6: Planner & Referral Source */}
                <div className="minimal-form-grid-2">
                  <div className="minimal-line-group">
                    <label className="minimal-line-label">
                      WEDDING PLANNER / DESIGNER
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alison Events / Lake Como Weddings (if known)"
                      value={formData.plannerInfo}
                      onChange={(e) => setFormData({ ...formData, plannerInfo: e.target.value })}
                      className="minimal-line-input"
                    />
                  </div>

                  <div className="minimal-line-group select-wrapper">
                    <label className="minimal-line-label">
                      HOW DID YOU HEAR ABOUT US?
                    </label>
                    <select
                      value={formData.referralSource}
                      onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                      className="minimal-line-select"
                    >
                      <option value="Vogue / Editorial Feature">Vogue / Editorial Feature</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Wedding Planner Recommendation">Wedding Planner Recommendation</option>
                      <option value="Personal Recommendation">Personal Recommendation</option>
                      <option value="Search / Google">Search / Google</option>
                    </select>
                    <ChevronDown size={14} className="minimal-select-chevron" />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="minimal-form-submit-row">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="minimal-line-submit-button"
                  >
                    <span>{isSubmitting ? "TRANSMITTING..." : "SEND INQUIRY"}</span>
                    <ArrowRight size={15} />
                  </button>
                  <span className="minimal-submit-note">
                    Strictly confidential. We personally reply within 24–48 hours.
                  </span>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* ===================================================================
            2. FEATURED ON PUBLICATION LOGOS (MATCHING ABOUT PAGE)
            =================================================================== */}
        <section className="gds-featured-on-section" style={{ background: "#ffffff" }}>
          <div className="gds-featured-on-inner">
            <h3 className="gds-featured-on-title">featured on</h3>

            <div className="gds-logos-grid">
              <div className="gds-logo-item" title="Vogue Weddings">
                <div className="gds-svg-logo vogue-logo">
                  <span className="gds-logo-didone">VOGUE</span>
                  <span className="gds-logo-sub">WEDDINGS</span>
                </div>
              </div>

              <div className="gds-logo-item" title="Harper's Bazaar">
                <div className="gds-svg-logo bazaar-logo">
                  <span className="gds-logo-tiny">HARPER'S</span>
                  <span className="gds-logo-didone-bold">BAZAAR</span>
                </div>
              </div>

              <div className="gds-logo-item" title="Brides Magazine">
                <div className="gds-svg-logo brides-logo">
                  <span className="gds-logo-modern-serif">BRIDES</span>
                </div>
              </div>

              <div className="gds-logo-item" title="The Lane">
                <div className="gds-svg-logo thelane-logo">
                  <span className="gds-logo-wide-sans">THE LANE</span>
                </div>
              </div>

              <div className="gds-logo-item" title="Style Me Pretty">
                <div className="gds-svg-logo smp-logo">
                  <span className="gds-logo-script">Style Me</span>
                  <span className="gds-logo-smp-sub">PRETTY</span>
                </div>
              </div>

              <div className="gds-logo-item" title="Over The Moon">
                <div className="gds-svg-logo otm-logo">
                  <span className="gds-logo-otm-serif">OVER THE MOON</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            3. MINIMALIST EDITORIAL FAQ SECTION
            =================================================================== */}
        <section className="gione-faq-minimal-section">
          <div className="gione-faq-minimal-inner">
            <div className="gione-faq-minimal-header">
              <span className="minimal-overline">INQUIRIES &amp; LOGISTICS</span>
              <h2 className="gione-faq-minimal-title">FREQUENTLY ASKED QUESTIONS</h2>
            </div>

            <div className="gione-faq-minimal-list">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`gione-faq-minimal-row ${isOpen ? "is-open" : ""}`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="gione-faq-minimal-q"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={15}
                        className={`gione-faq-chevron ${isOpen ? "is-rotated" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="gione-faq-minimal-a-wrap"
                        >
                          <p className="gione-faq-minimal-a">{faq.a}</p>
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

      <Footer showClosingCta={false} />
    </div>
  );
}
