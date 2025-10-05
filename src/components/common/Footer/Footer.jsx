import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import PartnersMarquee from "./PartnersMarquee";
import logo from "../../../Materiel/Frame.gif";

const companyLinks = [
  { label: "Home", href: "#" },
  { label: "About us", href: "#" },
  { label: "Our Team", href: "#" },
  { label: "User Profile", href: "#" },
  { label: "White Labelling", href: "#" },
];
const aboutLinks = [
  { label: "Our Stories", href: "#" },
  { label: "Career", href: "#" },
  { label: "Send Message", href: "#" },
  { label: "Blog", href: "#" },
];
const supportLinks = [
  { label: "Help Center", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms and Conditions", href: "#" },
  { label: "Start Earning", href: "#" },
];
const servicesLinks = [
  "Digital Marketing",
  "Creative Writing Solution",
  "Web & Software Development",
  "E-Commerce Solution",
  "Graphic Design",
  "Multimedia & Video Editing",
  "Merchandise",
  "Premium Website",
  "Premium Domains",
  "Special Combo",
].map((label) => ({ label, href: "#" }));

const Sparkles = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
    <path d="M12 3l1.7 4.3 4.3 1.7-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3z" />
    <path d="M5 2l.85 1.7L7.5 4.5 5.85 5.3 5 7 4.15 5.3 2.5 4.5l1.65-.8L5 2z" opacity=".7" />
  </svg>
);

export default function FooterDesktop() {
  const onSubscribe = (e) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    if (!email) return;
    console.log("Subscribe:", email);
    e.currentTarget.reset();
  };

  return (
    <div className="relative hidden bg-[#0a0a1f] text-gray-300 lg:block">
      {/* subtle page glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(109,61,240,0.20),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-6 pb-10 lg:px-8">
        {/* Newsletter hero card */}
        <div className="pt-14">
          <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-br from-[#15183b] via-[#131733] to-[#121428] p-10 shadow-[0_40px_120px_rgba(124,58,237,0.25)]">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              {/* brand + copy (Frame.gif as logo) */}
              <a href="/" className="flex items-center gap-5" aria-label="Metro Solver home">
                <img
                  src={logo}
                  alt="Metro Solver logo"
                  width="48"
                  height="48"
                  className="h-12 w-auto shrink-0"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />
                <div>
                  <div className="text-xl font-extrabold text-white">METRO SOLVER</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-gray-400">
                    your it partner
                  </div>
                </div>
              </a>

              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold text-white">Subscribe to Our Newsletter</h3>
                <p className="mt-1 text-sm text-gray-400">Join the 25000+ client, in our company</p>
              </div>

              <form onSubmit={onSubscribe} className="w-full max-w-md md:w-auto">
                <div className="flex items-center rounded-full bg-white/10 p-1 pl-4 ring-1 ring-white/10">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full rounded-full bg-transparent px-3 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#5b35e5] to-[#9f7dff] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(124,58,237,0.45)]"
                  >
                    <Sparkles />
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Main columns */}
        <div className="mt-14 grid grid-cols-12 gap-10">
          {/* Contact block */}
          <div className="col-span-12 md:col-span-5">
            <h4 className="text-3xl font-extrabold tracking-tight text-white">
              Got Questions?
              <br />
              Call us !
            </h4>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-purple-400" />
                <p className="text-gray-400">
                  Head office: Metro Solver Limited, Grantham Road, London E12 5LX, United Kingdom
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-purple-400" />
                <a href="tel:+447936455446" className="hover:text-white">
                  +44 7936 455446
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-purple-400" />
                <a href="mailto:official@metrosolver.com" className="hover:text-white">
                  official@metrosolver.com
                </a>
              </div>
            </div>

            {/* Currency */}
            <div className="mt-8">
              <label className="mb-2 block text-sm text-gray-300">Country Currency</label>
              <div className="relative inline-flex items-center rounded-xl border border-white/20 bg-white/5 px-3 py-2">
                <span className="mr-3 rounded-md bg-white/10 px-2 py-1 text-sm">🇬🇧</span>
                <select
                  className="appearance-none bg-transparent pr-8 text-sm text-gray-300 focus:outline-none"
                  defaultValue="GBP"
                >
                  <option value="GBP">GBP - British Pound</option>
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                </select>
                <svg
                  className="pointer-events-none absolute right-3 h-4 w-4 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { title: "Company", list: companyLinks },
              { title: "About Us", list: aboutLinks },
              { title: "Support", list: supportLinks },
              { title: "Services", list: servicesLinks },
            ].map((col) => (
              <div key={col.title}>
                <h5 className="mb-4 font-semibold text-white">{col.title}</h5>
                <ul className="space-y-2 text-sm">
                  {col.list.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-gray-400 hover:text-white">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Partners carousel */}
        <div className="mt-10">
          <div className="mb-4 text-sm text-gray-400">Our Future Partners</div>
          <PartnersMarquee speed="36s" />
        </div>

        {/* Bottom row */}
        <div className="mt-10 border-t border-white/10 py-6 text-xs text-gray-500">
          <div className="flex items-center justify-between">
            <span>© Metro Solver. All Rights Reserved 2025</span>
            <span>Metro Solver Ltd incorporated in England & Wales Registration No:15792819</span>
          </div>
        </div>
      </div>
    </div>
  );
}