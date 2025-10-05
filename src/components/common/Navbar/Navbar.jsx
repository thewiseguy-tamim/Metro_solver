// Navbar.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // <-- Import Link for internal routing
import {
  ChevronDown,
  ChevronRight,
  ShoppingCart,
  UserRound,
  Users,
  Gift,
  LogOut,
  Cat,
  Sparkles,
  Globe,
  LayoutDashboard,
} from 'lucide-react';

// Adjust the path to Frame.gif if needed for your structure
import logoGif from '../../../Materiel/Frame.gif';
import userGif from '../../../Materiel/demo.jpg';

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
  { key: 'home', label: 'Home', href: '/' }, // React Router link
  { key: 'about', label: 'About us', href: '/about-us' }, // React Router link
  { key: 'services', label: 'Services', href: '#services', children: servicesItems },
  { key: 'white', label: 'White label', href: '#white-label' },
  { key: 'contact', label: 'Contact us', href: '#contact' },
];

const TopBanner = () => {
  const text =
    'Budget Friendly • No. 1 in Europe • On your first order 30% OFF • For all products buy now get the offer • User Friendly • 24/7 Service • ';
  return (
    <div className="h-8 w-full bg-transparent border-b py-4 relative z-[150]">
      <style
        dangerouslySetInnerHTML={{
          __html: `@keyframes msMarquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`,
        }}
      />
      <div
        className="absolute inset-0 flex items-center whitespace-nowrap will-change-transform"
        style={{ animation: 'msMarquee 22s linear infinite' }}
      >
        <span className="px-2 text-xs sm:text-sm">{text.repeat(4)}</span>
      </div>
    </div>
  );
};

const BrandMark = () => (
  <div className="flex items-center gap-3">
    <img
      src={logoGif}
      alt="Brand"
      className="w-9 h-9 object-cover shadow-[0_8px_24px_rgba(103,76,255,0.45)]"
      style={{
        clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0 50%)',
      }}
    />
    <div className="leading-tight">
      <div className="font-extrabold tracking-wide">METRO SOLVER</div>
      <div className="text-[10px] uppercase tracking-[0.25em] text-gray-400">Digital Marketing</div>
    </div>
  </div>
);

function DesktopNav() {
  const [active, setActive] = useState('home');
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  // Auth + profile dropdown state
  const [authed, setAuthed] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const [segment, setSegment] = useState('website'); // 'website' | 'dashboard'

  const profile = {
    name: 'Albert Flores',
    email: 'baker@example.com',
    points: 468,
  };

  useEffect(() => {
    const onClick = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    const onEsc = (e) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  return (
    <div className="hidden lg:block sticky top-0 z-[200] isolate bg-[#0a0a1f]/80 supports-[backdrop-filter]:backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-20 flex items-center justify-between gap-6">
          <Link to="/" className="shrink-0">
            <BrandMark />
          </Link>

          {/* Center pill nav */}
          <nav className="flex-1 flex justify-center">
            <div className="rounded-full bg-white/[0.06] border border-white/10 p-1 flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = active === item.key;
                const base = 'relative px-4 py-2 rounded-full text-sm transition-colors';
                const activeClasses =
                  'text-white bg-gradient-to-r from-[#6f47ff] to-[#9b4dff] shadow-[0_6px_24px_rgba(111,71,255,0.45)]';
                const inactiveClasses = 'text-gray-300 hover:text-white hover:bg-white/10';

                if (item.children) {
                  return (
                    <div
                      key={item.key}
                      className="relative"
                      ref={servicesRef}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <button
                        onClick={() => {
                          setActive(item.key);
                          setServicesOpen((s) => !s);
                        }}
                        aria-haspopup="menu"
                        aria-expanded={servicesOpen}
                        className={`${base} ${isActive ? activeClasses : inactiveClasses} inline-flex items-center gap-1`}
                      >
                        {item.label}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {servicesOpen && (
                        <div
                          className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-72 bg-[#0a0a1f] border border-white/10 rounded-xl shadow-xl overflow-hidden z-[260]"
                          role="menu"
                        >
                          <ul className="py-2">
                            {item.children.map((sub) => (
                              <li key={sub.label}>
                                <a
                                  href={sub.href}
                                  className="group px-3 py-2 flex items-center justify-between text-sm text-gray-200 hover:bg-white/5"
                                  role="menuitem"
                                >
                                  <span>{sub.label}</span>
                                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                }

                // Use Link for Home and About Us
                if (item.key === 'home' || item.key === 'about') {
                  return (
                    <Link
                      key={item.key}
                      to={item.href}
                      className={`${base} ${isActive ? activeClasses : inactiveClasses}`}
                      onClick={() => setActive(item.key)}
                    >
                      {item.label}
                    </Link>
                  );
                }

                // Default anchor for in-page links
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    className={`${base} ${isActive ? activeClasses : inactiveClasses}`}
                    onClick={() => setActive(item.key)}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {!authed ? (
              <button
                type="button"
                onClick={() => setAuthed(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white bg-gradient-to-r from-[#6f47ff] to-[#9b4dff] ring-1 ring-white/20 shadow-[0_12px_30px_rgba(111,71,255,0.35)] hover:opacity-95 transition"
              >
                <span className="relative flex items-center justify-center w-5 h-5 rounded-full bg-[conic-gradient(at_50%_50%,#b7f5ff,#b38aff,#b7f5ff)] shadow-[0_0_10px_rgba(180,240,255,0.6)]">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </span>
                <span className="font-medium">Sign Up</span>
              </button>
            ) : (
              <>
                <button
                  aria-label="Cart"
                  className="p-2 rounded-full bg-gradient-to-br from-[#6f47ff] to-[#9b4dff] text-white shadow-[0_8px_24px_rgba(111,71,255,0.45)] hover:opacity-95 transition"
                >
                  <ShoppingCart className="w-5 h-5" />
                </button>

                <button
                  aria-label="Cat"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-purple-300 hover:text-white transition border border-white/10"
                >
                  <Cat className="w-5 h-5" />
                </button>

                <div className="relative" ref={profileRef}>
                  <button
                    onClick={() => setProfileOpen((s) => !s)}
                    className="w-9 h-9 rounded-full border border-white/10 shadow-[0_6px_20px_rgba(0,0,0,0.25)] overflow-hidden focus:outline-none focus:ring-2 focus:ring-purple-400/50"
                    aria-haspopup="menu"
                    aria-expanded={profileOpen}
                  >
                    <img src={userGif} alt="User avatar" className="w-full h-full object-cover" />
                  </button>

                  {profileOpen && (
                    <div
                      role="menu"
                      className="absolute right-0 top-[calc(100%+12px)] w-80 rounded-2xl border border-white/10 bg-gradient-to-b from-[#1b1630] to-[#0f0b1f] shadow-2xl z-[300]"
                    >
                      <div className="p-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={userGif}
                            alt="User avatar"
                            className="w-10 h-10 rounded-full border border-white/10 object-cover"
                          />
                          <div>
                            <div className="text-sm font-semibold text-white">{profile.name}</div>
                            <div className="text-xs text-gray-400">{profile.email}</div>
                          </div>
                        </div>

                        <div className="mt-3 p-1 rounded-full bg-white/5 border border-white/10 flex gap-1">
                          <button
                            onClick={() => setSegment('website')}
                            className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs rounded-full transition ${
                              segment === 'website'
                                ? 'text-white bg-gradient-to-r from-[#6f47ff] to-[#9b4dff] shadow-[0_6px_20px_rgba(111,71,255,0.4)]'
                                : 'text-gray-300 hover:text-white'
                            }`}
                          >
                            <Globe className="w-3.5 h-3.5" />
                            Website
                          </button>
                          <button
                            onClick={() => setSegment('dashboard')}
                            className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs rounded-full transition ${
                              segment === 'dashboard'
                                ? 'text-white bg-gradient-to-r from-[#6f47ff] to-[#9b4dff] shadow-[0_6px_20px_rgba(111,71,255,0.4)]'
                                : 'text-gray-300 hover:text-white'
                            }`}
                          >
                            <LayoutDashboard className="w-3.5 h-3.5" />
                            Dashboard
                          </button>
                        </div>

                        <ul className="mt-3 space-y-1">
                          <li>
                            <a
                              href="#profile"
                              className="flex items-center justify-between px-2.5 py-2 rounded-lg text-sm text-gray-200 hover:bg-white/5"
                              role="menuitem"
                            >
                              <span className="inline-flex items-center gap-2">
                                <UserRound className="w-4 h-4" />
                                User Profile
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#referrals"
                              className="flex items-center justify-between px-2.5 py-2 rounded-lg text-sm text-gray-200 hover:bg-white/5"
                              role="menuitem"
                            >
                              <span className="inline-flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                Referrals
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#rewards"
                              className="flex items-center justify-between px-2.5 py-2 rounded-lg text-sm text-gray-200 hover:bg-white/5"
                              role="menuitem"
                            >
                              <span className="inline-flex items-center gap-2">
                                <Gift className="w-4 h-4" />
                                Rewards
                              </span>
                              <span className="ml-3 inline-flex items-center rounded-full bg-[#ff4d61] px-2 py-0.5 text-[11px] font-semibold text-white">
                                {profile.points} Points
                              </span>
                            </a>
                          </li>
                        </ul>

                        <div className="mt-3 border-t border-white/10 pt-2">
                          <button
                            onClick={() => {
                              setAuthed(false);
                              setProfileOpen(false);
                            }}
                            className="w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm text-gray-200 hover:bg-white/5"
                            role="menuitem"
                          >
                            <LogOut className="w-4 h-4" />
                            Log out
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <>
      <TopBanner />
      <DesktopNav />
    </>
  );
}
