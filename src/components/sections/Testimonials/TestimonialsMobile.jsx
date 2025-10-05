import React, { useEffect, useMemo, useRef, useState } from 'react';

const Star = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.168L12 18.902l-7.336 3.863 1.402-8.168L.132 9.21l8.2-1.192L12 .587z" />
  </svg>
);

const GoogleBadge = () => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-gray-300">
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
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-gray-300">
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-emerald-400" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.1 6.5H21l-5.5 4 2.1 6.5L12 15l-5.6 4.9L8.5 12 3 8.6h6.9L12 2z" />
    </svg>
    Trustpilot
  </span>
);

const Avatar = ({ name }) => {
  const initial = (name || '?').charAt(0).toUpperCase();
  return (
    <div className="relative inline-grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-purple-600 to-purple-400 text-white ring-1 ring-white/10">
      <span className="text-xs font-bold">{initial}</span>
    </div>
  );
};

const TestimonialCard = ({ t }) => (
  <article className="mx-2 flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-white shadow-[0_0_24px_rgba(124,58,237,0.15)] backdrop-blur ring-1 ring-white/10">
    <div className="flex items-center gap-3">
      <Avatar name={t.name} />
      <div>
        <div className="text-sm font-semibold">{t.name}</div>
        <div className="text-[11px] text-gray-400">{t.title}</div>
      </div>
    </div>

    <div className="mt-3 flex items-center gap-1 text-amber-300">
      {Array.from({ length: t.rating }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5" />
      ))}
    </div>

    <p className="mt-2 grow text-[13px] leading-relaxed text-gray-300">
      “{t.quote}”
    </p>

    <div className="mt-3">
      {t.platform === 'Google' ? <GoogleBadge /> : <TrustpilotBadge />}
      <span className="ml-2 text-[11px] text-gray-500">| Review by {t.platform}</span>
    </div>
  </article>
);

const data = [
  {
    name: 'Kotie Johnson',
    title: 'Founder of Straps',
    rating: 5,
    quote:
      'Metro Solver delivered the best solution. I’m very satisfied with the team and the work they did.',
    platform: 'Google',
  },
  {
    name: 'Wade Warren',
    title: 'Founder of Straps',
    rating: 5,
    quote:
      'Outstanding collaboration and transparent communication. Exceeded our KPIs.',
    platform: 'Trustpilot',
  },
  {
    name: 'Jenny Wilson',
    title: 'Founder of Straps',
    rating: 5,
    quote:
      'Friendly team and fast iterations. Great value for the results we got.',
    platform: 'Google',
  },
];

const TestimonialsMobile = ({ autoplay = true, interval = 4500 }) => {
  const VISIBLE = 1;
  const head = useMemo(() => data.slice(-VISIBLE), []);
  const tail = useMemo(() => data.slice(0, VISIBLE), []);
  const items = useMemo(() => [...head, ...data, ...tail], []);
  const [index, setIndex] = useState(VISIBLE);
  const [isTransition, setIsTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const touchRef = useRef({ x: 0, y: 0 });

  const goNext = () => setIndex((i) => i + 1);
  const goPrev = () => setIndex((i) => i - 1);

  // autoplay
  useEffect(() => {
    if (!autoplay || isPaused) return;
    const id = setInterval(() => goNext(), interval);
    return () => clearInterval(id);
  }, [autoplay, interval, isPaused]);

  // loop snapping
  useEffect(() => {
    const onEnd = () => {
      if (index >= data.length + VISIBLE) {
        setIsTransition(false);
        setIndex(VISIBLE);
        requestAnimationFrame(() => requestAnimationFrame(() => setIsTransition(true)));
      } else if (index <= VISIBLE - 1) {
        setIsTransition(false);
        setIndex(data.length + VISIBLE - 1);
        requestAnimationFrame(() => requestAnimationFrame(() => setIsTransition(true)));
      }
    };
    const el = trackRef.current;
    el?.addEventListener('transitionend', onEnd);
    return () => el?.removeEventListener('transitionend', onEnd);
  }, [index]);

  const onTouchStart = (e) => {
    const t = e.touches[0];
    touchRef.current = { x: t.clientX, y: t.clientY };
    setIsPaused(true);
  };

  const onTouchEnd = (e) => {
    const t = e.changedTouches[0];
    const dx = t.clientX - touchRef.current.x;
    if (Math.abs(dx) > 40) {
      dx < 0 ? goNext() : goPrev();
    }
    setIsPaused(false);
  };

  return (
    <section className="relative overflow-hidden bg-[#0a0a1f]">
      <div className="mx-auto max-w-2xl px-5 py-14">
        <h2 className="text-center text-4xl font-extrabold text-white">What People Say</h2>
        <p className="mt-3 text-center text-sm text-gray-400">
          Real stories from our partners and clients.
        </p>

        <div
          className="mt-8 overflow-hidden rounded-[20px] border border-white/5 bg-white/[0.02] p-3 ring-1 ring-white/5"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            ref={trackRef}
            className="flex"
            style={{
              width: `${items.length * 100}%`,
              transform: `translateX(-${index * 100}%)`,
              transition: isTransition ? 'transform 650ms cubic-bezier(0.22,1,0.36,1)' : 'none',
            }}
          >
            {items.map((t, i) => (
              <div key={i} className="w-full flex-shrink-0">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots + arrows */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            aria-label="Previous testimonials"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 backdrop-blur transition active:scale-95"
            onClick={goPrev}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex items-center gap-1">
            {data.map((_, i) => {
              const active = (index - 1 + data.length) % data.length === i;
              return (
                <span
                  key={i}
                  className={`h-1.5 w-5 rounded-full ${active ? 'bg-purple-500' : 'bg-white/15'}`}
                />
              );
            })}
          </div>

          <button
            aria-label="Next testimonials"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 backdrop-blur transition active:scale-95"
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

export default TestimonialsMobile;