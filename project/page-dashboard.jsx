/* Dashboard / My Library — enrolled + recommended courses */

const ENROLLED = [
  { id: 'c1', code: 'A-01', title: 'The Listing Presentation Mastery', cat: 'Tier 2 · Academy', mod: 'Module 3 of 8', progress: 38, lessons: 24, complete: 9, hours: '6h 40m', last: 'Lesson 12 — The pre-frame call', portrait: 'luxury home interior — cat. A' },
  { id: 'c2', code: 'A-02', title: 'Contract-to-Close: The Operating System', cat: 'Tier 2 · Academy', mod: 'Module 5 of 8', progress: 62, lessons: 18, complete: 11, hours: '4h 12m', last: 'Lesson 7 — Inspection negotiation', portrait: 'estate exterior — cat. A' },
  { id: 'c3', code: 'G-01', title: 'Producer Recruiting & Team Building', cat: 'Tier 3 · Growth', mod: 'Module 2 of 6', progress: 25, lessons: 32, complete: 8, hours: '8h 22m', last: 'Lesson 5 — The producer ladder', portrait: 'team meeting — cat. C' },
  { id: 'c4', code: 'A-03', title: 'Objection Handling — The Live Library', cat: 'Tier 2 · Academy', mod: 'Module 4 of 8', progress: 80, lessons: 16, complete: 13, hours: '3h 50m', last: 'Lesson 14 — Commission objection', portrait: 'agent at desk — cat. B' },
];

const OTHER = [
  { id: 'o1', code: 'B-01', title: 'Database & Sphere Activation', cat: 'Tier 3 · Growth', tier: 'Unlocked', lessons: 12, hours: '2h 50m', portrait: 'laptop CRM screen' },
  { id: 'o2', code: 'B-02', title: 'Video Marketing for Realtors', cat: 'Tier 3 · Growth', tier: 'Unlocked', lessons: 18, hours: '4h 10m', portrait: 'video studio setup' },
  { id: 'o3', code: 'B-03', title: 'The Boardroom Negotiation Vault', cat: 'Tier 4 · Boardroom', tier: 'Locked', lessons: 24, hours: '7h 20m', portrait: 'boardroom interior' },
  { id: 'o4', code: 'B-04', title: 'Buyer Agency in the New Era', cat: 'Tier 2 · Academy', tier: 'Unlocked', lessons: 14, hours: '3h 30m', portrait: 'home tour walkthrough' },
];

function DashboardPage({ tweaks, onNav }) {
  return (
    <div data-screen-label="Dashboard — My Library" style={{ background: 'var(--warm-white)', minHeight: 'calc(100vh - 72px)' }}>
      {/* Welcome banner */}
      <section style={{ background: 'var(--ink)', color: 'var(--bone)', padding: '56px 0 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(135deg, rgba(63,168,166,0.04) 0 2px, transparent 2px 18px)' }} />
        <div className="container" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'end' }}>
          <div>
            <div className="caption-mono" style={{ color: 'var(--brand-teal)', marginBottom: 16 }}>· Welcome back, Sarah</div>
            <h1 className="display-1" style={{ fontSize: 'clamp(40px, 5vw, 68px)', color: 'var(--bone)', lineHeight: 0.98 }}>
              Pick up at <span style={{ background: 'var(--brand-grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Lesson 12</span>.
            </h1>
            <p style={{ color: 'var(--bone-muted)', fontSize: 17, marginTop: 20, maxWidth: 520 }}>
              The pre-frame call — 4 of 6 lessons remaining in Module 3.
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-bronze btn-arrow btn-lg" onClick={()=>onNav('lesson')}>Resume lesson</button>
              <button className="btn btn-ghost-dark" onClick={()=>onNav('course')}>View course outline</button>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, paddingBottom: 8 }} className="dash-stats">
            {[
              { n: '4', l: 'Active courses' },
              { n: '41', l: 'Lessons complete' },
              { n: '23h', l: 'Watched' },
              { n: '12', l: 'Saved scripts' },
            ].map(s => (
              <div key={s.l} style={{ borderTop: '1px solid var(--hairline-dark)', paddingTop: 14 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, letterSpacing: '-0.02em' }}>{s.n}</div>
                <div className="caption-mono" style={{ color: 'var(--bone-muted)', marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrolled courses */}
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, gap: 24, flexWrap: 'wrap' }}>
            <div>
              <Eyebrow>Your enrolled courses</Eyebrow>
              <h2 className="display-2" style={{ marginTop: 12 }}>Currently in progress.</h2>
            </div>
            <div className="caption-mono">{ENROLLED.length} courses · {ENROLLED.reduce((s,c)=>s+c.complete,0)} of {ENROLLED.reduce((s,c)=>s+c.lessons,0)} lessons</div>
          </div>

          <div className="enrolled-grid">
            {ENROLLED.map((c, i) => (
              <a key={c.id} href="#" onClick={(e)=>{e.preventDefault();onNav('course');}} className="enrolled-card">
                <div className="enrolled-card-img">
                  <Placeholder label={c.portrait} ratio="16/10" corner={c.code} style={{ height: '100%', borderRadius: 0, border: 'none' }} />
                  <div className="enrolled-card-progress">
                    <div className="enrolled-card-progress-bar" style={{ width: `${c.progress}%` }} />
                  </div>
                </div>
                <div className="enrolled-card-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
                    <span className="caption-mono" style={{ color: 'var(--brand-blue)' }}>{c.cat}</span>
                    <span className="caption-mono">{c.progress}%</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, lineHeight: 1.2, letterSpacing: '-0.01em', margin: 0 }}>{c.title}</h3>
                  <div style={{ marginTop: 16, padding: '12px 0 0', borderTop: '1px solid var(--hairline-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13, color: 'var(--ink-muted)' }}>
                    <span>{c.mod}</span>
                    <span>{c.complete}/{c.lessons} lessons</span>
                  </div>
                  <div style={{ marginTop: 14, fontSize: 13, color: 'var(--ink-text)' }}>
                    <span className="caption-mono" style={{ color: 'var(--ink-muted)' }}>NEXT — </span>
                    {c.last}
                  </div>
                </div>
                <div className="enrolled-card-cta">Resume <span style={{ marginLeft: 8 }}>→</span></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Other courses */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: 96 }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, gap: 24, flexWrap: 'wrap', borderTop: '1px solid var(--hairline-light)', paddingTop: 64 }}>
            <div>
              <Eyebrow>Recommended for you</Eyebrow>
              <h2 className="display-2" style={{ marginTop: 12 }}>Other courses in your tier.</h2>
            </div>
            <button className="btn btn-outline btn-arrow" onClick={()=>onNav('library')}>Browse the full Vault</button>
          </div>

          <div className="other-grid">
            {OTHER.map(c => (
              <a key={c.id} href="#" onClick={(e)=>{e.preventDefault();onNav('course');}} className="other-card">
                <div style={{ position: 'relative' }}>
                  <Placeholder label={c.portrait} ratio="4/3" corner={c.code} style={{ borderRadius: 0, border: 'none' }} />
                  {c.tier === 'Locked' && (
                    <div style={{ position: 'absolute', top: 12, right: 12, background: 'var(--ink)', color: 'var(--bone)', padding: '4px 10px', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                      ⌘ Locked
                    </div>
                  )}
                </div>
                <div style={{ padding: '20px 0' }}>
                  <span className="caption-mono" style={{ color: c.tier === 'Locked' ? 'var(--ink-muted)' : 'var(--brand-blue)' }}>{c.cat}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, lineHeight: 1.25, letterSpacing: '-0.01em', margin: '8px 0 0' }}>{c.title}</h3>
                  <div style={{ marginTop: 14, fontSize: 12, color: 'var(--ink-muted)', display: 'flex', justifyContent: 'space-between' }}>
                    <span>{c.lessons} lessons · {c.hours}</span>
                    <span>{c.tier === 'Locked' ? 'Upgrade →' : 'Open →'}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer onNav={onNav} />

      <style>{`
        .enrolled-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
        .enrolled-card {
          display: grid;
          grid-template-columns: 280px 1fr auto;
          background: var(--paper);
          border: 1px solid var(--hairline-light);
          transition: all .3s var(--ease);
          overflow: hidden;
        }
        .enrolled-card:hover {
          border-color: var(--ink);
          transform: translateY(-2px);
          box-shadow: 0 12px 32px -16px rgba(14,22,32,0.18);
        }
        .enrolled-card-img { position: relative; height: 100%; min-height: 220px; }
        .enrolled-card-img > div { width: 100% !important; height: 100% !important; aspect-ratio: auto !important; }
        .enrolled-card-progress {
          position: absolute; left: 0; right: 0; bottom: 0;
          height: 3px; background: rgba(14,22,32,0.2);
        }
        .enrolled-card-progress-bar { height: 100%; background: var(--brand-grad); }
        .enrolled-card-body { padding: 24px; min-width: 0; }
        .enrolled-card-cta {
          align-self: stretch;
          display: flex; align-items: center;
          padding: 0 28px;
          font-family: var(--font-display);
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.16em; text-transform: uppercase;
          background: var(--bone);
          border-left: 1px solid var(--hairline-light);
          color: var(--ink);
          transition: all .3s var(--ease);
        }
        .enrolled-card:hover .enrolled-card-cta { background: var(--ink); color: var(--bone); }

        .other-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
        }
        .other-card {
          display: block;
          color: var(--ink-text);
          transition: transform .25s var(--ease);
        }
        .other-card:hover { transform: translateY(-3px); }

        @media (max-width: 1100px) {
          .enrolled-card { grid-template-columns: 220px 1fr; }
          .enrolled-card-cta { display: none; }
          .other-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 720px) {
          .enrolled-grid { grid-template-columns: 1fr; }
          .enrolled-card { grid-template-columns: 1fr; }
          .enrolled-card-img { min-height: 180px; }
          .other-grid { grid-template-columns: 1fr 1fr; gap: 20px; }
          .dash-stats { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}

window.DashboardPage = DashboardPage;
