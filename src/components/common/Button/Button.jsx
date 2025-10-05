import React, { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';

const cn = (...cls) => cls.filter(Boolean).join(' ');

const sizeClasses = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
};

const variants = {
  primary:
    'bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white shadow-[0_0_0_0_rgba(124,58,237,0.0)] hover:shadow-[0_0_20px_0_rgba(124,58,237,0.35)]',
  secondary:
    'bg-white/10 text-white hover:bg-white/15',
  outline:
    'bg-transparent text-white border border-white/20 hover:border-purple-500/50 hover:bg-purple-500/10',
};

function renderIcon(Icon, className = 'w-5 h-5') {
  if (!Icon) return null;
  if (React.isValidElement(Icon)) {
    return React.cloneElement(Icon, { className: cn(className, Icon.props.className) });
  }
  if (typeof Icon === 'function') {
    const Comp = Icon;
    return <Comp className={className} />;
  }
  return Icon;
}

const Button = forwardRef(
  (
    {
      as: As,
      href,
      target,
      rel,
      type = 'button',
      variant = 'primary',
      size = 'md',
      leftIcon,
      rightIcon,
      loading = false,
      disabled = false,
      fullWidth = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const isLink = !!href && !As;
    const Comp = As || (isLink ? 'a' : 'button');
    const isDisabled = disabled || loading;

    const content = (
      <>
        {loading && (
          <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
        )}
        {!loading && leftIcon && (
          <span className="mr-2 inline-flex">{renderIcon(leftIcon)}</span>
        )}
        {children && <span className="truncate">{children}</span>}
        {!loading && rightIcon && (
          <span className="ml-2 inline-flex">{renderIcon(rightIcon)}</span>
        )}
      </>
    );

    return (
      <Comp
        ref={ref}
        href={href}
        target={target}
        rel={target === '_blank' ? cn('noopener noreferrer', rel) : rel}
        type={!isLink ? type : undefined}
        disabled={!isLink ? isDisabled : undefined}
        aria-disabled={isLink ? isDisabled : undefined}
        aria-busy={loading || undefined}
        className={cn(
          'inline-flex items-center justify-center rounded-xl transition focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/60 active:scale-[0.99] select-none',
          sizeClasses[size],
          variants[variant],
          isDisabled && 'opacity-60 pointer-events-none',
          fullWidth ? 'w-full' : '',
          className
        )}
        {...props}
      >
        {content}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export default Button;