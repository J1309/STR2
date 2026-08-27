import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageSquare,
  Phone
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "wouter";

export default function Contact() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    service: "Signature Dual Atelier (Cinema + Film)",
    location: "",
    guestCount: "50 – 120",
    eventDetails: "",
    weddingPlanner: "",
    styleAppreciation: "",
    instagramHandles: "",
    referralSource: "Instagram"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Option Pills
  const serviceOptions = [
    "35mm Fine-Art Photography",
    "Cinematic 4K Storytelling",
    "Signature Dual Atelier (Cinema + Film)"
  ];

  const guestCountOptions = [
    "Intimate Gathering (< 50)",
    "50 – 120 Guests",
    "120 – 250 Guests",
    "250+ Grand Celebration"
  ];

  const referralOptions = [
    "Vogue Weddings",
    "Instagram",
    "Personal Referral",
    "Wedding Designer / Planner",
    "Editorial Publication",
    "Search / Direct"
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

  // Destination FAQs
  const destinationFaqs = [
    {
      q: "Do you travel worldwide for destination weddings?",
      a: "Yes. Over 70% of our commissions take place internationally. Travel, accommodations, and flight logistics across Europe, North America, and Asia are coordinated seamlessly by our atelier with clear, all-inclusive transparent quotes."
    },
    {
      q: "What is your hybrid 35mm film & 4K cinema approach?",
      a: "We blend authentic 35mm analog film rolls (Kodak Portra, Ilford HP5) for organic grain, true-to-life skin tones, and nostalgic warmth with high-resolution digital cinema for pristine low-light dinner and party coverage."
    },
    {
      q: "How far in advance should we reserve our date?",
      a: "Because we strictly limit our schedule to a maximum of 18–20 destination celebrations per season, popular spring and autumn dates typically book 9 to 18 months in advance."
    },
    {
      q: "When will we receive our preview and full gallery?",
      a: "You receive a curated 48-Hour Signature Preview Deck of 30–50 hand-toned images right after your celebration. Full digital galleries and heirloom cinema films are delivered within 4 to 6 weeks."
    },
    {
      q: "Do you bring dual operators and backup equipment?",
      a: "Always. Every commission includes a lead artist and second operator, carrying dual redundant camera bodies, dual-slot memory backups, and secure off-site daily backups."
    },
    {
      q: "How do we secure our date on your calendar?",
      a: "Following an unhurried video consultation to ensure our creative visions align, dates are reserved with a signed digital commission agreement and a 30% retainer."
    }
  ];

  return (
    <div className="starline-page-shell">
      <Navbar variant="light" />

      <main className="starline-page-main" style={{ padding: 0 }}>
        {/* Full-Size Split Section */}
        <section className="gione-contact-full-wrapper">
          {/* Left Side: Full-Size Vertical Editorial Image */}
          <div className="gione-contact-full-image-col">
            <img
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1600&auto=format&fit=crop"
              alt="Destination Wedding Editorial — Starline Studio"
              className="gione-contact-full-image"
            />
          </div>

          {/* Right Side: Spacious, Uncongested Inquiries Form Area */}
          <div className="gione-contact-form-area">
            <h1 className="gione-info-title">
              INQUIRE & COMMISSIONS
            </h1>

            <p className="gione-info-subtitle">
              Every heirloom film and photograph begins with an unhurried conversation.
              We accept a strictly limited number of international commissions each season to ensure uncompromising dedication to each celebration.
              Tell us the story of your gathering.
            </p>

            {/* Quick Direct Row */}
            <div className="gione-direct-row">
              <a href="tel:+447809295403" className="gione-direct-link">
                <Phone size={14} />
                <span>TEL: +44 7809 295 403</span>
              </a>
              <span style={{ color: "var(--line-subtle)" }}>|</span>
              <a href="mailto:hello@starline.studio" className="gione-direct-link">
                <Mail size={14} />
                <span>DIRECT: HELLO@STARLINE.STUDIO</span>
              </a>
              <span style={{ color: "var(--line-subtle)" }}>|</span>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="gione-direct-link">
                <MessageSquare size={14} />
                <span>JOURNAL: @STARLINE.STUDIO</span>
              </a>
            </div>

            {/* Submitted Confirmation State */}
            {submitted ? (
              <motion.div
                className="gione-success-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="gione-success-badge">
                  <CheckCircle2 size={16} />
                  <span>Inquiry Safely Transmitted</span>
                </span>

                <h2 className="gione-success-title">
                  Inquiry Received, {formData.name || "Friend"}.
                </h2>

                <p className="gione-success-desc">
                  Thank you for inviting us into your celebration. We review calendar availability for <b>{formData.location || "your destination"}</b> and will be in touch at <b>{formData.email}</b> within 24 hours to schedule an introductory video consultation.
                </p>

                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <Link href="/portfolio" className="gione-pill-btn is-active">
                    <span>Explore Portfolio →</span>
                  </Link>
                  <a
                    href="https://wa.me/447809295403"
                    target="_blank"
                    rel="noreferrer"
                    className="gione-pill-btn"
                  >
                    <span>Direct WhatsApp Concierge</span>
                  </a>
                </div>
              </motion.div>
            ) : (
              /* The Inquiries Form */
              <form onSubmit={handleSubmit} className="gione-form">
                {/* Row 1: Name & Email */}
                <div className="gione-form-grid-2">
                  <div className="gione-form-group">
                    <label className="gione-form-label">
                      <span>01. YOUR NAMES *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Rios & Julian Scott"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="gione-form-input"
                    />
                  </div>

                  <div className="gione-form-group">
                    <label className="gione-form-label">
                      <span>02. PRIMARY EMAIL ADDRESS *</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. maya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="gione-form-input"
                    />
                  </div>
                </div>

                {/* Row 2: Contact Number & Event Date */}
                <div className="gione-form-grid-2">
                  <div className="gione-form-group">
                    <label className="gione-form-label">
                      <span>03. DIRECT TELEPHONE & WHATSAPP *</span>
                      <span className="gione-form-hint">Country Code + Number</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+44 7809 295 403 / +1 (310)..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="gione-form-input"
                    />
                  </div>

                  <div className="gione-form-group">
                    <label className="gione-form-label">
                      <span>04. CELEBRATION DATE OR SEASON *</span>
                      <span className="gione-form-hint">Date or Season</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 18 September 2026 / Autumn 2026"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="gione-form-input"
                    />
                  </div>
                </div>

                {/* Field 3: Service Interested In (Pills) */}
                <div className="gione-form-group">
                  <label className="gione-form-label">
                    <span>05. SERVICES REQUESTED *</span>
                  </label>
                  <div className="gione-pills-row">
                    {serviceOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        className={`gione-pill-btn ${formData.service === opt ? "is-active" : ""}`}
                        onClick={() => setFormData({ ...formData, service: opt })}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Row 4: Event Location & Guest Count */}
                <div className="gione-form-grid-2">
                  <div className="gione-form-group">
                    <label className="gione-form-label">
                      <span>06. DESTINATION, CITY & VENUE *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Villa Balbiano, Lake Como / Provence Estate / London"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="gione-form-input"
                    />
                  </div>

                  <div className="gione-form-group">
                    <label className="gione-form-label">
                      <span>07. ESTIMATED GUEST SCALE</span>
                    </label>
                    <div className="gione-pills-row">
                      {guestCountOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          className={`gione-pill-btn ${formData.guestCount === opt ? "is-active" : ""}`}
                          onClick={() => setFormData({ ...formData, guestCount: opt })}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Field 5: Details / Story (Textarea) */}
                <div className="gione-form-group">
                  <label className="gione-form-label">
                    <span>08. YOUR CELEBRATION VISION & ATMOSPHERE *</span>
                    <span className="gione-form-hint">(Atmosphere, light, priorities, or what matters most)</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Share the story of your day, the aesthetic mood, musical ambiance, or meaningful traditions..."
                    value={formData.eventDetails}
                    onChange={(e) => setFormData({ ...formData, eventDetails: e.target.value })}
                    className="gione-form-textarea"
                  />
                </div>

                {/* Row 6: Wedding Planner & Style Appreciation */}
                <div className="gione-form-grid-2">
                  <div className="gione-form-group">
                    <label className="gione-form-label">
                      <span>09. WEDDING PLANNER OR EVENT DESIGNER</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Lake Como Weddings / Self-Curated"
                      value={formData.weddingPlanner}
                      onChange={(e) => setFormData({ ...formData, weddingPlanner: e.target.value })}
                      className="gione-form-input"
                    />
                  </div>

                  <div className="gione-form-group">
                    <label className="gione-form-label">
                      <span>10. WHAT RESONATES WITH YOU ABOUT STARLINE?</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. The unhurried 35mm grain, natural light, and quiet emotional intimacy"
                      value={formData.styleAppreciation}
                      onChange={(e) => setFormData({ ...formData, styleAppreciation: e.target.value })}
                      className="gione-form-input"
                    />
                  </div>
                </div>

                {/* Row 7: Instagram Handles & Referral */}
                <div className="gione-form-grid-2">
                  <div className="gione-form-group">
                    <label className="gione-form-label">
                      <span>11. INSTAGRAM / SOCIAL HANDLES</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. @maya.rios & @julianscott"
                      value={formData.instagramHandles}
                      onChange={(e) => setFormData({ ...formData, instagramHandles: e.target.value })}
                      className="gione-form-input"
                    />
                  </div>

                  <div className="gione-form-group">
                    <label className="gione-form-label">
                      <span>12. HOW DID YOU DISCOVER OUR WORK?</span>
                    </label>
                    <div className="gione-pills-row">
                      {referralOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          className={`gione-pill-btn ${formData.referralSource === opt ? "is-active" : ""}`}
                          onClick={() => setFormData({ ...formData, referralSource: opt })}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="gione-submit-btn"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING INQUIRY...</span>
                    ) : (
                      <>
                        <span>TRANSMIT INQUIRY</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                  <p style={{ textAlign: "center", fontSize: "11px", color: "var(--ink-subtle)", marginTop: "14px", letterSpacing: "0.04em" }}>
                    Strict discretion assured. Your contact details remain confidential to our lead artists.
                  </p>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* Destination FAQ Section */}
        <section className="gione-faq-section">
          <div className="gione-faq-header">
            <p className="minimal-overline">DESTINATION ADVICE & LOGISTICS</p>
            <h2 className="gione-faq-title">
              Frequently Asked Questions
            </h2>
            <p className="gione-faq-subtitle">
              Everything you need to know about reserving our atelier for your destination wedding or celebration.
            </p>
          </div>

          <div className="gione-faq-grid">
            {destinationFaqs.map((faq, idx) => (
              <div key={idx} className="gione-faq-item">
                <h3 className="gione-faq-question">
                  {faq.q}
                </h3>
                <p className="gione-faq-answer">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer showClosingCta={false} />
    </div>
  );
}
