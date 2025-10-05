// src/utils/constants.js

// Color tokens (used across components)
export const colors = {
  primary: {
    dark: "#0a0a1f",
    darker: "#1a1a2e",
  },
  purple: {
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
  },
  gray: {
    400: "#9ca3af",
    500: "#6b7280",
  },
};

// Handy gradient class fragments (compose with bg-gradient-to-r/-t/-br in className)
export const gradients = {
  primary: "from-[#7c3aed] via-[#8b5cf6] to-[#a855f7]",
  surfaceGlow: "from-purple-600/20 to-fuchsia-500/20",
  textPrimary: "from-purple-300 via-fuchsia-300 to-purple-200",
};

// Breakpoints (desktop-first threshold)
export const BREAKPOINTS = {
  MOBILE_MAX: 639,     // < 640px
  TABLET_MIN: 640,     // 640px
  TABLET_MAX: 1023,    // up to 1024px - 1
  DESKTOP_MIN: 1024,   // ≥ 1024px
};

// Media queries you can use with matchMedia if needed
export const MEDIA = {
  mobile: "(max-width: 639px)",
  tablet: "(min-width: 640px) and (max-width: 1023px)",
  desktop: "(min-width: 1024px)",
};

// Routes used in Navbar and pages
export const ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  whiteLabel: "/white-label",
  contact: "/contact",
};

// Site/brand info
export const SITE = {
  name: "Metro Solver",
  legalName: "Metro Solver Digital Marketing",
  tagline: "Your IT Partner",
  theme: {
    background: colors.primary.dark,
    surface: colors.primary.darker,
    accent: colors.purple[600],
  },
  contact: {
    address:
      "Head office: Metro Solver, Loacted Gowtham Block, Located 123 S.A, United Kingdom",
    phone: "+8324782 56326",
    email: "info@metrosolver.com",
  },
  copyright: `© ${new Date().getFullYear()} Metro Solver. All Rights Reserved`,
};

// Top banner messages (marquee)
export const BANNER_MESSAGES = [
  "Budget Friendly",
  "No. 1 in Europe",
  "On your first order 30% OFF",
  "For all products buy now get the offer",
  "User Friendly",
  "24/7 Service",
];

// Navbar links and Services dropdown structure
export const NAV_LINKS = [
  { id: "home", label: "Home", href: ROUTES.home },
  { id: "about", label: "About us", href: ROUTES.about },
  {
    id: "services",
    label: "Services",
    href: ROUTES.services,
    dropdown: [
      { id: "graphic-design", label: "Graphic Design", href: `${ROUTES.services}#graphic-design` },
      { id: "web-dev", label: "Web & Software Development", href: `${ROUTES.services}#web-dev` },
      { id: "multimedia", label: "Multimedia & Video Editing", href: `${ROUTES.services}#multimedia` },
      { id: "digital-marketing", label: "Digital Marketing", href: `${ROUTES.services}#digital-marketing` },
      { id: "creative-writing", label: "Creative Writing Solution", href: `${ROUTES.services}#creative-writing` },
      { id: "seo", label: "SEO", href: `${ROUTES.services}#seo` },
      { id: "animation-3d", label: "3D Animation & Visualization", href: `${ROUTES.services}#animation-3d` },
      { id: "ecommerce", label: "E-Commerce Solution", href: `${ROUTES.services}#ecommerce` },
      { id: "accounting", label: "Accounting", href: `${ROUTES.services}#accounting` },
      { id: "special-combo", label: "Special Combo", href: `${ROUTES.services}#special-combo` },
      { id: "premium-website", label: "Premium Website", href: `${ROUTES.services}#premium-website` },
      { id: "premium-domains", label: "Premium Domains", href: `${ROUTES.services}#premium-domains` },
      { id: "proxy", label: "Proxy", href: `${ROUTES.services}#proxy` },
      { id: "merch", label: "Merchandise", href: `${ROUTES.services}#merch` },
      { id: "academy", label: "Academy", href: `${ROUTES.services}#academy` },
    ],
  },
  { id: "white-label", label: "White label", href: ROUTES.whiteLabel },
  { id: "contact", label: "Contact us", href: ROUTES.contact },
];

// Partners used in carousels/footers (use logos if available)
export const PARTNER_BRANDS_HERO = [
  { id: "luminus", name: "Luminus" },
  { id: "brembo", name: "Brembo" },
  { id: "motorola", name: "Motorola" },
];

export const PARTNER_BRANDS_FOOTER = [
  { id: "meta", name: "Meta" },
  { id: "gmp", name: "Google Marketing Platform" },
  { id: "microsoft", name: "Microsoft" },
  { id: "aws", name: "AWS Partner" },
  { id: "amazon", name: "Amazon" },
  { id: "tiktok", name: "TikTok" },
];

// Newsletter copy
export const NEWSLETTER = {
  title: "Subscribe to Our Newsletter",
  subtitle: "Join the 25000+ users in our company",
  placeholder: "Enter your email",
  cta: "Subscribe",
};

// Footer lists (titles only, items can be mapped in UI as needed)
export const FOOTER_COLUMNS = {
  company: ["Items", "Add Item", "Our Team", "White Labelling"],
  about: ["Study Mission", "FAQs", "Send Message", "Privacy Policy", "Terms & Condition", "Start Earning"],
  support: ["Live Support", "Knowledge Base", "Press", "Send Message", "Affiliate Program", "Special Combo"],
  services: [
    "Web Marketing",
    "Print & Branding",
    "Influencer",
    "Real Estate & Web development",
    "Multimedia",
    "Graphic Design",
    "Search Engine Marketing",
    "Premium Website",
    "Web Analytics",
    "Special Combo",
  ],
};

// Country selector examples
export const COUNTRIES = [
  { code: "GBP", label: "GBP - British Pound" },
  { code: "USD", label: "USD - US Dollar" },
  { code: "EUR", label: "EUR - Euro" },
];

// Social links (fill actual URLs when available)
export const SOCIAL_LINKS = [
  { id: "linkedin", label: "LinkedIn", href: "#" },
  { id: "facebook", label: "Facebook", href: "#" },
  { id: "twitter", label: "Twitter/X", href: "#" },
  { id: "youtube", label: "YouTube", href: "#" },
  { id: "instagram", label: "Instagram", href: "#" },
];

// Default stats (mirrors the Stats section)
export const STATS_DEFAULT = [
  { id: "clients", value: 150, suffix: "+", label: "Current Clients" },
  { id: "projects", value: 25, suffix: "k+", label: "Completed Projects" },
  { id: "teams", value: 90, suffix: "+", label: "Metro Solver Teams" },
];

// utils/constants.js

export const AGENT_CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'agency', label: 'Agency' },
  { key: 'creative', label: 'Creative' },
  { key: 'leadership', label: 'Leadership' },
  { key: 'growth', label: 'Grow Marketing' },
  { key: 'technology', label: 'Technology' },
];

export const AGENTS = [
  {
    id: 1,
    name: 'Ayesha Siddiqah',
    role: 'Co‑founder, Leader',
    categories: ['leadership', 'agency'],
    photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 2,
    name: 'Rafay Ahmed',
    role: 'Creative Director',
    categories: ['creative', 'agency'],
    photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 3,
    name: 'Nadia Khan',
    role: 'Growth Marketer',
    categories: ['growth'],
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 4,
    name: 'Faizan Ali',
    role: 'Full‑stack Engineer',
    categories: ['technology'],
    photo: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 5,
    name: 'Sana Iqbal',
    role: 'Product Designer',
    categories: ['creative', 'technology'],
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 6,
    name: 'Hamza Tariq',
    role: 'Marketing Strategist',
    categories: ['growth', 'agency'],
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 7,
    name: 'Zainab Gul',
    role: 'HR & Ops Lead',
    categories: ['leadership'],
    photo: 'https://images.unsplash.com/photo-1531123414780-f742b6bdf133?auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 8,
    name: 'Mahad Raza',
    role: 'Front‑end Engineer',
    categories: ['technology'],
    photo: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 9,
    name: 'Amna Farooq',
    role: 'Brand Strategist',
    categories: ['creative', 'agency'],
    photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 10,
    name: 'Umar Khalid',
    role: 'Tech Lead',
    categories: ['leadership', 'technology'],
    photo: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 11,
    name: 'Hiba Javed',
    role: 'Content Lead',
    categories: ['creative', 'growth'],
    photo: 'https://images.unsplash.com/photo-1520975922203-b1aab2a654ac?auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 12,
    name: 'Arham Siddiqui',
    role: 'Performance Marketer',
    categories: ['growth'],
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1080&q=80',
  },
];