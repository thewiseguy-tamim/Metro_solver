import React from "react";
import { ServiceCard } from "../../common/Card";
import { SERVICES } from "./data";

export default function ServicesMobile() {
  return (
    <section id="services" className="relative py-12 bg-[#0a0a1f]" aria-labelledby="services-heading-mobile">
      <div className="relative max-w-7xl mx-auto px-5">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white">Our Services</h2>
          <p className="mt-2 text-sm text-gray-400">Explore our full list of solutions, crafted for performance and growth.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SERVICES.map((item) => {
            const Icon = item.icon;
            const mobileLabel = item.featured && !item.label ? "Featured" : item.label;
            return (
              <ServiceCard
                key={item.id}
                icon={<Icon className="h-6 w-6 text-purple-400" />}
                title={item.title}
                description={item.description}
                link={item.link}
                featured={false}
                label={mobileLabel}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}