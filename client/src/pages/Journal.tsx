import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { journalArticles, type JournalArticle } from "@/data/studioData";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Journal() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  const categories = ["All", "Planning Guides", "Field Notes", "Style & Wardrobe"];

  const filteredArticles = activeCategory === "All"
    ? journalArticles
    : journalArticles.filter((a) => a.category === activeCategory);

  return (
    <div className="starline-page-shell">
      <Navbar variant="light" />

      <main className="starline-page-main">
        {/* Minimalist Hero */}
        <section className="portfolio-hero">
          <p className="minimal-overline">The Journal & Field Guides</p>
          <h1 className="portfolio-title">
            Notes On Light,<br />
            Place & Memory
          </h1>
          <p className="portfolio-subtitle">
            Essays on intentional destination wedding planning, cinematography philosophies, and creative dispatches from around the world.
          </p>

          {/* Minimal Text Filters */}
          <div className="portfolio-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`portfolio-filter-btn ${activeCategory === cat ? "is-active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Articles Grid */}
        <section className="portfolio-grid-section">
          <div className="portfolio-grid">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article, idx) => (
                <motion.article
                  key={article.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="gione-story-card"
                  onClick={() => setSelectedArticle(article)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="gione-story-media" style={{ aspectRatio: "16 / 10" }}>
                    <img src={article.coverImage} alt={article.title} loading="lazy" />
                  </div>

                  <div className="gione-story-meta">
                    <div className="gione-story-meta-row">
                      <span>{article.category}</span>
                      <span>{article.date} — {article.readTime}</span>
                    </div>

                    <h2 className="gione-story-title">{article.title}</h2>
                    <p className="gione-story-subtitle">{article.excerpt}</p>

                    <div style={{ marginTop: "16px" }}>
                      <span className="minimal-text-link">Read Field Guide</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </section>
      </main>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className="story-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              className="story-modal-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="story-modal-header">
                <div>
                  <span className="story-modal-cat">{selectedArticle.category} • {selectedArticle.date}</span>
                  <h2 className="story-modal-title">{selectedArticle.title}</h2>
                  <p style={{ margin: "4px 0 0", color: "var(--ink-muted)", fontSize: "13.5px" }}>{selectedArticle.subtitle}</p>
                </div>
                <button
                  className="story-modal-close-btn"
                  onClick={() => setSelectedArticle(null)}
                  aria-label="Close article"
                >
                  <X size={18} />
                </button>
              </div>

              <div style={{ padding: "32px 36px 0" }}>
                <img
                  src={selectedArticle.coverImage}
                  alt={selectedArticle.title}
                  style={{ width: "100%", maxHeight: "380px", objectFit: "cover" }}
                />
              </div>

              <div className="story-modal-body">
                {selectedArticle.content.map((paragraph, pIdx) => (
                  <p key={pIdx} style={{ fontSize: "14.5px", fontWeight: 300, lineHeight: 1.85, color: "var(--ink-secondary)", margin: "0 0 20px" }}>
                    {paragraph}
                  </p>
                ))}

                <div style={{ marginTop: "32px", paddingTop: "24px", borderTop: "1px solid var(--line-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                  <div>
                    <p style={{ margin: "0 0 2px", fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Starline Studio Editorial</p>
                    <span style={{ fontSize: "12px", color: "var(--ink-muted)" }}>Have questions about your celebration? We’d love to connect.</span>
                  </div>
                  <Link
                    href="/contact"
                    className="minimal-text-link"
                    onClick={() => setSelectedArticle(null)}
                  >
                    <span>Inquire with Studio</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer showClosingCta={true} />
    </div>
  );
}
