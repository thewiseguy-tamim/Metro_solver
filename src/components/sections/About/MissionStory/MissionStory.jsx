import React from 'react';

const TextCard = ({ title, text, actionLabel, onAction }) => {
  const styles = {
    card: {
      borderRadius: 20,
      background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03))',
      border: '1px solid rgba(255,255,255,0.08)',
      padding: 18,
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 10px 30px rgba(0,0,0,0.25)'
    },
    title: {
      color: '#fff',
      fontWeight: 800,
      letterSpacing: 0.2,
      fontSize: 18,
      margin: '4px 0 8px'
    },
    text: {
      color: '#d5c9ec',
      fontSize: 14.5,
      lineHeight: 1.6,
      margin: 0
    },
    action: {
      marginTop: 8,
      color: '#c3a7ff',
      fontWeight: 700,
      fontSize: 13,
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.card}>
      <div style={styles.title}>{title}</div>
      <p style={styles.text}>{text}</p>
      {actionLabel && (
        <button
          onClick={onAction}
          style={{
            ...styles.action,
            appearance: 'none',
            background: 'transparent',
            border: 0,
            padding: 0
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          {actionLabel} →
        </button>
      )}
    </div>
  );
};

const ImageCard = ({ src, alt = 'People working' }) => {
  const styles = {
    card: {
      position: 'relative',
      borderRadius: 20,
      overflow: 'hidden',
      background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03))',
      border: '1px solid rgba(255,255,255,0.08)',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 16px 45px rgba(0,0,0,0.4)'
    },
    decor: {
      position: 'absolute',
      left: -40,
      bottom: -40,
      width: 220,
      height: 220,
      borderRadius: 40,
      background: 'radial-gradient(80px 60px at 60% 40%, rgba(168,85,247,0.35), transparent 60%)'
    },
    img: { width: '100%', height: 280, objectFit: 'cover', display: 'block' }
  };

  return (
    <div style={styles.card}>
      <div style={styles.decor} aria-hidden="true" />
      <img src={src} alt={alt} style={styles.img} loading="lazy" />
    </div>
  );
};

const MissionStory = ({
  variant = 'desktop',
  imgTopLeft = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
  imgBottomRight = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
  onReadMore = () => {}
}) => {
  const isMobile = variant === 'mobile';

  const sectionBg =
    'radial-gradient(1200px 400px at 20% -10%, rgba(124,58,237,0.12), transparent 60%), ' +
    'radial-gradient(900px 400px at 80% 110%, rgba(168,85,247,0.10), transparent 60%), ' +
    'linear-gradient(180deg, #0a0113, #1b0d2e)';

  const styles = {
    section: {
      position: 'relative',
      padding: isMobile ? '40px 16px' : '64px 16px',
      background: sectionBg
    },
    container: { maxWidth: 1200, margin: '0 auto' },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? 16 : 24
    },
    stack: { display: 'grid', gap: 16 }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Left column */}
          <div style={styles.stack}>
            <ImageCard src={imgTopLeft} />
            {!isMobile && (
              <>
                <TextCard
                  title="Global Reach and Vision"
                  text="Today, Metro Solver is striving to extend its services worldwide, aiming to make digital needs from logo creation and branding to comprehensive marketing solutions. The team has assisted more than 60 companies across various sectors, ensuring continuous improvement in quality and customer satisfaction."
                />
                <TextCard
                  title="Conclusion"
                  text="Metro Solver’s journey from a simple idea to thriving digital services firm exemplifies resilience, innovation, dedication and leadership in solving customer problems. The company continues to evolve, driven by a steadfast mission to provide exceptional digital solutions globally."
                />
              </>
            )}
          </div>

          {/* Right column */}
          <div style={styles.stack}>
            <TextCard
              title="Metro Solver Mission"
              text="Our mission is to cover all your digital needs by providing innovative, comprehensive, and affordable solutions that meet your specific requirements—and exceed your expectations. We are dedicated to delivering high-quality services that empower businesses to succeed in a competitive digital landscape."
            />
            <TextCard
              title="Metro Solver Story"
              text="In July 2023, a vision took shape that would redefine the landscape of digital services. This vision came from Nayium Kazmi, the founder and director of Metro Solver, who faced a significant challenge while trying to transform her business into an IT firm. The overarching idea was to provide what was not only extraordinary, but also lacked completeness—an all-in-one solution."
              actionLabel="Read More"
              onAction={onReadMore}
            />
            {isMobile ? (
              <>
                <TextCard
                  title="Global Reach and Vision"
                  text="Today, Metro Solver is striving to extend its services worldwide, aiming to make digital needs from logo creation and branding to comprehensive marketing solutions. The team has assisted more than 60 companies across various sectors, ensuring continuous improvement in quality and customer satisfaction."
                />
                <TextCard
                  title="Conclusion"
                  text="Metro Solver’s journey from a simple idea to thriving digital services firm exemplifies resilience, innovation, dedication and leadership in solving customer problems. The company continues to evolve, driven by a steadfast mission to provide exceptional digital solutions globally."
                />
                <ImageCard src={imgBottomRight} />
              </>
            ) : (
              <ImageCard src={imgBottomRight} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStory;