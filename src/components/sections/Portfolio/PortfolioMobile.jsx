import React from "react";
import { PortfolioCard } from "../../common/Card";
import { PORTFOLIO } from "./data";

export default function PortfolioMobile() {
  return (
    <section
      id="portfolio"
      className="relative py-14 bg-[#0a0a1f] lg:hidden"
      aria-labelledby="portfolio-heading-mobile"
      data-section="portfolio"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-28 -left-28 h-72 w-72 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-purple-600 to-fuchsia-500" />
        <div className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-fuchsia-500 to-purple-600" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="mb-8 text-center">
          <h2 id="portfolio-heading-mobile" className="text-3xl font-extrabold text-white">
            Our Latest Works
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Dive into recent projects across web, mobile, NFT and branding.
          </p>
        </div>

        {/* Important: give each card a sized, relative wrapper */}
        <div role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PORTFOLIO.map((item) => (
            <div
              role="listitem"
              key={item.id}
              className="relative h-[220px] sm:h-[240px] md:h-[260px]"
            >
              <div className="absolute inset-0">
                <PortfolioCard
                  image={item.image}
                  title={item.title}
                  category={item.category}
                  link={item.link}
                  featured={item.featured}
                  label={item.label}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}