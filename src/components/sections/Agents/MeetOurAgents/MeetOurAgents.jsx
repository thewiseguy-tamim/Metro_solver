// src/components/sections/About/MeetOurAgents/MeetOurAgents.jsx
import React, { useMemo, useState } from 'react';
import { AgentCard } from '../../../../components/common/Card';
import { AGENT_CATEGORIES, AGENTS } from '../../../../utils/constants';

const gradientBg =
  'radial-gradient(1200px 400px at 20% -10%, rgba(124,58,237,0.15), transparent 60%), ' +
  'radial-gradient(1000px 400px at 80% -10%, rgba(168,85,247,0.12), transparent 60%), ' +
  'linear-gradient(180deg, #0a0113, #1b0d2e)';

const pillBase = {
  appearance: 'none',
  border: 0,
  background: 'rgba(255,255,255,0.06)',
  color: '#fff',
  padding: '10px 14px',
  borderRadius: 999,
  cursor: 'pointer',
  fontWeight: 600,
  fontSize: 14,
  letterSpacing: 0.2,
  transition: 'background 160ms ease, box-shadow 160ms ease',
};

const MeetOurAgents = ({ variant = 'desktop', data = AGENTS }) => {
  const [active, setActive] = useState('all');
  const [visible, setVisible] = useState(variant === 'mobile' ? 8 : 12);
  const step = variant === 'mobile' ? 8 : 12;

  const filtered = useMemo(() => {
    if (active === 'all') return data;
    return data.filter(a => (a.categories || []).includes(active));
  }, [active, data]);

  const canLoadMore = visible < filtered.length;

  // responsive columns without global CSS
  const columns = variant === 'mobile' ? 2 : 4;

  const styles = {
    section: {
      position: 'relative',
      padding: '64px 16px 48px',
      background: gradientBg,
    },
    container: { maxWidth: 1200, margin: '0 auto' },
    title: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 36,
      lineHeight: 1.1,
      fontWeight: 800,
      letterSpacing: 0.2,
      margin: '0 0 20px',
    },
    filters: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      justifyContent: 'center',
      marginBottom: 24,
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      gap: 16,
    },
    actions: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 24,
    },
    button: {
      appearance: 'none',
      border: 0,
      color: '#fff',
      fontWeight: 700,
      letterSpacing: 0.3,
      padding: '12px 24px',
      borderRadius: 999,
      cursor: 'pointer',
      background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
      boxShadow: '0 10px 28px rgba(124,58,237,0.35)',
      transition: 'transform 150ms ease, box-shadow 200ms ease, opacity 160ms ease',
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Meet Our Agents</h2>

        <div style={styles.filters} role="tablist" aria-label="Filter Agents">
          {AGENT_CATEGORIES.map((c) => {
            const isActive = active === c.key;
            return (
              <button
                key={c.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(c.key)}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.background = 'rgba(124,58,237,0.2)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                }}
                style={{
                  ...pillBase,
                  ...(isActive
                    ? {
                        background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                        boxShadow: '0 6px 18px rgba(124,58,237,0.35)',
                      }
                    : {}),
                }}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        <div style={styles.grid}>
          {filtered.slice(0, visible).map((agent) => (
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
          <div style={styles.actions}>
            <button
              style={styles.button}
              onClick={() => setVisible((v) => Math.min(v + step, filtered.length))}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MeetOurAgents;