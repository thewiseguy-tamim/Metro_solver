import React from 'react';
import { ArrowRight, Eye, BadgePercent, DollarSign } from 'lucide-react';

export default function BlogCard({
  image,            // string or { src, alt }
  title,
  description,
  views,            // e.g., "504K+"
  cpa,              // e.g., "39% Lower CPA"
  sales,            // e.g., "$34K+"
  link = '#',
  className = '',
  ...props
}) {
  const imgSrc = typeof image === 'string' ? image : image?.src;
  const imgAlt = (typeof image === 'object' && image?.alt) || title || 'Blog thumbnail';

  return (
    <a
      href={link}
      className={`group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-purple-500/40 ${className}`}
      {...props}
      aria-label={`Read: ${title}`}
    >
      {/* Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img
          src={imgSrc}
          alt={imgAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1f] via-[#0a0a1f]/10 to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-400">{description}</p>

        {/* Stats */}
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-gray-300">
          {views && (
            <span className="inline-flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-purple-400" />
              <span>{views} Views</span>
            </span>
          )}
          {cpa && (
            <span className="inline-flex items-center gap-1.5">
              <BadgePercent className="w-4 h-4 text-purple-400" />
              <span>{cpa}</span>
            </span>
          )}
          {sales && (
            <span className="inline-flex items-center gap-1.5">
              <DollarSign className="w-4 h-4 text-purple-400" />
              <span>{sales} Sales Generated</span>
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-purple-400">
          View More
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  );
}