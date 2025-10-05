import React from 'react';

const SparklesIcon = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
    <path d="M12 3l1.7 4.3 4.3 1.7-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3z" />
    <path d="M5 2l.85 1.7L7.5 4.5 5.85 5.3 5 7 4.15 5.3 2.5 4.5l1.65-.8L5 2z" opacity=".7" />
  </svg>
);

const DarkPill = ({ children, className = '' }) => (
  <div
    className={[
      'relative rounded-full border border-white/10 bg-[#141827] text-white',
      'px-8 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur',
      className,
    ].join(' ')}
  >
    <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-white/[0.04] via-transparent to-transparent" />
    <span className="block text-lg font-semibold tracking-tight">{children}</span>
  </div>
);

const GradientPill = ({ children, className = '' }) => (
  <div
    className={[
      'relative rounded-full border border-white/10 text-white',
      'px-10 py-5 shadow-[0_18px_60px_rgba(124,58,237,0.35)] backdrop-blur',
      'bg-gradient-to-r from-[#4c2fd4] via-[#8c5beb] to-[#b08cff]',
      className,
    ].join(' ')}
  >
    <span className="pointer-events-none absolute inset-[2px] rounded-full bg-[#0b0d1d]/30" />
    <span className="relative z-10 block text-xl font-bold tracking-tight"> {children} </span>
  </div>
);

const InfoCard = ({ className = '' }) => (
  <div
    className={[
      'relative rounded-[28px] border border-white/10 bg-[#171a2e] p-6 text-gray-200',
      'shadow-[0_14px_60px_rgba(10,10,30,0.6)] backdrop-blur',
      className,
    ].join(' ')}
  >
    {/* notch */}
    <span className="pointer-events-none absolute -top-3 right-28 block h-6 w-6 rotate-45 rounded-[6px] bg-[#171a2e] shadow-[0_-10px_28px_rgba(10,10,30,0.5)]" />
    <p className="relative z-10 text-[15px] leading-7">
      Metro Solver offers round-the-clock customer service, ensuring that clients receive support
      whenever they need it. This level of availability is crucial for addressing urgent issues and
      maintaining client satisfaction.
    </p>
  </div>
);

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="relative overflow-hidden bg-[#0a0a1f]">
      {/* background wash to match screenshot */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_12%_20%,rgba(109,61,240,0.28),transparent_60%)]" />
      <div className="pointer-events-none absolute right-[-14rem] bottom-[-10rem] h-[36rem] w-[36rem] rounded-full bg-purple-500/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-12 lg:px-8">
        {/* Left column */}
        <div className="lg:col-span-5">
          <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
            Why You
            <br /> Choose Metro
            <br /> Solver?
          </h2>

          <p className="mt-5 max-w-md text-base leading-relaxed text-gray-300 sm:text-lg">
            We are constantly growing or learning and improving. Enter your personal digital
            sanctuary, where finding the ideal solution is effortless and comfortable with our
            assistance.
          </p>

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#5b35e5] via-[#7a4ef0] to-[#9f7dff] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(124,58,237,0.45)] transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500/60"
              onClick={(e) => {
                const el = document.getElementById('contact') || document.querySelector('[data-section="contact"]');
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              <SparklesIcon />
              Book Now
            </a>
          </div>
        </div>

        {/* Right composition */}
        <div className="relative min-h-[560px] lg:col-span-7">
          {/* frame hint like your design */}
          <div className="absolute inset-0 rounded-[32px] border border-white/5 bg-gradient-to-br from-white/[0.02] via-white/[0.01] to-transparent" />

          {/* Cancel Anytime (top right, slight + angle) */}
          <div className="absolute right-10 top-6 w-[360px] max-w-[92%] wcu-float-1">
            <DarkPill>Cancel Anytime</DarkPill>
          </div>

          {/* 24/7 pill (big gradient, slight - angle, overlaps) */}
          <div className="absolute right-16 top-28 w-[520px] max-w-[95%] wcu-float-2">
            <GradientPill>24/7 Customer Service</GradientPill>
          </div>

          {/* info card with notch below the gradient pill */}
          <div className="absolute right-16 top-[264px] w-[520px] max-w-[95%] wcu-float-3">
            <InfoCard />
          </div>

          {/* money back guarantee (bottom, dark pill) */}
          <div className="absolute bottom-6 left-8 w-[540px] max-w-[96%] wcu-float-4">
            <DarkPill>Money Back Guarantee</DarkPill>
          </div>
        </div>
      </div>

      {/* local animations (no Tailwind arbitrary animate syntax) */}
      <style>{`
        .wcu-float-1 { animation: wcuFloat1 12s ease-in-out infinite; transform-origin: center; }
        .wcu-float-2 { animation: wcuFloat2 12s ease-in-out infinite; transform-origin: center; }
        .wcu-float-3 { animation: wcuFloat3 13s ease-in-out infinite; transform-origin: center; }
        .wcu-float-4 { animation: wcuFloat4 14s ease-in-out infinite; transform-origin: center; }

        @keyframes wcuFloat1 {
          0% { transform: translate(0,0) rotate(9deg); }
          50% { transform: translate(6px,-10px) rotate(8deg); }
          100% { transform: translate(0,0) rotate(9deg); }
        }
        @keyframes wcuFloat2 {
          0% { transform: translate(0,0) rotate(-7deg); }
          50% { transform: translate(-10px,8px) rotate(-9deg); }
          100% { transform: translate(0,0) rotate(-7deg); }
        }
        @keyframes wcuFloat3 {
          0% { transform: translate(0,0); }
          50% { transform: translate(6px,6px); }
          100% { transform: translate(0,0); }
        }
        @keyframes wcuFloat4 {
          0% { transform: translate(0,0); }
          50% { transform: translate(-8px,-6px); }
          100% { transform: translate(0,0); }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;