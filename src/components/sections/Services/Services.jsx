import React from 'react';
import { ServiceCard } from '../../common/Card';
import { SERVICES } from './data';

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
      {/* Soft background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-purple-600 to-fuchsia-500" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-fuchsia-500 to-purple-600" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeader />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((item) => {
            const Icon = item.icon;
            return (
              <ServiceCard
                key={item.id}
                icon={<Icon className="h-7 w-7" />}
                title={item.title}
                description={item.description}
                link={item.link}
                featured={!!item.featured}   // featured stays highlighted; others highlight on hover
                label={item.label}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}