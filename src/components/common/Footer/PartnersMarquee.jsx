import React from "react";

const PARTNERS = [
  { name: "Meta", slug: "meta", note: "Business Partner", color: "0866FF" },
  { name: "Google Marketing Platform", slug: "google", note: "Sales Partner", color: "4285F4" },
  { name: "Microsoft", slug: "microsoft", note: "Partner", color: "737373" },
  { name: "AWS", slug: "amazonaws", note: "Partner", color: "FF9900" },
  { name: "Google", slug: "google", note: "Partner", color: "DB4437" },
  { name: "Amazon", slug: "amazon", note: "SPN", color: "FF9900" },
  { name: "TikTok", slug: "tiktok", note: "Marketing Partners", color: "000000" },
];

const PartnerTile = ({ p }) => (
  <li className="flex min-w-[210px] shrink-0 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
    <img
      src={`https://cdn.simpleicons.org/${p.slug}/${p.color}`}
      alt={p.name}
      className="h-6 w-6"
      loading="lazy"
    />
    <div>
      <div className="text-sm font-medium leading-5 text-white">{p.name}</div>
      {p.note ? <div className="text-[11px] leading-4 text-gray-400">{p.note}</div> : null}
    </div>
  </li>
);

export default function PartnersMarquee({ className = "", speed = "32s" }) {
  const items = [...PARTNERS, ...PARTNERS]; // duplicate for seamless loop

  return (
    <div className={["group relative overflow-hidden", className].join(" ")}>
      <ul
        className="flex w-max items-center gap-5 will-change-transform marquee-rtl"
        style={{ animationDuration: speed }}
      >
        {items.map((p, i) => (
          <PartnerTile key={`${p.slug}-${i}`} p={p} />
        ))}
      </ul>

      <style>{`
        @keyframes marquee-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-rtl { animation: marquee-rtl var(--speed, 30s) linear infinite; }
        .group:hover .marquee-rtl { animation-play-state: paused; }
      `}</style>
    </div>
  );
}