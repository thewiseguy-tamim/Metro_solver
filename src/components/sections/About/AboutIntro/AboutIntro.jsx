import React from 'react';

const AboutIntro = ({
  variant = 'desktop',
  title = 'Unveiling the Essence Of Our Metro Solver',
  paragraph1 = `Welcome to Metro Solver, where creativity meets strategy, and brands come to life. We’re not just a branding agency; we’re architects of identity, storytellers of success, and partners in your vision. Metro Solver is a hub of innovative minds, passionate about turning bold ideas into captivating brand experiences.`,
  paragraph2 = `Our overarching goal is to redefine industry standards by providing a dynamic and adaptive HR and CRM SaaS platform. We aim to empower businesses of all sizes to optimize operations, foster employee growth, and cultivate enduring customer relationships.`,
  ctaText = 'Book Now',
  onCtaClick = () => {},
  imageUrl = 'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=1400&q=80',
  avatarUrl = 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=120&q=80',
  avatarName = 'Metro Solver'
}) => {
  const isMobile = variant === 'mobile';

  const sectionBg =
    'radial-gradient(1200px 400px at 20% -10%, rgba(124,58,237,0.15), transparent 60%), ' +
    'radial-gradient(1000px 400px at 80% -10%, rgba(168,85,247,0.12), transparent 60%), ' +
    'linear-gradient(180deg, #0a0113, #1b0d2e)';

  const styles = {
    section: {
      position: 'relative',
      padding: isMobile ? '48px 16px' : '72px 16px',
      background: sectionBg
    },
    container: { maxWidth: 1200, margin: '0 auto' },
    row: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? 20 : 36,
      flexDirection: isMobile ? 'column' : 'row'
    },
    colText: {
      flex: 1,
      maxWidth: isMobile ? '100%' : '56%',
    },
    colMedia: {
      flex: 1,
      maxWidth: isMobile ? '100%' : '44%',
      width: '100%'
    },
    title: {
      color: '#fff',
      fontWeight: 800,
      letterSpacing: 0.2,
      lineHeight: 1.1,
      fontSize: isMobile ? 28 : 44,
      margin: '0 0 14px'
    },
    p: {
      color: '#d5c9ec',
      fontSize: isMobile ? 14.5 : 16.5,
      lineHeight: 1.65,
      margin: '10px 0'
    },
    chip: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.08)',
      padding: '6px 10px',
      borderRadius: 999,
      marginTop: 10
    },
    chipImg: {
      width: 20,
      height: 20,
      borderRadius: 999,
      objectFit: 'cover'
    },
    chipText: { color: '#fff', fontWeight: 700, fontSize: 12.5 },
    ctaWrap: { marginTop: 18, display: 'flex', gap: 12 },
    cta: {
      appearance: 'none',
      border: 0,
      color: '#fff',
      fontWeight: 700,
      letterSpacing: 0.3,
      padding: '12px 20px',
      borderRadius: 999,
      cursor: 'pointer',
      background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
      boxShadow: '0 10px 28px rgba(124,58,237,0.35)',
      transition: 'transform 150ms ease, box-shadow 200ms ease'
    },
    mediaCard: {
      position: 'relative',
      width: '100%',
      borderRadius: 26,
      overflow: 'hidden',
      background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03))',
      border: '1px solid rgba(255,255,255,0.08)',
      boxShadow: '0 16px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)'
    },
    mediaDecor: {
      position: 'absolute',
      right: -30,
      top: -30,
      width: 160,
      height: 160,
      borderRadius: 30,
      background: 'radial-gradient(80px 60px at 30% 30%, rgba(124,58,237,0.35), transparent 60%)'
    },
    media: {
      width: '100%',
      height: isMobile ? 240 : 380,
      objectFit: 'cover',
      display: 'block'
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.row}>
          <div style={styles.colText}>
            <h1 style={styles.title}>{title}</h1>
            <p style={styles.p}>{paragraph1}</p>
            <p style={styles.p}>{paragraph2}</p>

            <div style={styles.chip}>
              <img src={avatarUrl} alt={`${avatarName} avatar`} style={styles.chipImg} />
              <span style={styles.chipText}>{avatarName}</span>
            </div>

            <div style={styles.ctaWrap}>
              <button
                style={styles.cta}
                onClick={onCtaClick}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                {ctaText}
              </button>
            </div>
          </div>

          <div style={styles.colMedia}>
            <div style={styles.mediaCard}>
              <div style={styles.mediaDecor} aria-hidden="true" />
              <img src={imageUrl} alt="Team collaboration" style={styles.media} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;