import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { journalArticles, type JournalArticle } from "@/data/studioData";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MoveHorizontal, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Journal() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);
  const [hoveredArticleId, setHoveredArticleId] = useState<string | null>(null);
  const [activeSpotlightIndex, setActiveSpotlightIndex] = useState<number>(0);
  const [isSpotlightHovered, setIsSpotlightHovered] = useState<boolean>(false);

  const categories = ["All", "Destination Weddings", "London & UK", "Asian Weddings"];

  const filteredArticles = activeCategory === "All"
    ? journalArticles
    : journalArticles.filter((a) => a.category === activeCategory);

  const spotlightArticle = journalArticles[activeSpotlightIndex] || journalArticles[0];

  return (
    <div className="starline-page-shell">
      <Navbar variant="light" />

      <main className="starline-page-main">
        {/* ===================================================================
            1. MINIMALIST EDITORIAL HERO HEADER
            =================================================================== */}
        <section className="portfolio-hero" style={{ paddingBottom: "20px" }}>
          <p className="minimal-overline">JOURNAL — BLOG — STORIES</p>
          <h1 className="portfolio-title">
            Stories of Love, Adventure<br />
            & Timeless Moments
          </h1>
          <p className="portfolio-subtitle">
            Hover over any photograph to slide the frame and reveal the story and field notes within.
          </p>

          {/* Minimal Text Filters */}
          <div className="portfolio-filter-bar" style={{ marginTop: "24px" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`portfolio-filter-btn ${activeCategory === cat ? "is-active" : ""}`}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentPage(1);
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* ===================================================================
            2. INTERACTIVE HOVER-SLIDING STORY CARDS GRID
            =================================================================== */}
        <section className="portfolio-grid-section" style={{ paddingTop: "40px" }}>
          <div className="journal-sliding-grid">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article, idx) => {
                const isHovered = hoveredArticleId === article.id;
                // Alternate slide direction: even indices slide left (revealing story on right), odd slide right
                const slideLeft = idx % 2 === 0;

                return (
                  <motion.div
                    key={article.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className={`hover-sliding-card ${isHovered ? "is-hovered" : ""} ${slideLeft ? "slide-to-left" : "slide-to-right"}`}
                    onMouseEnter={() => setHoveredArticleId(article.id)}
                    onMouseLeave={() => setHoveredArticleId(null)}
                    onClick={() => {
                      // On touch/mobile: toggle hover on first tap, open on second or click
                      if (hoveredArticleId !== article.id) {
                        setHoveredArticleId(article.id);
                      } else {
                        setSelectedArticle(article);
                      }
                    }}
                  >
                    {/* Story Content Layer (Revealed on opposite side) */}
                    <div className={`sliding-story-panel ${slideLeft ? "panel-on-right" : "panel-on-left"}`}>
                      <div className="sliding-story-content">
                        <div className="sliding-story-meta">
                          <span className="minimal-overline" style={{ color: "var(--cobalt-accent)" }}>
                            {article.category} • {article.date}
                          </span>
                          <span className="sliding-story-badge">{article.readTime}</span>
                        </div>

                        <h3 className="sliding-story-title">{article.title}</h3>
                        <p className="sliding-story-subtitle">{article.subtitle}</p>
                        <p className="sliding-story-excerpt">{article.excerpt}</p>

                        <div className="sliding-story-action">
                          <button
                            type="button"
                            className="flo-journal-continue-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedArticle(article);
                            }}
                          >
                            <span>Read Full Story</span>
                            <ArrowRight size={13} style={{ display: "inline-block", marginLeft: "6px" }} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Sliding Image Layer */}
                    <div className="sliding-image-layer">
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        className="sliding-cover-image"
                        loading="lazy"
                      />

                      {/* Default overlay caption with hover hint */}
                      <div className="sliding-image-caption">
                        <div className="sliding-image-badge">
                          <span>{article.category}</span>
                        </div>

                        <div className="sliding-image-bottom-info">
                          <span className="sliding-image-date">{article.date}</span>
                          <h4 className="sliding-image-title">{article.title}</h4>

                          <div className="sliding-hint-pill">
                            <MoveHorizontal size={13} />
                            <span>{isHovered ? "Story Revealed" : "Hover to Slide & Read Story"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Editorial Pagination */}
          <div className="flo-pagination" style={{ marginTop: "80px" }}>
            <button
              type="button"
              className={`flo-page-number ${currentPage === 1 ? "is-active" : ""}`}
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>
            <button
              type="button"
              className={`flo-page-number ${currentPage === 2 ? "is-active" : ""}`}
              onClick={() => setCurrentPage(2)}
            >
              2
            </button>
            <button
              type="button"
              className={`flo-page-number ${currentPage === 3 ? "is-active" : ""}`}
              onClick={() => setCurrentPage(3)}
            >
              3
            </button>
            <button
              type="button"
              className="flo-page-next"
              onClick={() => setCurrentPage((prev) => (prev < 3 ? prev + 1 : 1))}
            >
              <span>Next Page</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </section>
      </main>

      {/* Article Reader Deep-Dive Modal */}
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
                  style={{ width: "100%", maxHeight: "420px", objectFit: "cover" }}
                />
              </div>

              <div className="story-modal-body">
                {selectedArticle.content.map((paragraph, pIdx) => (
                  <p key={pIdx} style={{ fontSize: "14.5px", fontWeight: 300, lineHeight: 1.85, color: "var(--ink-secondary)", margin: "0 0 20px" }}>
                    {paragraph}
                  </p>
                ))}

                <div style={{ marginTop: "36px", paddingTop: "24px", borderTop: "1px solid var(--line-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                  <div>
                    <p style={{ margin: "0 0 2px", fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Starline Studio Editorial</p>
                    <span style={{ fontSize: "12px", color: "var(--ink-muted)" }}>Have questions about your wedding journey? We’d love to connect.</span>
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
