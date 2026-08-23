import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { studioStories, type StoryItem } from "@/data/studioData";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Camera, Compass, Filter, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

type CategoryFilter = "All" | "Intimate Celebrations" | "Wild Landscapes" | "Editorial & Brand" | "Studio & Objects";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [selectedStory, setSelectedStory] = useState<StoryItem | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories: CategoryFilter[] = [
    "All",
    "Intimate Celebrations",
    "Wild Landscapes",
    "Editorial & Brand",
    "Studio & Objects"
  ];

  const filteredStories = activeCategory === "All"
    ? studioStories
    : studioStories.filter((s) => s.category === activeCategory);

  return (
    <div className="starline-page-shell">
      <Navbar variant="dark" />

      <main className="starline-page-main">
        {/* Page Header */}
        <section className="portfolio-hero">
          <div className="portfolio-hero-inner">
            <div className="portfolio-header-kicker">
              <span className="dot-mark"><i /><i /><i /></span>
              <span>The Archive / 2024—2026</span>
            </div>
            <h1 className="portfolio-title">
              Stories from<br /><em>the quiet road.</em>
            </h1>
            <p className="portfolio-subtitle">
              A curated body of work documenting intimate celebrations, wild landscapes, and intentional design across the American West and abroad.
            </p>

            {/* Category Tabs */}
            <div className="portfolio-filter-bar">
              <div className="portfolio-filter-pills" role="tablist">
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
              <span className="portfolio-count-tag">
                {filteredStories.length} {filteredStories.length === 1 ? "Story" : "Stories"}
              </span>
            </div>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="portfolio-grid-section">
          <div className="portfolio-grid">
            <AnimatePresence mode="popLayout">
              {filteredStories.map((story, index) => (
                <motion.article
                  key={story.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className={`portfolio-card ${index % 3 === 0 ? "is-featured" : ""}`}
                  onClick={() => setSelectedStory(story)}
                >
                  <div className="portfolio-card-media">
                    <img
                      src={story.coverImage}
                      alt={story.title}
                      loading="lazy"
                    />
                    <div className="portfolio-card-overlay">
                      <span className="portfolio-card-view-btn">
                        <span>Open Story</span>
                        <ArrowUpRight size={15} />
                      </span>
                    </div>
                  </div>

                  <div className="portfolio-card-content">
                    <div className="portfolio-card-meta">
                      <span className="portfolio-card-cat">{story.category}</span>
                      <span className="portfolio-card-loc">{story.location}</span>
                    </div>
                    <h2 className="portfolio-card-title">{story.title}</h2>
                    <p className="portfolio-card-subtitle">{story.subtitle}</p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
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
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="story-modal-header">
                <div className="story-modal-header-left">
                  <span className="story-modal-cat">{selectedStory.category}</span>
                  <h2 className="story-modal-title">{selectedStory.title}</h2>
                  <p className="story-modal-loc">{selectedStory.location} — {selectedStory.year}</p>
                </div>
                <button
                  className="story-modal-close-btn"
                  onClick={() => setSelectedStory(null)}
                  aria-label="Close story"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="story-modal-body">
                {/* Field Notes & Specs Sidebar */}
                <div className="story-modal-notes">
                  <div className="story-field-notes-box">
                    <p className="kicker">Field Notes</p>
                    <p className="narrative">{selectedStory.fieldNotes}</p>
                  </div>

                  <div className="story-specs-box">
                    <p className="kicker">Story Details</p>
                    {selectedStory.details.camera && (
                      <div className="spec-row">
                        <span>Medium</span>
                        <b>{selectedStory.details.camera}</b>
                      </div>
                    )}
                    {selectedStory.details.light && (
                      <div className="spec-row">
                        <span>Atmosphere</span>
                        <b>{selectedStory.details.light}</b>
                      </div>
                    )}
                    {selectedStory.details.season && (
                      <div className="spec-row">
                        <span>Season</span>
                        <b>{selectedStory.details.season}</b>
                      </div>
                    )}
                    {selectedStory.details.guests && (
                      <div className="spec-row">
                        <span>Intimacy</span>
                        <b>{selectedStory.details.guests}</b>
                      </div>
                    )}
                  </div>

                  <div className="story-cta-box">
                    <p>Envisioning something like this?</p>
                    <Link href="/contact" className="story-inquire-btn" onClick={() => setSelectedStory(null)}>
                      <span>Inquire About Your Date</span>
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>

                {/* Photo Stream */}
                <div className="story-modal-stream">
                  {selectedStory.galleryImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="story-gallery-frame"
                      onClick={() => setLightboxImage(img)}
                    >
                      <img src={img} alt={`${selectedStory.title} photo ${idx + 1}`} loading="lazy" />
                      <span className="story-frame-index">0{idx + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox for full zoom */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="sunlit-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="sunlit-lightbox-close"
              onClick={() => setLightboxImage(null)}
              aria-label="Close image"
            >
              <X size={22} />
            </button>
            <motion.img
              src={lightboxImage}
              alt="Zoomed photograph"
              className="lightbox-zoom-img"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
