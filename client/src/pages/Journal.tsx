import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { journalArticles, type JournalArticle } from "@/data/studioData";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, X } from "lucide-react";
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
        {/* Page Hero */}
        <section className="journal-hero">
          <span className="gione-kicker">The Journal & Field Guides</span>
          <h1 className="journal-title">
            Notes On Light,<br />
            Place & Memory
          </h1>
          <p className="journal-subtitle">
            Essays on intentional destination wedding planning, cinematography philosophies, and creative dispatches from around the world.
          </p>

          {/* Category Filters */}
          <div className="journal-filter-pills">
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
        <section className="journal-grid-section">
          <div className="journal-grid">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article, idx) => (
                <motion.article
                  key={article.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="journal-card"
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="journal-card-media">
                    <img src={article.coverImage} alt={article.title} loading="lazy" />
                    <span className="journal-card-cat-badge">{article.category}</span>
                  </div>

                  <div className="journal-card-content">
                    <div className="journal-card-meta">
                      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <Calendar size={13} color="var(--cobalt-bright)" /> {article.date}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <Clock size={13} color="var(--cobalt-bright)" /> {article.readTime}
                      </span>
                    </div>

                    <h2 className="journal-card-title">{article.title}</h2>
                    <p className="journal-card-excerpt">{article.excerpt}</p>

                    <div className="journal-card-read-btn">
                      <span>Read Field Guide</span>
                      <ArrowUpRight size={14} />
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
              className="article-modal-container"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 35 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="article-modal-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div className="article-modal-meta-row">
                    <span>{selectedArticle.category}</span>
                    <span>•</span>
                    <span>{selectedArticle.date}</span>
                    <span>•</span>
                    <span>{selectedArticle.readTime}</span>
                  </div>
                  <h1 className="article-modal-title">{selectedArticle.title}</h1>
                  <p style={{ margin: 0, color: "var(--ink-muted)", fontSize: "14px" }}>{selectedArticle.subtitle}</p>
                </div>
                <button
                  className="story-modal-close-btn"
                  onClick={() => setSelectedArticle(null)}
                  aria-label="Close article"
                >
                  <X size={20} />
                </button>
              </div>

              <div style={{ padding: "0 40px" }}>
                <img
                  src={selectedArticle.coverImage}
                  alt={selectedArticle.title}
                  style={{ width: "100%", maxHeight: "380px", objectFit: "cover", borderRadius: "14px", marginTop: "24px" }}
                />
              </div>

              <div className="article-modal-body">
                {selectedArticle.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}

                <div style={{ marginTop: "36px", paddingTop: "24px", borderTop: "1px solid var(--border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                  <div>
                    <p style={{ margin: "0 0 4px", fontSize: "14px", fontWeight: 600 }}>Starline Studio Editorial</p>
                    <span style={{ fontSize: "12px", color: "var(--ink-muted)" }}>Have questions about planning your celebration? We’d love to guide you.</span>
                  </div>
                  <Link
                    href="/contact"
                    className="gione-btn-primary"
                    onClick={() => setSelectedArticle(null)}
                  >
                    <span>Inquire with Studio</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
