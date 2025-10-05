import React, { useState } from 'react';

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

/* ===== Small helpers ===== */
const IconBadge = ({ children }) => (
  <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0f122b] text-purple-200 ring-1 ring-white/10 shadow-[0_6px_24px_rgba(124,58,237,0.25)]">
    <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 via-purple-400/10 to-amber-300/20" />
    <span className="relative z-10 h-5 w-5">{children}</span>
  </span>
);

const Pill = ({ title, icon, side = 'left', active, onEnter, onLeave }) => (
  <li
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
    className={[
      'group relative flex items-center justify-between gap-4 rounded-full',
      'border border-white/10 bg-[#161a2c]/90 px-6 py-4 text-white backdrop-blur',
      'shadow-[0_12px_40px_rgba(0,0,0,0.45)]',
      'transition duration-200',
      active ? 'ring-1 ring-purple-400/50 bg-[#1a1f38]' : '',
      side === 'left' ? 'ml-auto' : 'mr-auto',
      'w-[320px] sm:w-[360px] lg:w-[380px]',
    ].join(' ')}
  >
    {side === 'left' ? (
      <>
        <span className="text-[15px] font-semibold">{title}</span>
        <IconBadge>{icon}</IconBadge>
      </>
    ) : (
      <>
        <IconBadge>{icon}</IconBadge>
        <span className="text-[15px] font-semibold">{title}</span>
      </>
    )}
    <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-white/5 via-transparent to-transparent opacity-60" />
  </li>
);

const NumberBadge = ({ n, className = '', active }) => (
  <span
    className={[
      'absolute z-10 flex h-8 w-8 items-center justify-center rounded-full',
      'border border-white/20 bg-[#151734] text-[11px] font-bold text-white',
      'shadow-[0_8px_30px_rgba(124,58,237,0.35)]',
      active ? 'bg-gradient-to-tr from-purple-600 to-amber-400 text-white border-purple-400' : '',
      className,
    ].join(' ')}
  >
    {n.toString().padStart(2, '0')}
  </span>
);

const StepBubble = ({ show, text }) => (
  <div
    className={[
      'pointer-events-none absolute left-0 right-0 mx-auto -translate-x-1/2',
      'top-[62%] w-[520px] max-w-[88vw]',
      show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1',
      'transition-all duration-300',
    ].join(' ')}
    style={{ left: '50%' }}
    aria-hidden={!show}
  >
    <div className="relative rounded-3xl border border-white/10 bg-[#171a2e] p-5 text-gray-200 shadow-[0_14px_50px_rgba(10,10,30,0.55)] backdrop-blur">
      <span className="pointer-events-none absolute -top-3 right-24 block h-5 w-5 rotate-45 rounded-[6px] bg-[#171a2e] shadow-[0_-8px_22px_rgba(10,10,30,0.5)]" />
      <p className="text-sm leading-7">{text}</p>
    </div>
  </div>
);

/* ===== Main section ===== */
const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Book a Call',
      side: 'right',
      icon: <PhoneIcon />,
      desc:
        'The customer starts by booking a call or initiating chat with Metro Solver to discuss needs, or directly purchasing a service from our offerings.',
    },
    {
      id: 2,
      title: 'Requirement Analysis',
      side: 'right',
      icon: <ChartIcon />,
      desc: 'We capture goals, constraints, and success criteria to shape the best solution roadmap.',
    },
    {
      id: 3,
      title: 'Service Customisation',
      side: 'right',
      icon: <TuneIcon />,
      desc: 'We tailor the engagement, scope, and deliverables to your exact needs.',
    },
    {
      id: 4,
      title: 'Implement & Develop',
      side: 'left',
      icon: <CodeIcon />,
      desc: 'We build, integrate, and iterate quickly with clear milestones and demos.',
    },
    {
      id: 5,
      title: 'Quality Assurance',
      side: 'left',
      icon: <CubeIcon />,
      desc: 'Thorough testing, reviews, and validation to ensure reliability and performance.',
    },
    {
      id: 6,
      title: 'Delivery and Support',
      side: 'left',
      icon: <TruckIcon />,
      desc: 'Smooth handover, documentation, and responsive ongoing support.',
    },
  ];

  const [active, setActive] = useState(2); // default highlighted like in screenshot

  return (
    <section className="relative overflow-hidden bg-[#0a0a1f]">
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_10%,rgba(106,57,248,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[26rem] w-[26rem] rounded-full bg-purple-700/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-purple-500/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20 lg:px-8">
        {/* Desktop layout */}
        <div className="hidden items-center gap-10 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          {/* Left column */}
          <ul className="flex flex-col gap-10 justify-self-end">
            {steps
              .filter((s) => s.side === 'left')
              .reverse() // order top-to-bottom: Delivery, QA, Implement
              .map((s) => (
                <Pill
                  key={s.id}
                  title={s.title}
                  side="left"
                  icon={s.icon}
                  active={active === s.id}
                  onEnter={() => setActive(s.id)}
                  onLeave={() => setActive((prev) => prev)}
                />
              ))}
          </ul>

          {/* Center orb */}
          <div className="relative mx-auto h-[320px] w-[320px] xl:h-[360px] xl:w-[360px]">
            {/* soft ring and gradient core */}
            <div className="absolute inset-0 rounded-full border border-white/10 bg-[#121433] shadow-[0_40px_120px_rgba(124,58,237,0.25)]">
              <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_60%)]" />
              <span className="pointer-events-none absolute inset-[10%] rounded-full border border-white/5" />
              <span className="pointer-events-none absolute inset-[22%] rounded-full border border-white/5" />
            </div>

            {/* step numbers around ring */}
            <NumberBadge n={1} active={active === 1} className="top-6 -right-3" />
            <NumberBadge n={2} active={active === 2} className="top-1/2 -translate-y-1/2 -right-4" />
            <NumberBadge n={3} active={active === 3} className="bottom-6 -right-3" />
            <NumberBadge n={4} active={active === 4} className="bottom-6 -left-3" />
            <NumberBadge n={5} active={active === 5} className="top-1/2 -translate-y-1/2 -left-4" />
            <NumberBadge n={6} active={active === 6} className="top-6 -left-3" />

            {/* label text center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  How
                  <br /> to Works?
                </h3>
              </div>
            </div>

            {/* description bubble like your first image */}
            <StepBubble
              show={Boolean(active)}
              text={steps.find((s) => s.id === active)?.desc || ''}
            />
          </div>

          {/* Right column */}
          <ul className="flex flex-col gap-10 justify-self-start">
            {steps
              .filter((s) => s.side === 'right')
              .map((s) => (
                <Pill
                  key={s.id}
                  title={s.title}
                  side="right"
                  icon={s.icon}
                  active={active === s.id}
                  onEnter={() => setActive(s.id)}
                  onLeave={() => setActive((prev) => prev)}
                />
              ))}
          </ul>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden">
          <div className="mx-auto mb-8 mt-2 flex h-[240px] w-[240px] items-center justify-center rounded-full border border-white/10 bg-[#121433] shadow-[0_30px_100px_rgba(124,58,237,0.25)]">
            <div className="text-center">
              <h3 className="text-2xl font-extrabold tracking-tight text-white">How to Works?</h3>
              <p className="mt-2 text-sm text-gray-300">Our 6-step process</p>
            </div>
          </div>

          <ol className="mx-auto grid max-w-xl grid-cols-1 gap-4">
            {steps.map((s) => (
              <li
                key={s.id}
                onMouseEnter={() => setActive(s.id)}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#161a2c]/90 p-4 text-white shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-[#151734] text-xs font-bold">
                    {String(s.id).padStart(2, '0')}
                  </span>
                  <span className="flex-1 px-3 text-[15px] font-semibold">{s.title}</span>
                  <IconBadge>{s.icon}</IconBadge>
                </div>
                {active === s.id && (
                  <p className="mt-3 text-sm text-gray-300">{s.desc}</p>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;