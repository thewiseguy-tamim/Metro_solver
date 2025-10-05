// components/sections/Agents/Agents.jsx
import React, { useMemo, useState } from 'react';
import { AgentCard } from '../../common/Card';
import { AGENT_CATEGORIES, AGENTS } from '../../../utils/constants';
import './agents.css';

const Agents = ({ variant = 'desktop', data = AGENTS }) => {
  const [active, setActive] = useState('all');
  const [visible, setVisible] = useState(variant === 'mobile' ? 8 : 12);
  const step = variant === 'mobile' ? 8 : 12;

  const categories = AGENT_CATEGORIES;

  const filtered = useMemo(() => {
    if (active === 'all') return data;
    return data.filter(a => (a.categories || []).includes(active));
  }, [active, data]);

  const canLoadMore = visible < filtered.length;

  return (
    <section className={`agents-section agents-section--${variant}`}>
      <div className="agents__container">
        <h2 className="agents__title">Meet Our Agents</h2>

        <div className="agents__filters" role="tablist" aria-label="Filter Agents">
          {categories.map(c => (
            <button
              key={c.key}
              role="tab"
              aria-selected={active === c.key}
              className={`agents__pill ${active === c.key ? 'is-active' : ''}`}
              onClick={() => setActive(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="agents__grid">
          {filtered.slice(0, visible).map(agent => (
            <AgentCard
              key={agent.id}
              name={agent.name}
              role={agent.role}
              photo={agent.photo}
              badge="G"
            />
          ))}
        </div>

        {canLoadMore && (
          <div className="agents__actions">
            <button
              className="agents__viewMore"
              onClick={() => setVisible(v => Math.min(v + step, filtered.length))}
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Agents;