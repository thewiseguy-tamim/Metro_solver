import React, { useState } from 'react';
import { FAQ_CATEGORIES } from './faqData';

/* Icon */
const ChevronDownIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FAQ = ({ categories = FAQ_CATEGORIES, defaultCategoryId = 'digital-marketing', className = '' }) => {
  const [activeCatId, setActiveCatId] = useState(defaultCategoryId);
  const activeCategory = categories.find((c) => c.id === activeCatId) || categories[0];
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className={['relative overflow-hidden bg-[#0a0a1f] hidden lg:block', className].join(' ')}>
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_800px_at_15%_10%,rgba(106,57,248,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-purple-600/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-[360px_1fr] gap-12">
          {/* Left: Heading + Categories */}
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-white">
              Got Questions?
              <br />We&apos;ve got Answers
            </h2>

            <ul className="mt-8 space-y-3">
              {categories.map((cat) => {
                const active = cat.id === activeCatId;
                return (
                  <li key={cat.id}>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveCatId(cat.id);
                        setOpenIdx(0);
                      }}
                      className={[
                        'group flex w-full items-center gap-3 rounded-md px-2 py-2 text-left',
                        active ? 'text-white' : 'text-gray-300 hover:text-white'
                      ].join(' ')}
                    >
                      <span
                        className={[
                          'mt-0.5 inline-block h-2 w-2 rounded-full ring-1 transition',
                          active
                            ? 'bg-amber-400 ring-amber-400 shadow-[0_0_0_3px_rgba(251,191,36,0.15)]'
                            : 'bg-transparent ring-white/60 group-hover:ring-white'
                        ].join(' ')}
                      />
                      <span className={active ? 'font-semibold' : 'font-medium'}>
                        {cat.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: Accordion */}
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-white/[0.01] p-3">
              <div className="divide-y divide-white/10">
                {activeCategory?.faqs?.map((item, idx) => {
                  const open = idx === openIdx;
                  const panelId = `faq-${activeCategory.id}-${idx}`;
                  return (
                    <div key={panelId} className="py-4">
                      <button
                        onClick={() => setOpenIdx((p) => (p === idx ? -1 : idx))}
                        className="flex w-full items-center justify-between gap-6 text-left"
                        aria-expanded={open}
                        aria-controls={panelId}
                      >
                        <span className="text-[15px] font-semibold text-white">
                          {item.q}
                        </span>
                        <span
                          className={[
                            'shrink-0 rounded-full p-1 transition',
                            open ? 'text-amber-400 rotate-180' : 'text-gray-400 rotate-0'
                          ].join(' ')}
                        >
                          <ChevronDownIcon className="h-5 w-5" />
                        </span>
                      </button>

                      <div
                        id={panelId}
                        className={[
                          'grid transition-all duration-300 ease-out',
                          open ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-80 mt-0'
                        ].join(' ')}
                      >
                        <div className="overflow-hidden">
                          <p className="pr-8 text-sm leading-7 text-gray-300">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-3 text-xs text-gray-400">
              Category: <span className="text-gray-200">{activeCategory?.title}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;