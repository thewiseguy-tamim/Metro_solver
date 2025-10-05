import React from "react";
import { ServiceCard } from "../../common/Card";
import { SERVICES } from "./data";

const SectionHeader = () => (
  <div className="mb-10 text-center">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Our Services</h2>
    <p className="mt-3 text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
      We are constantly growing or learning and improving. Enter your personal
      real estate sanctuary, where finding the ideal home is effortless and comfortable with our assistance.
    </p>
  </div>
);

export default function Services() {
  return (
    <section id="services" className="relative py-16 md:py-20 bg-[#0a0a1f]" aria-labelledby="services-heading">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-purple-600 to-fuchsia-500" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-fuchsia-500 to-purple-600" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeader />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((item) => {
            const Icon = item.icon;
            const isFeatured = !!item.featured;
            return (
              <div
                key={item.id}
                className={isFeatured ? "transition-transform duration-300 lg:scale-[1.02]" : "transition-transform duration-300"}
                style={
                  isFeatured
                    ? { boxShadow: "0 0 0 1px rgba(124,58,237,0.35), 0 20px 40px -20px rgba(124,58,237,0.45)", borderRadius: 16 }
                    : undefined
                }
              >
                <ServiceCard
                  icon={<Icon className="h-6 w-6 text-purple-400" />}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                  featured={item.featured}
                  label={item.label}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}