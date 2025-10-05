// Hero.jsx
import React from 'react';

// Import GIFs
import bgGif from '../../../Materiel/Comp1_4.gif';
import frame3Gif from '../../../Materiel/Frame3.gif';

const SparkleIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z" fill="#FFFFFF" opacity="0.9"/>
    <path d="M4.5 14l.9 2.7L8 17.5l-2.6.9L4.5 21l-.9-2.6L1 17.5l2.6-.8L4.5 14z" fill="#FFFFFF" opacity="0.6"/>
    <path d="M19.5 12l.9 2.7 2.6.8-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.8.9-2.7z" fill="#FFFFFF" opacity="0.6"/>
  </svg>
);

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden text-white bg-no-repeat bg-cover bg-center min-h-screen mt-0 pt-0"
      style={{ backgroundImage: `url(${bgGif})` }}
    >
      {/* Remove top gap: avoid heading margin collapse */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-0 pb-12 lg:pb-20">
        <div className="max-w-2xl pt-0">
          <h1 className="mt-45 text-[40px] leading-tight font-extrabold sm:text-[54px] xl:text-[64px]">
            <span className="block">Expert to</span>
            <span className="block">Digitalise Your</span>
            <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Growth
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-7 text-gray-200">
            We are constantly growing or learning and improving. Enter your the personal real
            estate sanctuary, where finding the ideal home is
          </p>

          <div className="mt-8">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-fuchsia-500 px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(139,92,246,0.8)] ring-1 ring-white/10 transition hover:scale-[1.02]"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                <SparkleIcon className="h-4 w-4" />
              </span>
              Explore Now
            </a>
          </div>
        </div>
      </div>

      {/* Bottom-right GIF */}
      <img
        src={frame3Gif}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-6 right-6 w-20 sm:w-24 md:w-28 h-auto"
      />
    </section>
  );
};

export default Hero;