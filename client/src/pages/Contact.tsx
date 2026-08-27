import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
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
    service: "Dual Atelier (Cinema + 35mm Photo)",
    budgetRange: "$12,000 – $18,000",
    eventDetails: "",
    referralSource: "Instagram"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

          {/* Right Side: Minimalist Underline Inquiries Form */}
          <div className="gione-contact-form-area">
            <div className="gione-contact-header-block">
              <span className="gione-contact-overline">LET&apos;S CONNECT</span>
              <h1 className="gione-info-title">
                GET IN TOUCH
              </h1>

              <p className="gione-info-subtitle">
                We accept a strictly limited number of commissions each season to ensure uncompromising artistry. Share the details of your celebration below.
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
                  Thank you for reaching out. We have received your details for <b>{formData.location || "your destination"}</b> and will respond to <b>{formData.email}</b> within 24–48 hours with availability and our full commission guide.
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
                    placeholder="e.g. Villa Balbiano, Lake Como / Provence / Philadelphia"
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
                      <option value="Dual Atelier (Cinema + 35mm Photo)">
                        Dual Atelier (Cinema + 35mm Photo)
                      </option>
                      <option value="Living Wedding Cinema (4K)">
                        Living Wedding Cinema (4K)
                      </option>
                      <option value="Fine-Art Photography (35mm)">
                        Fine-Art Photography (35mm)
                      </option>
                    </select>
                    <ChevronDown size={15} className="minimal-select-chevron" />
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
                      <option value="$8,000 – $12,000">$8,000 – $12,000</option>
                      <option value="$12,000 – $18,000">$12,000 – $18,000</option>
                      <option value="$18,000 – $25,000">$18,000 – $25,000</option>
                      <option value="$25,000+">$25,000+</option>
                    </select>
                    <ChevronDown size={15} className="minimal-select-chevron" />
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
                    placeholder="Share a few words about your celebration, aesthetic vibe, or what matters most to you..."
                    value={formData.eventDetails}
                    onChange={(e) => setFormData({ ...formData, eventDetails: e.target.value })}
                    className="minimal-line-textarea"
                  />
                </div>

                {/* Row 6: Dropdown for Referral Source */}
                <div className="minimal-line-group select-wrapper">
                  <label className="minimal-line-label">
                    HOW DID YOU HEAR ABOUT US?
                  </label>
                  <select
                    value={formData.referralSource}
                    onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                    className="minimal-line-select"
                  >
                    <option value="Instagram">Instagram</option>
                    <option value="Planner / Designer">Planner / Designer</option>
                    <option value="Personal Recommendation">Personal Recommendation</option>
                    <option value="Editorial / Vogue">Editorial / Vogue</option>
                    <option value="Search / Google">Search / Google</option>
                  </select>
                  <ChevronDown size={15} className="minimal-select-chevron" />
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
