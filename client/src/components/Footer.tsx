import { ArrowUpRight, Instagram } from "lucide-react";
import { Link } from "wouter";

interface FooterProps {
  showClosingCta?: boolean;
}

export default function Footer({ showClosingCta = true }: FooterProps) {
  return (
    <footer className="starline-global-footer">
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

      <div className="starline-footer-bar">
        <div className="starline-footer-bar-inner">
          <div className="starline-footer-brand">
            <Link href="/" className="brand-name">Starline</Link>
            <span className="brand-copy">Documentary & Fine Art Photography</span>
          </div>

          <div className="starline-footer-links">
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/investment">Investment</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Inquire</Link>
          </div>

          <div className="starline-footer-meta">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="starline-footer-insta"
            >
              <Instagram size={14} />
              <span>Instagram</span>
            </a>
            <span className="starline-footer-year">© 2026 Starline Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
