import React, { useEffect, useMemo, useRef, useState } from 'react';

const Star = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.168L12 18.902l-7.336 3.863 1.402-8.168L.132 9.21l8.2-1.192L12 .587z" />
  </svg>
);

const GoogleBadge = () => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
    <span className="inline-flex">
      <span className="mx-0.5 inline-block h-2 w-2 rounded-full bg-[#4285F4]" />
      <span className="mx-0.5 inline-block h-2 w-2 rounded-full bg-[#EA4335]" />
      <span className="mx-0.5 inline-block h-2 w-2 rounded-full bg-[#FBBC05]" />
      <span className="mx-0.5 inline-block h-2 w-2 rounded-full bg-[#34A853]" />
    </span>
    Google
  </span>
);

const TrustpilotBadge = () => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-emerald-400" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.1 6.5H21l-5.5 4 2.1 6.5L12 15l-5.6 4.9L8.5 12 3 8.6h6.9L12 2z" />
    </svg>
    Trustpilot
  </span>
);

const Avatar = ({ name }) => {
  const initial = (name || '?').charAt(0).toUpperCase();
  return (
    <div className="relative inline-grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-purple-600 to-purple-400 text-white ring-1 ring-white/10">
      <span className="text-sm font-bold">{initial}</span>
    </div>
  );
};

const TestimonialCard = ({ t }) => (
  <article className="mx-2 flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-white shadow-[0_0_30px_rgba(124,58,237,0.15)] backdrop-blur ring-1 ring-white/10">
    <div className="flex items-center gap-3">
      <Avatar name={t.name} />
      <div>
        <div className="font-semibold">{t.name}</div>
        <div className="text-xs text-gray-400">{t.title}</div>
      </div>
    </div>

    <div className="mt-4 flex items-center gap-1 text-amber-300">
      {Array.from({ length: t.rating }).map((_, i) => (
        <Star key={i} className="h-4 w-4" />
      ))}
    </div>

    <p className="mt-3 grow text-sm leading-relaxed text-gray-300">
      “{t.quote}”
    </p>

    <div className="mt-4">
      {t.platform === 'Google' ? <GoogleBadge /> : <TrustpilotBadge />}
      <span className="ml-2 text-xs text-gray-500">| Review by {t.platform}</span>
    </div>
  </article>
);

const testimonialsData = [
  {
    name: 'Kotie Johnson',
    title: 'Founder of Straps',
    rating: 5,
    quote:
      'Metro Solver delivered the best solution. I’m very satisfied with the team and the work they did. Super grateful for the effort!',
    platform: 'Google',
  },
  {
    name: 'Wade Warren',
    title: 'Founder of Straps',
    rating: 5,
    quote:
      'Outstanding collaboration and transparent communication. The campaign exceeded our KPIs within the first month.',
    platform: 'Trustpilot',
  },
  {
    name: 'Jenny Wilson',
    title: 'Founder of Straps',
    rating: 5,
    quote:
      'Friendly team, fast iterations, and real results. They made everything simple and effective for us.',
    platform: 'Google',
  },
  {
    name: 'Cody Fisher',
    title: 'Marketing Director',
    rating: 5,
    quote:
      'From strategy to execution, everything felt polished. Strongly recommend Metro Solver.',
    platform: 'Trustpilot',
  },
  {
    name: 'Brooklyn Simmons',
    title: 'CEO, Nexa Brands',
    rating: 5,
    quote:
      'Amazing ROI and smooth project management. The insights were spot on.',
    platform: 'Google',
  },
];

const VISIBLE = 3;

const Testimonials = ({ autoplay = true, interval = 4500 }) => {
  // Build clones for infinite loop
  const clonesHead = useMemo(() => testimonialsData.slice(-VISIBLE), []);
  const clonesTail = useMemo(() => testimonialsData.slice(0, VISIBLE), []);
  const items = useMemo(() => [...clonesHead, ...testimonialsData, ...clonesTail], []);
  const [index, setIndex] = useState(VISIBLE); // start after head clones
  const [isTransition, setIsTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);

  const goNext = () => setIndex((i) => i + 1);
  const goPrev = () => setIndex((i) => i - 1);

  // Autoplay
  useEffect(() => {
    if (!autoplay || isPaused) return;
    const id = setInterval(() => {
      goNext();
    }, interval);
    return () => clearInterval(id);
  }, [autoplay, interval, isPaused]);

  // Handle infinite loop snapping
  useEffect(() => {
    const onEnd = () => {
      if (index >= testimonialsData.length + VISIBLE) {
        setIsTransition(false);
        setIndex(VISIBLE);
        // restore transition on next frame
        requestAnimationFrame(() => requestAnimationFrame(() => setIsTransition(true)));
      } else if (index <= VISIBLE - 1) {
        setIsTransition(false);
        setIndex(testimonialsData.length + VISIBLE - 1);
        requestAnimationFrame(() => requestAnimationFrame(() => setIsTransition(true)));
      }
    };
    const el = trackRef.current;
    el?.addEventListener('transitionend', onEnd);
    return () => el?.removeEventListener('transitionend', onEnd);
  }, [index]);

  const percentPerItem = 100 / VISIBLE;
  const translate = `translateX(-${index * percentPerItem}%)`;

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#0a0a1f]">
      {/* backdrop glows */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-purple-700/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">What People Say</h2>
          <p className="mt-3 text-base text-gray-400">
            Real stories from our partners and clients about results and collaboration.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="mt-10 overflow-hidden rounded-[22px] border border-white/5 bg-white/[0.02] p-4 ring-1 ring-white/5"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={trackRef}
            className="flex"
            style={{
              width: `${(items.length * 100) / VISIBLE}%`,
              transform: translate,
              transition: isTransition ? 'transform 700ms cubic-bezier(0.22,1,0.36,1)' : 'none',
            }}
          >
            {items.map((t, i) => (
              <div key={i} className="w-1/3 flex-shrink-0">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            aria-label="Previous testimonials"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 backdrop-blur transition hover:bg-white/[0.08] hover:text-white"
            onClick={goPrev}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            aria-label="Next testimonials"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 backdrop-blur transition hover:bg-white/[0.08] hover:text-white"
            onClick={goNext}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;