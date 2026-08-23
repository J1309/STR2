import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";

export default function Contact() {
  const [celebrationType, setCelebrationType] = useState("Destination Wedding Cinema & Photo");
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    names: "",
    email: "",
    phone: "",
    date: "",
    location: "",
    story: ""
  });

  const celebrationTypes = [
    "Destination Wedding Cinema & Photo",
    "European / Overseas Elopement",
    "Fine Art Photography Commission",
    "Editorial / Fashion Campaign"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="starline-page-shell">
      <Navbar variant="light" />

      <main className="starline-page-main">
        {/* Minimalist Hero */}
        <section className="portfolio-hero">
          <p className="minimal-overline">Inquiries & Reservations</p>
          <h1 className="portfolio-title">
            Let’s Give Your Story<br />
            A Lasting Frame
          </h1>
          <p className="portfolio-subtitle">
            We accept a limited number of destination wedding and editorial commissions each season to ensure undivided focus on every nuance. Share your vision below.
          </p>
        </section>

        {/* Minimalist Split Form Section */}
        <section className="minimal-section" style={{ paddingTop: 0 }}>
          <div className="minimal-contact-grid">
            {/* Left: Studio Direct & Steps */}
            <div className="minimal-contact-sidebar">
              <div className="minimal-contact-item">
                <p>Direct Inquiry</p>
                <a href="mailto:hello@starline.studio">hello@starline.studio</a>
              </div>

              <div className="minimal-contact-item">
                <p>Studio Locations</p>
                <span>California / London (Available Worldwide)</span>
              </div>

              <div className="minimal-contact-item">
                <p>Response Timeline</p>
                <span>Personal reply within 24–48 hours</span>
              </div>

              <div style={{ paddingTop: "20px", borderTop: "1px solid var(--line-subtle)" }}>
                <p className="minimal-overline" style={{ marginBottom: "16px" }}>The Process</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "13.5px", fontWeight: 300, color: "var(--ink-muted)" }}>
                  <div>
                    <b style={{ color: "var(--ink-primary)", fontWeight: 600, display: "block", marginBottom: "2px" }}>01. Consultation</b>
                    We review calendar availability and connect for a relaxed video consultation.
                  </div>
                  <div>
                    <b style={{ color: "var(--ink-primary)", fontWeight: 600, display: "block", marginBottom: "2px" }}>02. Custom Proposal</b>
                    We curate custom collection details and timeline guidance tailored to your venue.
                  </div>
                  <div>
                    <b style={{ color: "var(--ink-primary)", fontWeight: 600, display: "block", marginBottom: "2px" }}>03. Date Secured</b>
                    With a signed agreement and retainer, your date is exclusively reserved.
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Clean Studio Form */}
            <div>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ textAlign: "left", padding: "40px 0" }}
                >
                  <p className="minimal-overline">Inquiry Received</p>
                  <h2 style={{ fontFamily: "var(--font-display-condensed)", fontSize: "36px", letterSpacing: "0.06em", textTransform: "uppercase", margin: "0 0 16px" }}>
                    Thank you, {formData.names || "Friend"}.
                  </h2>
                  <p style={{ color: "var(--ink-muted)", fontSize: "15px", fontWeight: 300, lineHeight: 1.85, maxWidth: "560px", margin: "0 0 32px" }}>
                    Your inquiry has been safely received. Our studio team will review your celebration dates and respond directly to <b>{formData.email || "your inbox"}</b> within 24 to 48 hours.
                  </p>
                  <Link href="/portfolio" className="minimal-text-link">
                    <span>Explore Portfolio</span>
                  </Link>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
                  {/* Celebration Type */}
                  <div>
                    <label style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-subtle)", display: "block", marginBottom: "12px" }}>
                      01 / Celebration Type
                    </label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                      {celebrationTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          className={`portfolio-filter-btn ${celebrationType === type ? "is-active" : ""}`}
                          onClick={() => setCelebrationType(type)}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Names & Email */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "28px" }}>
                    <div>
                      <label style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-subtle)", display: "block", marginBottom: "4px" }}>
                        02 / Full Names *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Maya Rios & Julian Scott"
                        value={formData.names}
                        onChange={(e) => setFormData({ ...formData, names: e.target.value })}
                        className="minimal-input-field"
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-subtle)", display: "block", marginBottom: "4px" }}>
                        03 / Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. maya@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="minimal-input-field"
                      />
                    </div>
                  </div>

                  {/* Date & Location */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "28px" }}>
                    <div>
                      <label style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-subtle)", display: "block", marginBottom: "4px" }}>
                        04 / Target Date or Season *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. September 2026 or Autumn 2026"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="minimal-input-field"
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-subtle)", display: "block", marginBottom: "4px" }}>
                        05 / Location & Venue *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Villa Ephrussi, French Riviera"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="minimal-input-field"
                      />
                    </div>
                  </div>

                  {/* Story Notes */}
                  <div>
                    <label style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-subtle)", display: "block", marginBottom: "4px" }}>
                      06 / Tell Us About Your Vision
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share details about the atmosphere, guest count, aesthetics, or what matters most to you..."
                      value={formData.story}
                      onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                      className="minimal-input-field"
                      style={{ resize: "vertical" }}
                    />
                  </div>

                  <div style={{ marginTop: "12px" }}>
                    <button
                      type="submit"
                      className="minimal-btn-outline"
                      style={{ color: "var(--ink-primary)", borderColor: "var(--ink-primary)", background: "transparent" }}
                    >
                      <span>Submit Studio Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer showClosingCta={false} />
    </div>
  );
}
