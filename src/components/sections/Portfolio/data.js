const img = (seed, w = 1600, h = 1200) =>
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;

export const PORTFOLIO = [
  // Top band (6x 1-col small thumbnails)
  { id: 'p1',  image: { src: img('gift-pack'), alt: 'Gift Pack Landing' }, title: 'Gift Pack Landing', category: 'Web UI', span: { cols: 1, rows: 15 } },
  { id: 'p2',  image: { src: img('holiday-promo'), alt: 'Holiday Promo' }, title: 'Holiday Promo', category: 'Branding', span: { cols: 1, rows: 15 } },
  { id: 'p3',  image: { src: img('cloud-partner'), alt: 'Blade Partner' }, title: 'Blade Partner', category: 'Dashboard', span: { cols: 1, rows: 15 } },
  { id: 'p4',  image: { src: img('ticketing-app'), alt: 'Ticketing App' }, title: 'Ticketing App', category: 'App UI', span: { cols: 1, rows: 15 } },
  { id: 'p5',  image: { src: img('ev-promo'), alt: 'EV Promo' }, title: 'EV Promo', category: 'Marketing', span: { cols: 2, rows: 30 } },
  // { id: 'p6',  image: { src: img('auto-dealer'), alt: 'Auto Dealer' }, title: 'Auto Dealer', category: 'Web', span: { cols: 1, rows: 27 } },

  // Middle band (3x 2-col tall)
  { id: 'p7',  image: { src: img('nft-explore'), alt: 'Explore & Collect NFTs' }, title: 'Explore & Collect NFTs', category: 'NFT', span: { cols: 2, rows: 20 } },
  { id: 'p8',  image: { src: img('agency-suite'), alt: 'Agency Suite' }, title: 'Agency Suite', category: 'Agency', span: { cols: 2, rows: 30 } },
  { id: 'p9',  image: { src: img('creator-hub'), alt: 'Creator Hub' }, title: 'Creator Hub', category: 'Platform', span: { cols: 2, rows: 50 }},

  // Next band (3x 2-col medium)
  { id: 'p10', image: { src: img('healthcare-saas'), alt: 'Healthcare SaaS' }, title: 'Healthcare SaaS', category: 'SaaS', span: { cols: 2, rows: 30 } },
  { id: 'p11', image: { src: img('talent-experts'), alt: 'Talent Experts' }, title: 'Talent Experts', category: 'Jobs', span: { cols: 2, rows: 30 } },
  { id: 'p15', image: { src: img('evolution-mini'), alt: 'Evolution Mini' }, title: 'Evolution Mini', category: 'Motion', span: { cols: 2, rows: 20 } },

  // Bottom band (3x 2-col)
  { id: 'p12', image: { src: img('product-cards'), alt: 'Product Cards' }, title: 'Product Cards', category: 'eCommerce', span: { cols: 2, rows: 20 } },
  { id: 'p13', image: { src: img('sports-concept'), alt: 'Sports Concept' }, title: 'Sports Concept', category: 'Social', span: { cols: 2, rows: 15 } },
  { id: 'p14', image: { src: img('crypto-suite'), alt: 'Crypto Suite' }, title: 'Crypto Suite', category: 'Fintech', span: { cols: 2, rows: 10 } },
];