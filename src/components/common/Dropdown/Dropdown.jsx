import React, { useEffect, useMemo, useRef, useState } from 'react';

const cn = (...cls) => cls.filter(Boolean).join(' ');

// position: 'bottom' | 'top' | 'left' | 'right'
const positionClasses = {
  bottom: 'top-[calc(100%+8px)] left-0 origin-top-left',
  top: 'bottom-[calc(100%+8px)] left-0 origin-bottom-left',
  right: 'top-0 left-[calc(100%+8px)] origin-top-left',
  left: 'top-0 right-[calc(100%+8px)] origin-top-right',
};

function useClickOutside(refs, handler) {
  useEffect(() => {
    const onDown = (e) => {
      const target = e.target;
      const isInside = refs.some((r) => r.current && r.current.contains(target));
      if (!isInside) handler(e);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('touchstart', onDown);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('touchstart', onDown);
    };
  }, [refs, handler]);
}

export default function Dropdown({
  trigger,            // ReactNode or function: ({ open, toggle }) => ReactNode
  items = [],         // [{ key, label, icon, href, onSelect, disabled, divider, description, target, rel }]
  position = 'bottom',
  menuClassName = '',
  className = '',
  onOpenChange,
  initialOpen = false,
}) {
  const [open, setOpen] = useState(initialOpen);
  const [activeIndex, setActiveIndex] = useState(-1);

  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const itemRefs = useRef([]);

  const actionableItems = useMemo(
    () => items.map((it, idx) => ({ it, idx })).filter(({ it }) => !it.divider && !it.disabled),
    [items]
  );

  const setOpenSafe = (v) => {
    setOpen(v);
    onOpenChange && onOpenChange(v);
  };

  const openMenu = () => {
    setOpenSafe(true);
    // Focus first actionable item on next tick
    requestAnimationFrame(() => {
      const firstIdx = items.findIndex((it) => !it.divider && !it.disabled);
      if (firstIdx >= 0 && itemRefs.current[firstIdx]) {
        itemRefs.current[firstIdx].focus();
        setActiveIndex(firstIdx);
      }
    });
  };

  const closeMenu = (returnFocus = true) => {
    setOpenSafe(false);
    setActiveIndex(-1);
    if (returnFocus && triggerRef.current) triggerRef.current.focus();
  };

  useClickOutside([rootRef, menuRef], () => open && closeMenu(false));

  // Handle keyboard on trigger
  const onTriggerKeyDown = (e) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open ? closeMenu() : openMenu();
    }
  };

  // Keyboard navigation within menu
  const onMenuKeyDown = (e) => {
    const count = items.length;
    if (!count) return;

    const move = (dir) => {
      if (!count) return;
      let idx = activeIndex;
      do {
        idx = (idx + dir + count) % count;
      } while (items[idx]?.divider || items[idx]?.disabled);
      setActiveIndex(idx);
      itemRefs.current[idx]?.focus();
    };

    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        closeMenu();
        break;
      case 'ArrowDown':
        e.preventDefault();
        move(1);
        break;
      case 'ArrowUp':
        e.preventDefault();
        move(-1);
        break;
      case 'Home':
        e.preventDefault();
        {
          const first = items.findIndex((it) => !it.divider && !it.disabled);
          if (first >= 0) {
            setActiveIndex(first);
            itemRefs.current[first]?.focus();
          }
        }
        break;
      case 'End':
        e.preventDefault();
        {
          let last = -1;
          for (let i = items.length - 1; i >= 0; i--) {
            if (!items[i].divider && !items[i].disabled) {
              last = i;
              break;
            }
          }
          if (last >= 0) {
            setActiveIndex(last);
            itemRefs.current[last]?.focus();
          }
        }
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (activeIndex >= 0 && items[activeIndex]) {
          const item = items[activeIndex];
          if (!item.disabled && !item.divider) {
            if (item.onSelect) item.onSelect(item);
            closeMenu();
          }
        }
        break;
      default:
        break;
    }
  };

  const renderTrigger = () => {
    const trig =
      typeof trigger === 'function' ? trigger({ open, toggle: () => setOpenSafe(!open) }) : trigger;

    // If user passes a React element, enhance it with ARIA + handlers
    if (React.isValidElement(trig)) {
      const props = {
        ref: triggerRef,
        onClick: (e) => {
          trig.props.onClick && trig.props.onClick(e);
          setOpenSafe(!open);
        },
        onKeyDown: (e) => {
          trig.props.onKeyDown && trig.props.onKeyDown(e);
          onTriggerKeyDown(e);
        },
        'aria-haspopup': 'menu',
        'aria-expanded': open,
      };
      return React.cloneElement(trig, props);
    }

    // Fallback simple trigger
    return (
      <button
        ref={triggerRef}
        type="button"
        className="px-3 py-2 rounded-lg bg-white/10 text-white hover:bg-white/15"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpenSafe(!open)}
        onKeyDown={onTriggerKeyDown}
      >
        Menu
      </button>
    );
  };

  return (
    <div ref={rootRef} className={cn('relative inline-block text-left', className)}>
      {renderTrigger()}

      {/* Menu */}
      <div
        ref={menuRef}
        className={cn(
          'absolute z-50 min-w-[220px] rounded-xl border border-white/10 bg-[#0a0a1f] text-gray-200 shadow-xl transition transform',
          open ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0',
          positionClasses[position] || positionClasses.bottom,
          menuClassName
        )}
        role="menu"
        aria-orientation="vertical"
        tabIndex={-1}
        onKeyDown={onMenuKeyDown}
      >
        <ul className="py-1 max-h-[320px] overflow-auto">
          {items.map((item, idx) => {
            if (item.divider) {
              return <li key={`div-${idx}`} className="my-1 border-t border-white/10" aria-hidden="true" />;
            }

            const Icon = item.icon;
            const content = (
              <>
                {Icon && (
                  <span className="mr-2 inline-flex">
                    {React.isValidElement(Icon)
                      ? React.cloneElement(Icon, { className: cn('w-4 h-4', Icon.props.className) })
                      : typeof Icon === 'function'
                        ? <Icon className="w-4 h-4" />
                        : Icon}
                  </span>
                )}
                <div className="flex-1 min-w-0">
                  <div className="truncate">{item.label}</div>
                  {item.description && (
                    <div className="text-xs text-gray-400 truncate">{item.description}</div>
                  )}
                </div>
                {item.shortcut && (
                  <span className="ml-3 text-xs text-gray-500">{item.shortcut}</span>
                )}
              </>
            );

            const commonProps = {
              key: item.key || (typeof item.label === 'string' ? item.label : `item-${idx}`),
              ref: (el) => (itemRefs.current[idx] = el),
              role: 'menuitem',
              tabIndex: -1,
              'aria-disabled': item.disabled || undefined,
              className: cn(
                'w-full flex items-center gap-2 px-3 py-2 text-sm text-left hover:bg-white/5 focus:bg-white/10 rounded-lg outline-none',
                item.disabled && 'opacity-50 pointer-events-none'
              ),
              onClick: (e) => {
                if (item.disabled) return;
                item.onSelect && item.onSelect(item, e);
                // For href-based items, allow natural navigation; close after click
                closeMenu(false);
              },
            };

            if (item.href) {
              return (
                <li key={commonProps.key} className="px-1">
                  <a
                    {...commonProps}
                    href={item.href}
                    target={item.target}
                    rel={item.rel || (item.target === '_blank' ? 'noopener noreferrer' : undefined)}
                  >
                    {content}
                  </a>
                </li>
              );
            }

            return (
              <li key={commonProps.key} className="px-1">
                <button type="button" {...commonProps}>
                  {content}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}