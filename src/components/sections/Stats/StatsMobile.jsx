import React from "react";
import { STATS } from "./data";

function StatItem({ value, suffix = "", label }) {
  return (
    <div className="rounded-2xl bg-[#1a1a2e]/80 ring-1 ring-white/10 p-6 shadow-[0_10px_25px_-12px_rgba(124,58,237,0.35)]">
      <div className="text-4xl font-extrabold">
        <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-200 text-transparent bg-clip-text">
          {Math.round(value)}
        </span>
        <span className="ml-1 bg-gradient-to-r from-purple-400 to-fuchsia-400 text-transparent bg-clip-text">{suffix}</span>
      </div>
      <p className="mt-2 text-gray-400">{label}</p>
    </div>
  );
}

export default function StatsMobile() {
  return (
    <section id="stats" className="relative py-12 bg-[#0a0a1f]">
      <div className="relative max-w-7xl mx-auto px-5">
        <div className="grid gap-4">
          {STATS.map((s) => (
            <StatItem key={s.id} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}