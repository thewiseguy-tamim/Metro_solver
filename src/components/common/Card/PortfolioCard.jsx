import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioCard({
  image,          // string or { src, alt }
  title,
  category,
  link = '#',
  // ratio is ignored for the mosaic to avoid fighting grid height.
  featured = false,
  label,          // e.g., "Rifat ahmed"
  className = '',
  ...props
}) {
  const imgSrc = typeof image === 'string' ? image : image?.src;
  const imgAlt = (typeof image === 'object' && image?.alt) || title || 'Portfolio item';

  return (
    <a
      href={link}
      className={[
        'group relative block h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b20]',
        'shadow-[0_0_24px_rgba(124,58,237,0.15)] ring-1 ring-white/10',
        'transition will-change-transform hover:-translate-y-0.5',
        className,
      ].join(' ')}
      {...props}
      aria-label={`${title}${category ? ` — ${category}` : ''}`}
    >
      {/* Media fills the grid cell height */}
      <div className="relative h-full w-full overflow-hidden">
        <img
          src={imgSrc}
          alt={imgAlt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.04]"
        />

        {/* Corner dots */}
        <span className="pointer-events-none absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-white/50" />
        <span className="pointer-events-none absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-white/30" />
        <span className="pointer-events-none absolute left-3 bottom-3 h-1.5 w-1.5 rounded-full bg-white/30" />
        <span className="pointer-events-none absolute right-3 bottom-3 h-1.5 w-1.5 rounded-full bg-white/50" />

        {/* Category chip */}
        {category && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-black/45 backdrop-blur px-2.5 py-1 text-xs text-gray-200 border border-white/10">
            {category}
          </span>
        )}

        {/* Featured label */}
        {featured && label && (
          <span className="absolute -right-2 top-3 z-10 rounded-full bg-[#ff4d4f] px-3 py-1 text-xs font-semibold text-white shadow-md">
            {label}
          </span>
        )}

        {/* Overlay gradient on hover */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a1f]/85 via-[#0a0a1f]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Title + CTA */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <h3 className="max-w-[80%] text-white font-semibold translate-y-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            {title}
          </h3>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-200 backdrop-blur border border-white/10 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <ArrowUpRight className="w-5 h-5" />
          </span>
        </div>
      </div>
    </a>
  );
}