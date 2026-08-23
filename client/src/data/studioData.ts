export type StoryItem = {
  id: string;
  title: string;
  subtitle: string;
  category: "Editorial & Brand" | "Intimate Celebrations" | "Wild Landscapes" | "Studio & Objects";
  location: string;
  year: string;
  coverImage: string;
  galleryImages: string[];
  fieldNotes: string;
  details: {
    camera?: string;
    light?: string;
    season?: string;
    guests?: string;
  };
};

export type InvestmentTier = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  featured?: boolean;
  coverage: string;
  inclusions: string[];
  recommendedFor: string;
};

export type FAQItem = {
  question: string;
  answer: string;
  category: "Booking" | "Travel & Weather" | "Delivery & Prints";
};

export type TestimonialItem = {
  id: string;
  quote: string;
  client: string;
  celebration: string;
  location: string;
  image: string;
};

export type JournalArticle = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  coverImage: string;
  excerpt: string;
  content: string[];
};

export const studioStories: StoryItem[] = [
  {
    id: "high-sierra",
    title: "High Sierra Dusk",
    subtitle: "A silent twilight over granite water",
    category: "Wild Landscapes",
    location: "High Sierra, California",
    year: "2026",
    coverImage: "/bg_hero_page.png",
    galleryImages: [
      "/bg_hero_page.png",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop"
    ],
    fieldNotes: "Standing at the edge of the glacial shelf as the wind died down. The blue hour in the Sierra creates a cool gradient across the water that no studio light could ever manufacture. We waited for twenty minutes in total quiet just to catch the single breath of reflection before the stars surfaced.",
    details: {
      camera: "Medium Format Digital & 35mm Portra 400",
      light: "Natural Twilight / Blue Hour",
      season: "Late Autumn 2026"
    }
  },
  {
    id: "joshua-bloom",
    title: "Desert Wildflower Bloom",
    subtitle: "Golden hour textures across the Mojave",
    category: "Intimate Celebrations",
    location: "Joshua Tree, California",
    year: "2026",
    coverImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop",
      "/bg_hero_page.png"
    ],
    fieldNotes: "An intimate vow exchange tucked between ancient monzogranite boulders. The low desert sun carved gold edges around wild mustard blossoms. With just twelve guests, the dinner took place at a single long wooden table under open skies as lantern light took over from the sunset.",
    details: {
      camera: "Contax G2 & Leica M11",
      light: "Golden Backlight & Candlelight",
      season: "Spring 2026",
      guests: "12 Close Friends & Family"
    }
  },
  {
    id: "sunday-objects",
    title: "Sunday Objects & Linen",
    subtitle: "Still life studies of slow afternoon light",
    category: "Studio & Objects",
    location: "San Francisco Studio",
    year: "2026",
    coverImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1600&auto=format&fit=crop"
    ],
    fieldNotes: "Explorations of form, texture, and organic vessels. We let raw afternoon sunlight rake across stone plinths and unbleached Belgian linen, celebrating the beauty of small, overlooked everyday rituals.",
    details: {
      camera: "Hasselblad 500C/M",
      light: "Window Natural Directional Light",
      season: "Summer 2026"
    }
  },
  {
    id: "santa-fe-adobe",
    title: "Santa Fe Passages",
    subtitle: "Warm terra cotta walls and sharp shade",
    category: "Editorial & Brand",
    location: "Santa Fe, New Mexico",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1600&auto=format&fit=crop",
      "/bg_hero_page.png"
    ],
    fieldNotes: "Editorial campaign photographed for an artisanal wool and ceramic studio. The warm earth tones of the historic adobe corridors provided the perfect grounding contrast against crisp minimalist silhouettes.",
    details: {
      camera: "35mm Kodak Tri-X 400 & Ektar 100",
      light: "Direct Sun & Ambient Bounce",
      season: "Autumn 2025"
    }
  },
  {
    id: "salt-flats-vastness",
    title: "The White Horizon",
    subtitle: "Minimalist geometry across salt and sky",
    category: "Wild Landscapes",
    location: "Bonneville Salt Flats, Utah",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1600&auto=format&fit=crop",
      "/bg_hero_page.png",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop"
    ],
    fieldNotes: "Where the horizon dissolves completely into mirror reflections. We traveled before sunrise to capture the transition from indigo cold to shimmering desert pastel light.",
    details: {
      camera: "Medium Format GFX 100S",
      light: "Dawn Grazing Horizon Light",
      season: "Spring 2025"
    }
  },
  {
    id: "coastal-fog-passage",
    title: "Pacific Headlands",
    subtitle: "Salt spray, cypress trees, and coastal fog",
    category: "Intimate Celebrations",
    location: "Big Sur, California",
    year: "2026",
    coverImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop"
    ],
    fieldNotes: "Clifftop vows in the rolling ocean mist. The bride wore silk that fluttered with the offshore breeze while seven of their closest companions watched from a redwood bench above the Pacific crash.",
    details: {
      camera: "35mm Leica Summicron 35mm",
      light: "Oceanic Mist Diffused Light",
      season: "Summer 2026",
      guests: "7 Guests"
    }
  }
];

export const investmentTiers: InvestmentTier[] = [
  {
    id: "intimate",
    name: "The Intimate Story",
    tagline: "Tailored for micro-weddings, elopements, and bespoke celebrations under 30 guests.",
    price: "$3,400",
    coverage: "Up to 6 Hours of Seamless Storytelling",
    inclusions: [
      "Full photographic coverage by Starline lead artist",
      "Curated high-resolution digital gallery (400+ hand-finished frames)",
      "Full personal printing and digital sharing rights",
      "Custom timeline architecture & location lighting roadmap",
      "Private online proofing gallery with archival print store",
      "Delivered within 4–6 weeks with 48-hour sneak preview"
    ],
    recommendedFor: "Couples desiring deep intimacy, zero fluff, and timeless documentary frames."
  },
  {
    id: "full-day",
    name: "The Full Story & Escape",
    tagline: "Our signature all-day experience documenting the entire arc from morning preparations to late-night dinner.",
    price: "$5,200",
    featured: true,
    coverage: "Up to 9 Hours of Comprehensive Coverage",
    inclusions: [
      "Lead artist + dedicated second photographer",
      "Hybrid capture: 35mm Analog Film rolls + Medium Format Digital",
      "Curated gallery of 700+ hand-toned, timeless images",
      "Custom linen keepsake box containing 50 fine-art archival prints",
      "Complimentary golden-hour engagement or portrait session",
      "All travel expenses included within California, Utah, and Nevada",
      "48-hour signature preview story deck"
    ],
    recommendedFor: "Those who want every laughter, whisper, landscape nuance, and celebration moment preserved without looking at the clock."
  },
  {
    id: "destination",
    name: "The Destination & Multi-Day",
    tagline: "Multi-day narrative for weekend getaways, European celebrations, and backcountry expeditions.",
    price: "$7,800",
    coverage: "Two Days / Multi-Event Complete Story",
    inclusions: [
      "Welcome dinner / rehearsal gathering + Full Wedding Day coverage",
      "Dual-artist team with unlimited film rolls & medium format gear",
      "1,000+ hand-crafted digital frames delivered in full resolution",
      "Custom 12x12 bespoke Italian-bound linen heirloom wedding album",
      "Full drone aerial topography & landscape environmental frames",
      "Worldwide travel and lodging completely included",
      "Priority artisan delivery within 3 weeks"
    ],
    recommendedFor: "Destination celebrations where the journey and environment are as central as the vow exchange."
  },
  {
    id: "editorial",
    name: "Editorial & Brand Commissions",
    tagline: "Art-directed imagery for design-led brands, architectural spaces, and lookbooks.",
    price: "From $2,200",
    coverage: "Half-Day or Full-Day Studio & Location Production",
    inclusions: [
      "Complete commercial usage & global digital licensing",
      "Collaborative creative direction, moodboarding & casting consultation",
      "Color grading matched to brand aesthetic guidelines",
      "High-resolution master files + web-optimized exports",
      "Tethered on-set live preview for art directors",
      "Studio or remote location coordination"
    ],
    recommendedFor: "Designers, publications, hoteliers, and luxury brands seeking soulful, organic aesthetics."
  }
];

export const experienceSteps = [
  {
    step: "01",
    title: "Connection & Vision",
    description: "We begin with an unhurried conversation about how you want your day to feel. No generic templates—we align on your energy, the light, and what matters most."
  },
  {
    step: "02",
    title: "Curating the Roadmap",
    description: "I assist with timeline design, golden-hour window alignment, location scouting, and subtle styling guidance so you can breathe easily when the day arrives."
  },
  {
    step: "03",
    title: "The Unhurried Day",
    description: "On the day of, I guide with a gentle hand when needed and step back to let real moments unfold. You will never feel rushed, posed into awkward stiffness, or managed."
  },
  {
    step: "04",
    title: "Heirloom Delivery",
    description: "Within 48 hours, you receive a curated sneak peek gallery. Your full hand-toned collection and custom archival print folios arrive ready to be cherished for decades."
  }
];

export const faqItems: FAQItem[] = [
  {
    question: "What is your approach on the wedding day?",
    answer: "I believe the best photographs occur when you feel completely present in your experience. I balance artful, editorial guidance during portrait sessions with an unobtrusive, documentary eye during the ceremony and reception so you can savor every second with your guests.",
    category: "Booking"
  },
  {
    question: "Do you travel for intimate weddings and destination sessions?",
    answer: "Absolutely. Over 60% of Starline stories are photographed outside of our home base in California. Travel within California, Utah, and Nevada is already included in our signature packages, and worldwide travel is quoted transparently with zero surprise fees.",
    category: "Travel & Weather"
  },
  {
    question: "How and when will we receive our photographs?",
    answer: "You will receive a curated 48-hour sneak peek gallery of 25–40 images right after your celebration. Full digital galleries are delivered within 4 to 6 weeks through a private, password-protected online store where you can download high-resolution and web files, share with family, and order fine art prints.",
    category: "Delivery & Prints"
  },
  {
    question: "Do you shoot film, digital, or both?",
    answer: "We shoot a hybrid approach! Medium format digital gives us exceptional dynamic range and precision in challenging low-light conditions, while 35mm and 120 analog film (Kodak Portra, Tri-X) provides that unmistakable creamy grain, skin tone depth, and timeless tactile feel.",
    category: "Booking"
  },
  {
    question: "How do we secure our date?",
    answer: "To ensure absolute dedication to every story, Starline only accepts a limited number of celebrations each year (maximum 20). Dates are reserved with a signed digital agreement and a 30% retainer. The remaining balance is split into flexible installments.",
    category: "Booking"
  },
  {
    question: "What happens if weather conditions are unpredictable?",
    answer: "Unpredictable weather often makes for the most cinematic, memorable photographs! Wind, rolling fog, and mood light add incredible romance. We always scout backup micro-locations and carry weather protection so we can embrace the elements safely.",
    category: "Travel & Weather"
  }
];

export const testimonials: TestimonialItem[] = [
  {
    id: "1",
    quote: "Finding someone you've never met and then putting your full trust in to capture all the moments of your day is worth it a million times over with Starline. It felt like we had known each other forever. An all-around creative visionary.",
    client: "Adrianne & Marcus",
    celebration: "Intimate High Sierra Vows",
    location: "Lake Tahoe, California",
    image: "/bg_hero_page.png"
  },
  {
    id: "2",
    quote: "Seriously, speechlessly stunning. It is rare to find an artist who delivers final photographs where every single frame feels like an editorial cover. Even a year later, we look through our print box in complete awe.",
    client: "Elena & Christian",
    celebration: "Desert Twilight Celebration",
    location: "Joshua Tree, California",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "3",
    quote: "Starline captured the atmosphere, stillness, and intimacy of our celebration in a way that felt entirely honest. Not once did we feel posed. She made our 15 guests feel like royalty.",
    client: "Maya & Julian",
    celebration: "Coastal Redwood Gathering",
    location: "Big Sur, California",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop"
  }
];

export const journalArticles: JournalArticle[] = [
  {
    id: "high-desert-guide",
    slug: "high-desert-intimate-wedding-guide",
    title: "How to Plan an Intimate Celebration in the High Desert",
    subtitle: "Logistics, golden hour timing, and embracing the elements",
    category: "Planning Guides",
    date: "August 2026",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
    excerpt: "The desert rewards the intentional. When you strip away ballroom distractions, the land, the light, and your people become the entire canvas.",
    content: [
      "There is something unapologetic about desert light. It forces you to slow down, pay attention to shadows, and build your celebration around the temperature of the sun.",
      "When planning an intimate desert celebration, we recommend timing your vow exchange 45 minutes before true sunset. This provides comfortable temperatures for your guests and allows the golden horizon to bathe your portraits in honeyed tones before transitioning into ambient candlelight.",
      "Keep your palette grounded: terracotta, raw linen, washed ochre, and desert sage harmonize effortlessly with the surrounding topography."
    ]
  },
  {
    id: "blue-hour-magic",
    slug: "the-color-of-twilight-blue-hour",
    title: "The Color of Twilight: Why Blue Hour Changes Everything",
    subtitle: "The 30 minutes after sunset that transform photography",
    category: "Field Notes",
    date: "July 2026",
    readTime: "4 min read",
    coverImage: "/bg_hero_page.png",
    excerpt: "While everyone runs for golden hour, the most poetic, atmospheric frames happen during the quiet transition into night.",
    content: [
      "Golden hour gets all the glory, but blue hour is where memory lingers. In the 20 to 35 minutes after the sun dips behind the mountain ridge, direct shadows vanish and the entire atmosphere is wrapped in a cool, painterly luminescence.",
      "Skin tones look velvety, candlelight catches the eye, and the natural landscape takes on a deep, serene gravitas.",
      "Whenever possible, we advise couples to schedule dinner or outdoor drinks during this window to capture unguarded, atmospheric candid moments."
    ]
  },
  {
    id: "what-to-wear-natural-light",
    slug: "wardrobe-palette-guide-for-timeless-photos",
    title: "Textures Over Trends: What to Wear for Natural Light Photography",
    subtitle: "Choosing materials that breathe, move, and hold light",
    category: "Style & Wardrobe",
    date: "June 2026",
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop",
    excerpt: "Natural fibers like silk, raw linen, and structured wool catch breeze and directional light with an organic grace that synthetic fabrics cannot match.",
    content: [
      "Clothing should never compete with your emotion or the landscape. When selecting wardrobe for portraiture or celebration days, prioritize texture over loud prints.",
      "Heavy silk crepes, unbleached linen, matte wools, and organic cottons interact with directional natural light by creating soft micro-gradients rather than harsh plastic reflections.",
      "Choose a palette rooted in natural pigments: cream, stone, espresso, moss, and midnight."
    ]
  }
];
