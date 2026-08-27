import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Sparkles
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "wouter";

export default function Contact() {
  // Main Essential Form State
  const [formData, setFormData] = useState({
    names: "",
    email: "",
    phone: "",
    eventDate: "",
    location: "",
    service: "Dual Atelier (Cinema + 35mm Photo)",
    budgetRange: "$10k – $18k",
    eventDetails: "",
    referralSource: "Instagram"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Main Essential Options
  const serviceOptions = [
    "Dual Atelier (Cinema + 35mm Photo)",
    "Living Wedding Cinema (4K)",
    "Fine-Art Photography (35mm)"
  ];

  const budgetOptions = [
    "$8,000 – $12,000",
    "$12,000 – $18,000",
    "$18,000 – $25,000",
    "$25,000+"
  ];

  const referralOptions = [
    "Instagram",
    "Planner / Designer",
    "Personal Recommendation",
    "Editorial / Vogue",
    "Search / Google"
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
        {/* Full-Size Editorial Split Section */}
        <section className="gione-contact-full-wrapper">
          {/* Left Side: Editorial Mood Image */}
          <div className="gione-contact-full-image-col">
            <img
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1600&auto=format&fit=crop"
              alt="Destination Wedding Editorial — Starline Studio"
              className="gione-contact-full-image"
            />
            <div className="gione-contact-image-badge">
              <Sparkles size={13} />
              <span>COMMISSIONS WORLDWIDE // 2026—2027</span>
            </div>
          </div>

          {/* Right Side: Clean, Structured Inquiries Form */}
          <div className="gione-contact-form-area">
            <div className="gione-contact-header-block">
              <span className="gione-contact-overline">LET&apos;S CONNECT</span>
              <h1 className="gione-info-title">
                GET IN TOUCH
              </h1>

              <p className="gione-info-subtitle">
                We accept a strictly limited number of commissions each season to ensure uncompromising artistry. Fill in the essentials below and let&apos;s begin talking about your plans.
              </p>

              {/* Direct Quick Contact Row */}
              <div className="gione-direct-row">
                <a href="tel:+12155550198" className="gione-direct-link">
                  <Phone size={13} />
                  <span>+1 (215) 555-0198</span>
                </a>
                <span className="gione-direct-divider">/</span>
                <a href="mailto:hello@starline.studio" className="gione-direct-link">
                  <Mail size={13} />
                  <span>HELLO@STARLINE.STUDIO</span>
                </a>
                <span className="gione-direct-divider">/</span>
                <span className="gione-direct-link">
                  <MapPin size={13} />
                  <span>PHILADELPHIA &amp; DESTINATIONS</span>
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
                  Thank you for sharing your vision with us. We have received your details for <b>{formData.location || "your destination"}</b> and will respond to <b>{formData.email}</b> within 24–48 hours with availability and our full commission guide.
                </p>

                <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "24px" }}>
                  <Link href="/portfolio" className="gione-pill-btn is-active">
                    <span>Explore Portfolio →</span>
                  </Link>
                  <button
                    type="button"
                    className="gione-pill-btn"
                    onClick={() => setSubmitted(false)}
                  >
                    <span>Send Another Note</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              /* The Clean Main Inquiries Form */
              <form onSubmit={handleSubmit} className="gione-form">
                {/* Section 1: Couple & Contact Coordinates */}
                <div className="gione-form-section">
                  <div className="gione-form-section-header">
                    <span className="gione-section-step">01</span>
                    <h3 className="gione-section-title">THE COUPLE &amp; CONTACT</h3>
                  </div>

                  <div className="gione-form-grid-2">
                    <div className="gione-form-group">
                      <label className="gione-form-label">
                        YOUR NAMES <span className="req-star">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Maya Rios & Julian Scott"
                        value={formData.names}
                        onChange={(e) => setFormData({ ...formData, names: e.target.value })}
                        className="gione-form-input"
                      />
                    </div>

                    <div className="gione-form-group">
                      <label className="gione-form-label">
                        EMAIL ADDRESS <span className="req-star">*</span>
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

                  <div className="gione-form-grid-2">
                    <div className="gione-form-group">
                      <label className="gione-form-label">
                        PHONE / WHATSAPP <span className="req-star">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000 / +44..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="gione-form-input"
                      />
                    </div>

                    <div className="gione-form-group">
                      <label className="gione-form-label">
                        CELEBRATION DATE OR TIMEFRAME <span className="req-star">*</span>
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
                </div>

                {/* Section 2: Destination & Commission Details */}
                <div className="gione-form-section">
                  <div className="gione-form-section-header">
                    <span className="gione-section-step">02</span>
                    <h3 className="gione-section-title">DESTINATION &amp; SERVICES</h3>
                  </div>

                  <div className="gione-form-group">
                    <label className="gione-form-label">
                      LOCATION, CITY OR VENUE <span className="req-star">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Villa Balbiano, Lake Como / Provence / Philadelphia"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="gione-form-input"
                    />
                  </div>

                  <div className="gione-form-group">
                    <label className="gione-form-label">
                      SERVICES REQUESTED <span className="req-star">*</span>
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

                  <div className="gione-form-group">
                    <label className="gione-form-label">
                      ESTIMATED PHOTO / VIDEO BUDGET
                    </label>
                    <div className="gione-pills-row">
                      {budgetOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          className={`gione-pill-btn ${formData.budgetRange === opt ? "is-active" : ""}`}
                          onClick={() => setFormData({ ...formData, budgetRange: opt })}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 3: Vision & Discovery */}
                <div className="gione-form-section">
                  <div className="gione-form-section-header">
                    <span className="gione-section-step">03</span>
                    <h3 className="gione-section-title">THE CELEBRATION</h3>
                  </div>

                  <div className="gione-form-group">
                    <label className="gione-form-label">
                      TELL US ABOUT YOUR PLANS &amp; WHAT MATTERS MOST <span className="req-star">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Share a few words about your celebration, the vibe, venue plans, or what drew you to our work..."
                      value={formData.eventDetails}
                      onChange={(e) => setFormData({ ...formData, eventDetails: e.target.value })}
                      className="gione-form-textarea"
                    />
                  </div>

                  <div className="gione-form-group">
                    <label className="gione-form-label">
                      HOW DID YOU DISCOVER US?
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

                {/* Submit Action */}
                <div className="gione-form-submit-row">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="gione-submit-button"
                  >
                    <span>{isSubmitting ? "TRANSMITTING..." : "SEND INQUIRY"}</span>
                    <ArrowRight size={15} />
                  </button>
                  <span className="gione-submit-note">
                    Strictly confidential. We reply within 24–48 hours.
                  </span>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer showClosingCta={false} />
    </div>
  );
}
