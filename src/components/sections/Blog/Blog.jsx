// BlogDesktop.jsx
import React, { useRef } from 'react';
import { Clock, Calendar, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'How Brands Can Prepare for Black Friday & Christmas',
    minutes: 30,
    dateLabel: 'Mar 11, 2025',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1800&auto=format&fit=crop',
    href: '#podcast-1',
  },
  {
    id: 2,
    title: 'How Brands Can Prepare for Black Friday & Christmas',
    minutes: 30,
    dateLabel: 'Mar 11, 2025',
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1800&auto=format&fit=crop',
    href: '#podcast-2',
  },
  // Add more if you like
];

function BlogCard({ post }) {
  return (
    <a
      href={post.href}
      className="relative shrink-0 snap-start basis-[min(40rem,48%)] rounded-2xl overflow-hidden border border-white/10 bg-black/20 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
    >
      <img
        src={post.image}
        alt={post.title}
        className="h-[300px] w-full object-cover"
      />

      {/* Soft overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Top chips */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/45 backdrop-blur border border-white/10 text-white text-xs">
          <Clock className="w-3.5 h-3.5" />
          {post.minutes} Minute
        </span>
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/45 backdrop-blur border border-white/10 text-white text-xs">
          <Calendar className="w-3.5 h-3.5" />
          {post.dateLabel}
        </span>
      </div>

      {/* Play button */}
      <div className="absolute inset-0 grid place-items-center">
        <button
          type="button"
          aria-label="Play"
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/25 border border-white/30 text-white hover:bg-white/35 transition shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
        >
          <Play className="w-5 h-5" />
        </button>
      </div>

      {/* Title */}
      <div className="absolute left-0 right-0 bottom-0 p-4">
        <h3 className="text-white text-lg font-semibold">
          {post.title}
        </h3>
      </div>
    </a>
  );
}

export default function BlogDesktop() {
  const trackRef = useRef(null);

  const scrollByAmount = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.9), behavior: 'smooth' });
  };

  return (
    <section id="blog" className="hidden lg:block">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#18132B] to-[#0F0B1F] px-6 py-12">
        {/* soft purple glow */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(60rem 20rem at 70% 20%, rgba(126, 74, 255, 0.14), transparent 60%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-2 gap-10 items-start">
            <h2 className="text-4xl/[1.1] font-extrabold text-white">
              Did You Hear about
              <br />
              Our Podcast?
            </h2>
            <p className="text-gray-300">
              Based on the description of Metro Solver and the image provided, here is a
              6-step process that Metro Solver uses to scale a customer&apos;s business.
            </p>
          </div>

          {/* Cards track */}
          <div
            ref={trackRef}
            className="mt-8 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-2"
          >
            {posts.map((p) => (
              <BlogCard key={p.id} post={p} />
            ))}
          </div>

          {/* Prev/Next */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollByAmount(-1)}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 text-white hover:bg-white/10 transition"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4.5 h-4.5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount(1)}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 text-white hover:bg-white/10 transition"
              aria-label="Next"
            >
              <ChevronRight className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}