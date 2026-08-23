import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Clock, Heart, Mail, MapPin, MessageSquare, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Contact() {
  const [celebrationType, setCelebrationType] = useState("Intimate Wedding / Elopement");
  const [budgetRange, setBudgetRange] = useState("$5,000 – $8,000");
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
    "Intimate Wedding / Elopement",
    "Full-Scale Celebration",
    "Editorial / Brand Commission",
    "Couples & Portrait Session"
  ];

  const budgetOptions = [
    "$3,400 – $5,000",
    "$5,000 – $8,000",
    "$8,000+"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="starline-page-shell">
      <Navbar variant="dark" />

      <main className="starline-page-main">
        <section className="contact-page-hero">
          <div className="contact-page-hero-inner">
            <div className="portfolio-header-kicker">
              <span className="dot-mark"><i /><i /><i /></span>
              <span>Inquiry & Reservations</span>
            </div>
            <h1 className="contact-title">
              Let’s give your story<br /><em>a lasting frame.</em>
            </h1>
            <p className="contact-subtitle">
              We accept a limited number of celebrations each calendar year to ensure unhurried dedication to every couple and client. Tell us about your vision below.
            </p>
          </div>
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
                    <p className="label">Direct Email</p>
                    <a href="mailto:hello@starline.studio">hello@starline.studio</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <MapPin size={16} className="contact-icon" />
                  <div>
                    <p className="label">Studio Location</p>
                    <span>California, USA (Available Worldwide)</span>
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
                <div className="reassurance-mark"><i /><i /><i /></div>
                <h4>What Happens Next?</h4>
                <ol className="next-steps-list">
                  <li><b>1. Consultation:</b> We review your date availability and set up a casual phone or video call.</li>
                  <li><b>2. Custom Proposal:</b> We send tailored collection options and timeline advice.</li>
                  <li><b>3. Date Secured:</b> With a signed agreement and 30% retainer, your date is locked in.</li>
                </ol>
              </div>
            </div>

            {/* Main Interactive Form */}
            <div className="contact-form-main">
              {submitted ? (
                <motion.div
                  className="contact-success-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={44} />
                  </div>
                  <h2>Thank you, {formData.names || "Friend"}.</h2>
                  <p className="success-message">
                    Your inquiry has been received with love. Lila will personally review your celebration details and reply to <b>{formData.email || "your email"}</b> within 24 to 48 hours.
                  </p>
                  <div className="success-actions">
                    <Link href="/portfolio" className="success-btn">
                      <span>Explore More Stories</span>
                      <ArrowUpRight size={15} />
                    </Link>
                    <Link href="/" className="success-btn-secondary">
                      <span>Return Home</span>
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="inquiry-form">
                  {/* Celebration Type Pills */}
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

                  {/* Date & Location */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="date">4. Event Date or Ideal Season *</label>
                      <input
                        type="text"
                        id="date"
                        required
                        placeholder="e.g. October 14, 2026 or Autumn 2026"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="location">5. Location or Dream Venue *</label>
                      <input
                        type="text"
                        id="location"
                        required
                        placeholder="e.g. Big Sur, Joshua Tree, Italy, etc."
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className="form-group">
                    <label className="form-label">6. Expected Photography Investment Range</label>
                    <div className="celebration-pills-grid">
                      {budgetOptions.map((b) => (
                        <button
                          type="button"
                          key={b}
                          className={`form-pill-btn ${budgetRange === b ? "is-selected" : ""}`}
                          onClick={() => setBudgetRange(b)}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Story & Vision */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="story">7. Tell us about your vision & what matters most *</label>
                    <textarea
                      id="story"
                      rows={5}
                      required
                      placeholder="Share a bit about yourselves, how you want the day to feel, guest count, or any specific moments you are excited about..."
                      value={formData.story}
                      onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                      className="form-textarea"
                    />
                  </div>

                  {/* Referral Source */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="source">8. How did you hear about Starline?</label>
                    <select
                      id="source"
                      value={formData.source}
                      onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                      className="form-select"
                    >
                      <option value="Instagram">Instagram (@starline.studio)</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Friend or Colleague">Friend / Colleague Referral</option>
                      <option value="Publication / Anti-Bride">Publication (Vogue, Anti-Bride, Kinfolk)</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="form-submit-row">
                    <button type="submit" className="inquiry-submit-btn">
                      <span>Send Inquiry to Lila</span>
                      <ArrowUpRight size={17} />
                    </button>
                    <span className="submit-note">No spam. Your details remain completely private.</span>
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
