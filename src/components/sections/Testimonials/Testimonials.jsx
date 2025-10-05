import React, { useEffect, useMemo, useRef, useState } from 'react';

const Star = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.168L12 18.902l-7.336 3.863 1.402-8.168L.132 9.21l8.2-1.192L12 .587z" />
  </svg>
);

const BrandBadge = ({ platform }) => {
  const isGoogle = platform === 'Google';
  const color = isGoogle ? 'text-amber-400' : 'text-[#00B67A]';
  const labelColor = isGoogle ? 'text-white' : 'text-white';
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-gray-300">
      <Star className={`h-3.5 w-3.5 ${color}`} />
      <span className={`font-medium ${labelColor}`}>{isGoogle ? 'Google' : 'Trustpilot'}</span>
    </span>
  );
};

const Avatar = ({ src, alt }) => (
  <div className="relative inline-grid h-12 w-12 place-items-center overflow-hidden rounded-full ring-2 ring-white/20">
    {src ? (
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    ) : (
      <div className="h-full w-full bg-gradient-to-br from-purple-600 to-purple-400" />
    )}
  </div>
);

const TestimonialCard = ({ t, active }) => {
  const starColor = t.platform === 'Trustpilot' ? 'text-[#00B67A]' : 'text-amber-400';

  return (
    <article
      className={[
        'mx-3 flex h-full flex-col rounded-2xl bg-[#0f1126]/95 p-6 text-white backdrop-blur',
        'border border-white/10 ring-1 ring-white/10 shadow-[0_0_24px_rgba(124,58,237,0.10)]',
        active ? 'outline outline-2 outline-purple-400/70 shadow-[0_0_34px_rgba(168,85,247,0.35)]' : '',
      ].join(' ')}
    >
      <div className="flex items-center gap-4">
        <Avatar src={t.avatar} alt={t.name} />
        <div className="truncate">
          <div className="text-base font-semibold leading-tight">{t.name}</div>
          <div className="text-[12px] text-gray-400 leading-tight">{t.title}</div>
        </div>
      </div>

      <div className={`mt-4 flex items-center gap-1 ${starColor}`}>
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="h-4.5 w-4.5" />
        ))}
      </div>

      <p className="mt-3 grow text-sm leading-relaxed text-gray-300">
        “{t.quote}”
      </p>

      <div className="mt-4 flex items-center">
        <BrandBadge platform={t.platform} />
        <span className="ml-2 text-[11px] text-gray-500">| Review by {t.platform.toLowerCase()}</span>
      </div>
    </article>
  );
};

const testimonialsData = [
  {
    name: 'Katie Johnson',
    title: 'Founder of Strava',
    rating: 5,
    quote:
      'Metro Solver with Mixer was the best solution. I am very satisfied with the team and the work they did. I am sincerely grateful for the work and effort.',
    platform: 'Google',
    avatar: 'https://i.pravatar.cc/100?img=15',
  },
  {
    name: 'Wade Warren',
    title: 'Founder of Strava',
    rating: 7, // matches the screenshot with more stars on the Trustpilot card
    quote:
      'Metro Solver with Mixer was the best solution. I am very satisfied with the team and the work they did. I am sincerely grateful for the work and effort.',
    platform: 'Trustpilot',
    avatar: 'https://i.pravatar.cc/100?img=12',
  },
  {
    name: 'Jenny Wilson',
    title: 'Founder of Strava',
    rating: 5,
    quote:
      'Metro Solver with Mixer was the best solution. I am very satisfied with the team and the work they did. I am sincerely grateful for the work and effort.',
    platform: 'Google',
    avatar: 'https://i.pravatar.cc/100?img=5',
  },
];

const VISIBLE = 3;

const Testimonials = ({ autoplay = true, interval = 4500 }) => {
  // Clones for infinite loop
  const clonesHead = useMemo(() => testimonialsData.slice(-VISIBLE), []);
  const clonesTail = useMemo(() => testimonialsData.slice(0, VISIBLE), []);
  const items = useMemo(() => [...clonesHead, ...testimonialsData, ...clonesTail], []);

  const [index, setIndex] = useState(VISIBLE); // leftmost visible index
  const [isTransition, setIsTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);

  const goNext = () => setIndex((i) => i + 1);
  const goPrev = () => setIndex((i) => i - 1);

  // Autoplay
  useEffect(() => {
    if (!autoplay || isPaused) return;
    const id = setInterval(goNext, interval);
    return () => clearInterval(id);
  }, [autoplay, interval, isPaused]);

  // Loop snapping
  useEffect(() => {
    const onEnd = () => {
      if (index >= testimonialsData.length + VISIBLE) {
        setIsTransition(false);
        setIndex(VISIBLE);
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

  // Map an item index in the "items" array back to the base data index
  const dataIndexOfItem = (i) =>
    ((i - VISIBLE) % testimonialsData.length + testimonialsData.length) % testimonialsData.length;

  // Center card is the (index + 1)th in the strip when 3 are visible
  const activeDataIndex = dataIndexOfItem(index + 1);
  const current = testimonialsData[activeDataIndex];

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#0a0a1f]">
      {/* Background glows to match screenshot */}
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-purple-700/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-purple-500/25 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">What People Say</h2>
          <p className="mt-3 text-sm text-gray-400">
            Based on the description of Metro Solver and the image provided, here is a
            6-step process that Metro Solver uses to scale a customer&apos;s business
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
            {items.map((t, i) => {
              const isActive = dataIndexOfItem(i) === activeDataIndex;
              return (
                <div key={i} className="w-1/3 flex-shrink-0">
                  <TestimonialCard t={t} active={isActive} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom control with avatar + arrows (centered) */}
        <div className="pointer-events-none absolute left-1/2 bottom-6 -translate-x-1/2">
          <div className="flex items-center gap-2">
            <button
              aria-label="Previous testimonials"
              className="pointer-events-auto grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white/90 backdrop-blur transition hover:bg-white/10"
              onClick={goPrev}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="pointer-events-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-to-b from-cyan-400 to-blue-500 p-1 shadow-[0_8px_24px_rgba(0,0,0,0.35)] ring-2 ring-white/20">
              <div className="h-full w-full overflow-hidden rounded-full ring-2 ring-white/50">
                {current?.avatar ? (
                  <img src={current.avatar} alt={current.name} className="h-full w-full object-cover" />
                ) : (
                  <div className="h-full w-full bg-slate-400/20" />
                )}
              </div>
            </div>

            <button
              aria-label="Next testimonials"
              className="pointer-events-auto grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white/90 backdrop-blur transition hover:bg-white/10"
              onClick={goNext}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;