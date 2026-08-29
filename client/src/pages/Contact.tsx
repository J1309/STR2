import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Camera,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  ExternalLink,
  Film,
  Globe2,
  Heart,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  Users,
  Video,
  X
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "wouter";

// Types for form state
interface ContactFormData {
  names: string;
  email: string;
  phone: string;
  instagram: string;
  eventDate: string;
  location: string;
  eventScale: "Multi-Day Destination" | "Single-Day Celebration" | "Intimate / Elopement";
  guestCount: "< 50 Guests" | "50 – 120 Guests" | "120 – 220 Guests" | "220+ Guests";
  service: string;
  budgetRange: string;
  eventDetails: string;
  plannerInfo: string;
  referralSource: string;
  scheduleCall: boolean;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    names: "",
    email: "",
    phone: "",
    instagram: "",
    eventDate: "",
    location: "",
    eventScale: "Multi-Day Destination",
    guestCount: "50 – 120 Guests",
    service: "Dual Atelier (4K Cinema + 35mm Film)",
    budgetRange: "$18,000 – $26,000",
    eventDetails: "",
    plannerInfo: "",
    referralSource: "Vogue / Editorial Feature",
    scheduleCall: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationSuccess, setConsultationSuccess] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  // Live clocks for Dallas Atelier & Lake Como Outpost
  const [dallasTime, setDallasTime] = useState("");
  const [comoTime, setComoTime] = useState("");

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setDallasTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "America/Chicago",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true
        }).format(now)
      );
      setComoTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Europe/Rome",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true
        }).format(now)
      );
    };
    updateClocks();
    const interval = setInterval(updateClocks, 30000);
    return () => clearInterval(interval);
  }, []);

  const editorialPhotos = [
    {
      url: "/contact_editorial.png",
      title: "Monograph IX: Villa Balbiano",
      location: "Lake Como, Italy",
      medium: "35mm Portra 400 + 4K Anamorphic"
    },
    {
      url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1600&auto=format&fit=crop",
      title: "Monograph I: Newport Gilded Age",
      location: "Newport, Rhode Island",
      medium: "Arri Alexa Mini LF // 50mm Anamorphic"
    },
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2400&auto=format&fit=crop",
      title: "Monograph IV: Coastal Solstice",
      location: "Amalfi Coast, Italy",
      medium: "Kodak Vision3 500T 35mm Stock"
    }
  ];

  const travelItinerary = [
    { dates: "MAY 2026", destination: "Lake Como & Amalfi Coast", country: "Italy", status: "2 Slots Left" },
    { dates: "JUNE / JULY 2026", destination: "Scottish Highlands & Cotswolds", country: "United Kingdom", status: "1 Slot Left" },
    { dates: "SEPTEMBER 2026", destination: "Newport Mansions & Nantucket", country: "USA (East Coast)", status: "Available" },
    { dates: "OCTOBER 2026", destination: "Napa Valley & Big Sur", country: "California, USA", status: "1 Slot Left" },
    { dates: "WINTER 2026/27", destination: "St. Moritz & Aspen", country: "Switzerland & USA", status: "Booking Open" }
  ];

  const servicesList = [
    {
      id: "Dual Atelier (4K Cinema + 35mm Film)",
      name: "Dual Atelier Suite",
      tagline: "4K Cinema + 35mm Fine-Art Photography",
      description: "Our signature, cohesive heirloom package. Lead cinematographers and photographers working in seamless artistic synchronization.",
      badge: "MOST REQUESTED",
      icon: Heart
    },
    {
      id: "Living Cinema Monograph (4K)",
      name: "Cinematic Film Monograph",
      tagline: "4K Anamorphic Motion Picture + Super 8mm",
      description: "Cinematic wedding films scored with bespoke orchestral compositions and authentic analog film reels.",
      badge: "CINEMA ONLY",
      icon: Film
    },
    {
      id: "Fine-Art Photography (35mm)",
      name: "Editorial Photography",
      tagline: "Medium Format Digital & 35mm Film Archive",
      description: "Quiet luxury editorial stills, candid documentary poetry, and hand-processed silver gelatin print proofs.",
      badge: "PHOTO ONLY",
      icon: Camera
    },
    {
      id: "Bespoke Multi-Day Monograph",
      name: "Bespoke Weekend Archive",
      tagline: "Multi-Day Global Coverage + Hardcover Book",
      description: "Welcome soiree, wedding day, after-party, sailing excursion, and handcrafted Italian leather monograph albums.",
      badge: "DESTINATION",
      icon: Sparkles
    }
  ];

  const budgetTiers = [
    { value: "$12,000 – $18,000", label: "$12,000 – $18,000", sub: "Intimate / Single-Day" },
    { value: "$18,000 – $26,000", label: "$18,000 – $26,000", sub: "Dual Atelier Signature" },
    { value: "$26,000 – $38,000", label: "$26,000 – $38,000", sub: "Multi-Day Destination" },
    { value: "$38,000+", label: "$38,000+", sub: "Full Bespoke Global Archive" }
  ];

  const faqs = [
    {
      q: "How far in advance should we reserve our celebration date?",
      a: "Because we strictly limit our calendar to 18 dual commissions per year worldwide, key spring and autumn dates typically reserve 9 to 18 months in advance. We recommend inquiring as soon as your venue or celebration date is confirmed."
    },
    {
      q: "How do your cinematography and photography teams coordinate on the day?",
      a: "Our dual team is built on shared artistic rhythm. Unlike separate vendors who may crowd your intimate moments, we operate with quiet documentary restraint—sharing light, angles, and natural pacing so you remain fully present with your loved ones."
    },
    {
      q: "Do you travel internationally for destination weddings?",
      a: "Yes, over 70% of our commissions take place outside our home studios in Dallas and Philadelphia. All international travel, lodging, permits, and equipment logistics are handled completely in-house with transparent flat-rate travel provisions."
    },
    {
      q: "What is the typical delivery timeframe for films and photographs?",
      a: "You will receive an editorial preview suite of 50+ curated stills and a cinematic teaser film within 7 days of your celebration. Full 4K feature films, Super 8mm reels, and complete high-resolution gallery archives are delivered within 8 to 12 weeks."
    },
    {
      q: "Can we schedule a private consultation before committing to a contract?",
      a: "Absolutely. Once we verify date availability for your location, we invite you to a private 25-minute video consultation (or in-person champagne meeting at our Dallas Atelier) to explore your aesthetic vision, album materials, and custom coverage."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 850);
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultationSuccess(true);
    setTimeout(() => {
      setIsConsultationModalOpen(false);
      setConsultationSuccess(false);
    }, 2400);
  };

  return (
    <div className="starline-page-shell" style={{ backgroundColor: "#faf8f5" }}>
      <Navbar variant="light" />

      <main className="starline-page-main" style={{ padding: 0 }}>
        {/* ===================================================================
            0. ATELIER STATUS & AVAILABILITY TICKER
            =================================================================== */}
        <div className="atelier-status-bar">
          <div className="atelier-status-inner">
            <div className="atelier-status-left">
              <span className="atelier-beacon-pulse" />
              <span className="atelier-status-text">
                <b>2026 / 2027 COMMISSIONS ACTIVE</b> — STRICTLY LIMITED TO 18 CELEBRATIONS ANNUALLY
              </span>
            </div>

            <div className="atelier-status-right">
              <span className="atelier-time-chip">
                <Clock size={11} />
                <span>DALLAS ATELIER: {dallasTime || "10:30 AM"}</span>
              </span>
              <span className="atelier-time-divider">/</span>
              <span className="atelier-time-chip">
                <Globe2 size={11} />
                <span>LAKE COMO: {comoTime || "05:30 PM"}</span>
              </span>
            </div>
          </div>
        </div>

        {/* ===================================================================
            1. FULL EDITORIAL SPLIT: STICKY SHOWCASE (LEFT) + ATELIER FORM (RIGHT)
            =================================================================== */}
        <section className="atelier-contact-split-wrapper">
          {/* =================================================================
              LEFT COLUMN: STICKY EDITORIAL IMAGE, TRAVEL PASSPORT & DIRECT CONCIERGE
              ================================================================= */}
          <div className="atelier-sticky-visual-col">
            {/* Visual Plate Frame */}
            <div className="atelier-plate-frame">
              <img
                src={editorialPhotos[selectedPhotoIndex].url}
                alt={editorialPhotos[selectedPhotoIndex].title}
                className="atelier-plate-image"
              />
              <div className="atelier-plate-scrim" />

              {/* Viewfinder Register Marks */}
              <div className="atelier-viewfinder-mark top-left">+</div>
              <div className="atelier-viewfinder-mark top-right">+</div>
              <div className="atelier-viewfinder-mark bottom-left">+</div>
              <div className="atelier-viewfinder-mark bottom-right">+</div>

              {/* Top Tag */}
              <div className="atelier-plate-top-badge">
                <Sparkles size={11} />
                <span>COMMISSIONS WORLDWIDE // ATELIER EDITION</span>
              </div>

              {/* Bottom Metadata Plate */}
              <div className="atelier-plate-bottom-info">
                <p className="atelier-plate-caption-title">
                  {editorialPhotos[selectedPhotoIndex].title}
                </p>
                <div className="atelier-plate-caption-meta">
                  <span>{editorialPhotos[selectedPhotoIndex].location}</span>
                  <span className="dot">•</span>
                  <span>{editorialPhotos[selectedPhotoIndex].medium}</span>
                </div>

                {/* Thumbnails to switch photo */}
                <div className="atelier-plate-thumbnails">
                  {editorialPhotos.map((p, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedPhotoIndex(idx)}
                      className={`atelier-plate-thumb-btn ${selectedPhotoIndex === idx ? "is-active" : ""}`}
                      title={p.title}
                    >
                      <img src={p.url} alt={p.title} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Travel Itinerary Passport */}
            <div className="atelier-travel-passport-card">
              <div className="atelier-passport-header">
                <div className="atelier-passport-title-wrap">
                  <Globe2 size={14} className="atelier-gold-icon" />
                  <span className="atelier-passport-title">2026 WORLDWIDE TRAVEL SCHEDULE</span>
                </div>
                <span className="atelier-passport-tag">GLOBAL PASSPORT</span>
              </div>

              <p className="atelier-passport-desc">
                We frequently travel to these destination corridors. Dates coinciding with scheduled regions incur zero or reduced transit fees.
              </p>

              <div className="atelier-itinerary-list">
                {travelItinerary.map((item, idx) => (
                  <div key={idx} className="atelier-itinerary-row">
                    <div className="atelier-itinerary-dates">{item.dates}</div>
                    <div className="atelier-itinerary-loc">
                      <b>{item.destination}</b>
                      <span>{item.country}</span>
                    </div>
                    <div className="atelier-itinerary-status">{item.status}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Atelier Concierge */}
            <div className="atelier-concierge-card">
              <div className="atelier-concierge-header">
                <div className="atelier-concierge-title-box">
                  <ShieldCheck size={14} className="atelier-gold-icon" />
                  <span className="atelier-concierge-title">DIRECT ATELIER CHANNELS</span>
                </div>
                <span className="atelier-concierge-time">EST. 2018</span>
              </div>

              <div className="atelier-concierge-channels">
                <a href="tel:+12148104492" className="atelier-concierge-item">
                  <Phone size={14} />
                  <div>
                    <span className="channel-label">PRIVATE TELEPHONE &amp; WHATSAPP</span>
                    <span className="channel-value">+1 (214) 810-4492</span>
                  </div>
                </a>

                <a href="mailto:concierge@starline.studio" className="atelier-concierge-item">
                  <Mail size={14} />
                  <div>
                    <span className="channel-label">VIP CONCIERGE EMAIL</span>
                    <span className="channel-value">CONCIERGE@STARLINE.STUDIO</span>
                  </div>
                </a>

                <div className="atelier-concierge-item">
                  <MapPin size={14} />
                  <div>
                    <span className="channel-label">PHYSICAL ATELIER</span>
                    <span className="channel-value">DALLAS ARTS DISTRICT // 2200 FLORA ST, TX</span>
                  </div>
                </div>
              </div>

              {/* Fast-Track Consultation Button */}
              <button
                type="button"
                onClick={() => setIsConsultationModalOpen(true)}
                className="atelier-fast-track-btn"
              >
                <Calendar size={13} />
                <span>FAST-TRACK A 20-MIN VIDEO CONSULTATION</span>
                <ArrowRight size={13} />
              </button>
            </div>

            {/* Editorial Press Quote */}
            <div className="atelier-press-quote-box">
              <p className="atelier-press-text">
                &ldquo;Starline captures wedding cinema with the deliberate stillness of fine artists and the emotional resonance of modern cinema.&rdquo;
              </p>
              <span className="atelier-press-author">— VOGUE WEDDINGS // EDITORIAL HIGHLIGHT</span>
            </div>
          </div>

          {/* =================================================================
              RIGHT COLUMN: BESPOKE COMMISSION INQUIRY FORM & QUESTIONNAIRE
              ================================================================= */}
          <div className="atelier-form-col">
            {submitted ? (
              /* =============================================================
                 SUBMISSION SUCCESS STATE
                 ============================================================= */
              <motion.div
                className="atelier-success-container"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="atelier-success-seal">
                  <div className="atelier-success-seal-ring">
                    <CheckCircle2 size={36} color="#1e457e" />
                  </div>
                  <span className="atelier-success-edition">INQUIRY TRANSMITTED // 2026 EDITION</span>
                </div>

                <h1 className="atelier-success-title">
                  Thank You, {formData.names || "Friend"}
                </h1>

                <p className="atelier-success-lead">
                  Your celebration details for <b>{formData.location || "your destination"}</b> on <b>{formData.eventDate || "your chosen date"}</b> have been securely received by our studio directors.
                </p>

                {/* 3-Step Assurance Roadmap */}
                <div className="atelier-success-roadmap">
                  <span className="roadmap-heading">WHAT HAPPENS NEXT — OUR 3-STEP ATELIER PROCESS</span>

                  <div className="roadmap-step">
                    <div className="step-num">01</div>
                    <div className="step-content">
                      <h4>Artistic &amp; Calendar Verification (Within 24 Hours)</h4>
                      <p>
                        We verify our global production calendar for {formData.location || "your destination"} and assemble your customized commission portfolio.
                      </p>
                    </div>
                  </div>

                  <div className="roadmap-step">
                    <div className="step-num">02</div>
                    <div className="step-content">
                      <h4>Private Vision Consultation</h4>
                      <p>
                        We will email you at <b>{formData.email}</b> to coordinate a 25-minute video call or Dallas studio meeting to review your celebration timeline, soundtrack choices, and album formats.
                      </p>
                    </div>
                  </div>

                  <div className="roadmap-step">
                    <div className="step-num">03</div>
                    <div className="step-content">
                      <h4>Bespoke Commission Suite &amp; Date Reservation</h4>
                      <p>
                        We prepare a formal digital agreement, lock your celebration date exclusively, and begin artistic pre-production.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="atelier-success-actions">
                  <button
                    type="button"
                    onClick={() => setIsConsultationModalOpen(true)}
                    className="atelier-btn-primary"
                  >
                    <Calendar size={14} />
                    <span>Schedule Private Vision Call Now</span>
                  </button>

                  <Link href="/portfolio" className="atelier-btn-secondary">
                    <span>Explore Full Portfolio</span>
                    <ArrowRight size={14} />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="atelier-btn-text"
                  >
                    Send Another Note or Modify Details
                  </button>
                </div>
              </motion.div>
            ) : (
              /* =============================================================
                 PRIMARY ATELIER INQUIRY FORM
                 ============================================================= */
              <div className="atelier-form-wrapper">
                {/* Form Header */}
                <div className="atelier-form-header">
                  <span className="atelier-form-kicker">
                    THE ATELIER // PRIVATE COMMISSION REQUEST
                  </span>
                  <h1 className="atelier-form-title">
                    RESERVE YOUR CELEBRATION
                  </h1>
                  <p className="atelier-form-lead">
                    We accept a strictly limited number of commissions each season to ensure uncompromising devotion to every film and photograph. Please share the nuances of your celebration below.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="atelier-interactive-form">
                  {/* =========================================================
                      SECTION 1: THE COUPLE & COMMUNICATION
                      ========================================================= */}
                  <div className="form-section-block">
                    <div className="form-section-header">
                      <span className="section-number">01</span>
                      <div className="section-meta">
                        <h3>THE COUPLE &amp; DIRECT COORDINATES</h3>
                        <p>How we may formally address you and reach out.</p>
                      </div>
                    </div>

                    <div className="form-grid-2">
                      <div className="luxury-field-group">
                        <label className="luxury-field-label">
                          YOUR NAMES <span className="req">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Maya Rios & Julian Scott"
                          value={formData.names}
                          onChange={(e) => setFormData({ ...formData, names: e.target.value })}
                          className="luxury-text-input"
                        />
                      </div>

                      <div className="luxury-field-group">
                        <label className="luxury-field-label">
                          EMAIL ADDRESS <span className="req">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. maya@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="luxury-text-input"
                        />
                      </div>
                    </div>

                    <div className="form-grid-2" style={{ marginTop: "20px" }}>
                      <div className="luxury-field-group">
                        <label className="luxury-field-label">
                          PHONE / WHATSAPP NUMBER <span className="req">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +1 (555) 234-5678 / +44..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="luxury-text-input"
                        />
                      </div>

                      <div className="luxury-field-group">
                        <label className="luxury-field-label">
                          INSTAGRAM / PINTEREST HANDLES <span className="opt">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. @mayarios (helps us discover your aesthetic)"
                          value={formData.instagram}
                          onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                          className="luxury-text-input"
                        />
                      </div>
                    </div>
                  </div>

                  {/* =========================================================
                      SECTION 2: CELEBRATION DETAILS & SCALE
                      ========================================================= */}
                  <div className="form-section-block">
                    <div className="form-section-header">
                      <span className="section-number">02</span>
                      <div className="section-meta">
                        <h3>CELEBRATION DATES &amp; DESTINATION</h3>
                        <p>Tell us where and when your gathering will unfold.</p>
                      </div>
                    </div>

                    <div className="form-grid-2">
                      <div className="luxury-field-group">
                        <label className="luxury-field-label">
                          CELEBRATION DATE OR SEASON <span className="req">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. 18 September 2026 / Autumn 2026"
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          className="luxury-text-input"
                        />
                      </div>

                      <div className="luxury-field-group">
                        <label className="luxury-field-label">
                          DESTINATION, VENUE OR CITY <span className="req">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Villa Balbiano, Lake Como / The Breakers, Newport"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="luxury-text-input"
                        />
                      </div>
                    </div>

                    {/* Celebration Scale Selector */}
                    <div className="luxury-field-group" style={{ marginTop: "24px" }}>
                      <label className="luxury-field-label">
                        EVENT SCOPE &amp; DURATION
                      </label>
                      <div className="luxury-chips-grid">
                        {[
                          "Multi-Day Destination",
                          "Single-Day Celebration",
                          "Intimate / Elopement"
                        ].map((scale) => (
                          <button
                            key={scale}
                            type="button"
                            onClick={() =>
                              setFormData({
                                ...formData,
                                eventScale: scale as ContactFormData["eventScale"]
                              })
                            }
                            className={`luxury-chip-btn ${formData.eventScale === scale ? "is-selected" : ""}`}
                          >
                            <span className="chip-indicator" />
                            <span>{scale}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Guest Count */}
                    <div className="luxury-field-group" style={{ marginTop: "20px" }}>
                      <label className="luxury-field-label">
                        ESTIMATED GUEST COUNT
                      </label>
                      <div className="luxury-chips-grid">
                        {[
                          "< 50 Guests",
                          "50 – 120 Guests",
                          "120 – 220 Guests",
                          "220+ Guests"
                        ].map((count) => (
                          <button
                            key={count}
                            type="button"
                            onClick={() =>
                              setFormData({
                                ...formData,
                                guestCount: count as ContactFormData["guestCount"]
                              })
                            }
                            className={`luxury-chip-btn ${formData.guestCount === count ? "is-selected" : ""}`}
                          >
                            <span className="chip-indicator" />
                            <span>{count}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* =========================================================
                      SECTION 3: ATELIER SERVICE SELECTION (INTERACTIVE CARDS)
                      ========================================================= */}
                  <div className="form-section-block">
                    <div className="form-section-header">
                      <span className="section-number">03</span>
                      <div className="section-meta">
                        <h3>COMMISSION SERVICE &amp; MEDIUM</h3>
                        <p>Select your desired artistic medium and heirloom suite.</p>
                      </div>
                    </div>

                    <div className="service-cards-grid">
                      {servicesList.map((srv) => {
                        const Icon = srv.icon;
                        const isSelected = formData.service === srv.id;
                        return (
                          <div
                            key={srv.id}
                            onClick={() => setFormData({ ...formData, service: srv.id })}
                            className={`service-card-item ${isSelected ? "is-selected" : ""}`}
                          >
                            <div className="service-card-top">
                              <div className="service-icon-box">
                                <Icon size={16} />
                              </div>
                              <span className="service-badge">{srv.badge}</span>
                            </div>

                            <h4 className="service-name">{srv.name}</h4>
                            <span className="service-tagline">{srv.tagline}</span>
                            <p className="service-desc">{srv.description}</p>

                            <div className="service-select-indicator">
                              <div className={`radio-dot ${isSelected ? "is-checked" : ""}`} />
                              <span>{isSelected ? "Selected Service" : "Select Service"}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* =========================================================
                      SECTION 4: ESTIMATED INVESTMENT RANGE
                      ========================================================= */}
                  <div className="form-section-block">
                    <div className="form-section-header">
                      <span className="section-number">04</span>
                      <div className="section-meta">
                        <h3>ESTIMATED INVESTMENT SPECTRUM</h3>
                        <p>Helps us tailor travel provisions and coverage duration.</p>
                      </div>
                    </div>

                    <div className="budget-spectrum-grid">
                      {budgetTiers.map((tier) => {
                        const isSelected = formData.budgetRange === tier.value;
                        return (
                          <button
                            key={tier.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, budgetRange: tier.value })}
                            className={`budget-tier-card ${isSelected ? "is-selected" : ""}`}
                          >
                            <span className="tier-amount">{tier.label}</span>
                            <span className="tier-sub">{tier.sub}</span>
                            <div className={`tier-indicator ${isSelected ? "is-checked" : ""}`}>
                              {isSelected && <Check size={12} />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* =========================================================
                      SECTION 5: CELEBRATION VISION & ARTISTIC PRIORITIES
                      ========================================================= */}
                  <div className="form-section-block">
                    <div className="form-section-header">
                      <span className="section-number">05</span>
                      <div className="section-meta">
                        <h3>CELEBRATION VISION &amp; DETAILS</h3>
                        <p>Share what matters most to your aesthetic and celebration.</p>
                      </div>
                    </div>

                    <div className="luxury-field-group">
                      <label className="luxury-field-label">
                        TELL US ABOUT YOUR PLANS, VIBE &amp; ARTISTIC PRIORITIES <span className="req">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your celebration atmosphere, the setting, musical vibe, and what emotions you want your films & photographs to evoke 30 years from now..."
                        value={formData.eventDetails}
                        onChange={(e) =>
                          setFormData({ ...formData, eventDetails: e.target.value })
                        }
                        className="luxury-textarea"
                      />
                    </div>

                    <div className="form-grid-2" style={{ marginTop: "20px" }}>
                      <div className="luxury-field-group">
                        <label className="luxury-field-label">
                          WEDDING PLANNER / DESIGNER <span className="opt">(If known)</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Alison Events / Lake Como Weddings"
                          value={formData.plannerInfo}
                          onChange={(e) =>
                            setFormData({ ...formData, plannerInfo: e.target.value })
                          }
                          className="luxury-text-input"
                        />
                      </div>

                      <div className="luxury-field-group">
                        <label className="luxury-field-label">
                          HOW DID YOU DISCOVER STARLINE?
                        </label>
                        <div className="luxury-select-wrapper">
                          <select
                            value={formData.referralSource}
                            onChange={(e) =>
                              setFormData({ ...formData, referralSource: e.target.value })
                            }
                            className="luxury-select-input"
                          >
                            <option value="Vogue / Editorial Feature">Vogue / Editorial Feature</option>
                            <option value="Instagram / Social Discovery">Instagram / Social Discovery</option>
                            <option value="Wedding Planner Recommendation">Wedding Planner Recommendation</option>
                            <option value="Friend or Couple Referral">Friend or Couple Referral</option>
                            <option value="Google / Search">Google / Search</option>
                            <option value="Other Publication">Other Publication</option>
                          </select>
                          <ChevronDown size={14} className="select-chevron" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* =========================================================
                      SUBMIT ACTION & PRIVACY NOTE
                      ========================================================= */}
                  <div className="atelier-submit-wrapper">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="atelier-submit-action-btn"
                    >
                      <span>
                        {isSubmitting ? "TRANSMITTING TO DIRECTORS..." : "TRANSMIT COMMISSION INQUIRY"}
                      </span>
                      <ArrowRight size={16} />
                    </button>

                    <div className="atelier-submit-guarantee">
                      <ShieldCheck size={14} />
                      <span>
                        Strictly confidential. Every inquiry is personally reviewed by our lead directors within 24–48 hours.
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>

        {/* ===================================================================
            2. THE THREE PILLARS OF STARLINE ATELIER (ASSURANCE SECTION)
            =================================================================== */}
        <section className="atelier-pillars-section">
          <div className="atelier-pillars-inner">
            <div className="atelier-pillars-header">
              <span className="pillars-kicker">THE ATELIER STANDARD</span>
              <h2 className="pillars-title">UNCOMPROMISING ARTISTRY &amp; DEVOTION</h2>
              <p className="pillars-lead">
                Every wedding is treated as an original piece of cinematic and photographic monograph art.
              </p>
            </div>

            <div className="atelier-pillars-grid">
              <div className="pillar-item">
                <div className="pillar-number">01</div>
                <h3 className="pillar-title">Strict Calendar Limitation</h3>
                <p className="pillar-text">
                  We accept a maximum of 18 dual commissions per year worldwide. This deliberate limit guarantees that your celebration receives our undivided artistic obsession from pre-production through final color grading.
                </p>
              </div>

              <div className="pillar-item">
                <div className="pillar-number">02</div>
                <h3 className="pillar-title">Dual Medium Synergy</h3>
                <p className="pillar-text">
                  Our cinematographers and photographers share the exact same aesthetic language. We orchestrate lighting, lenses, and unobtrusive positioning in tandem, allowing both mediums to flourish without friction.
                </p>
              </div>

              <div className="pillar-item">
                <div className="pillar-number">03</div>
                <h3 className="pillar-title">Archival Heirlooms</h3>
                <p className="pillar-text">
                  Delivered in master 4K ProRes, raw archival cloud storage, and custom handcrafted Italian linen and leather presentation cases designed to be cherished for generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            3. FREQUENTLY ASKED QUESTIONS ACCORDION
            =================================================================== */}
        <section className="atelier-faq-accordion-section">
          <div className="atelier-faq-inner">
            <div className="atelier-faq-header">
              <span className="faq-kicker">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="faq-title">COMMISSIONS &amp; LOGISTICS</h2>
              <p className="faq-subtitle">
                Everything you need to know about our reservation process, travel coordination, and delivery standards.
              </p>
            </div>

            <div className="atelier-faq-list">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`atelier-faq-item ${isOpen ? "is-open" : ""}`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="atelier-faq-question-btn"
                    >
                      <span className="faq-question-text">{faq.q}</span>
                      <ChevronDown
                        size={16}
                        className={`faq-chevron ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="atelier-faq-answer-wrap"
                        >
                          <p className="atelier-faq-answer-text">{faq.a}</p>
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

      {/* =====================================================================
          4. FAST-TRACK CONSULTATION MODAL
          ===================================================================== */}
      <AnimatePresence>
        {isConsultationModalOpen && (
          <div className="atelier-modal-overlay">
            <motion.div
              className="atelier-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsConsultationModalOpen(false)}
            />

            <motion.div
              className="atelier-modal-box"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <button
                type="button"
                onClick={() => setIsConsultationModalOpen(false)}
                className="atelier-modal-close"
              >
                <X size={18} />
              </button>

              <div className="atelier-modal-header">
                <span className="modal-kicker">DIRECT VISION CONSULTATION</span>
                <h3 className="modal-title">SCHEDULE A 20-MIN PRIVATE CALL</h3>
                <p className="modal-desc">
                  Connect directly with our lead directors via Zoom or private meeting at the Dallas Atelier.
                </p>
              </div>

              {consultationSuccess ? (
                <div className="modal-success-box">
                  <CheckCircle2 size={36} color="#1e457e" />
                  <h4>Consultation Requested</h4>
                  <p>
                    We will email you directly within a few hours to confirm your chosen time slot and provide a calendar link.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleConsultationSubmit} className="modal-form">
                  <div className="modal-form-group">
                    <label>YOUR NAMES</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya & Julian"
                      className="luxury-text-input"
                    />
                  </div>

                  <div className="modal-form-group">
                    <label>EMAIL ADDRESS</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. maya@example.com"
                      className="luxury-text-input"
                    />
                  </div>

                  <div className="modal-form-group">
                    <label>PREFERRED MEETING FORMAT &amp; TIMEFRAME</label>
                    <select className="luxury-select-input">
                      <option>Zoom Video Consultation (Evening / Weekday)</option>
                      <option>Zoom Video Consultation (Weekend Morning)</option>
                      <option>In-Person Dallas Arts District Atelier Meeting</option>
                      <option>Direct Phone Call (+1 / WhatsApp)</option>
                    </select>
                  </div>

                  <div className="modal-form-group">
                    <label>TARGET CELEBRATION YEAR / LOCATION</label>
                    <input
                      type="text"
                      placeholder="e.g. Autumn 2026 / Lake Como, Italy"
                      className="luxury-text-input"
                    />
                  </div>

                  <button type="submit" className="atelier-submit-action-btn" style={{ marginTop: "16px" }}>
                    <span>CONFIRM CONSULTATION REQUEST</span>
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer showClosingCta={false} />
    </div>
  );
}
