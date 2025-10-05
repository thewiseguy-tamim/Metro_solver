import React from 'react';

const SparklesIcon = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
    <path d="M12 3l1.7 4.3 4.3 1.7-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3z" />
    <path d="M5 2l.85 1.7L7.5 4.5 5.85 5.3 5 7 4.15 5.3 2.5 4.5l1.65-.8L5 2z" opacity=".7" />
  </svg>
);

const DarkPill = ({ children, className = '' }) => (
  <div className={['relative rounded-full border border-white/10 bg-[#141827] px-7 py-4 text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur', className].join(' ')}>
    <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-white/[0.04] via-transparent to-transparent" />
    <span className="block font-semibold">{children}</span>
  </div>
);

const GradientPill = ({ children, className = '' }) => (
  <div className={['relative rounded-full border border-white/10 px-8 py-5 text-white shadow-[0_18px_60px_rgba(124,58,237,0.35)] backdrop-blur bg-gradient-to-r from-[#4c2fd4] via-[#8c5beb] to-[#b08cff]', className].join(' ')}>
    <span className="pointer-events-none absolute inset-[2px] rounded-full bg-[#0b0d1d]/30" />
    <span className="relative z-10 block text-base font-bold">{children}</span>
  </div>
);

const InfoCard = () => (
  <div className="relative rounded-3xl border border-white/10 bg-[#171a2e] p-5 text-gray-200 shadow-[0_12px_50px_rgba(10,10,30,0.6)] backdrop-blur">
    <span className="pointer-events-none absolute -top-3 right-16 block h-5 w-5 rotate-45 rounded-[6px] bg-[#171a2e] shadow-[0_-10px_26px_rgba(10,10,30,0.5)]" />
    <p className="text-sm leading-7">
      Metro Solver offers round-the-clock customer service, ensuring that clients receive support
      whenever they need it. This level of availability is crucial for addressing urgent issues and
      maintaining client satisfaction.
    </p>
  </div>
);

const WhyChooseUsMobile = () => {
  return (
    <section className="relative overflow-hidden bg-[#0a0a1f] lg:hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_460px_at_12%_14%,rgba(109,61,240,0.28),transparent_60%)]" />

      <div className="mx-auto max-w-2xl px-5 py-12">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-3xl font-extrabold leading-[1.15] text-white">
            Why You Choose
            <br /> Metro Solver?
          </h2>

          <a
            href="#contact"
            className="mt-1 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#5b35e5] via-[#7a4ef0] to-[#9f7dff] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_30px_rgba(124,58,237,0.4)]"
            onClick={(e) => {
              const el = document.getElementById('contact') || document.querySelector('[data-section="contact"]');
              if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            <SparklesIcon className="h-3.5 w-3.5" />
            Book Now
          </a>
        </div>

        <div className="mt-8 space-y-5">
          <div className="w-[86%] mfloat-1">
            <DarkPill>Cancel Anytime</DarkPill>
          </div>

          <div className="w-[96%] mfloat-2">
            <GradientPill>24/7 Customer Service</GradientPill>
          </div>

          <InfoCard />

          <div className="w-[96%] mfloat-3">
            <DarkPill>Money Back Guarantee</DarkPill>
          </div>
        </div>
      </div>

      <style>{`
        .mfloat-1 { animation: mfloat1 11s ease-in-out infinite; transform-origin: center; }
        .mfloat-2 { animation: mfloat2 11s ease-in-out infinite; transform-origin: center; }
        .mfloat-3 { animation: mfloat3 12s ease-in-out infinite; transform-origin: center; }

        @keyframes mfloat1 { 0%{transform:translate(0,0) rotate(-8deg)}50%{transform:translate(4px,-6px) rotate(-9deg)}100%{transform:translate(0,0) rotate(-8deg)} }
        @keyframes mfloat2 { 0%{transform:translate(0,0) rotate(-7deg)}50%{transform:translate(-5px,6px) rotate(-9deg)}100%{transform:translate(0,0) rotate(-7deg)} }
        @keyframes mfloat3 { 0%{transform:translate(0,0)}50%{transform:translate(6px,6px)}100%{transform:translate(0,0)} }
      `}</style>
    </section>
  );
};

export default WhyChooseUsMobile;