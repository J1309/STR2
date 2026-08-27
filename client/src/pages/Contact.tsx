import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Globe2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Sparkles
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "wouter";

interface EditorialPhoto {
  url: string;
  venue: string;
  location: string;
  filmType: string;
}

export default function Contact() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    service: "Photography + Cinematography",
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

  // Editorial Carousel State
  const editorialPhotos: EditorialPhoto[] = [
    {
      url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1600&auto=format&fit=crop",
      venue: "Villa Balbiano",
      location: "Lake Como, Italy",
      filmType: "35mm Portra 400"
    },
    {
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
      venue: "Villa Ephrussi de Rothschild",
      location: "French Riviera, France",
      filmType: "4K Anamorphic Cinema"
    },
    {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
      venue: "La Mamounia",
      location: "Marrakech, Morocco",
      filmType: "Medium Format Analog"
    },
    {
      url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop",
      venue: "Belmond Hotel Caruso",
      location: "Amalfi Coast, Italy",
      filmType: "35mm Tri-X B&W"
    },
    {
      url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
      venue: "Château de la Napoule",
      location: "Cannes, France",
      filmType: "Documentary Film Roll"
    }
  ];

  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  // Auto rotate photo every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhotoIdx((prev) => (prev + 1) % editorialPhotos.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [editorialPhotos.length]);

  const nextPhoto = () => {
    setActivePhotoIdx((prev) => (prev + 1) % editorialPhotos.length);
  };

  const prevPhoto = () => {
    setActivePhotoIdx((prev) => (prev - 1 + editorialPhotos.length) % editorialPhotos.length);
  };

  // Option Pills
  const serviceOptions = [
    "Photography",
    "Cinematography",
    "Photography + Cinematography"
  ];

  const guestCountOptions = [
    "Intimate (< 50)",
    "50 – 120",
    "120 – 250",
    "250+ Grand"
  ];

  const referralOptions = [
    "Vogue Weddings",
    "Instagram",
    "Referral / Friend",
    "Wedding Planner",
    "Editorial Press",
    "Google / Search"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury submission animation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 120, behavior: "smooth" });
    }, 800);
  };

  // Destination FAQs
  const destinationFaqs = [
    {
      q: "Do you travel worldwide for destination weddings?",
      a: "Yes. Over 70% of our commissions take place internationally. Travel, accommodations, and flight logistics across Europe, North America, and Asia are coordinated seamlessly by our atelier with clear, transparent all-inclusive quotes."
    },
    {
      q: "What is your hybrid 35mm film & 4K cinema approach?",
      a: "We blend genuine 35mm analog film rolls (Kodak Portra, Ilford HP5) for timeless grain, organic skin tones, and nostalgic warmth with high-resolution digital cinema for pristine low-light dinner and party coverage."
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

      <main className="starline-page-main">
        {/* Minimalist Overline Hero */}
        <section className="portfolio-hero" style={{ paddingBottom: "clamp(32px, 4vw, 48px)" }}>
          <p className="minimal-overline">ATELIER INQUIRIES // DESTINATION WEDDINGS & COMMISSIONS</p>
          <h1 className="portfolio-title">
            Get In Touch
          </h1>
          <p className="portfolio-subtitle">
            We are all about authentic connections, cinematic storytelling, and timeless human memories.
            Tell us about your celebration plans below.
          </p>
        </section>

        {/* Main Gione da Silva Style Split Section */}
        <section className="gione-contact-wrap">
          <div className="gione-contact-split">
            {/* Left Column: Visual Editorial Card & Concierge Info */}
            <div className="gione-contact-media-col">
              {/* Photo Frame Carousel */}
              <div className="gione-editorial-photo-card">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activePhotoIdx}
                    src={editorialPhotos[activePhotoIdx].url}
                    alt={editorialPhotos[activePhotoIdx].venue}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  />
                </AnimatePresence>

                {/* Floating Tag */}
                <div className="gione-photo-tag">
                  <div>
                    <span>{editorialPhotos[activePhotoIdx].venue}</span>
                    <p style={{ margin: "2px 0 0", fontSize: "9.5px", color: "var(--luxury-blue-sky)", opacity: 0.85 }}>
                      {editorialPhotos[activePhotoIdx].location}
                    </p>
                  </div>
                  <em>{editorialPhotos[activePhotoIdx].filmType}</em>
                </div>

                {/* Mini Prev/Next Controls */}
                <div style={{ position: "absolute", top: "16px", right: "16px", display: "flex", gap: "6px", zIndex: 10 }}>
                  <button
                    onClick={prevPhoto}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: "rgba(8, 15, 26, 0.7)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "#fff",
                      display: "grid",
                      placeItems: "center",
                      cursor: "pointer"
                    }}
                    aria-label="Previous photo"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <button
                    onClick={nextPhoto}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: "rgba(8, 15, 26, 0.7)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "#fff",
                      display: "grid",
                      placeItems: "center",
                      cursor: "pointer"
                    }}
                    aria-label="Next photo"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>

              {/* Direct Concierge Box */}
              <div className="gione-concierge-card">
                <div className="gione-concierge-item">
                  <span className="gione-concierge-label">TELEPHONE & WHATSAPP CONCIERGE</span>
                  <a href="https://wa.me/447809295403" target="_blank" rel="noreferrer" className="gione-concierge-val">
                    <Phone size={14} style={{ color: "var(--cobalt-accent)" }} />
                    <span>+44 7809 295 403</span>
                  </a>
                </div>

                <div className="gione-concierge-item">
                  <span className="gione-concierge-label">ATELIER DIRECT EMAIL</span>
                  <a href="mailto:hello@starline.studio" className="gione-concierge-val">
                    <Mail size={14} style={{ color: "var(--cobalt-accent)" }} />
                    <span>hello@starline.studio</span>
                  </a>
                </div>

                <div className="gione-concierge-item">
                  <span className="gione-concierge-label">STUDIO GEOGRAPHY & HUBS</span>
                  <span className="gione-concierge-val" style={{ cursor: "default" }}>
                    <Globe2 size={14} style={{ color: "var(--cobalt-accent)" }} />
                    <span>London • Paris • Lake Como • Worldwide</span>
                  </span>
                </div>

                <div className="gione-concierge-item">
                  <span className="gione-concierge-label">RESPONSE TIMELINE</span>
                  <span className="gione-concierge-val" style={{ cursor: "default", color: "var(--ink-muted)", fontSize: "13.5px" }}>
                    <Clock size={14} style={{ color: "var(--cobalt-accent)" }} />
                    <span>Personal reply guaranteed within 24 hours</span>
                  </span>
                </div>
              </div>

              {/* 2026/2027 Travel Schedule Dispatch */}
              <div className="gione-travel-schedule-card">
                <h3 className="gione-travel-schedule-title">
                  <Calendar size={14} style={{ color: "var(--cobalt-accent)" }} />
                  <span>2026 / 2027 Travel Schedule</span>
                </h3>
                <ul className="gione-travel-schedule-list">
                  <li>
                    <span>May – June</span>
                    <strong>Lake Como & Amalfi Coast</strong>
                  </li>
                  <li>
                    <span>June – July</span>
                    <strong>French Riviera & Provence</strong>
                  </li>
                  <li>
                    <span>August – Sept</span>
                    <strong>Mallorca & Tuscany</strong>
                  </li>
                  <li>
                    <span>October</span>
                    <strong>Kyoto & Tokyo, Japan</strong>
                  </li>
                  <li>
                    <span>Nov – Dec</span>
                    <strong>London & Aspen Winter</strong>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Editorial Contact Form (Gione da Silva Architecture) */}
            <div className="gione-contact-form-col">
              <h2 className="gione-info-title">
                GET IN TOUCH!
              </h2>

              <p className="gione-info-subtitle">
                As you've probably gathered by now, we are all about connections and life experiences.
                We do get a buzz with the possibility of meeting new people and documenting their adventures.
                Tell us about your plans!
              </p>

              {/* Quick Direct Row */}
              <div className="gione-direct-row">
                <a href="tel:+447809295403" className="gione-direct-link">
                  <Phone size={13} />
                  <span>T: +44 7809 295 403</span>
                </a>
                <span style={{ color: "var(--line-subtle)" }}>|</span>
                <a href="mailto:hello@starline.studio" className="gione-direct-link">
                  <Mail size={13} />
                  <span>E: HELLO@STARLINE.STUDIO</span>
                </a>
                <span style={{ color: "var(--line-subtle)" }}>|</span>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="gione-direct-link">
                  <MessageSquare size={13} />
                  <span>IG: @STARLINE.STUDIO</span>
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

                  <h3 className="gione-success-title">
                    Thank You, {formData.name || "Friend"}.
                  </h3>

                  <p className="gione-success-desc">
                    Your celebration details have been received by our lead artists. We review calendar availability for <b>{formData.location || "your destination"}</b> and will send a personal response to <b>{formData.email}</b> within 24 hours.
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
                      <span>Direct WhatsApp Message</span>
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
                        <span>NAME *</span>
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
                        <span>EMAIL ADDRESS *</span>
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
                        <span>CONTACT NUMBER *</span>
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
                        <span>EVENT DATE *</span>
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
                      <span>SERVICE YOU ARE INTERESTED IN *</span>
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
                        <span>EVENT LOCATION & VENUE *</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Villa Balbiano, Lake Como / Provence"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="gione-form-input"
                      />
                    </div>

                    <div className="gione-form-group">
                      <label className="gione-form-label">
                        <span>ESTIMATED GUEST COUNT</span>
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
                      <span>PLEASE TELL US A LITTLE ABOUT YOUR EVENT *</span>
                      <span className="gione-form-hint">(Location, style, vibe or anything important to you)</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Share your vision, the atmosphere, aesthetic priorities, or specific traditions..."
                      value={formData.eventDetails}
                      onChange={(e) => setFormData({ ...formData, eventDetails: e.target.value })}
                      className="gione-form-textarea"
                    />
                  </div>

                  {/* Row 6: Wedding Planner & Style Appreciation */}
                  <div className="gione-form-grid-2">
                    <div className="gione-form-group">
                      <label className="gione-form-label">
                        <span>WHO IS YOUR WEDDING PLANNER?</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Lake Como Weddings / Self-Planned"
                        value={formData.weddingPlanner}
                        onChange={(e) => setFormData({ ...formData, weddingPlanner: e.target.value })}
                        className="gione-form-input"
                      />
                    </div>

                    <div className="gione-form-group">
                      <label className="gione-form-label">
                        <span>WHAT DO YOU LIKE ABOUT OUR STYLE?</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. The 35mm analog grain & unhurried documentary emotion"
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
                        <span>INSTAGRAM HANDLES</span>
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
                        <span>WHERE DID YOU HEAR ABOUT US?</span>
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
                          <span>SEND INQUIRY</span>
                          <ArrowRight size={15} />
                        </>
                      )}
                    </button>
                    <p style={{ textAlign: "center", fontSize: "11px", color: "var(--ink-subtle)", marginTop: "12px", letterSpacing: "0.04em" }}>
                      Strict confidentiality assured. We never share your contact details.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Destination FAQ Section */}
          <div className="gione-faq-section">
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
          </div>
        </section>
      </main>

      <Footer showClosingCta={false} />
    </div>
  );
}
