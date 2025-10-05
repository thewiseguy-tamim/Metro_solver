import React from 'react';

import { PORTFOLIO } from './data';
import { PortfolioCard } from '../../common/Card';

const SectionHeader = () => (
  <div className="mb-8 lg:mb-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
    <div className="lg:col-span-6">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">Our Latest Works</h2>
    </div>
    <div className="lg:col-span-6">
      <p className="text-sm md:text-base text-gray-400 lg:text-right max-w-2xl lg:ml-auto">
        Based on the description of Metro Solver and the image provided, here is a
        6-step process that Metro Solver uses to scale a customer’s business.
      </p>
    </div>
  </div>
);

// Split items into 3 distinct rows (0,1,2 pattern)
function splitIntoRows(arr) {
  const rows = [[], [], []];
  arr.forEach((item, i) => rows[i % 3].push(item));
  // If a row ends up empty (short data), recycle from start
  for (let r = 0; r < 3; r++) {
    if (rows[r].length === 0 && arr.length) rows[r].push(...arr.slice(0, Math.min(4, arr.length)));
  }
  return rows;
}

export default function Portfolio() {
  const items = PORTFOLIO;
  const [paused, setPaused] = React.useState(false);
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReducedMotion(mq.matches);
    onChange();
    mq.addEventListener ? mq.addEventListener('change', onChange) : mq.addListener(onChange);
    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', onChange) : mq.removeListener(onChange);
    };
  }, []);

  const [row1, row2, row3] = React.useMemo(() => splitIntoRows(items), [items]);

  // Row sizing: make row 2 taller and slightly wider tiles (like your mock)
  const config = [
    // Row 1 (top) — small/short
    {
      width: 'w-[230px] sm:w-[260px] md:w-[300px] lg:w-[320px]',
      height: 'h-[170px] sm:h-[190px] md:h-[210px] lg:h-[230px]',
      duration: 36,
    },
    // Row 2 (middle) — bigger/longer
    {
      width: 'w-[300px] sm:w-[340px] md:w-[380px] lg:w-[420px]',
      height: 'h-[260px] sm:h-[300px] md:h-[340px] lg:h-[380px]',
      duration: 40,
    },
    // Row 3 (bottom) — medium
    {
      width: 'w-[250px] sm:w-[280px] md:w-[320px] lg:w-[340px]',
      height: 'h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px]',
      duration: 38,
    },
  ];

  const Row = ({ rowItems, idx }) => {
    const { width, height, duration } = config[idx];
    const animation = reducedMotion ? 'none' : `portfolio-marquee ${duration}s linear infinite`;
    const style = {
      animation,
      animationPlayState: paused ? 'paused' : 'running',
      willChange: 'transform',
    };

    return (
      <div className="relative overflow-hidden">
        <div className="flex w-max gap-5" style={style}>
          {/* Strip A */}
          <div className="flex items-stretch gap-5 shrink-0">
            {rowItems.map((item) => (
              <div key={`a-${idx}-${item.id}`} className={`shrink-0 ${width}`}>
                <div className={`relative ${height}`}>
                  <div className="absolute inset-0">
                    <PortfolioCard
                      image={item.image}
                      title={item.title}
                      category={item.category}
                      link={item.link}
                      featured={item.featured}
                      label={item.label}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Strip B (duplicate for seamless loop) */}
          <div className="flex items-stretch gap-5 shrink-0" aria-hidden="true">
            {rowItems.map((item) => (
              <div key={`b-${idx}-${item.id}`} className={`shrink-0 ${width}`}>
                <div className={`relative ${height}`}>
                  <div className="absolute inset-0">
                    <PortfolioCard
                      image={item.image}
                      title={item.title}
                      category={item.category}
                      link={item.link}
                      featured={item.featured}
                      label={item.label}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional edge fades for each row */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a0a1f] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0a1f] to-transparent" />
      </div>
    );
  };

  return (
    <section
      id="portfolio"
      className="relative py-14 md:py-18 bg-[#0a0a1f]"
      aria-labelledby="portfolio-heading"
      data-section="portfolio"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-purple-600 to-fuchsia-500" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-fuchsia-500 to-purple-600" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-8">
        <SectionHeader />

        {/* 3-row carousel; middle row is taller */}
        <div
          role="region"
          aria-label="Latest works carousel (3 rows)"
          className="relative space-y-6 rounded-2xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Row rowItems={row1} idx={0} />
          <Row rowItems={row2} idx={1} />
          <Row rowItems={row3} idx={2} />
        </div>
      </div>

      {/* Keyframes only (safe) */}
      <style>{`
        /* Right-to-left loop; two equal strips => -50% */
        @keyframes portfolio-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}