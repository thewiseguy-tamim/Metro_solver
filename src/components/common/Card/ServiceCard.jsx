import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

function ServiceCard({
  icon,
  title,
  description,
  link = '#',
  featured = false,
  label,
  className = '',
  ...props
}) {
  // Normalize icon prop (accepts element or component)
  const IconEl = React.isValidElement(icon)
    ? React.cloneElement(icon, {
        className: `${icon.props?.className || ''} h-7 w-7 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]`,
      })
    : typeof icon === 'function'
    ? React.createElement(icon, { className: 'h-7 w-7 text-white' })
    : <Sparkles className="h-7 w-7 text-white" />;

  return (
    <div
      className={[
        'group relative overflow-hidden rounded-[20px] transition-all duration-300',
        'hover:-translate-y-0.5',
        featured
          // Featured card: purple gradient + subtle glow
          ? [
              'bg-[linear-gradient(135deg,#231a44_0%,#2b1f5d_40%,#5f2eea_100%)]',
              'shadow-[0_24px_60px_-28px_rgba(95,46,234,.65)]',
            ].join(' ')
          // Default card: soft dark with radial highlight and light border
          : [
              'border border-white/10',
              'bg-[#121827]',
              '[background:radial-gradient(700px_400px_at_0%_0%,rgba(255,255,255,0.08),transparent_40%)]',
              'shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]',
            ].join(' '),
        className,
      ].join(' ')}
      {...props}
    >
      {/* Optional label */}
      {label && (
        <span
          className={[
            'absolute top-3 right-3 z-10 rounded-full px-3 py-1 text-xs',
            featured
              ? 'bg-white/10 text-white border border-white/40'
              : 'bg-white/5 text-gray-300 border border-white/10',
          ].join(' ')}
        >
          {label}
        </span>
      )}

      <div className="relative p-6 sm:p-7">
        <div className="flex items-start gap-4">
          {/* Icon + tiny orange spark accent */}
          <div className="relative shrink-0">
            {IconEl}
            <span className="pointer-events-none absolute -top-1 -left-1 h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,.8)]" />
          </div>

          <div className="flex-1">
            <h3 className="text-[18px] font-semibold tracking-tight text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-300/90">
              {description}
            </p>

            <a
              href={link}
              className={[
                'mt-4 inline-flex items-center gap-1 text-sm',
                featured ? 'text-white hover:opacity-90' : 'text-purple-300 hover:text-purple-200',
              ].join(' ')}
              aria-label={`Read more about ${title}`}
            >
              Read More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Thin white outline for featured */}
      {featured && (
        <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-white/60" />
      )}
    </div>
  );
}

export default ServiceCard;
export { ServiceCard };