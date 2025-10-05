import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

function ServiceCard({
  icon,
  title,
  description,
  link = '#',
  featured = false,   // if true, stays highlighted (like the selected card in your mock)
  label,
  className = '',
  ...props
}) {
  // Normalize icon (element or component)
  const IconEl = React.isValidElement(icon)
    ? React.cloneElement(icon, {
        className: `${icon.props?.className || ''} h-7 w-7 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]`,
      })
    : typeof icon === 'function'
    ? React.createElement(icon, { className: 'h-7 w-7 text-white' })
    : <Sparkles className="h-7 w-7 text-white" />;

  return (
    <div
      className={[
        'group relative overflow-hidden rounded-[18px] border border-white/10',
        'bg-[#121827] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]',
        'transition-all duration-300 hover:-translate-y-0.5',
        className,
      ].join(' ')}
      {...props}
    >
      {/* Gradient overlay: appears on hover, or always if featured */}
      <div
        aria-hidden="true"
        className={[
          'absolute inset-0 rounded-[18px] z-0',
          'bg-[linear-gradient(135deg,#231a44_0%,#2b1f5d_40%,#5f2eea_100%)]',
          'opacity-0 transition-opacity duration-300',
          featured ? 'opacity-100' : 'group-hover:opacity-100',
        ].join(' ')}
      />

      {/* Thin white outline overlay when highlighted */}
      <div
        aria-hidden="true"
        className={[
          'pointer-events-none absolute inset-0 rounded-[18px] z-20',
          'ring-1 ring-white/60',
          'opacity-0 transition-opacity duration-300',
          featured ? 'opacity-100' : 'group-hover:opacity-100',
        ].join(' ')}
      />

      {/* Optional label */}
      {label && (
        <span
          className={[
            'absolute top-3 right-3 z-30 rounded-full px-3 py-1 text-xs',
            featured
              ? 'bg-white/10 text-white border border-white/40'
              : 'bg-white/5 text-gray-300 border border-white/10',
          ].join(' ')}
        >
          {label}
        </span>
      )}

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-7">
        <div className="flex items-start gap-4">
          {/* Icon + tiny amber spark accent */}
          <div className="relative shrink-0">
            {IconEl}
            <span className="pointer-events-none absolute -top-1 -left-1 h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,.8)]" />
          </div>

          <div className="flex-1">
            <h3 className="text-[18px] font-semibold tracking-tight text-white">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-300/90">
              {description}
            </p>

            <a
              href={link}
              className={[
                'mt-4 inline-flex items-center gap-1 text-sm transition-colors',
                featured
                  ? 'text-white hover:opacity-90'
                  : 'text-purple-300 group-hover:text-white',
              ].join(' ')}
              aria-label={`Read more about ${title}`}
            >
              Read More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ServiceCard };