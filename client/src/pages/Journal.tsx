import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { journalArticles, type JournalArticle } from "@/data/studioData";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Pause, Play, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

export default function Journal() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  // Automatic Story Slideshow State
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const totalSlides = journalArticles.length;
  const activeSlideArticle = journalArticles[currentSlide] || journalArticles[0];

  // Automatic slide transition every 5.5s when not hovered/paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const categories = ["All", "Destination Weddings", "London & UK", "Asian Weddings"];

  const filteredArticles = activeCategory === "All"
    ? journalArticles
    : journalArticles.filter((a) => a.category === activeCategory);

  return (
    <div className="starline-page-shell">
      <Navbar variant="light" />

      <main className="starline-page-main">
        {/* ===================================================================
            1. MINIMALIST EDITORIAL HEADER
            =================================================================== */}
        <section className="portfolio-hero" style={{ paddingBottom: "30px" }}>
          <p className="minimal-overline">JOURNAL — BLOG — STORIES</p>
          <h1 className="portfolio-title">
            Stories of Love, Adventure<br />
            & Timeless Moments
          </h1>
          <p className="portfolio-subtitle">
            Welcome to our journal and blog where you can dig deep into our stories and learn more about our clients and their wedding journeys.
          </p>
        </section>

        {/* ===================================================================
            2. AUTOMATIC IMAGE & STORY SHOWCASE (SLIDING CAROUSEL)
            =================================================================== */}
        <section
          className="journal-featured-slider-section"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="journal-slider-container">
            {/* Left: Auto-Sliding Image with Smooth Crossfade */}
            <div className="journal-slider-media">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlideArticle.id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                  className="journal-slider-image-wrap"
                  onClick={() => setSelectedArticle(activeSlideArticle)}
                >
                  <img
                    src={activeSlideArticle.coverImage}
                    alt={activeSlideArticle.title}
                    className="journal-slider-image"
                  />
                  <div className="journal-slider-image-badge">
                    <span>{activeSlideArticle.category}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress timer bar */}
              <div className="journal-slider-progress-bar">
                <motion.div
                  key={currentSlide + (isPaused ? "-paused" : "")}
                  className="journal-slider-progress-fill"
                  initial={{ width: "0%" }}
                  animate={{ width: isPaused ? undefined : "100%" }}
                  transition={{ duration: isPaused ? 0 : 5.5, ease: "linear" }}
                />
              </div>
            </div>

            {/* Right: Active Story Narrative */}
            <div className="journal-slider-story">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlideArticle.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="journal-slider-story-content"
                >
                  <div className="journal-slider-story-meta">
                    <span className="minimal-overline" style={{ color: "var(--cobalt-accent)" }}>
                      FEATURED DISPATCH • {activeSlideArticle.date}
                    </span>
                    <span className="journal-slider-read-badge">{activeSlideArticle.readTime}</span>
                  </div>

                  <h2 className="journal-slider-title">{activeSlideArticle.title}</h2>
                  <p className="journal-slider-subtitle">{activeSlideArticle.subtitle}</p>
                  <p className="journal-slider-excerpt">{activeSlideArticle.excerpt}</p>

                  <div className="journal-slider-action-row">
                    <button
                      type="button"
                      className="minimal-btn-outline"
                      style={{
                        color: "var(--ink-primary)",
                        borderColor: "var(--ink-primary)",
                        background: "transparent",
                        padding: "10px 24px"
                      }}
                      onClick={() => setSelectedArticle(activeSlideArticle)}
                    >
                      <span>Read Full Story</span>
                      <ArrowRight size={13} />
                    </button>

                    <button
                      type="button"
                      className="journal-slider-pause-btn"
                      onClick={() => setIsPaused(!isPaused)}
                      aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
                    >
                      {isPaused ? <Play size={13} /> : <Pause size={13} />}
                      <span>{isPaused ? "Paused" : "Auto-playing"}</span>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls & Slide Indicators */}
              <div className="journal-slider-controls">
                <div className="journal-slider-counter">
                  <span>0{currentSlide + 1}</span>
                  <span style={{ color: "var(--line-subtle)", margin: "0 4px" }}>/</span>
                  <span style={{ color: "var(--ink-subtle)" }}>0{totalSlides}</span>
                </div>

                <div className="journal-slider-dots">
                  {journalArticles.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`journal-slider-dot ${currentSlide === idx ? "is-active" : ""}`}
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="journal-slider-arrows">
                  <button
                    type="button"
                    onClick={handlePrevSlide}
                    aria-label="Previous story slide"
                  >
                    <ArrowLeft size={15} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextSlide}
                    aria-label="Next story slide"
                  >
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            3. ALL DISPATCHES ARCHIVE & FILTERS (flo-block-listing-3)
            =================================================================== */}
        <section className="portfolio-grid-section" style={{ paddingTop: "80px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="minimal-overline">ARCHIVAL STORIES & FIELD GUIDES</span>
            <h3 style={{ fontFamily: "var(--font-display-condensed)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 300, letterSpacing: "0.07em", textTransform: "uppercase", margin: "6px 0 24px" }}>
              Explore All Journal Dispatches
            </h3>

            {/* Minimal Text Filters */}
            <div className="portfolio-filter-bar">
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
          </div>

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
                >
                  <div className="gione-story-media" style={{ aspectRatio: "16 / 10" }}>
                    <img src={article.coverImage} alt={article.title} loading="lazy" />
                  </div>

                  <div className="gione-story-meta">
                    <div className="gione-story-meta-row">
                      <span style={{ color: "var(--navy-accent)", fontWeight: 600 }}>{article.category}</span>
                      <span>{article.date}</span>
                    </div>

                    <h2 className="gione-story-title">{article.title}</h2>
                    <p className="gione-story-subtitle">{article.excerpt}</p>

                    <div>
                      <button type="button" className="flo-journal-continue-btn">
                        CONTINUE
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* Clean Editorial Pagination */}
          <div className="flo-pagination">
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
