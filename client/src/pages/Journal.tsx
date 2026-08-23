import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { journalArticles, type JournalArticle } from "@/data/studioData";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Calendar, Clock, Tag, X } from "lucide-react";
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
    <div className="starline-page-shell journal-page-shell">
      <Navbar variant="light" />

      <main className="starline-page-main">
        {/* Page Hero */}
        <section className="journal-hero">
          <div className="journal-hero-inner">
            <div className="portfolio-header-kicker">
              <span className="dot-mark"><i /><i /><i /></span>
              <span>The Journal & Field Guides</span>
            </div>
            <h1 className="journal-title">
              Notes on light,<br /><em>place, and memory.</em>
            </h1>
            <p className="journal-subtitle">
              Essays on intentional celebration planning, location scouting guides across the West, and observations from life behind the lens.
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
                      <span><Calendar size={13} /> {article.date}</span>
                      <span><Clock size={13} /> {article.readTime}</span>
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
              <div className="article-modal-header">
                <div className="article-modal-meta">
                  <span className="article-modal-cat">{selectedArticle.category}</span>
                  <span className="article-modal-date">{selectedArticle.date} • {selectedArticle.readTime}</span>
                </div>
                <button
                  className="story-modal-close-btn"
                  onClick={() => setSelectedArticle(null)}
                  aria-label="Close article"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="article-modal-hero">
                <h1>{selectedArticle.title}</h1>
                <p className="article-modal-subtitle">{selectedArticle.subtitle}</p>
                <div className="article-modal-cover">
                  <img src={selectedArticle.coverImage} alt={selectedArticle.title} />
                </div>
              </div>

              <div className="article-modal-body">
                {selectedArticle.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}

                <div className="article-author-signature">
                  <p>Written by <b>Lila</b> / Starline Studio</p>
                  <span>Have questions about planning your celebration? We’d love to guide you.</span>
                  <Link
                    href="/contact"
                    className="article-inquire-link"
                    onClick={() => setSelectedArticle(null)}
                  >
                    <span>Reach Out to the Studio</span>
                    <ArrowUpRight size={15} />
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
