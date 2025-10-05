import React, { useEffect, useRef, useState } from "react";

const PlayIcon = ({ className = "h-8 w-8" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="11" fill="url(#g)" opacity="0.08" />
    <path d="M9.5 8.5v7l6-3.5-6-3.5z" fill="white" />
    <defs>
      <linearGradient id="g" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6D3DF0" />
        <stop offset="1" stopColor="#9F7DFF" />
      </linearGradient>
    </defs>
  </svg>
);

function VideoCard({
  srcMp4 = "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  srcWebm = "",
  poster = "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=1200",
  className = "",
}) {
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
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
  };

  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl border border-white/10",
        "shadow-[0_30px_100px_rgba(124,58,237,0.35)]",
        "bg-[#0f1126]",
        className,
      ].join(" ")}
    >
      {/* subtle inner gradient frame */}
      <span className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent" />

      <div className="relative aspect-[16/9]">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          poster={poster}
          preload="metadata"
          playsInline
          controls={isPlaying}
        >
          {srcWebm ? <source src={srcWebm} type="video/webm" /> : null}
          <source src={srcMp4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play overlay */}
        {!isPlaying && (
          <button
            type="button"
            aria-label="Play podcast"
            onClick={togglePlay}
            className="group absolute inset-0 z-10 grid place-items-center"
          >
            {/* dark veil for readability */}
            <span className="absolute inset-0 bg-black/15" />
            <span
              className={[
                "relative inline-grid place-items-center rounded-full",
                "h-16 w-16 sm:h-18 sm:w-18",
                "bg-gradient-to-tr from-[#5b35e5] to-[#9f7dff]",
                "shadow-[0_0_40px_rgba(124,58,237,0.55)]",
              ].join(" ")}
            >
              <PlayIcon className="h-7 w-7" />
              {/* pulse ring */}
              <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-white/20 animate-ping" />
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

export default function PodcastDesktop() {
  return (
    <section id="podcast" className="relative hidden overflow-hidden bg-[#0a0a1f] lg:block">
      {/* glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1100px_520px_at_50%_8%,rgba(109,61,240,0.22),transparent_60%)]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[22rem] w-[22rem] rounded-full bg-purple-500/20 blur-3xl" />

      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <VideoCard />
      </div>
    </section>
  );
}