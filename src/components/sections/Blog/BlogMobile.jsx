// BlogMobile.jsx
import React, { useRef, useState, useEffect } from 'react';
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
  // Add more if desired
];

function BlogCard({ post }) {
  return (
    <a
      href={post.href}
      className="relative shrink-0 snap-start basis-full rounded-2xl overflow-hidden border border-white/10 bg-black/20 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
    >
      <img
        src={post.image}
        alt={post.title}
        className="h-[240px] w-full object-cover"
      />

      {/* gradient overlay */}
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
        <h3 className="text-white text-base font-semibold">
          {post.title}
        </h3>
      </div>
    </a>
  );
}

export default function BlogMobile() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const go = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const newIndex = Math.max(0, Math.min(posts.length - 1, index + dir));
    setIndex(newIndex);
    el.scrollTo({ left: newIndex * el.clientWidth, behavior: 'smooth' });
  };

  // Update active index on manual scroll (swipe)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollLeft / el.clientWidth);
      setIndex(i);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="blog-mobile" className="lg:hidden">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#18132B] to-[#0F0B1F] px-4 py-10 mx-4">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(40rem 16rem at 60% 20%, rgba(126, 74, 255, 0.14), transparent 60%)',
          }}
        />

        <div className="relative z-10">
          {/* Header */}
          <h2 className="text-3xl font-extrabold text-white">
            Did You Hear about
            <br />
            Our Podcast?
          </h2>
          <p className="text-gray-300 mt-3">
            Based on the description of Metro Solver and the image provided, here is a 6-step
            process that Metro Solver uses to scale a customer&apos;s business.
          </p>

          {/* Cards slider */}
          <div
            ref={trackRef}
            className="mt-6 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
          >
            {posts.map((p) => (
              <BlogCard key={p.id} post={p} />
            ))}
          </div>

          {/* Controls + dots */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 text-white hover:bg-white/10 transition"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4.5 h-4.5" />
            </button>
            <div className="flex items-center gap-1.5">
              {posts.map((p, i) => (
                <span
                  key={p.id}
                  className={`inline-block w-2 h-2 rounded-full transition ${
                    i === index ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
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