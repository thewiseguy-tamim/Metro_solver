import React, { useRef, useState } from 'react';

/* ===== Icons (inline SVGs, no external deps) ===== */
const PhoneIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M6.6 3.5l2 1a2 2 0 0 1 1 1.7v2.1a2 2 0 0 1-.7 1.5l-1 1c1 2.2 2.8 4.1 5 5l1-1a2 2 0 0 1 1.5-.7h2.1a2 2 0 0 1 1.7 1l1 2a2 2 0 0 1-.8 2.6c-1.4.8-3 1.3-4.7 1.3C9.6 22.3 1.7 14.4 1.7 4.7c0-1.6.5-3.2 1.3-4.6A2 2 0 0 1 5.6-.7l1 1a2 2 0 0 1 1 1.7v0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ChartIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 19V5m5 14V9m5 10V7m5 12V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const TuneIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 7h10M4 17h6M14 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM10 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const CodeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M8 16l-4-4 4-4M16 8l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const CubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2l8 4-8 4-8-4 8-4ZM4 8v8l8 4 8-4V8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);
const TruckIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M3 6h11v10H3V6Zm11 3h4l3 3v4h-7V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="7" cy="19" r="1.8" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="18" cy="19" r="1.8" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);
const ChevronLeftIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ChevronRightIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ===== Small helpers ===== */
const IconBadge = ({ children }) => (
  <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0f122b] text-purple-200 ring-1 ring-white/10 shadow-[0_6px_24px_rgba(124,58,237,0.25)]">
    <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 via-purple-400/10 to-amber-300/20" />
    <span className="relative z-10 h-5 w-5">{children}</span>
  </span>
);

/* ===== Default steps (you can override via props) ===== */
const defaultSteps = [
  {
    id: 1,
    title: 'Book a Call',
    icon: <PhoneIcon />,
    desc:
      'The customer starts by booking a call or initiating chat with Metro Solver to discuss needs, or directly purchasing a service from our offerings.',
  },
  {
    id: 2,
    title: 'Requirement Analysis',
    icon: <ChartIcon />,
    desc: 'We capture goals, constraints, and success criteria to shape the best solution roadmap.',
  },
  {
    id: 3,
    title: 'Service Customisation',
    icon: <TuneIcon />,
    desc: 'We tailor the engagement, scope, and deliverables to your exact needs.',
  },
  {
    id: 4,
    title: 'Implement & Develop',
    icon: <CodeIcon />,
    desc: 'We build, integrate, and iterate quickly with clear milestones and demos.',
  },
  {
    id: 5,
    title: 'Quality Assurance',
    icon: <CubeIcon />,
    desc: 'Thorough testing, reviews, and validation to ensure reliability and performance.',
  },
  {
    id: 6,
    title: 'Delivery and Support',
    icon: <TruckIcon />,
    desc: 'Smooth handover, documentation, and responsive ongoing support.',
  },
];

/* ===== Mobile-only carousel ===== */
const HowItWorksMobile = ({
  steps = defaultSteps,
  initialActive = 2,
  className = '',
}) => {
  const ids = steps.map((s) => s.id);
  const safeInitial = ids.includes(initialActive) ? initialActive : ids[0] || 1;

  const [active, setActive] = useState(safeInitial);
  const startXRef = useRef(0);

  const current = steps.find((s) => s.id === active);

  const prev = () => {
    if (!ids.length) return;
    const i = ids.indexOf(active);
    const nextId = ids[(i - 1 + ids.length) % ids.length];
    setActive(nextId);
  };
  const next = () => {
    if (!ids.length) return;
    const i = ids.indexOf(active);
    const nextId = ids[(i + 1) % ids.length];
    setActive(nextId);
  };

  const onTouchStart = (e) => {
    startXRef.current = e.touches?.[0]?.clientX ?? 0;
  };
  const onTouchEnd = (e) => {
    const endX = e.changedTouches?.[0]?.clientX ?? startXRef.current;
    const dx = endX - startXRef.current;
    if (Math.abs(dx) > 40) (dx > 0 ? prev() : next());
  };

  if (!steps.length) return null;

  return (
    <section className={['relative overflow-hidden bg-[#0a0a1f] lg:hidden', className].join(' ')}>
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_10%,rgba(106,57,248,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[26rem] w-[26rem] rounded-full bg-purple-700/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-purple-500/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Heading badge */}
        <div className="mx-auto mb-6 mt-2 flex h-[220px] w-[220px] items-center justify-center rounded-full border border-white/10 bg-[#121433] shadow-[0_30px_100px_rgba(124,58,237,0.25)]">
          <div className="text-center px-3">
            <h3 className="text-2xl font-extrabold tracking-tight text-white">How it Works?</h3>
            <p className="mt-2 text-sm text-gray-300">Our {steps.length}-step process</p>
          </div>
        </div>

        {/* Carousel card */}
        <div className="mx-auto max-w-[420px] px-2 sm:px-4">
          <div
            className="relative rounded-3xl border border-white/10 bg-[#171a2e] p-5 text-gray-200 shadow-[0_14px_50px_rgba(10,10,30,0.55)] backdrop-blur"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            role="group"
            aria-roledescription="carousel"
            aria-label="How it works steps"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') prev();
              if (e.key === 'ArrowRight') next();
            }}
          >
            {/* Top row: icon + title */}
            <div className="flex items-center gap-3">
              <IconBadge>{current?.icon}</IconBadge>
              <div className="flex-1">
                <div className="text-[11px] font-medium text-gray-400">
                  Step {String(active).padStart(2, '0')} of {steps.length}
                </div>
                <div className="text-[16px] font-semibold text-white">
                  {current?.title}
                </div>
              </div>
            </div>

            {/* Description */}
            <p key={active} className="mt-3 text-sm leading-7 text-gray-300 transition-all duration-300">
              {current?.desc}
            </p>

            {/* Floating controls */}
            <div className="absolute -bottom-7 left-0 right-0 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous step"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#151734] text-white shadow-[0_8px_30px_rgba(124,58,237,0.35)] hover:scale-105 active:scale-95 transition"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next step"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#151734] text-white shadow-[0_8px_30px_rgba(124,58,237,0.35)] hover:scale-105 active:scale-95 transition"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {steps.map((s) => {
              const isActive = s.id === active;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  aria-label={`Go to step ${s.id}`}
                  aria-current={isActive ? 'true' : 'false'}
                  className={[
                    'h-2.5 w-2.5 rounded-full transition',
                    isActive
                      ? 'bg-gradient-to-tr from-purple-500 to-amber-400 ring-2 ring-purple-400/40'
                      : 'bg-white/20 hover:bg-white/30'
                  ].join(' ')}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksMobile;