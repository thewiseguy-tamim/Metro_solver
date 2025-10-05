import React from 'react';

// Import GIFs (3 levels up from HeroMobile.jsx)
import bgGif from '../../../Materiel/Comp1_4.gif';
import frame3Gif from '../../../Materiel/Frame3.gif';

const logos = ['luminus', 'brembo', 'motorola', 'luminus', 'brembo', 'motorola'];

const HeroMobile = () => {
  return (
    <section
      className="relative overflow-hidden text-white bg-no-repeat bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${bgGif})` }}
    >
      <div className="mx-auto max-w-2xl px-5 py-12">
        <h1 className="text-center text-4xl font-extrabold leading-tight text-white">
          Expert to Digitalise Your{' '}
          <span className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400 bg-clip-text text-transparent">
            Growth
          </span>
        </h1>

        <p className="mt-4 text-center text-base leading-relaxed text-gray-200">
          We are constantly growing or learning and improving. Enter your the personal real
          estate sanctuary, where finding the ideal home is
        </p>

        <div className="mt-6 flex items-center justify-center">
          <a
            href="#services"
            className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-gradient-to-tr from-purple-700 via-purple-600 to-purple-500 px-6 py-3 text-base font-semibold text-white shadow-[0_0_30px_rgba(124,58,237,0.35)] transition active:scale-[0.99]"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15">✨</span>
            Explore Now
          </a>
        </div>

        {/* Partner marquee (kept as-is) */}
        <div className="relative mt-8 select-none overflow-hidden border-t border-white/5 pt-5">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a0a1f]/0 via-transparent to-[#0a0a1f]/0" />
          <div className="flex gap-4 whitespace-nowrap will-change-transform animate-[hero-marquee_40s_linear_infinite]">
            {logos.map((l, i) => (
              <div
                key={`m-a-${i}`}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-gray-300 backdrop-blur"
              >
                <span className="h-2 w-2 rounded-full bg-white/30"></span>
                <span className="text-sm font-semibold uppercase opacity-90">{l}</span>
              </div>
            ))}
            {logos.map((l, i) => (
              <div
                key={`m-b-${i}`}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-gray-300 backdrop-blur"
                aria-hidden="true"
              >
                <span className="h-2 w-2 rounded-full bg-white/30"></span>
                <span className="text-sm font-semibold uppercase opacity-90">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom-right GIF */}
      <img
        src={frame3Gif}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-5 right-5 w-16 sm:w-20 h-auto z-30"
      />

      {/* Floating chatbot (kept; appears above the GIF) */}
      <button
        aria-label="Open chatbot"
        className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-purple-600 to-purple-500 text-white shadow-[0_0_30px_rgba(124,58,237,0.6)] ring-1 ring-white/10 transition active:scale-95"
        onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
      >
        🤖
      </button>

      <style>{`
        @keyframes hero-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default HeroMobile;