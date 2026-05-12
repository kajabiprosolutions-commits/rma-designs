/* 404 — editorial */

function NotFoundPage({ tweaks, onNav }) {
  return (
    <div data-screen-label="404" style={{ minHeight: 'calc(100vh - 72px)', background: 'var(--ink)', color: 'var(--bone)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch' }} className="nf-grid">
        {/* Big numeral panel */}
        <div className="nf-numeral" style={{ position: 'relative', borderRight: '1px solid var(--hairline-dark)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(135deg, rgba(63,168,166,0.06) 0 2px, transparent 2px 18px)' }} />
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <div className="caption-mono" style={{ color: 'var(--bone-muted)', marginBottom: 24, letterSpacing: '0.2em' }}>· Error 404</div>
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 900,
              fontSize: 'clamp(180px, 22vw, 320px)',
              letterSpacing: '-0.06em', lineHeight: 0.85,
              background: 'var(--brand-grad)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>404</div>
            <div className="caption-mono" style={{ color: 'var(--bone-muted)', marginTop: 24, letterSpacing: '0.2em' }}>· Resource not found</div>
          </div>

          {/* Crosshair frame corners */}
          {[
            { top: 24, left: 24 }, { top: 24, right: 24 },
            { bottom: 24, left: 24 }, { bottom: 24, right: 24 },
          ].map((pos, i) => (
            <div key={i} style={{ position: 'absolute', width: 16, height: 16, ...pos, borderColor: 'var(--brand-blue)' }}>
              <div style={{ position: 'absolute', inset: 0, borderTop: '1px solid var(--brand-blue)', borderLeft: '1px solid var(--brand-blue)', transform: i === 1 ? 'scaleX(-1)' : i === 2 ? 'scaleY(-1)' : i === 3 ? 'scale(-1,-1)' : 'none' }} />
            </div>
          ))}
        </div>

        {/* Copy panel */}
        <div className="nf-copy" style={{ padding: 'clamp(40px, 5vw, 80px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 640 }}>
          <h1 className="display-1" style={{ fontSize: 'clamp(40px, 5vw, 68px)', color: 'var(--bone)', lineHeight: 1 }}>
            That page is off-market.
          </h1>
          <p style={{ color: 'var(--bone-muted)', fontSize: 18, lineHeight: 1.55, marginTop: 24, maxWidth: 520 }}>
            The link you followed is dead, expired, or never existed. Three places that probably do have what you&rsquo;re looking for:
          </p>

          <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 0, borderTop: '1px solid var(--hairline-dark)' }}>
            {[
              { idx: '01', title: 'The Vault', body: 'Search 340+ scripts, frameworks, and SOPs.', target: 'library' },
              { idx: '02', title: 'My Library', body: 'Resume your last lesson or course.', target: 'dashboard' },
              { idx: '03', title: 'Programs', body: 'Compare the four membership tiers.', target: 'tier1' },
            ].map(item => (
              <a key={item.idx} href="#" onClick={(e)=>{e.preventDefault();onNav(item.target);}} style={{
                display: 'grid',
                gridTemplateColumns: '60px 1fr auto',
                alignItems: 'center',
                gap: 24,
                padding: '20px 0',
                borderBottom: '1px solid var(--hairline-dark)',
                transition: 'all .25s var(--ease)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e)=>{ e.currentTarget.style.paddingLeft = '12px'; e.currentTarget.style.background = 'rgba(44,123,182,0.06)'; }}
              onMouseLeave={(e)=>{ e.currentTarget.style.paddingLeft = '0'; e.currentTarget.style.background = 'transparent'; }}
              >
                <span className="caption-mono" style={{ color: 'var(--brand-teal)' }}>{item.idx}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--bone)' }}>{item.title}</div>
                  <div style={{ fontSize: 14, color: 'var(--bone-muted)', marginTop: 2 }}>{item.body}</div>
                </div>
                <span style={{ color: 'var(--brand-teal)', fontSize: 22 }}>→</span>
              </a>
            ))}
          </div>

          <div style={{ marginTop: 40, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="btn btn-bronze btn-arrow" onClick={()=>onNav('home')}>Back to home</button>
            <button className="btn btn-ghost-dark" onClick={()=>onNav('library')}>Search the Vault</button>
          </div>
        </div>
      </div>

      <Footer onNav={onNav} />

      <style>{`
        @media (max-width: 920px) {
          .nf-grid { grid-template-columns: 1fr !important; }
          .nf-numeral { min-height: 360px; border-right: none !important; border-bottom: 1px solid var(--hairline-dark); }
        }
      `}</style>
    </div>
  );
}

window.NotFoundPage = NotFoundPage;
