import React from "react";
import { PortfolioCard } from "../../common/Card";
import { PORTFOLIO } from "./data";

export default function PortfolioMobile() {
  return (
    <section id="portfolio" className="relative py-12 bg-[#0a0a1f]" aria-labelledby="portfolio-heading-mobile">
      <div className="relative max-w-7xl mx-auto px-5">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white">Our Latest Works</h2>
          <p className="mt-2 text-sm text-gray-400">Dive into recent projects across web, mobile, NFT and branding.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PORTFOLIO.map((item) => (
            <PortfolioCard key={item.id} image={item.image} title={item.title} category={item.category} link={item.link} />
          ))}
        </div>
      </div>
    </section>
  );
}