import React from 'react';
import { Star as StarOutline } from 'lucide-react';

// Filled star (so we can match the screenshot exactly)
const StarFilled = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.168L12 18.902l-7.336 3.863 1.402-8.168L.132 9.21l8.2-1.192L12 .587z" />
  </svg>
);

function Stars({ rating = 5, colorClass = 'text-amber-400', sizeClass = 'w-4 h-4' }) {
  // Render exactly `rating` stars (no empty stars), as in the screenshot
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} star rating`}>
      {Array.from({ length: rating }).map((_, i) => (
        <StarFilled key={i} className={`${sizeClass} ${colorClass}`} />
      ))}
    </div>
  );
}

function PlatformBadge({ platform = '', colorClass = 'text-amber-400' }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
      {/* small colored star like the screenshot */}
      <StarFilled className={`h-3.5 w-3.5 ${colorClass}`} />
      <span className="text-xs text-white font-medium">{platform}</span>
      <span className="text-xs text-gray-500">| Review by {platform.toLowerCase()}</span>
    </div>
  );
}

export default function TestimonialCard({
  avatar,            // string URL or ReactNode
  name,
  title,
  rating = 5,        // can be >5 (e.g., 7 for Trustpilot, matching the screenshot)
  quote,
  platform = 'Google',   // "Google" | "Trustpilot"
  className = '',
  active = false,        // highlight center card
  ...props
}) {
  // Platform-driven star color
  const starColorClass = platform === 'Trustpilot' ? 'text-[#00B67A]' : 'text-amber-400';

  return (
    <div
      className={[
        'rounded-2xl border border-white/10 bg-[#0f1126]/95 p-6 text-white backdrop-blur',
        'ring-1 ring-white/10 shadow-[0_0_24px_rgba(124,58,237,0.10)] transition',
        active ? 'outline outline-2 outline-purple-400/80 shadow-[0_0_36px_rgba(168,85,247,0.35)]' : 'hover:border-purple-500/40',
        className,
      ].join(' ')}
      {...props}
    >
      {/* Header: avatar + name/title left, stars right */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="shrink-0">
            {typeof avatar === 'string' ? (
              <img
                src={avatar}
                alt={`${name} avatar`}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-white/30"
                loading="lazy"
              />
            ) : (
              avatar || <div className="h-12 w-12 rounded-full bg-white/10 ring-2 ring-white/30" />
            )}
          </div>
          <div className="truncate">
            <p className="text-white font-semibold leading-tight">{name}</p>
            {title && <p className="text-xs text-gray-400 leading-tight">{title}</p>}
          </div>
        </div>

        <Stars rating={rating} colorClass={starColorClass} sizeClass="w-4 h-4" />
      </div>

      {/* Quote */}
      <blockquote
        className="mt-4 text-gray-300"
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 5,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        “{quote}”
      </blockquote>

      {/* Platform badge */}
      <div className="mt-5">
        <PlatformBadge platform={platform} colorClass={starColorClass} />
      </div>
    </div>
  );
}