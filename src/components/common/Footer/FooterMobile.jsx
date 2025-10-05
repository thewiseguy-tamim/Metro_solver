import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import PartnersMarquee from "./PartnersMarquee";

const Sparkles = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
    <path d="M12 3l1.7 4.3 4.3 1.7-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3z" />
    <path d="M5 2l.85 1.7L7.5 4.5 5.85 5.3 5 7 4.15 5.3 2.5 4.5l1.65-.8L5 2z" opacity=".7" />
  </svg>
);

export default function FooterMobile() {
  const onSubscribe = (e) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    if (!email) return;
    console.log("Subscribe:", email);
    e.currentTarget.reset();
  };

  return (
    <div className="relative bg-[#0a0a1f] text-gray-300 lg:hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_0%,rgba(109,61,240,0.18),transparent_60%)]" />

      <div className="mx-auto max-w-2xl px-4 py-8">
        {/* Country currency */}
        <div>
          <label className="mb-2 block text-sm text-gray-300">Country Currency</label>
          <div className="relative w-full rounded-xl border border-white/20 bg-white/5 px-3 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm">
                <span className="rounded bg-white/10 px-2 py-1">🇬🇧</span>
                <span>GBP - British Pound</span>
              </div>
              <svg className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="mt-8 text-center">
          <div className="text-sm text-gray-400">Our Future Partners</div>
          <div className="mt-3">
            <PartnersMarquee speed="28s" />
          </div>
        </div>

        {/* Newsletter card */}
        <div className="mt-7 rounded-3xl border border-white/10 bg-gradient-to-br from-[#161a3b] via-[#141837] to-[#121428] p-5 text-white shadow-[0_24px_80px_rgba(124,58,237,0.3)]">
          <div className="mb-4 flex items-center gap-3">
            <div
              className="h-8 w-8 bg-gradient-to-br from-purple-500 to-purple-700"
              style={{ clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0 50%)" }}
              aria-hidden
            />
            <div>
              <div className="text-sm font-extrabold">METRO SOLVER</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400">your it partner</div>
            </div>
          </div>

          <h3 className="text-xl font-bold">Subscribe to Our Newsletter</h3>
          <p className="mt-1 text-xs text-gray-300">Join the 25000+ client, in our company</p>

          <form onSubmit={onSubscribe} className="mt-4">
            <div className="flex items-center rounded-full bg-white/10 p-1 pl-4 ring-1 ring-white/10">
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-full bg-transparent px-2 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#5b35e5] to-[#9f7dff] px-4 py-2 text-xs font-semibold text-white shadow-[0_0_28px_rgba(124,58,237,0.4)]"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Contact + copy */}
        <div className="mt-8 space-y-3 text-sm">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-purple-400" />
            <p className="text-gray-400">
              Head office: Metro Solver Limited, Grantham Road, London E12 5LX, United Kingdom
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-purple-400" />
            <a href="tel:+447936455446" className="hover:text-white">
              +44 7936 455446
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-purple-400" />
            <a href="mailto:official@metrosolver.com" className="hover:text-white">
              official@metrosolver.com
            </a>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-8 text-center text-xs text-gray-500">
          <div>© Metro Solver. All Rights Reserved 2024</div>
          <div className="mt-1">
            Metro Solver Ltd incorporated in England & Wales Registration No:15792819
          </div>
        </div>
      </div>
    </div>
  );
}