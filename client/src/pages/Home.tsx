/**
 * STARLINE / SUNLIT CHROMATIC JOURNAL
 * Page role: a colorful, contemporary luxury photography portfolio where each image is treated as an elegant editorial object.
 */
import DriftWall, { type DriftWallItem } from "@/components/DriftWall";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, ChevronRight, Facebook, Instagram, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

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
    title: "California colour studies",
    location: "California / 2026",
    issue: "Issue 01",
    alt: "Lumina mountain landscape"
  },
  {
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1600&auto=format&fit=crop",
    title: "Joshua Tree wildflowers",
    location: "Joshua Tree / 2026",
    issue: "Issue 02",
    alt: "Wildflowers golden hour"
  },
  {
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
    title: "Santa Fe passages",
    location: "Santa Fe / 2025",
    issue: "Issue 03",
    alt: "Santa Fe red door in shade"
  }
];

const works: Work[] = [
  { title: "Golden Hour", category: "Late sun, roadside flowers", location: "Joshua Tree, 2026", image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop", tone: "coral" },
  { title: "The Red Door", category: "A passage held in shade", location: "Santa Fe, 2025", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop", tone: "violet" },
  { title: "Sunday Objects", category: "Fruit, linen, 4:18 pm", location: "Los Angeles, 2025", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop", tone: "sun" },
  { title: "Blue Drive", category: "After the coastal fog", location: "Big Sur, 2025", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop", tone: "moss" },
  { title: "Ocean, Open", category: "Weather, from the shoulder", location: "Pacifica, 2024", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop", tone: "ink" },
];

const navItems = [
  ["Work", "work"],
  ["Journal", "journal"],
  ["About", "about"],
] as const;

const driftItems: DriftWallItem[] = [
  { image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1600&auto=format&fit=crop", title: "Salt colour", subtitle: "Utah, 2026" },
  { image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop", title: "Golden hour", subtitle: "California, 2026" },
  { image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop", title: "Red passage", subtitle: "New Mexico, 2025" },
  { image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop", title: "Sunday objects", subtitle: "Los Angeles, 2025" },
  { image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop", title: "Blue drive", subtitle: "Big Sur, 2025" },
  { image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop", title: "Ocean, open", subtitle: "Pacifica, 2024" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<Work | null>(null);
  const [activeWork, setActiveWork] = useState(0);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="sunlit-site">
      <section className="lumina-hero-container" id="top">
        {/* Full-bleed background image with left vignette overlay */}
        <div className="lumina-hero-bg">
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
          <div className="lumina-hero-overlay" />
        </div>

        {/* Lumina Header */}
        <header className="lumina-header">
          <button className="lumina-brand" onClick={() => scrollTo("top")} aria-label="Lumina Photography">
            <span className="lumina-brand-title">L U M I N A</span>
            <span className="lumina-brand-sub">P H O T O G R A P H Y</span>
          </button>

          <nav className="lumina-nav" aria-label="Primary navigation">
            <button className="lumina-nav-item is-active" onClick={() => scrollTo("top")}>HOME</button>
            <button className="lumina-nav-item" onClick={() => scrollTo("work")}>PORTFOLIO</button>
            <button className="lumina-nav-item" onClick={() => scrollTo("about")}>ABOUT</button>
            <button className="lumina-nav-item" onClick={() => scrollTo("journal")}>EXPERIENCE</button>
            <button className="lumina-nav-item" onClick={() => scrollTo("journal")}>JOURNAL</button>
            <button className="lumina-nav-item" onClick={() => scrollTo("about")}>CONTACT</button>
          </nav>

          <button className="lumina-hamburger-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
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
                <button onClick={() => scrollTo("top")}>HOME</button>
                <button onClick={() => scrollTo("work")}>PORTFOLIO</button>
                <button onClick={() => scrollTo("about")}>ABOUT</button>
                <button onClick={() => scrollTo("journal")}>EXPERIENCE</button>
                <button onClick={() => scrollTo("journal")}>JOURNAL</button>
                <button onClick={() => scrollTo("about")}>CONTACT</button>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Main Content */}
        <div className="lumina-hero-body">
          <p className="lumina-kicker">WE DON'T JUST TAKE PICTURES.</p>
          <h1 className="lumina-headline-serif">
            WE CAPTURE<br />
            EMOTIONS.
          </h1>
          <div className="lumina-headline-script">You live them.</div>
          
          <p className="lumina-subtext">
            Luxury photography for the moments that matter the most.
          </p>

          <button className="lumina-cta-btn" onClick={() => scrollTo("work")}>
            <span>VIEW PORTFOLIO</span>
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Bottom Scroll Box */}
        <div className="lumina-hero-footer">
          <div className="lumina-scroll-box">
            <span>SCROLL TO DISCOVER</span>
            <div className="lumina-scroll-line">
              <div className="lumina-scroll-line-fill" />
            </div>
          </div>
        </div>

        {/* Right Edge Slide Counter */}
        <div className="lumina-right-slides">
          <button className={`lumina-slide-number ${heroIndex === 0 ? "is-active" : ""}`} onClick={() => setHeroIndex(0)}>01</button>
          <div className="lumina-slide-line" />
          <button className={`lumina-slide-number ${heroIndex === 1 ? "is-active" : ""}`} onClick={() => setHeroIndex(1)}>02</button>
          <button className={`lumina-slide-number ${heroIndex === 2 ? "is-active" : ""}`} onClick={() => setHeroIndex(2)}>03</button>
        </div>

        {/* Bottom Right Social Rail */}
        <div className="lumina-social-rail">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram size={15} />
          </a>
          <div className="lumina-social-line" />
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <Facebook size={15} />
          </a>
          <div className="lumina-social-line" />
          <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.63 11.16-.11-.95-.21-2.41.04-3.45.23-.95 1.49-6.32 1.49-6.32s-.38-.76-.38-1.89c0-1.77 1.03-3.09 2.3-3.09 1.09 0 1.61.81 1.61 1.79 0 1.09-.7 2.73-1.06 4.25-.3 1.27.64 2.31 1.9 2.31 2.27 0 4.02-2.4 4.02-5.86 0-3.06-2.2-5.21-5.34-5.21-3.64 0-5.78 2.73-5.78 5.55 0 1.1.42 2.28.95 2.92.1.13.12.24.09.37-.1.4-.32 1.29-.36 1.47-.06.25-.2.31-.46.19-1.72-.8-2.8-3.3-2.8-5.31 0-4.32 3.14-8.29 9.06-8.29 4.76 0 8.46 3.39 8.46 7.92 0 4.73-2.98 8.53-7.11 8.53-1.39 0-2.7-0.72-3.15-1.58l-.86 3.28c-.31 1.19-1.15 2.68-1.71 3.59C9.28 23.77 10.6 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z"/>
            </svg>
          </a>
        </div>
      </section>

      <main>

        <section className="introduction-sunlit" id="journal"><div className="intro-number">01</div><div><p className="sunlit-kicker">The journal</p><h2>Observations<br />from the road,<br />close to home.</h2></div><p className="intro-body">I photograph the gestures, weather, and small distances that give a place its particular memory.</p></section>

        <section className="drift-section" aria-label="Photographic fragments"><div className="drift-section-copy"><p className="sunlit-kicker">In passing</p><h2>Loose frames<br />from the<br />same road.</h2><p>A handful of photographs held together by the way the light changed. Hover to pause a frame, then open it to look longer.</p><span>Starline / fragments / 01—06</span></div><div className="drift-stage"><DriftWall items={driftItems} columns={4} tileWidth={184} tileHeight={236} gap={14} tilt={5} turn={-5} perspective={1350} depth={46} speed={10} variance={.2} parallax={.16} lift={24} dim={.9} overlayColor="#24211e" onSelect={(item) => { const match = works.find((work) => work.image === item.image); if (match) setSelected(match); }} /></div></section>

        <section className="cinematic-work" id="work" aria-label="Selected work"><AnimatePresence mode="wait"><motion.img className="cinematic-backdrop" key={works[activeWork].image} src={works[activeWork].image} alt="" initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: .65, ease: [0.23, 1, 0.32, 1] }} /></AnimatePresence><div className="cinematic-wash" /><div className="cinematic-topline"><p><span className="cinematic-mark"><i /><i /><i /></span> Selected stories</p><p>Starline studio / 2024—26</p></div><div className="cinematic-intro"><p className="sunlit-kicker">The long look</p><h2>Take the<br /><em>long way.</em></h2><p className="cinematic-description">Five visual stories from the road, with enough room to stop and see what stays.</p><div className="cinematic-actions"><button onClick={() => setSelected(works[activeWork])}>Open {works[activeWork].title} <ArrowUpRight size={15} /></button><button className="cinematic-quiet-link" onClick={() => scrollTo("journal")}>Read the journal <ChevronRight size={15} /></button></div></div><div className="cinematic-detail"><p>Field note {String(activeWork + 1).padStart(2, "0")} / 05</p><h3>{works[activeWork].title}</h3><span>{works[activeWork].location}</span></div><div className="cinematic-controls"><button onClick={() => setActiveWork((activeWork + works.length - 1) % works.length)} aria-label="Previous story"><ArrowLeft size={16} /></button><button onClick={() => setActiveWork((activeWork + 1) % works.length)} aria-label="Next story"><ArrowRight size={16} /></button></div><div className="cinematic-rail" role="tablist" aria-label="Selected stories">{works.map((work, index) => <button key={work.title} className={`cinematic-card${activeWork === index ? " is-active" : ""}`} onClick={() => setActiveWork(index)} onDoubleClick={() => setSelected(work)} role="tab" aria-selected={activeWork === index} aria-label={`Select ${work.title}`}><img src={work.image} alt="" loading="lazy" /><span><b>{work.title}</b><em>{String(index + 1).padStart(2, "0")}</em></span></button>)}</div></section>

        <section className="feature-story"><div className="feature-story-copy"><p className="sunlit-kicker">In the studio</p><h2>A late-summer<br />room, held<br />still.</h2><p>New work from *The Small Things*: fruit, linen, objects, and the slow afternoon light that settles around them.</p><button className="text-cta on-dark" onClick={() => setSelected(works[2])}>Open the story <ArrowUpRight size={17} /></button></div><button className="feature-story-image" onClick={() => setSelected(works[2])} aria-label="View Sunday Objects"><img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop" alt="Colourful still life on cream stone" /><span>New journal story</span></button></section>

        <section className="about-sunlit" id="about"><div className="about-image-wrap"><img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop" alt="Portrait with wildflowers in warm light" /><span>Portrait by Maya Rios</span></div><div className="about-copy"><p className="sunlit-kicker">Hello, I’m Lila</p><h2>I make pictures<br />for brands,<br />people, and<br />places in motion.</h2><p>Based in California and working wherever a story is unfolding. Available for editorial, travel, brand, and personal commissions.</p><a className="about-link" href="mailto:hello@starline.studio">Begin a conversation <ArrowUpRight size={16} /></a></div></section>

        <section className="closing-sunlit"><p className="sunlit-kicker">Have a story?</p><h2>Let’s give it<br />a lasting frame.</h2><a href="mailto:hello@starline.studio">hello@starline.studio <ArrowUpRight size={23} /></a><div className="closing-shapes" aria-hidden="true"><i /><i /><i /></div></section>
      </main>

      <footer className="sunlit-footer"><span>© 2026 Starline Studio</span><span>Made slowly, with feeling.</span><a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={14} /> Instagram</a></footer>

      <AnimatePresence>{selected && <motion.div className="sunlit-lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}><button className="sunlit-lightbox-close" onClick={() => setSelected(null)} aria-label="Close image"><X size={21} /></button><motion.figure className="sunlit-lightbox-figure" initial={{ opacity: 0, scale: .97, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .97, y: 12 }} onClick={(event) => event.stopPropagation()}><img src={selected.image} alt={`${selected.title}, ${selected.location}`} /><figcaption><div><p>{selected.category}</p><h2>{selected.title}</h2><span>{selected.location}</span></div><p>A Starline visual story.</p></figcaption></motion.figure></motion.div>}</AnimatePresence>
    </div>
  );
}
