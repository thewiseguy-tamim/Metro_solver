import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

// Layout components
import { Navbar, NavbarMobile } from "./components/common/Navbar";
import { Footer, FooterMobile } from "./components/common/Footer";

// Pages
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs"; // <-- already imported

import { BREAKPOINTS } from "./utils/constants";

// Detect mobile by breakpoint
function useIsMobile(breakpoint = BREAKPOINTS.DESKTOP_MIN) {
  const getInitial = () => (typeof window !== "undefined" ? window.innerWidth < breakpoint : false);
  const [isMobile, setIsMobile] = React.useState(getInitial);

  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isMobile;
}

// Smoothly scroll to top or to an anchor on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}

// Accessible skip link
function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:left-4 focus:top-4 focus:px-4 focus:py-2 focus:rounded-md focus:bg-purple-700 focus:text-white"
    >
      Skip to content
    </a>
  );
}

export default function App() {
  const isMobile = useIsMobile();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <SkipToContent />

      <div className="min-h-screen bg-[#0a0a1f] text-white antialiased overflow-x-hidden">
        {isMobile ? <NavbarMobile /> : <Navbar />}

        <main id="main-content" className="pt-[72px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} /> {/* Added AboutUs route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {isMobile ? <FooterMobile /> : <Footer />}
      </div>
    </BrowserRouter>
  );
}
