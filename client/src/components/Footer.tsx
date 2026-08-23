import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Globe, Heart, Instagram, Lock, Shield, Sparkles, X } from "lucide-react";
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
        text: "When you submit an inquiry form or communicate with Starline Studio, we collect necessary contact information (name, email address, phone number, event dates, celebration locations, and aesthetic preferences) solely to provide photography consultations, quotes, and service agreements."
      },
      {
        heading: "2. Gallery Privacy & Image Security",
        text: "All client online preview and download galleries are hosted on encrypted, private cloud infrastructure with optional PIN protection. We respect our clients' privacy; private commissions and non-disclosure requests (NDAs) are strictly honored upon written notice before session dates."
      },
      {
        heading: "3. No Third-Party Data Selling",
        text: "We will never sell, lease, or distribute your personal contact information to third-party advertisers or data brokers under any circumstances."
      },
      {
        heading: "4. Cookie & Analytic Transparency",
        text: "Our website uses essential and privacy-friendly analytics cookies solely to analyze traffic patterns and maintain responsive performance across devices."
      }
    ]
  },
  terms: {
    title: "Terms of Service & Commission Agreement",
    lastUpdated: "January 2026",
    badge: "Booking & Service Standards",
    sections: [
      {
        heading: "1. Booking & Retainers",
        text: "Dates are reserved exclusively upon the execution of our written service contract and the receipt of a non-refundable 30% booking retainer. Dates are never held without a signed agreement."
      },
      {
        heading: "2. Delivery Timelines",
        text: "Sneak peek galleries (20–40 hand-edited preview frames) are delivered within 72 hours of your celebration. Complete, high-resolution fine art galleries are delivered within 6 to 8 weeks for weddings and 3 to 4 weeks for portrait/editorial sessions."
      },
      {
        heading: "3. Artistic Discretion",
        text: "Starline Studio curates and edits imagery according to the distinctive natural light, color harmony, and film-toned aesthetic represented in our public portfolio. Raw unedited camera files (RAW files) are proprietary digital negatives and are not released."
      },
      {
        heading: "4. Travel & Accommodation",
        text: "For events requiring domestic or international travel beyond our standard 50-mile Southern California driving radius, round-trip travel and modest lodging are calculated transparently and confirmed in advance without post-event surcharges."
      }
    ]
  },
  licensing: {
    title: "Image Copyright & Licensing Terms",
    lastUpdated: "January 2026",
    badge: "Intellectual Property",
    sections: [
      {
        heading: "1. Studio Copyright",
        text: "In accordance with international and United States copyright laws, all original photographs, digital negatives, and artistic compositions captured by Starline Studio remain the exclusive intellectual property of Starline Studio and Lila Vance."
      },
      {
        heading: "2. Personal Usage & Printing Rights",
        text: "Clients receive an uninhibited, perpetual Personal Printing & Display License with all delivered high-resolution image files. You may freely print, frame, create albums, and share imagery on personal social channels with photography credit."
      },
      {
        heading: "3. Commercial & Vendor Usage",
        text: "Third-party wedding vendors, venues, fashion designers, and commercial publications wishing to use Starline imagery for advertising, print collateral, or paid campaigns must request a commercial usage license from hello@starline.studio."
      }
    ]
  },
  cancellation: {
    title: "Retainer, Rescheduling & Cancellation Policy",
    lastUpdated: "January 2026",
    badge: "Flexible Scheduling",
    sections: [
      {
        heading: "1. Rescheduling Guidelines",
        text: "If you need to reschedule your wedding or session date due to unforeseen circumstances, we will transfer 100% of your retainer to any mutually available date within 12 months of your original booking without penalty."
      },
      {
        heading: "2. Cancellations",
        text: "In the event of complete cancellation by the client, the initial 30% retainer is retained to compensate for the dates reserved and inquiries turned away. Any additional payments made prior to 60 days before the scheduled date will be promptly refunded."
      },
      {
        heading: "3. Force Majeure & Severe Weather",
        text: "In the unlikely event of extreme weather emergencies, government travel bans, or severe artist incapacitation, Starline Studio will either provide a seasoned associate shooter of identical caliber or issue a full refund."
      }
    ]
  },
  accessibility: {
    title: "Digital Accessibility Statement",
    lastUpdated: "January 2026",
    badge: "WCAG 2.1 Conformance",
    sections: [
      {
        heading: "1. Our Commitment",
        text: "Starline Studio is committed to ensuring that our digital photography galleries, booking concierge, and online editorial articles are fully accessible to individuals with disabilities."
      },
      {
        heading: "2. Accessibility Standards",
        text: "We continually test and enhance our website to meet or exceed Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards, including semantic HTML structure, keyboard navigation, descriptive ARIA attributes, and high contrast typography."
      },
      {
        heading: "3. Accessibility Inquiries",
        text: "If you encounter any barrier accessing content or galleries on this site, please contact us directly at hello@starline.studio with the subject 'Accessibility Assistance' and we will assist you promptly."
      }
    ]
  }
};

export default function Footer({ showClosingCta = true }: FooterProps) {
  const [activePolicy, setActivePolicy] = useState<PolicyKey | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "success">("idle");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterStatus("success");
      setTimeout(() => {
        setNewsletterEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="starline-global-footer">
      {/* Atmospheric Closing CTA */}
      {showClosingCta && (
        <section className="starline-closing-banner">
          <div className="starline-closing-content">
            <p className="starline-closing-kicker">Have a story in mind?</p>
            <h2>Let’s give it<br /><em>a lasting frame.</em></h2>
            <p className="starline-closing-desc">
              Currently accepting a limited number of commissions for the 2026/2027 calendar. Based in California and traveling worldwide.
            </p>
            <div className="starline-closing-actions">
              <Link href="/contact" className="starline-closing-btn">
                <span>Begin a Conversation</span>
                <ArrowUpRight size={17} />
              </Link>
              <a href="mailto:hello@starline.studio" className="starline-closing-email">
                hello@starline.studio
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Main Multi-Column Footer */}
      <div className="starline-footer-main-wrap">
        <div className="starline-footer-grid">
          {/* Brand & Manifesto Column */}
          <div className="starline-footer-col footer-col-brand">
            <Link href="/" className="footer-brand-title">
              <span>S T A R L I N E</span>
              <small>P H O T O G R A P H Y</small>
            </Link>
            <p className="footer-brand-manifesto">
              Documentary, editorial, and fine-art visual narratives preserving natural light, sincere human intimacy, and fleeting beauty worldwide.
            </p>

            <div className="footer-status-pill">
              <span className="status-indicator-dot" />
              <span>2026/2027 Calendar: Accepting Dates</span>
            </div>

            {/* Newsletter Dispatch */}
            <div className="footer-newsletter-wrap">
              <span className="newsletter-title">Field Dispatch & Print Releases</span>
              <p className="newsletter-desc">Receive seasonal journal essays, location guides, and private print drop dates.</p>
              {newsletterStatus === "success" ? (
                <div className="newsletter-success-tag">
                  <Check size={14} />
                  <span>Subscribed to Starline Field Notes</span>
                </div>
              ) : (
                <form className="footer-newsletter-form" onSubmit={handleNewsletterSubmit}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    aria-label="Email address for newsletter"
                  />
                  <button type="submit" aria-label="Subscribe to newsletter">
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="starline-footer-col">
            <h4 className="footer-col-heading">Explore</h4>
            <ul className="footer-col-list">
              <li>
                <Link href="/">Home Overview</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio & Archive</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing & Packages</Link>
              </li>
              <li>
                <Link href="/about">The Studio & Philosophy</Link>
              </li>
              <li>
                <Link href="/journal">Field Notes & Journal</Link>
              </li>
              <li>
                <Link href="/contact">Concierge Booking</Link>
              </li>
            </ul>
          </div>

          {/* Collections Column */}
          <div className="starline-footer-col">
            <h4 className="footer-col-heading">Commissions</h4>
            <ul className="footer-col-list">
              <li>
                <Link href="/portfolio">Destination Weddings</Link>
              </li>
              <li>
                <Link href="/portfolio">Intimate Elopements</Link>
              </li>
              <li>
                <Link href="/portfolio">Editorial & Brand Campaigns</Link>
              </li>
              <li>
                <Link href="/portfolio">Portraiture & Still Life</Link>
              </li>
              <li>
                <Link href="/pricing">Custom Multi-Day Travel</Link>
              </li>
              <li>
                <Link href="/about">Fine Art Publications</Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="starline-footer-col">
            <h4 className="footer-col-heading">Client Resources</h4>
            <ul className="footer-col-list">
              <li>
                <Link href="/journal">Wedding Timeline Planning</Link>
              </li>
              <li>
                <Link href="/journal">Natural Light Wardrobe Notes</Link>
              </li>
              <li>
                <Link href="/journal">Destination Scout Guide</Link>
              </li>
              <li>
                <Link href="/pricing">Frequently Asked Questions</Link>
              </li>
              <li>
                <a href="mailto:hello@starline.studio?subject=Private%20Client%20Gallery%20Access">
                  Private Client Gallery Portal
                </a>
              </li>
              <li>
                <a href="mailto:hello@starline.studio?subject=Vendor%20Image%20Inquiry">
                  Vendor Feature Submissions
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Policies Column */}
          <div className="starline-footer-col">
            <h4 className="footer-col-heading">Studio Policies & Legal</h4>
            <ul className="footer-col-list">
              <li>
                <button
                  type="button"
                  className="footer-policy-link-btn"
                  onClick={() => setActivePolicy("privacy")}
                >
                  <Shield size={12} />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-policy-link-btn"
                  onClick={() => setActivePolicy("terms")}
                >
                  <Lock size={12} />
                  <span>Terms & Commission Agreement</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-policy-link-btn"
                  onClick={() => setActivePolicy("licensing")}
                >
                  <Sparkles size={12} />
                  <span>Image Copyright & Licensing</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-policy-link-btn"
                  onClick={() => setActivePolicy("cancellation")}
                >
                  <Heart size={12} />
                  <span>Rescheduling & Retainer Policy</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-policy-link-btn"
                  onClick={() => setActivePolicy("accessibility")}
                >
                  <Globe size={12} />
                  <span>Accessibility Statement</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Social Meta Bar */}
      <div className="starline-footer-bar">
        <div className="starline-footer-bar-inner">
          <div className="starline-footer-brand-meta">
            <span className="brand-copy">© 2026 Starline Studio Inc. All rights reserved.</span>
            <span className="brand-dot-sep">•</span>
            <span className="brand-loc">Big Sur / Los Angeles / Worldwide</span>
          </div>

          <div className="starline-footer-policy-pills">
            <button onClick={() => setActivePolicy("privacy")}>Privacy</button>
            <span className="pill-dot">•</span>
            <button onClick={() => setActivePolicy("terms")}>Terms</button>
            <span className="pill-dot">•</span>
            <button onClick={() => setActivePolicy("licensing")}>Copyright</button>
            <span className="pill-dot">•</span>
            <button onClick={() => setActivePolicy("cancellation")}>Cancellation</button>
          </div>

          <div className="starline-footer-social-row">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="starline-social-link"
              aria-label="Starline on Instagram"
            >
              <Instagram size={14} />
              <span>Instagram</span>
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              className="starline-social-link"
              aria-label="Starline on Pinterest"
            >
              <span>Pinterest</span>
            </a>
            <a
              href="https://vimeo.com"
              target="_blank"
              rel="noreferrer"
              className="starline-social-link"
              aria-label="Starline on Vimeo"
            >
              <span>Vimeo</span>
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Policy Modal */}
      <AnimatePresence>
        {activePolicy && (
          <motion.div
            className="starline-policy-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePolicy(null)}
          >
            <motion.div
              className="starline-policy-modal-container"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="policy-modal-header">
                <div>
                  <span className="policy-badge">{studioPolicies[activePolicy].badge}</span>
                  <h3 className="policy-title">{studioPolicies[activePolicy].title}</h3>
                  <span className="policy-date">Effective: {studioPolicies[activePolicy].lastUpdated}</span>
                </div>
                <button
                  className="policy-modal-close"
                  onClick={() => setActivePolicy(null)}
                  aria-label="Close policy modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Policy Quick Tabs */}
              <div className="policy-tabs-bar">
                {(["privacy", "terms", "licensing", "cancellation", "accessibility"] as PolicyKey[]).map((key) => (
                  <button
                    key={key}
                    className={`policy-tab-btn ${activePolicy === key ? "is-active" : ""}`}
                    onClick={() => setActivePolicy(key)}
                  >
                    {studioPolicies[key].title}
                  </button>
                ))}
              </div>

              <div className="policy-modal-body">
                {studioPolicies[activePolicy].sections.map((section, idx) => (
                  <div key={idx} className="policy-section-block">
                    <h4>{section.heading}</h4>
                    <p>{section.text}</p>
                  </div>
                ))}

                <div className="policy-support-box">
                  <p>
                    Have questions regarding contracts, custom licensing, or booking terms? Email our concierge directly at{" "}
                    <a href="mailto:hello@starline.studio">hello@starline.studio</a>.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}

