import React from "react";
import { STATS } from "./data";

function useInView(ref, { root = null, rootMargin = "0px", threshold = 0.3, once = true } = {}) {
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { root, rootMargin, threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, root, rootMargin, threshold, once]);
  return inView;
}

function AnimatedCounter({ value, duration = 1400, decimals = 0, className = "" }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.4, once: true });
  const [display, setDisplay] = React.useState(0);
  const started = React.useRef(false);

  React.useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!inView || started.current) return;
    started.current = true;

    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    let rafId;
    const start = performance.now();
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(progress);
      const current = value * eased;
      setDisplay(current);
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, value, duration]);

  const formatted = decimals > 0 ? display.toFixed(decimals) : Math.round(display).toString();
  return (
    <span ref={ref} className={className}>
      {formatted}
    </span>
  );
}

function StatCard({ value, suffix = "", label }) {
  return (
    <div className="relative rounded-2xl bg-[#1a1a2e]/80 ring-1 ring-white/10 shadow-[0_10px_30px_-10px_rgba(124,58,237,0.35)] p-8 flex flex-col items-center justify-center text-center">
      <div className="absolute -top-6 right-6 h-16 w-16 bg-gradient-to-tr from-purple-600/25 to-fuchsia-500/25 blur-2xl rounded-full pointer-events-none" />
      <h3 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
        <AnimatedCounter value={value} className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-200 text-transparent bg-clip-text drop-shadow" />
        <span className="ml-1 bg-gradient-to-r from-purple-400 to-fuchsia-400 text-transparent bg-clip-text align-top">
          {suffix}
        </span>
      </h3>
      <p className="mt-3 text-sm md:text-base text-gray-400">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="relative py-14 md:py-18 bg-[#0a0a1f]" aria-labelledby="stats-heading">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-purple-600 to-fuchsia-500" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-fuchsia-500 to-purple-600" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {STATS.map((s) => (
            <StatCard key={s.id} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}