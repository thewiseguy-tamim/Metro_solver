// src/components/common/Card/AgentCard.jsx
import React from 'react';

const AgentCard = ({ name, role, photo, badge = 'G', onClick }) => {
  const styles = {
    root: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 18,
      minHeight: 260,
      background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
      border: '1px solid rgba(255,255,255,0.08)',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 10px 30px rgba(0,0,0,0.25)',
      transition: 'transform 160ms ease, box-shadow 200ms ease',
      cursor: 'default',
    },
    media: {
      position: 'relative',
      width: '100%',
      aspectRatio: '4 / 5',
      overflow: 'hidden',
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },
    overlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: 14,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
      background: 'linear-gradient(180deg, rgba(14, 5, 25, 0.0), rgba(14, 5, 25, 0.85))',
      borderBottomLeftRadius: 18,
      borderBottomRightRadius: 18,
    },
    textWrap: { display: 'flex', flexDirection: 'column' },
    name: { color: '#fff', fontWeight: 700, fontSize: 16, letterSpacing: 0.2 },
    role: { color: '#cdbde4', fontWeight: 600, marginTop: 2, fontSize: 12.5 },
    badge: {
      width: 32, height: 32, borderRadius: 999,
      display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 800,
      background: 'conic-gradient(from 180deg, #7c3aed, #a855f7)',
      boxShadow: '0 6px 16px rgba(124,58,237,0.4)',
      flex: '0 0 auto',
    },
  };

  return (
    <div
      style={styles.root}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
      onClick={onClick}
    >
      <div style={styles.media}>
        <img src={photo} alt={`${name} portrait`} loading="lazy" style={styles.img} />
      </div>
      <div style={styles.overlay}>
        <div style={styles.textWrap}>
          <div style={styles.name}>{name}</div>
          <div style={styles.role}>{role}</div>
        </div>
        <div style={styles.badge} aria-hidden="true">{badge}</div>
      </div>
    </div>
  );
};

export default AgentCard;