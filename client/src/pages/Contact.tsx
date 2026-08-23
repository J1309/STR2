import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Clock, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Contact() {
  const [celebrationType, setCelebrationType] = useState("Destination Wedding Film & Photo");
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    names: "",
    email: "",
    phone: "",
    date: "",
    location: "",
    source: "Instagram",
    story: ""
  });

  const celebrationTypes = [
    "Destination Wedding Film & Photo",
    "Intimate European / Overseas Elopement",
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
        <section className="contact-page-hero">
          <span className="gione-kicker">Inquiries & Reservations</span>
          <h1 className="contact-title">
            Let’s Give Your Story<br />
            A Lasting Frame
          </h1>
          <p className="contact-subtitle">
            We accept a limited number of destination wedding and editorial commissions each season to ensure undivided focus on every nuance. Share your vision below.
          </p>
        </section>

        <section className="contact-form-section">
          <div className="contact-form-grid">
            {/* Sidebar Details */}
            <div className="contact-sidebar">
              <div className="contact-info-card">
                <h3>Studio Direct</h3>
                <div className="contact-info-item">
                  <Mail size={16} className="contact-icon" />
                  <div>
                    <p className="label">Direct Inquiry</p>
                    <a href="mailto:hello@starline.studio">hello@starline.studio</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <MapPin size={16} className="contact-icon" />
                  <div>
                    <p className="label">Studio Locations</p>
                    <span>California / London (Available Worldwide)</span>
                  </div>
                </div>

                <div className="contact-info-item">
                  <Clock size={16} className="contact-icon" />
                  <div>
                    <p className="label">Response Time</p>
                    <span>Personal reply within 24–48 hours</span>
                  </div>
                </div>
              </div>

              <div className="contact-reassurance-card">
                <h4>What Happens Next?</h4>
                <ol className="next-steps-list">
                  <li><b>1. Consultation:</b> We review calendar availability and connect for a relaxed video consultation.</li>
                  <li><b>2. Bespoke Proposal:</b> We curate custom collection details and timeline guidance tailored to your venue.</li>
                  <li><b>3. Reservation:</b> With a signed agreement and retainer, your date is exclusively secured.</li>
                </ol>
              </div>
            </div>

            {/* Main Interactive Form */}
            <div className="contact-form-main">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ textAlign: "center", padding: "40px 20px" }}
                >
                  <div style={{ color: "var(--cobalt-bright)", marginBottom: "20px", display: "flex", justifyContent: "center" }}>
                    <CheckCircle2 size={56} />
                  </div>
                  <h2 style={{ fontFamily: "var(--font-display-serif)", fontSize: "32px", marginBottom: "16px" }}>
                    Thank you, {formData.names || "Friend"}.
                  </h2>
                  <p style={{ color: "var(--ink-muted)", fontSize: "15px", lineHeight: "1.8", maxWidth: "560px", margin: "0 auto 36px" }}>
                    Your inquiry has been safely received. Our studio team will review your celebration dates and respond directly to <b>{formData.email || "your inbox"}</b> within 24 to 48 hours.
                  </p>
                  <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
                    <Link href="/portfolio" className="gione-btn-primary">
                      <span>Explore Portfolio</span>
                      <ArrowUpRight size={14} />
                    </Link>
                    <Link href="/" className="gione-btn-secondary" style={{ color: "var(--ink-primary)", borderColor: "var(--border-strong)", background: "transparent" }}>
                      <span>Return Home</span>
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="inquiry-form">
                  {/* Celebration Type */}
                  <div className="form-group">
                    <label className="form-label">1. What kind of celebration or project are you planning?</label>
                    <div className="celebration-pills-grid">
                      {celebrationTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          className={`form-pill-btn ${celebrationType === type ? "is-selected" : ""}`}
                          onClick={() => setCelebrationType(type)}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Names & Contact */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="names">2. Your Full Name(s) *</label>
                      <input
                        type="text"
                        id="names"
                        required
                        placeholder="e.g. Maya Rios & Julian Scott"
                        value={formData.names}
                        onChange={(e) => setFormData({ ...formData, names: e.target.value })}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="email">3. Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="e.g. maya@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="date">4. Event Date / Target Season *</label>
                      <input
                        type="text"
                        id="date"
                        required
                        placeholder="e.g. September 18, 2026 or Autumn 2026"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="location">5. Celebration Location & Venue *</label>
                      <input
                        type="text"
                        id="location"
                        required
                        placeholder="e.g. Lake Como, Italy or Big Sur, CA"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="story">6. Tell Us About Your Vision & Atmosphere</label>
                    <textarea
                      id="story"
                      rows={5}
                      placeholder="Share details about the aesthetic, guest count, music, wardrobe, or what matters most to you..."
                      value={formData.story}
                      onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                      className="form-textarea"
                    />
                  </div>

                  <div>
                    <button type="submit" className="inquiry-submit-btn">
                      <span>Submit Studio Inquiry</span>
                      <Send size={14} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
