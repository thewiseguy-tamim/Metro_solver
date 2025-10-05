import React, { useEffect, useRef, useState } from "react";

const PlayIcon = ({ className = "h-7 w-7" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="11" fill="url(#g2)" opacity="0.08" />
    <path d="M9.5 8.5v7l6-3.5-6-3.5z" fill="white" />
    <defs>
      <linearGradient id="g2" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6D3DF0" />
        <stop offset="1" stopColor="#9F7DFF" />
      </linearGradient>
    </defs>
  </svg>
);

export default function PodcastMobile() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("ended", onEnded);
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  };

  return (
    <section className="relative overflow-hidden bg-[#0a0a1f] lg:hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_420px_at_50%_6%,rgba(109,61,240,0.22),transparent_60%)]" />

      <div className="mx-auto max-w-2xl px-5 py-12">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0f1126] shadow-[0_24px_80px_rgba(124,58,237,0.35)]">
          <span className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent" />
          <div className="relative aspect-[16/9]">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              poster="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1200"
              preload="metadata"
              playsInline
              controls={isPlaying}
            >
              <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!isPlaying && (
              <button
                type="button"
                aria-label="Play podcast"
                onClick={togglePlay}
                className="group absolute inset-0 z-10 grid place-items-center"
              >
                <span className="absolute inset-0 bg-black/15" />
                <span className="relative inline-grid h-14 w-14 place-items-center rounded-full bg-gradient-to-tr from-[#5b35e5] to-[#9f7dff] shadow-[0_0_36px_rgba(124,58,237,0.5)]">
                  <PlayIcon />
                  <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-white/20 animate-ping" />
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}