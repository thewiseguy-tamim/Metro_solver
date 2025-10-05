import React, { useState } from 'react';
import { FAQ_CATEGORIES } from './faqData';

/* Icon */
const ChevronDownIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FAQMobile = ({ categories = FAQ_CATEGORIES, defaultCategoryId = 'digital-marketing', className = '' }) => {
  const [activeCatId, setActiveCatId] = useState(defaultCategoryId);
  const activeCategory = categories.find((c) => c.id === activeCatId) || categories[0];
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className={['relative overflow-hidden bg-[#0a0a1f] lg:hidden', className].join(' ')}>
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_600px_at_20%_10%,rgba(106,57,248,0.22),transparent_60%)]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-[22rem] w-[22rem] rounded-full bg-purple-600/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 py-12">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold tracking-tight text-white">
          Got Questions?
          <br />We&apos;ve got Answers
        </h2>

        {/* Category chips (horizontal scroll) */}
        <div className="mt-6 -mx-1 overflow-x-auto pb-1">
          <div className="flex items-center gap-2 px-1">
            {categories.map((cat) => {
              const active = cat.id === activeCatId;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCatId(cat.id);
                    setOpenIdx(0);
                  }}
                  className={[
                    'inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition',
                    active
                      ? 'border-amber-400/60 bg-white/5 text-white'
                      : 'border-white/10 bg-white/[0.02] text-gray-300 hover:text-white'
                  ].join(' ')}
                >
                  <span
                    className={[
                      'h-2 w-2 rounded-full ring-1',
                      active ? 'bg-amber-400 ring-amber-400' : 'bg-transparent ring-white/50'
                    ].join(' ')}
                  />
                  <span className={active ? 'font-semibold' : 'font-medium'}>{cat.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Accordion for active category */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-white/[0.01] p-2">
          <div className="divide-y divide-white/10">
            {activeCategory?.faqs?.map((item, idx) => {
              const open = idx === openIdx;
              const panelId = `m-faq-${activeCategory.id}-${idx}`;
              return (
                <div key={panelId} className="py-3">
                  <button
                    onClick={() => setOpenIdx((p) => (p === idx ? -1 : idx))}
                    className="flex w-full items-center justify-between gap-4 text-left"
                    aria-expanded={open}
                    aria-controls={panelId}
                  >
                    <span className="text-[15px] font-semibold text-white">{item.q}</span>
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
                      <p className="pr-1 text-sm leading-7 text-gray-300">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active category label (optional) */}
        <div className="mt-3 text-xs text-gray-400">
          Category: <span className="text-gray-200">{activeCategory?.title}</span>
        </div>
      </div>
    </section>
  );
};

export default FAQMobile;