import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { studioStories, type StoryItem } from "@/data/studioData";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

type CategoryFilter = "All" | "Intimate Celebrations" | "Wild Landscapes" | "Editorial & Brand";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [selectedStory, setSelectedStory] = useState<StoryItem | null>(null);

  const categories: CategoryFilter[] = [
    "All",
    "Intimate Celebrations",
    "Wild Landscapes",
    "Editorial & Brand"
  ];

  const filteredStories = activeCategory === "All"
    ? studioStories
    : studioStories.filter((s) => s.category === activeCategory);

  return (
    <div className="starline-page-shell">
      <Navbar variant="light" />

      <main className="starline-page-main">
        {/* Minimalist Hero */}
        <section className="portfolio-hero">
          <p className="minimal-overline">The Archive / 2024—2026</p>
          <h1 className="portfolio-title">Selected Works</h1>
          <p className="portfolio-subtitle">
            A curated body of wedding cinematography, fine art photography, and destination monographs documented across Europe, North America, and beyond.
          </p>

          {/* Minimal Text Filter Bar */}
          <div className="portfolio-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`portfolio-filter-btn ${activeCategory === cat ? "is-active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Stories Grid */}
        <section className="portfolio-grid-section">
          <div className="portfolio-grid">
            <AnimatePresence mode="popLayout">
              {filteredStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="gione-story-card"
                  onClick={() => setSelectedStory(story)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="gione-story-media">
                    <img
                      src={story.coverImage}
                      alt={story.title}
                      loading="lazy"
                    />
                  </div>

                  <div className="gione-story-meta">
                    <div className="gione-story-meta-row">
                      <span>{story.location}</span>
                      <span>{story.year}</span>
                    </div>
                    <h2 className="gione-story-title">{story.title}</h2>
                    <p className="gione-story-subtitle">{story.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Archival Philosophy Pause */}
        <section className="minimal-quote-section">
          <div className="minimal-quote-inner">
            <p className="minimal-quote-title">Dual-Format Archive</p>
            <blockquote className="minimal-quote-text">
              “Every commission is captured with a dedicated balance of medium format digital clarity and authentic 35mm analog film, creating an indelible archive that feels immediate today and timeless decades from now.”
            </blockquote>
          </div>
        </section>
      </main>

      {/* Story Deep-Dive Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            className="story-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStory(null)}
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
                  <span className="story-modal-cat">{selectedStory.category}</span>
                  <h2 className="story-modal-title">{selectedStory.title}</h2>
                  <p style={{ fontSize: "12px", color: "var(--ink-subtle)", margin: "4px 0 0" }}>
                    {selectedStory.location} — {selectedStory.year}
                  </p>
                </div>
                <button
                  className="story-modal-close-btn"
                  onClick={() => setSelectedStory(null)}
                  aria-label="Close story"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="story-modal-body">
                <div className="story-modal-gallery">
                  {selectedStory.galleryImages.map((img, idx) => (
                    <img key={idx} src={img} alt={`${selectedStory.title} ${idx + 1}`} />
                  ))}
                </div>

                <div className="story-modal-notes">
                  <p style={{ margin: 0 }}>{selectedStory.fieldNotes}</p>
                </div>

                <div style={{ marginTop: "24px", display: "flex", justifyContent: "flex-end" }}>
                  <Link
                    href={`/contact?story=${selectedStory.id}`}
                    className="minimal-text-link"
                    onClick={() => setSelectedStory(null)}
                  >
                    <span>Inquire for Similar Commission</span>
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
