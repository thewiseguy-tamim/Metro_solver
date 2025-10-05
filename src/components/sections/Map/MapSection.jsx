// MapSection.jsx
import React, { useEffect, useState } from "react";

/**
 * Usage:
 * import MapSection from "./MapSection";
 * <MapSection />
 *
 * Or force a layout:
 * import { MapDesktop, MapMobile } from "./MapSection";
 * <MapDesktop />
 * <MapMobile />
 */

const DEFAULT_BG =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop";

const DEFAULT_PINS = [
  { id: "ny", label: "New York, USA", x: 25, y: 34 },
  { id: "ldn", label: "London, UK", x: 48, y: 28 },
  { id: "del", label: "Delhi, India", x: 67, y: 42 },
  { id: "syd", label: "Sydney, AU", x: 88, y: 68 },
];

const DEFAULT_INFO = {
  org: "Metro solver",
  subtitle: "Global offices",
  addressTitle: "Head office",
  address:
    "Metro Solver Limited, Grantham Road, London E12 5LX, United Kingdom",
  phones: ["+44 7985 455444", "+44 7466 850205", "020 648644"],
};

export default function MapSection(props) {
  const {
    backgroundUrl = DEFAULT_BG,
    pins = DEFAULT_PINS,
    info = DEFAULT_INFO,
    breakpoint = 900,
    className = "",
    style = {},
  } = props;

  useStyleOnce(CSS_TEXT);

  const isDesktop = useMedia(`(min-width: ${breakpoint}px)`);

  return isDesktop ? (
    <MapDesktop
      backgroundUrl={backgroundUrl}
      pins={pins}
      info={info}
      className={className}
      style={style}
    />
  ) : (
    <MapMobile
      backgroundUrl={backgroundUrl}
      pins={pins}
      info={info}
      className={className}
      style={style}
    />
  );
}

// ===== Desktop layout =====
export function MapDesktop({
  backgroundUrl = DEFAULT_BG,
  pins = DEFAULT_PINS,
  info = DEFAULT_INFO,
  className = "",
  style = {},
}) {
  useStyleOnce(CSS_TEXT);
  return (
    <section className={`ms-wrap ${className}`} style={style}>
      <div className="ms-map" style={{ backgroundImage: `url(${backgroundUrl})` }}>
        {pins.map((p) => (
          <Pin key={p.id} x={p.x} y={p.y} label={p.label} />
        ))}
        <InfoCard className="ms-card ms-card--desktop" info={info} />
      </div>
    </section>
  );
}

// ===== Mobile layout =====
export function MapMobile({
  backgroundUrl = DEFAULT_BG,
  pins = DEFAULT_PINS,
  info = DEFAULT_INFO,
  className = "",
  style = {},
}) {
  useStyleOnce(CSS_TEXT);
  return (
    <section className={`ms-wrap ${className}`} style={style}>
      <div className="ms-map ms-map--mobile" style={{ backgroundImage: `url(${backgroundUrl})` }}>
        {pins.map((p) => (
          <Pin key={p.id} x={p.x} y={p.y} label={p.label} />
        ))}
        <InfoCard className="ms-card ms-card--mobile" info={info} />
      </div>
    </section>
  );
}

// ===== Pieces =====
function Pin({ x, y, label }) {
  return (
    <div
      className="ms-pin"
      style={{ left: `${x}%`, top: `${y}%` }}
      aria-label={label}
      title={label}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" className="ms-pin-svg" role="img">
        <path
          d="M12 2C8.686 2 6 4.686 6 8c0 4.25 6 12 6 12s6-7.75 6-12c0-3.314-2.686-6-6-6Zm0 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

function InfoCard({ className, info = DEFAULT_INFO }) {
  const { org, subtitle, addressTitle, address, phones } = info;
  return (
    <div className={className}>
      <div className="ms-card-header">
        <div className="ms-avatar">MS</div>
        <div className="ms-title-wrap">
          <h3 className="ms-title">{org}</h3>
          {subtitle ? <p className="ms-subtitle">{subtitle}</p> : null}
        </div>
      </div>

      <div className="ms-row">
        <IconLocation />
        <div>
          <div className="ms-row-title">{addressTitle}</div>
          <div className="ms-muted">{address}</div>
        </div>
      </div>

      {phones?.map((p, i) => (
        <a key={i} className="ms-row ms-link" href={`tel:${p.replace(/\s+/g, "")}`}>
          <IconPhone />
          <span>{p}</span>
        </a>
      ))}
    </div>
  );
}

// ===== Icons =====
function IconPhone() {
  return (
    <span className="ms-icon">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C11.3 22 2 12.7 2 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
      </svg>
    </span>
  );
}

function IconLocation() {
  return (
    <span className="ms-icon ms-icon--purple">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M12 2C8.69 2 6 4.69 6 8c0 4.25 6 12 6 12s6-7.75 6-12c0-3.31-2.69-6-6-6zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
      </svg>
    </span>
  );
}

// ===== Hooks and styles =====
function useMedia(query) {
  const getMatch = () =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : true;
  const [matches, setMatches] = useState(getMatch);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const m = window.matchMedia(query);
    const listener = (e) => setMatches(e.matches);
    if (m.addEventListener) m.addEventListener("change", listener);
    else m.addListener(listener);
    return () => {
      if (m.removeEventListener) m.removeEventListener("change", listener);
      else m.removeListener(listener);
    };
  }, [query]);

  return matches;
}

function useStyleOnce(cssText) {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const id = "ms-inline-styles";
    if (!document.getElementById(id)) {
      const el = document.createElement("style");
      el.id = id;
      el.innerHTML = cssText;
      document.head.appendChild(el);
    }
  }, [cssText]);
}

const CSS_TEXT = `
:root{
  --ms-panel:#111827;
  --ms-border:rgba(255,255,255,.06);
  --ms-text:#d7deea;
  --ms-muted:#9aa3b2;
  --ms-brand:#7b5cff;
  --ms-accent:#f6b21a;
}

*{box-sizing:border-box}
body{margin:0}

.ms-wrap{ padding: 42px 18px; }

.ms-map{
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  height: 420px;
  border-radius: 20px;
  background-color: #0a0f1c;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,.35), inset 0 0 0 1px rgba(255,255,255,.05);
}
.ms-map::before{
  content:"";
  position:absolute; inset:0;
  background:
    radial-gradient(80% 80% at 50% 50%, rgba(0,0,0,0) 40%, rgba(0,0,0,.35) 100%),
    linear-gradient(0deg, rgba(13,17,28,.45), rgba(13,17,28,.45));
  pointer-events:none;
}
.ms-map.ms-map--mobile{
  height: 520px;
  border-radius: 18px;
}

/* Pins */
.ms-pin{
  position:absolute;
  transform: translate(-50%, -100%);
  color: var(--ms-accent);
  filter: drop-shadow(0 4px 10px rgba(0,0,0,.55));
}
.ms-pin-svg{display:block}

/* Card */
.ms-card{
  position:absolute;
  width: min(92%, 380px);
  background: var(--ms-panel);
  color: var(--ms-text);
  border: 1px solid var(--ms-border);
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 18px 60px rgba(0,0,0,.45);
  backdrop-filter: blur(4px);
}
.ms-card--desktop{ right: 8%; top: 12%; }
.ms-card--mobile{ left: 50%; bottom: 12px; transform: translateX(-50%); }

.ms-card-header{
  display:flex; align-items:center; gap:12px; margin-bottom: 8px;
}
.ms-avatar{
  width:36px; height:36px; border-radius:50%;
  background: linear-gradient(145deg, #2d1b73, #6a47ff);
  color:#fff; display:flex; align-items:center; justify-content:center;
  font-weight:700; font-size:12px; letter-spacing:.4px;
}
.ms-title-wrap{line-height:1.1}
.ms-title{margin:0; font-size:16px}
.ms-subtitle{margin:2px 0 0; font-size:12px; color: var(--ms-muted)}

.ms-row{
  display:flex; align-items:flex-start; gap: 12px;
  padding:10px 8px; border-radius:10px;
}
.ms-row + .ms-row{ margin-top: 4px; }
.ms-link:hover{ background: rgba(255,255,255,.03); }

.ms-icon{
  flex:0 0 auto;
  width:28px; height:28px; border-radius:50%;
  display:flex; align-items:center; justify-content:center;
  color:#e7c06b; background: rgba(246,178,26,.15);
}
.ms-icon--purple{
  color:#cdb8ff; background: rgba(123,92,255,.18);
}

.ms-row-title{ font-weight:600; font-size:14px; margin-bottom:2px; }
.ms-muted{ color: var(--ms-muted); font-size:13px; line-height:1.35 }

@media (min-width: 1200px){
  .ms-map{ height: 460px; }
}
`;