import React, { useEffect, useState } from "react";

// Sections
import { Hero, HeroMobile } from "../../components/sections/Hero";
import { Services, ServicesMobile } from "../../components/sections/Services";
import { Portfolio, PortfolioMobile } from "../../components/sections/Portfolio";
import { WhyChooseUs, WhyChooseUsMobile } from "../../components/sections/WhyChooseUs";
import { Stats, StatsMobile } from "../../components/sections/Stats";
import { Testimonials, TestimonialsMobile } from "../../components/sections/Testimonials";
import { HowItWorks, HowItWorksMobile } from "../../components/sections/HowItWorks";
import { Blog, BlogMobile } from "../../components/sections/Blog";
import { Podcast, PodcastMobile } from "../../components/sections/Podcast";
import { FAQ, FAQMobile } from "../../components/sections/FAQ";
import { Contact, ContactMobile } from "../../components/sections/Contact";
import MapSection from "../../components/sections/Map/MapSection";

// Hook: Detect mobile view
function useIsMobile(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isMobile;
}

// Hook: Smooth scroll for in-page anchors
function useSmoothScroll() {
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;

      const href = a.getAttribute("href");
      if (!href || href === "#") return;

      const id = href.slice(1);
      const el = document.getElementById(id) || document.querySelector(`[data-section="${id}"]`);
      if (!el) return;

      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
}

// Home page
const Home = () => {
  const isMobile = useIsMobile();
  useSmoothScroll();

  return (
    <main className="bg-[#0a0a1f] text-white">
      <section id="hero" data-section="hero">
        {isMobile ? <HeroMobile /> : <Hero />}
      </section>

      <section id="services" data-section="services">
        {isMobile ? <ServicesMobile /> : <Services />}
      </section>

      <section id="portfolio" data-section="portfolio">
        {isMobile ? <PortfolioMobile /> : <Portfolio />}
      </section>

      <section id="why-choose-us" data-section="why-choose-us">
        {isMobile ? <WhyChooseUsMobile /> : <WhyChooseUs />}
      </section>

     

      

      <section id="podcast" data-section="podcast">
        {isMobile ? <PodcastMobile /> : <Podcast />}
      </section>

      

      <section id="how-it-works" data-section="how-it-works">
        {isMobile ? <HowItWorksMobile /> : <HowItWorks />}
      </section>

       <section id="stats" data-section="stats">
        {isMobile ? <StatsMobile /> : <Stats />}
      </section>

      <section id="testimonials" data-section="testimonials">
        {isMobile ? (
          <TestimonialsMobile autoplay interval={4500} />
        ) : (
          <Testimonials autoplay interval={4500} />
        )}
      </section>

      <section id="blog" data-section="blog">
        {isMobile ? <BlogMobile /> : <Blog />}
      </section>

      <section id="contact" data-section="contact">
        
        {isMobile ? <ContactMobile /> : <Contact />}
      </section>

      <section id="faq" data-section="faq">
        {isMobile ? <FAQMobile /> : <FAQ />}
        <MapSection />
      </section>

      
    </main>
  );
};

export default Home;
