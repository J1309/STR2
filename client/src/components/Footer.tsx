import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Instagram, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

interface FooterProps {
  showClosingCta?: boolean;
}

type PolicyKey = "privacy" | "terms" | "licensing" | "cancellation" | "accessibility";

interface PolicyContent {
  title: string;
  lastUpdated: string;
  badge: string;
  sections: { heading: string; text: string }[];
}

const studioPolicies: Record<PolicyKey, PolicyContent> = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "January 2026",
    badge: "Client Data Protection",
    sections: [
      {
        heading: "1. Information We Collect",
        text: "When you submit an inquiry form or communicate with Starline Studio, we collect necessary contact information solely to provide photography consultations, quotes, and service agreements."
      },
      {
        heading: "2. Gallery Privacy",
        text: "All client online preview and download galleries are hosted on encrypted, private cloud infrastructure with optional PIN protection."
      }
    ]
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "January 2026",
    badge: "Booking Standards",
    sections: [
      {
        heading: "1. Booking & Retainers",
        text: "Dates are reserved exclusively upon execution of our written service contract and receipt of the booking retainer."
      },
      {
        heading: "2. Delivery Timelines",
        text: "Sneak peek galleries are delivered within 72 hours. Complete fine art cinema and image galleries are delivered within 6 to 8 weeks."
      }
    ]
  },
  licensing: {
    title: "Image & Film Licensing",
    lastUpdated: "January 2026",
    badge: "Intellectual Property",
    sections: [
      {
        heading: "1. Personal Usage & Printing Rights",
        text: "Clients receive an unrestricted, perpetual Personal Printing & Display License with all delivered high-resolution files."
      }
    ]
  },
  cancellation: {
    title: "Rescheduling & Retainer Policy",
    lastUpdated: "January 2026",
    badge: "Flexible Scheduling",
    sections: [
      {
        heading: "1. Rescheduling Guidelines",
        text: "If you need to reschedule your celebration date, retainers are transferable to any mutually available date within 12 months."
      }
    ]
  },
  accessibility: {
    title: "Accessibility Statement",
    lastUpdated: "January 2026",
    badge: "WCAG Conformance",
    sections: [
      {
        heading: "1. Our Commitment",
        text: "Starline Studio is committed to ensuring our digital experiences are fully accessible according to WCAG 2.1 AA standards."
      }
    ]
  }
};

export default function Footer({ showClosingCta = false }: FooterProps) {
  const [activePolicy, setActivePolicy] = useState<PolicyKey | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [newsletterSuccess, setNewsletterSuccess] = useState<boolean>(false);

  const instagramImages = [
    { src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=600&auto=format&fit=crop", label: "Marrakech" },
    { src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&auto=format&fit=crop", label: "French Riviera" },
    { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop", label: "High Sierra" },
    { src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop", label: "Amalfi Coast" },
    { src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop", label: "Santa Fe" },
    { src: "/bg_hero_page.png", label: "Lake Como" }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSuccess(true);
      setNewsletterEmail("");
      setTimeout(() => setNewsletterSuccess(false), 6000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="minimal-footer">
      {/* 1. Curated Instagram Visual Reel */}
      <div className="footer-instagram-section">
        <div className="footer-instagram-header">
          <span className="minimal-overline">FOLLOW OUR VISUAL JOURNAL</span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="footer-instagram-handle"
          >
            @starline.cinema
          </a>
        </div>

        <div className="footer-instagram-grid">
          {instagramImages.map((item, idx) => (
            <a
              key={idx}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="footer-insta-item"
              aria-label={`View ${item.label} on Instagram`}
            >
              <img src={item.src} alt={item.label} loading="lazy" />
              <div className="footer-insta-overlay">
                <Instagram size={18} />
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="minimal-footer-inner">
        {/* Optional Closing Commission CTA */}
        {showClosingCta && (
          <div className="minimal-footer-cta">
            <p className="minimal-overline">Available Worldwide</p>
            <h2>Let’s Give Your Story<br />A Lasting Frame</h2>
            <p>Currently accepting commissions for the upcoming destination calendar across Europe, the Americas & beyond.</p>
            <Link href="/contact" className="minimal-btn-outline" style={{ color: "var(--ink-primary)", borderColor: "var(--ink-primary)", background: "transparent" }}>
              <span>Inquire with Studio</span>
            </Link>
          </div>
        )}

        {/* 2. Main 4-Column Architectural Grid */}
        <div className="footer-architectural-grid">
          {/* Col 1: The Atelier */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand-header">
              <img src="/Str_logo.png" alt="Starline Studio Logo" className="footer-brand-logo-img" />
              <span className="footer-brand-title">STARLINE</span>
            </div>
            <p className="footer-brand-bio">
              Cinematic destination wedding films & photography. Crafting living heirlooms of love, light, and untamed elegance worldwide.
            </p>
            <div className="footer-brand-email">
              <span className="footer-col-label">Direct Concierge</span>
              <a href="mailto:concierge@starlinestudio.com">concierge@starlinestudio.com</a>
            </div>
          </div>

          {/* Col 2: Studios */}
          <div className="footer-col">
            <span className="footer-col-label">STUDIOS</span>
            <ul className="footer-links-list">
              <li>
                <strong>LONDON / EUROPE</strong>
                <span>Mayfair & Côte d’Azur</span>
              </li>
              <li>
                <strong>CALIFORNIA / AMERICAS</strong>
                <span>Santa Barbara & Big Sur</span>
              </li>
              <li>
                <strong>DESTINATION CALENDAR</strong>
                <span>Available Worldwide</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="footer-col">
            <span className="footer-col-label">EXPLORE</span>
            <nav className="footer-nav-column" aria-label="Footer navigation">
              <Link href="/">Home</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/journal">Journal</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact / Inquire</Link>
            </nav>
          </div>

          {/* Col 4: Private VIP Dispatch */}
          <div className="footer-col footer-col-dispatch">
            <span className="footer-col-label">VIP DISPATCH</span>
            <p className="footer-dispatch-note">
              Curated visual essays, private destination field guides, and seasonal availability previews.
            </p>

            {newsletterSuccess ? (
              <p className="footer-dispatch-success-note">
                ✓ Thank you. You are added to our private dispatch list.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="footer-input-group">
                <input
                  type="email"
                  placeholder="ENTER YOUR EMAIL"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  aria-label="Email address for dispatch"
                />
                <button type="submit" aria-label="Join newsletter">
                  <span>JOIN</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 3. Prestigious Press Ribbon */}
        <div className="footer-press-ribbon">
          <span className="footer-press-label">FEATURED & ACCREDITED BY</span>
          <div className="footer-press-items">
            <span>VOGUE WEDDINGS</span>
            <span className="footer-press-dot">•</span>
            <span>HARPER’S BAZAAR</span>
            <span className="footer-press-dot">•</span>
            <span>OVER THE MOON</span>
            <span className="footer-press-dot">•</span>
            <span>WEDLUXE GLOBAL</span>
            <span className="footer-press-dot">•</span>
            <span>JUNEBUG BEST OF THE BEST</span>
          </div>
        </div>

        {/* 4. Bottom Utility Bar */}
        <div className="minimal-footer-bottom">
          <div className="footer-copyright">
            <span>© {new Date().getFullYear()} Starline Studio. All rights reserved.</span>
          </div>

          <div className="footer-policy-links">
            <button
              onClick={() => setActivePolicy("privacy")}
              className="footer-policy-btn"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActivePolicy("terms")}
              className="footer-policy-btn"
            >
              Terms of Service
            </button>
            <button
              onClick={() => setActivePolicy("licensing")}
              className="footer-policy-btn"
            >
              Image Licensing
            </button>
            <button
              onClick={() => setActivePolicy("accessibility")}
              className="footer-policy-btn"
            >
              Accessibility
            </button>
          </div>

          <div>
            <button
              onClick={scrollToTop}
              className="footer-back-to-top"
              aria-label="Back to top"
            >
              <span>Back to Top ↑</span>
            </button>
          </div>
        </div>
      </div>

      {/* Policy Modal */}
      <AnimatePresence>
        {activePolicy && (
          <motion.div
            className="story-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePolicy(null)}
          >
            <motion.div
              className="story-modal-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="story-modal-header">
                <div>
                  <span className="story-modal-cat">{studioPolicies[activePolicy].badge}</span>
                  <h2 className="story-modal-title">{studioPolicies[activePolicy].title}</h2>
                </div>
                <button
                  className="story-modal-close-btn"
                  onClick={() => setActivePolicy(null)}
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="story-modal-body">
                {studioPolicies[activePolicy].sections.map((sec, idx) => (
                  <div key={idx} style={{ marginBottom: "20px" }}>
                    <h3 style={{ fontSize: "14px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 8px" }}>
                      {sec.heading}
                    </h3>
                    <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: 1.8, color: "var(--ink-muted)", margin: 0 }}>
                      {sec.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
