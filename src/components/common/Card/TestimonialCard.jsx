import React from 'react';
import { Star } from 'lucide-react';

function Stars({ rating = 5 }) {
  const total = 5;
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: total }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
          strokeWidth={2.2}
        />
      ))}
    </div>
  );
}

export default function TestimonialCard({
  avatar,            // string URL or ReactNode
  name,
  title,
  rating = 5,        // 1..5
  quote,
  platform,          // e.g., "Google", "Trustpilot"
  platformLogo,      // string URL or ReactNode
  className = '',
  ...props
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-purple-500/40 ${className}`}
      {...props}
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="shrink-0">
          {typeof avatar === 'string' ? (
            <img
              src={avatar}
              alt={`${name} avatar`}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-purple-500/30"
              loading="lazy"
            />
          ) : (
            avatar || (
              <div className="h-12 w-12 rounded-full bg-white/10 ring-2 ring-purple-500/30" />
            )
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-semibold">{name}</p>
              {title && <p className="text-xs text-gray-400">{title}</p>}
            </div>
            <Stars rating={rating} />
          </div>
        </div>
      </div>

      {/* Quote */}
      <blockquote className="mt-4 text-gray-300 italic" style={{
        display: '-webkit-box',
        WebkitLineClamp: 5,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden'
      }}>
        “{quote}”
      </blockquote>

      {/* Platform badge */}
      {(platform || platformLogo) && (
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
          {typeof platformLogo === 'string' ? (
            <img src={platformLogo} alt={`${platform || 'Platform'} logo`} className="h-4 w-4 object-contain" loading="lazy" />
          ) : (
            platformLogo || null
          )}
          {platform && <span className="text-xs text-gray-300">{platform}</span>}
        </div>
      )}
    </div>
  );
}