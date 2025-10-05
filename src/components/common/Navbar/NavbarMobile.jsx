// NavbarMobile.jsx
import React, { useEffect, useState } from 'react';
import {
  Menu,
  MessageCircle,
  ShoppingCart,
  UserRound,
  ChevronDown,
  ChevronRight,
  Home,
  LayoutGrid,
  Bookmark,
  Headphones,
} from 'lucide-react';

const servicesItems = [
  { label: 'Digital Marketing', href: '#digital-marketing' },
  { label: 'Web & Software Development', href: '#web-dev' },
  { label: 'Graphic Design & Logo', href: '#graphic-design' },
  { label: 'Multimedia & Video Editing', href: '#multimedia' },
  { label: 'Creative Writing Solutions', href: '#writing' },
  { label: 'E-Commerce Solutions', href: '#ecommerce' },
  { label: 'SEO', href: '#seo' },
  { label: 'Premium Website', href: '#premium-website' },
  { label: 'Special Combo', href: '#special-combo' },
];

const navItems = [
  { key: 'home', label: 'Home', href: '#home' },
  { key: 'about', label: 'About us', href: '#about' },
  { key: 'services', label: 'Services', href: '#services', children: servicesItems },
  { key: 'white', label: 'White label', href: '#white-label' },
  { key: 'contact', label: 'Contact us', href: '#contact' },
];

const BrandMark = () => (
  <div className="flex items-center gap-3">
    <div
      className="w-9 h-9 bg-gradient-to-br from-[#5a5df1] to-[#7b3ffb] shadow-[0_8px_24px_rgba(103,76,255,0.45)]"
      style={{ clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0 50%)' }}
      aria-hidden
    />
    <div className="leading-tight">
      <div className="font-extrabold tracking-wide">METRO SOLVER</div>
      <div className="text-[10px] uppercase tracking-[0.25em] text-gray-400">Digital Marketing</div>
    </div>
  </div>
);

/* Mobile top bar */
function MobileTopBar({ onMenu }) {
  return (
    <div className="lg:hidden h-16 bg-[#0a0a1f]/80 supports-[backdrop-filter]:backdrop-blur border-b border-white/10 flex items-center justify-between px-4">
      <button onClick={onMenu} aria-label="Open menu" className="p-3 rounded-full bg-white/5 text-gray-200 hover:bg-white/10">
        <Menu className="w-5 h-5" />
      </button>

      <a href="/" className="scale-95">
        <BrandMark />
      </a>

      <button
        aria-label="Message"
        className="p-3 rounded-full bg-white/5 text-gray-200 hover:bg-white/10"
      >
        <MessageCircle className="w-5 h-5" />
      </button>
    </div>
  );
}

/* Mobile drawer (full nav) */
function MobileDrawer({ open, setOpen }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [setOpen]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-[70]"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-screen w-80 max-w-[85%] bg-[#0a0a1f] border-l border-white/10 z-[80] transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="h-16 px-4 flex items-center justify-between border-b border-white/10">
          <div className="scale-90">
            <BrandMark />
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-full bg-white/5 text-gray-200 hover:bg-white/10"
          >
            ✕
          </button>
        </div>

        <div className="p-4 overflow-y-auto h-[calc(100vh-64px)]">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.key} className="rounded-lg">
                  <button
                    className="w-full text-left px-3 py-3 rounded-lg text-gray-200 hover:bg-white/5 flex items-center justify-between"
                    onClick={() => setServicesOpen((s) => !s)}
                    aria-expanded={servicesOpen}
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-[grid-template-rows] grid ${
                      servicesOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <ul className="min-h-0">
                      {item.children.map((sub) => (
                        <li key={sub.label}>
                          <a
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className="px-5 py-2 text-sm text-gray-300 hover:bg-white/5 rounded-md flex items-center justify-between"
                          >
                            <span>{sub.label}</span>
                            <ChevronRight className="w-4 h-4 text-gray-500" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg text-gray-200 hover:bg-white/5"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
            <button
              aria-label="Cart"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-200"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button
              aria-label="User"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-200"
            >
              <UserRound className="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

/* Mobile bottom tabs with floating purple active orb that reacts on hover */
function MobileBottomTabs() {
  const [active, setActive] = useState('home');

  const tabs = [
    { key: 'home', label: 'Home', icon: Home, href: '#home' },
    { key: 'grid', label: 'Services', icon: LayoutGrid, href: '#services' },
    { key: 'bookmark', label: 'Save', icon: Bookmark, href: '#save' },
    { key: 'support', label: 'Support', icon: Headphones, href: '#support' },
    { key: 'cart', label: 'Cart', icon: ShoppingCart, href: '#cart' },
  ];

  const activeIndex = Math.max(0, tabs.findIndex((t) => t.key === active));
  const orbLeft = `calc(((${activeIndex} + 0.5) * 100% / ${tabs.length}) - 24px)`; // center minus 24px (half orb)

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[90]">
      <div className="pointer-events-none bg-gradient-to-t from-[#0a0a1f] to-transparent h-8" />
      <nav
        className="mx-4 mb-[calc(env(safe-area-inset-bottom,0)+10px)] rounded-3xl bg-[#1a1631]/80 border border-white/10 backdrop-blur px-3 py-2 shadow-[0_12px_40px_rgba(98,60,255,0.3)]"
        aria-label="Bottom navigation"
      >
        <ul className="relative grid grid-cols-5">
          {/* Floating active orb (slides on hover/click) */}
          <span
            aria-hidden
            className="absolute -top-5 z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#6f47ff] to-[#9b4dff] shadow-[0_8px_28px_rgba(111,71,255,0.55)] border border-white/10 transition-[left] duration-300 ease-out"
            style={{ left: orbLeft }}
          />

          {tabs.map((t) => {
            const Icon = t.icon;
            const isActive = active === t.key;
            return (
              <li key={t.key} className="relative flex justify-center">
                <a
                  href={t.href}
                  onClick={() => setActive(t.key)}
                  onMouseEnter={() => setActive(t.key)}
                  onFocus={() => setActive(t.key)}
                  className="relative z-20 group flex flex-col items-center justify-end gap-1 py-3 w-full text-xs outline-none"
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span
                    className={`relative flex items-center justify-center w-9 h-9 rounded-full transition-colors ${
                      isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isActive ? 'drop-shadow-[0_0_20px_rgba(111,71,255,0.9)] scale-110' : 'group-hover:scale-105'
                      }`}
                    />
                  </span>
                  <span className={`${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                    {t.label}
                  </span>
                  <span className="mt-1 h-[2px] w-12 bg-white/15 rounded-full" />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default function NavbarMobile() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-[60]">
      <MobileTopBar onMenu={() => setDrawerOpen(true)} />
      <MobileDrawer open={drawerOpen} setOpen={setDrawerOpen} />
      <MobileBottomTabs />
    </div>
  );
}