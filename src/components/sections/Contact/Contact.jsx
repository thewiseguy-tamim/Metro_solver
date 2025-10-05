// ContactDesktop.jsx
import React from 'react';
import {
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Sparkles,
  ChevronDown,
} from 'lucide-react';

// Adjust path to your Frame.gif
import frameGif from '../../../Materiel/Frame.gif';

const inputBase =
  'w-full h-11 px-3.5 rounded-md bg-transparent text-white placeholder:text-gray-400 border border-white/15 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-400/60';

const selectBase =
  'appearance-none w-full h-11 px-3.5 pr-10 rounded-md bg-transparent text-white placeholder:text-gray-400 border border-white/15 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-400/60';

export default function ContactDesktop() {
  return (
    <section id="contact" className="hidden lg:block">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#18132B] to-[#0F0B1F] px-6 py-10">
        {/* soft purple glow */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(60rem 20rem at 70% 20%, rgba(126, 74, 255, 0.14), transparent 60%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-[340px_1fr] gap-8">
            {/* Left card */}
            <div className="rounded-3xl bg-white/[0.05] border border-white/10 p-8">
              <div className="w-16 h-16 mx-auto mb-6">
                <img
                  src={frameGif}
                  alt="Brand"
                  className="w-16 h-16 object-cover shadow-[0_8px_24px_rgba(103,76,255,0.45)]"
                  style={{
                    clipPath:
                      'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0 50%)',
                  }}
                />
              </div>

              <h3 className="text-3xl font-extrabold text-white text-center leading-snug">
                Still Have
                <br />
                A Questions?
              </h3>

              {/* Socials */}
              <div className="mt-6 flex items-center justify-center gap-3">
                <a
                  href="#"
                  className="p-2.5 rounded-full bg-white/[0.06] border border-white/10 text-white hover:bg-white/10 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                </a>
                <a
                  href="#"
                  className="p-2.5 rounded-full bg-white/[0.06] border border-white/10 text-white hover:bg-white/10 transition"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4.5 h-4.5" />
                </a>
                {/* "G" pill as Google badge */}
                <span className="p-2.5 rounded-full bg-white/[0.06] border border-white/10 text-white text-xs font-semibold w-9 h-9 grid place-content-center">
                  G
                </span>
                <a
                  href="#"
                  className="p-2.5 rounded-full bg-white/[0.06] border border-white/10 text-white hover:bg-white/10 transition"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4.5 h-4.5" />
                </a>
                <a
                  href="#"
                  className="p-2.5 rounded-full bg-white/[0.06] border border-white/10 text-white hover:bg-white/10 transition"
                  aria-label="X / Twitter"
                >
                  <Twitter className="w-4.5 h-4.5" />
                </a>
                <a
                  href="#"
                  className="p-2.5 rounded-full bg-white/[0.06] border border-white/10 text-white hover:bg-white/10 transition"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>

            {/* Right form */}
            <form
              className="rounded-3xl p-2"
              onSubmit={(e) => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(e.currentTarget));
                console.log('Contact submit:', data);
                alert('Thanks! Your message has been sent.');
              }}
            >
              <div className="grid grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Enter your name..."
                    className={inputBase}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email..."
                    className={inputBase}
                    required
                  />
                </div>

                {/* WhatsApp/Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-300 mb-2">
                    WhatsApp/Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    placeholder="Enter your number..."
                    className={inputBase}
                  />
                </div>

                {/* Services select */}
                <div className="relative">
                  <label htmlFor="service" className="block text-sm text-gray-300 mb-2">
                    Which are You Looking for Support in?
                  </label>
                  <select id="service" name="service" className={selectBase} defaultValue="">
                    <option value="" disabled>
                      Choose services
                    </option>
                    <option>Digital Marketing</option>
                    <option>Web & Software Development</option>
                    <option>Graphic Design & Logo</option>
                    <option>Multimedia & Video Editing</option>
                    <option>Creative Writing Solutions</option>
                    <option>E-Commerce Solutions</option>
                    <option>SEO</option>
                    <option>Premium Website</option>
                    <option>Special Combo</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>

                {/* Message area (full width) */}
                <div className="col-span-2">
                  <label htmlFor="message" className="block text-sm text-gray-300 mb-2">
                    How Can We Help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Message goes in here..."
                    className="w-full px-3.5 py-3 rounded-md bg-transparent text-white placeholder:text-gray-400 border border-white/15 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-400/60"
                  />
                </div>

                {/* CTA button */}
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-white bg-gradient-to-r from-[#6f47ff] to-[#9b4dff] ring-1 ring-white/20 shadow-[0_14px_40px_rgba(111,71,255,0.35)] hover:opacity-95 transition"
                  >
                    <span className="relative flex items-center justify-center w-5 h-5 rounded-full bg-[conic-gradient(at_50%_50%,#b7f5ff,#b38aff,#b7f5ff)] shadow-[0_0_12px_rgba(180,240,255,0.6)]">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                    </span>
                    <span className="font-semibold">Send Message</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}