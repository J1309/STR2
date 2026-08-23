/**
 * STARLINE / SUNLIT CHROMATIC JOURNAL
 * Page role: a colorful, contemporary luxury photography portfolio where each image is treated as an elegant editorial object.
 */
import DriftWall, { type DriftWallItem } from "@/components/DriftWall";
import Footer from "@/components/Footer";
import { investmentTiers } from "@/data/studioData";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronRight, Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

type Work = {
  title: string;
  category: string;
  location: string;
  image: string;
  tone: "coral" | "violet" | "moss" | "sun" | "ink";
};

type HeroSlide = {
  image: string;
  title: string;
  location: string;
  issue: string;
  alt: string;
};

const heroSlides: HeroSlide[] = [
  {
    image: "/bg_hero_page.png",
    title: "Mountain lake at dusk",
    location: "High Sierra / 2026",
    issue: "Issue 01",
    alt: "Mountain lake at dusk with traveler standing on stone"
  },
  {
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1600&auto=format&fit=crop",
    title: "California colour studies",
    location: "California / 2026",
    issue: "Issue 02",
    alt: "Utah salt flats at golden hour"
  },
  {
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
    title: "Joshua Tree bloom",
    location: "Joshua Tree / 2026",
    issue: "Issue 03",
    alt: "Wildflowers golden hour"
  },
  {
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
    title: "Santa Fe passages",
    location: "Santa Fe / 2025",
    issue: "Issue 04",
    alt: "Santa Fe red door in shade"
  }
];

const works: Work[] = [
  { title: "High Sierra", category: "Dusk, mountain weather", location: "High Sierra, 2026", image: "/bg_hero_page.png", tone: "ink" },
  { title: "Golden Hour", category: "Late sun, roadside flowers", location: "Joshua Tree, 2026", image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop", tone: "coral" },
  { title: "The Red Door", category: "A passage held in shade", location: "Santa Fe, 2025", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop", tone: "violet" },
  { title: "Salt & Light", category: "White horizon reflections", location: "Utah, 2025", image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1600&auto=format&fit=crop", tone: "sun" },
  { title: "Ocean Edge", category: "Mist, rocks, breaking water", location: "Big Sur, 2026", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop", tone: "moss" }
];

const driftItems: DriftWallItem[] = [
  { image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", caption: "Sierra / 01", location: "Glacial lake", issue: "No. 01" },
  { image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800&auto=format&fit=crop", caption: "Sunlight / 02", location: "Pine needle shade", issue: "No. 02" },
  { image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop", caption: "Meadow / 03", location: "Joshua Tree", issue: "No. 03" },
  { image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop", caption: "Plaster / 04", location: "Santa Fe", issue: "No. 04" },
  { image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop", caption: "Still life / 05", location: "Studio linen", issue: "No. 05" },
  { image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop", caption: "Horizon / 06", location: "Salt flats", issue: "No. 06" }
];

export default function Home() {
  const [selected, setSelected] = useState<Work | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeWork, setActiveWork] = useState(0);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Journal", href: "/journal" },
    { label: "About", href: "/about" },
    { label: "Inquire", href: "/contact" }
  ];

  return (
    <div className="sunlit-page">
      <section className="starline-hero-stage" id="top" aria-label="Hero showcase">
        <div className="starline-hero-bg">
          <AnimatePresence mode="wait">
            <motion.img
              key={heroSlides[heroIndex].image}
              src={heroSlides[heroIndex].image}
              alt={heroSlides[heroIndex].alt}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
            />
          </AnimatePresence>
          <div className="starline-hero-overlay" />
        </div>

        <header className="starline-hero-header">
          <Link href="/" className="starline-brand-box" aria-label="Starline Photography Home">
            <span className="starline-brand-title">S T A R L I N E</span>
            <span className="starline-brand-sub">P H O T O G R A P H Y</span>
            <div className="starline-brand-underline" />
          </Link>

          <nav className="starline-hero-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="starline-nav-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button className="starline-hero-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                className="sunlit-mobile-nav"
                initial={{ opacity: 0, y: -9 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -9 }}
                aria-label="Mobile navigation"
              >
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        <div className="starline-hero-content">
          <p className="starline-hero-kicker">VISUAL STORIES. TIMELESS BEAUTY.</p>
          <h1 className="starline-hero-headline">
            Photography<br />
            That Speaks.
          </h1>
          <div className="starline-headline-rule" />
          <p className="starline-hero-subtext">
            We capture the raw, the real, and the remarkable in every frame.
          </p>

          <Link href="/portfolio" className="starline-hero-cta">
            <span>EXPLORE PORTFOLIO</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="starline-hero-bottom">
          <div className="starline-slide-pagination">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`starline-slide-btn ${heroIndex === index ? "is-active" : ""}`}
                onClick={() => setHeroIndex(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {heroIndex === index && <div className="starline-slide-btn-bar" />}
              </button>
            ))}
          </div>

          <div className="starline-social-row">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">INSTAGRAM</a>
            <span className="starline-social-pipe">|</span>
            <Link href="/contact">INQUIRE</Link>
            <span className="starline-social-pipe">|</span>
            <Link href="/about">ABOUT</Link>
          </div>
        </div>

        <div className="starline-right-spine">
          <svg className="starline-compass-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <div className="starline-vertical-text">
            CAPTURING MOMENTS THAT LAST FOREVER
          </div>
        </div>
      </section>

      <main>
        <section className="introduction-sunlit" id="journal">
          <div className="intro-number">01</div>
          <div>
            <p className="sunlit-kicker">The journal</p>
            <h2>Observations<br />from the road,<br />close to home.</h2>
          </div>
          <div className="intro-body-wrap">
            <p className="intro-body">I photograph the gestures, weather, and small distances that give a place its particular memory.</p>
            <Link href="/journal" className="sunlit-subpage-link">
              <span>Explore Journal & Field Guides</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </section>

        <section className="drift-section" id="fragments" aria-label="Photographic fragments">
          <div className="drift-section-copy">
            <p className="sunlit-kicker">In passing</p>
            <h2>Loose frames<br />from the<br />same road.</h2>
            <p>A handful of photographs held together by the way the light changed. Hover to pause a frame, then open it to look longer.</p>
            <Link href="/portfolio" className="sunlit-subpage-link">
              <span>View All 6 Stories in Archive</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="drift-stage">
            <DriftWall
              items={driftItems}
              columns={4}
              tileWidth={184}
              tileHeight={236}
              gap={14}
              tilt={5}
              turn={-5}
              perspective={1350}
              depth={46}
              speed={10}
              variance={.2}
              parallax={.16}
              lift={24}
              dim={.9}
              overlayColor="#24211e"
              onSelect={(item) => {
                const match = works.find((work) => work.image === item.image);
                if (match) setSelected(match);
              }}
            />
          </div>
        </section>

        <section className="cinematic-work" id="portfolio" aria-label="Selected work">
          <AnimatePresence mode="wait">
            <motion.img
              className="cinematic-backdrop"
              key={works[activeWork].image}
              src={works[activeWork].image}
              alt=""
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: .65, ease: [0.23, 1, 0.32, 1] }}
            />
          </AnimatePresence>
          <div className="cinematic-wash" />

          <div className="cinematic-topline">
            <p><span className="cinematic-mark"><i /><i /><i /></span> Selected stories</p>
            <p>Starline studio / 2024—26</p>
          </div>

          <div className="cinematic-intro">
            <p className="sunlit-kicker">The long look</p>
            <h2>Take the<br /><em>long way.</em></h2>
            <p className="cinematic-description">Five visual stories from the road, with enough room to stop and see what stays.</p>
            <div className="cinematic-actions">
              <button onClick={() => setSelected(works[activeWork])}>
                Open {works[activeWork].title} <ArrowUpRight size={15} />
              </button>
              <Link href="/portfolio" className="cinematic-quiet-link">
                View Full Archive <ChevronRight size={15} />
              </Link>
            </div>
          </div>

          <div className="cinematic-meta-row">
            <div className="cinematic-detail">
              <p>Field note {String(activeWork + 1).padStart(2, "0")} / 05</p>
              <h3>{works[activeWork].title}</h3>
              <span>{works[activeWork].location}</span>
            </div>

            <div className="cinematic-controls">
              <button onClick={() => setActiveWork((activeWork + works.length - 1) % works.length)} aria-label="Previous story">
                <ArrowLeft size={16} />
              </button>
              <button onClick={() => setActiveWork((activeWork + 1) % works.length)} aria-label="Next story">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="cinematic-rail" role="tablist" aria-label="Selected stories">
            {works.map((work, index) => (
              <button
                key={work.title}
                className={`cinematic-card${activeWork === index ? " is-active" : ""}`}
                onClick={() => setActiveWork(index)}
                onDoubleClick={() => setSelected(work)}
                role="tab"
                aria-selected={activeWork === index}
                aria-label={`Select ${work.title}`}
              >
                <img src={work.image} alt="" loading="lazy" />
                <span>
                  <b>{work.title}</b>
                  <em>{String(index + 1).padStart(2, "0")}</em>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="feature-story" id="story">
          <div className="feature-story-copy">
            <p className="sunlit-kicker">In the studio</p>
            <h2>A late-summer<br />room, held<br />still.</h2>
            <p>New work from *The Small Things*: fruit, linen, objects, and the slow afternoon light that settles around them.</p>
            <Link href="/portfolio" className="text-cta on-dark">
              Open the story <ArrowUpRight size={17} />
            </Link>
          </div>
          <button className="feature-story-image" onClick={() => setSelected(works[2])} aria-label="View Sunday Objects">
            <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop" alt="Colourful still life on cream stone" />
            <span>New journal story</span>
          </button>
        </section>

        <section className="home-investment-preview">
          <div className="home-investment-inner">
            <div className="home-investment-head">
              <p className="sunlit-kicker">Packages & Inclusions</p>
              <h2>Transparent Pricing,<br /><em>zero hidden fees.</em></h2>
              <p>Every story includes high-resolution print files, private gallery delivery, and personal printing rights.</p>
            </div>

            <div className="home-investment-grid">
              {investmentTiers.slice(0, 3).map((tier) => (
                <div key={tier.id} className={`home-tier-card ${tier.featured ? "is-featured" : ""}`}>
                  {tier.featured && (
                    <span className="home-tier-badge">
                      <Sparkles size={12} /> Most Popular
                    </span>
                  )}
                  <span className="home-tier-cov">{tier.coverage}</span>
                  <h3>{tier.name}</h3>
                  <div className="home-tier-price">{tier.price}</div>
                  <p className="home-tier-tagline">{tier.tagline}</p>
                  <Link href={`/contact?package=${tier.id}`} className="home-tier-btn">
                    <span>Reserve Date</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              ))}
            </div>

            <div className="home-investment-foot">
              <Link href="/pricing" className="home-investment-all-link">
                <span>View Full Pricing Guide & Inclusions</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="about-sunlit" id="about">
          <div className="about-image-wrap">
            <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop" alt="Portrait with wildflowers in warm light" />
            <span>Portrait by Maya Rios</span>
          </div>
          <div className="about-copy">
            <p className="sunlit-kicker">Hello, I’m Lila</p>
            <h2>I make pictures<br />for brands,<br />people, and<br />places in motion.</h2>
            <p>Based in California and working wherever a story is unfolding. Available for editorial, travel, brand, and personal commissions.</p>
            <div className="about-actions-row">
              <Link className="about-link" href="/about">
                Read Photographer Story <ArrowUpRight size={16} />
              </Link>
              <Link className="about-link-sub" href="/contact">
                Inquire Directly
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <AnimatePresence>
        {selected && (
          <motion.div
            className="sunlit-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button className="sunlit-lightbox-close" onClick={() => setSelected(null)} aria-label="Close image">
              <X size={21} />
            </button>
            <motion.figure
              className="sunlit-lightbox-figure"
              initial={{ opacity: 0, scale: .97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: .97, y: 12 }}
              onClick={(event) => event.stopPropagation()}
            >
              <img src={selected.image} alt={`${selected.title}, ${selected.location}`} />
              <figcaption>
                <div>
                  <p>{selected.category}</p>
                  <h2>{selected.title}</h2>
                  <span>{selected.location}</span>
                </div>
                <Link href="/contact" className="lightbox-inquire-link" onClick={() => setSelected(null)}>
                  Inquire about this location →
                </Link>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
