/* Course page — cinematic single-focus 'now playing' redesign */

const COURSE = {
  code: 'A-01',
  cat: 'Tier 2 · Academy',
  title: 'The Listing Presentation Mastery',
  sub: 'How to walk into a $2M+ listing appointment and walk out with a signed agreement at full commission.',
  instructor: 'Marjorie Adam',
  hours: '6h 40m',
  lessons: 24,
  modules: 4,
  progress: 38,
  current: { n: '12', t: 'The pre-frame call (revisited live)', d: '20:08', module: '03 · The Presentation' },
  modulesData: [
    {
      n: '01', title: 'The Pre-Frame', dur: '1h 20m', complete: 4, total: 4,
      lessons: [
        { id: 'l1', n: '01', t: 'Why most listings are lost in the booking call', d: '8:42', done: true },
        { id: 'l2', n: '02', t: 'The 4-question pre-frame call', d: '14:20', done: true },
        { id: 'l3', n: '03', t: 'Sending the listing packet', d: '11:05', done: true },
        { id: 'l4', n: '04', t: 'Building the comp file', d: '18:30', done: true },
      ],
    },
    {
      n: '02', title: 'The Walk-Through', dur: '1h 35m', complete: 3, total: 5,
      lessons: [
        { id: 'l5', n: '05', t: 'The handshake to seated transition', d: '9:50', done: true },
        { id: 'l6', n: '06', t: 'The 7 diagnostic walk-through questions', d: '22:15', done: true },
        { id: 'l7', n: '07', t: 'Reading the seller — interested vs shopping', d: '12:45', done: true },
        { id: 'l8', n: '08', t: 'When to anchor, when to listen', d: '18:30', done: false },
        { id: 'l9', n: '09', t: 'Live walkthrough — Marjorie on a $1.8M', d: '31:40', done: false },
      ],
    },
    {
      n: '03', title: 'The Presentation', dur: '2h 15m', complete: 2, total: 8,
      lessons: [
        { id: 'l10', n: '10', t: 'The CMA — building it, defending it', d: '24:18', done: true },
        { id: 'l11', n: '11', t: 'Anchoring price without losing the seller', d: '16:42', done: true },
        { id: 'l12', n: '12', t: 'The pre-frame call (revisited live)', d: '20:08', done: false, current: true },
        { id: 'l13', n: '13', t: 'The marketing plan', d: '14:55', done: false },
        { id: 'l14', n: '14', t: 'Photography & staging conversation', d: '11:20', done: false },
        { id: 'l15', n: '15', t: 'Pricing strategy — three positions', d: '19:34', done: false },
        { id: 'l16', n: '16', t: 'The full slide deck walkthrough', d: '28:42', done: false },
        { id: 'l17', n: '17', t: 'When to skip the deck entirely', d: '08:18', done: false },
      ],
    },
    {
      n: '04', title: 'The Close', dur: '1h 30m', complete: 0, total: 7,
      lessons: [
        { id: 'l18', n: '18', t: 'The 30-second close script', d: '07:20', done: false },
        { id: 'l19', n: '19', t: '"Can you do it for less?" — 4 responses', d: '14:08', done: false },
        { id: 'l20', n: '20', t: 'When the seller wants 6 months', d: '11:50', done: false, locked: true },
        { id: 'l21', n: '21', t: 'Multiple agent interviews', d: '13:42', done: false, locked: true },
        { id: 'l22', n: '22', t: 'Signing the agreement in person', d: '09:15', done: false, locked: true },
        { id: 'l23', n: '23', t: 'Post-signing email cadence', d: '12:30', done: false, locked: true },
        { id: 'l24', n: '24', t: 'When to walk away from a listing', d: '11:25', done: false, locked: true },
      ],
    },
  ],
};

const RECOMMENDED = [
  { code: 'A-02', cat: 'Tier 2 · Academy', t: 'Contract-to-Close OS', portrait: 'closing table', hours: '5h 20m' },
  { code: 'A-03', cat: 'Tier 2 · Academy', t: 'Objection Handling Library', portrait: 'agent at desk', hours: '4h 10m' },
  { code: 'B-01', cat: 'Tier 3 · Growth', t: 'Database & Sphere Activation', portrait: 'CRM dashboard', hours: '7h 50m' },
];

function CoursePage({ tweaks, onNav }) {
  const allLessons = COURSE.modulesData.flatMap(m => m.lessons.map(l => ({ ...l, module: m.title, mn: m.n })));
  const currentIdx = allLessons.findIndex(l => l.current);
  const upNext = allLessons.slice(currentIdx + 1, currentIdx + 5);

  return (
    <div data-screen-label="Course — Listing Presentation" style={{ background: '#070C13' }}>
      {/* CINEMATIC HERO — full-bleed player frame */}
      <section style={{ position: 'relative', minHeight: '92vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {/* Backdrop image */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <Placeholder label="hero still — marjorie at a $2M listing appointment" ratio="auto" dark style={{ width: '100%', height: '100%', border: 'none' }} />
        </div>
        {/* Vignette + gradients */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(7,12,19,0.2) 0%, rgba(7,12,19,0.85) 80%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(7,12,19,0.55) 0%, transparent 30%, transparent 50%, rgba(7,12,19,0.98) 100%)' }} />

        {/* Top breadcrumb */}
        <div className="container" style={{ position: 'relative', zIndex: 5, paddingTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--bone-muted)' }}>
            <a href="#" onClick={(e)=>{e.preventDefault();onNav('dashboard');}} style={{ color: 'var(--bone-muted)' }}>MY LIBRARY</a>
            <span>/</span>
            <a href="#" onClick={(e)=>{e.preventDefault();onNav('dashboard');}} style={{ color: 'var(--bone-muted)' }}>{COURSE.cat.toUpperCase()}</a>
            <span>/</span>
            <span style={{ color: 'var(--brand-teal)' }}>{COURSE.code}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--bone-muted)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 6, height: 6, background: 'var(--brand-teal)', borderRadius: '50%', boxShadow: '0 0 8px var(--brand-teal)' }} />
              NOW PLAYING
            </span>
          </div>
        </div>

        {/* Center play / poster */}
        <div style={{ flex: 1, position: 'relative', zIndex: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div onClick={()=>onNav('lesson')} style={{ cursor: 'pointer', textAlign: 'center' }} className="hero-play">
            <div style={{
              width: 96, height: 96, borderRadius: '50%',
              background: 'var(--brand-grad)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto',
              boxShadow: '0 0 0 12px rgba(63,168,166,0.18), 0 30px 80px -10px rgba(63,168,166,0.4)',
              transition: 'transform .3s var(--ease)',
            }}>
              <span style={{ color: 'var(--warm-white)', fontSize: 28, marginLeft: 6 }}>▶</span>
            </div>
            <div style={{ marginTop: 24, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', color: 'var(--brand-teal)' }}>RESUME · 12:34 / 20:08</div>
          </div>
        </div>

        {/* Bottom title block */}
        <div className="container" style={{ position: 'relative', zIndex: 5, paddingBottom: 56 }}>
          <div style={{ maxWidth: 880 }}>
            <div className="caption-mono" style={{ color: 'var(--brand-teal)', marginBottom: 14 }}>{COURSE.cat.toUpperCase()} · {COURSE.code}</div>
            <h1 className="display-1" style={{ fontSize: 'clamp(44px, 6.4vw, 96px)', color: 'var(--bone)', lineHeight: 0.96 }}>
              {COURSE.title}
            </h1>
            <p style={{ color: 'var(--bone-muted)', fontSize: 19, lineHeight: 1.5, marginTop: 24, maxWidth: 640 }}>
              {COURSE.sub}
            </p>
          </div>

          {/* Action bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 40, gap: 24, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-bronze btn-lg btn-arrow" onClick={()=>onNav('lesson')}>Resume — Lesson {COURSE.current.n}</button>
              <button className="btn btn-ghost-dark">+ Save</button>
              <button className="btn btn-ghost-dark">↓ Materials</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
              {[
                { l: 'Duration', v: COURSE.hours },
                { l: 'Lessons', v: COURSE.lessons },
                { l: 'Modules', v: COURSE.modules },
                { l: 'Instructor', v: COURSE.instructor },
              ].map(s => (
                <div key={s.l}>
                  <div className="caption-mono" style={{ color: 'var(--bone-muted)' }}>{s.l.toUpperCase()}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, marginTop: 4, color: 'var(--bone)' }}>{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Inline progress strip */}
          <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--hairline-dark)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em' }}>
              <span style={{ color: 'var(--bone-muted)' }}>YOUR PROGRESS</span>
              <span style={{ color: 'var(--brand-teal)' }}>{COURSE.progress}% · 9 OF 24 LESSONS</span>
            </div>
            <div style={{ height: 2, background: 'var(--hairline-dark)', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, width: `${COURSE.progress}%`, background: 'var(--brand-grad)' }} />
              <div style={{ position: 'absolute', left: `${COURSE.progress}%`, top: -4, width: 10, height: 10, borderRadius: '50%', background: 'var(--brand-teal)', boxShadow: '0 0 12px var(--brand-teal)', transform: 'translateX(-50%)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* UP NEXT REEL — horizontal cinematic strip */}
      <section style={{ background: 'var(--ink)', padding: '64px 0', borderTop: '1px solid var(--hairline-dark)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28, gap: 24 }}>
          <div>
            <Eyebrow dark>Up next</Eyebrow>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28, color: 'var(--bone)', marginTop: 8, letterSpacing: '-0.015em' }}>The next four lessons in your queue.</h3>
          </div>
          <button className="btn btn-ghost-dark btn-arrow" onClick={() => document.getElementById('outline').scrollIntoView({ behavior: 'smooth', block: 'start' })}>See full outline</button>
        </div>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="up-next-grid">
            {upNext.map((l, i) => (
              <a key={l.id} href="#" onClick={(e)=>{e.preventDefault();if(!l.locked)onNav('lesson');}} style={{
                color: 'var(--bone)', display: 'block',
                opacity: l.locked ? 0.5 : 1, cursor: l.locked ? 'not-allowed' : 'pointer',
                transition: 'transform .25s var(--ease)',
              }}
              onMouseEnter={(e) => { if (!l.locked) e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ position: 'relative', aspectRatio: '16/10', background: 'var(--slate)', border: '1px solid var(--hairline-dark)', overflow: 'hidden' }}>
                  <Placeholder label={`l${l.n} still`} ratio="auto" dark style={{ width: '100%', height: '100%', border: 'none' }} />
                  <div style={{ position: 'absolute', top: 12, left: 12, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--brand-teal)', padding: '4px 6px', background: 'rgba(7,12,19,0.85)' }}>L{l.n}</div>
                  <div style={{ position: 'absolute', bottom: 12, right: 12, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', color: 'var(--bone)', padding: '4px 6px', background: 'rgba(7,12,19,0.85)' }}>{l.d}</div>
                  {!l.locked && (
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity .25s var(--ease)' }}
                      className="play-overlay">
                      <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--brand-grad)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--warm-white)', fontSize: 14, marginLeft: 3 }}>▶</div>
                    </div>
                  )}
                </div>
                <div className="caption-mono" style={{ color: 'var(--bone-muted)', marginTop: 12 }}>{l.module.toUpperCase()}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: 'var(--bone)', marginTop: 4, lineHeight: 1.3 }}>{l.t}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* COURSE OUTLINE — minimal text-led */}
      <section id="outline" style={{ background: 'var(--warm-white)', padding: '96px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 80, alignItems: 'start' }} className="outline-grid">
          <div>
            <Eyebrow>Course outline</Eyebrow>
            <h2 className="display-2" style={{ marginTop: 12, marginBottom: 48 }}>4 modules. 24 lessons.</h2>

            {COURSE.modulesData.map((m, mi) => {
              const pct = Math.round((m.complete / m.total) * 100);
              return (
                <div key={m.n} style={{ marginBottom: 56 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 200px', gap: 24, alignItems: 'baseline', paddingBottom: 16, borderBottom: '1px solid var(--ink)' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', color: 'var(--brand-blue)' }}>M.{m.n}</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28, letterSpacing: '-0.02em', margin: 0 }}>{m.title}</h3>
                    <div style={{ textAlign: 'right' }}>
                      <span className="caption-mono">{m.complete} OF {m.total} · {m.dur}</span>
                      <div style={{ marginTop: 6, height: 2, background: 'var(--hairline-light)', position: 'relative' }}>
                        <div style={{ position: 'absolute', inset: 0, width: `${pct}%`, background: pct === 100 ? 'var(--brand-teal)' : 'var(--brand-grad)' }} />
                      </div>
                    </div>
                  </div>
                  <div>
                    {m.lessons.map(l => (
                      <a key={l.id} href="#" onClick={(e)=>{e.preventDefault();if(!l.locked)onNav('lesson');}} style={{
                        display: 'grid', gridTemplateColumns: '60px 22px 1fr auto auto',
                        gap: 16, alignItems: 'center',
                        padding: '16px 0',
                        borderBottom: '1px solid var(--hairline-light)',
                        opacity: l.locked ? 0.45 : 1,
                        cursor: l.locked ? 'not-allowed' : 'pointer',
                        background: l.current ? 'rgba(44,123,182,0.04)' : 'transparent',
                        transition: 'background .2s var(--ease)',
                      }}
                      onMouseEnter={(e) => { if (!l.locked && !l.current) e.currentTarget.style.background = 'rgba(44,123,182,0.04)'; }}
                      onMouseLeave={(e) => { if (!l.current) e.currentTarget.style.background = 'transparent'; }}
                      >
                        <span className="caption-mono" style={{ color: 'var(--ink-muted)' }}>L.{l.n}</span>
                        <span style={{
                          width: 18, height: 18,
                          border: '1px solid', borderColor: l.done ? 'var(--brand-teal)' : 'var(--hairline-light)',
                          background: l.done ? 'var(--brand-teal)' : 'transparent',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 11, color: 'var(--warm-white)',
                          borderRadius: '50%',
                        }}>{l.done ? '✓' : ''}</span>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: l.current ? 600 : 400, color: 'var(--ink)' }}>
                          {l.t}
                          {l.current && <span style={{ marginLeft: 12, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--brand-teal)', padding: '3px 6px', border: '1px solid var(--brand-teal)' }}>NOW PLAYING</span>}
                        </span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-muted)' }}>{l.d}</span>
                        <span style={{ color: l.locked ? 'var(--ink-muted)' : 'var(--brand-blue)', fontSize: 16 }}>{l.locked ? '⌘' : '→'}</span>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky sidebar — instructor + downloads */}
          <aside style={{ position: 'sticky', top: 96, display: 'flex', flexDirection: 'column', gap: 24 }} className="course-aside">
            <div style={{ border: '1px solid var(--hairline-light)', padding: 24, background: 'var(--paper)' }}>
              <Eyebrow mono>Instructor</Eyebrow>
              <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginTop: 16 }}>
                <img src="assets/marjorie-portrait.jpg" alt="" style={{ width: 56, height: 56, objectFit: 'cover', borderRadius: '50%', border: '1px solid var(--hairline-light)' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16 }}>Marjorie Adam</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-muted)' }}>Founder · 1,800+ listings</div>
                </div>
              </div>
              <p style={{ fontSize: 13, color: 'var(--ink-muted)', marginTop: 16, lineHeight: 1.55 }}>
                Active broker. Every framework in this course is one Marjorie used on a real listing in the past 90 days.
              </p>
              <button className="btn btn-outline btn-sm btn-arrow" style={{ marginTop: 16, width: '100%', justifyContent: 'space-between' }} onClick={()=>onNav('about')}>About the founders</button>
            </div>

            <div style={{ border: '1px solid var(--hairline-light)', padding: 24, background: 'var(--bone)' }}>
              <Eyebrow mono>Materials</Eyebrow>
              <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  ['Listing packet template', 'PDF · 2.4MB'],
                  ['Pre-frame call script', 'PDF · 410KB'],
                  ['CMA worksheet', 'XLSX · 88KB'],
                  ['Marjorie\'s slide deck', 'KEY · 24MB'],
                  ['Post-signing email cadence', 'PDF · 320KB'],
                ].map((f, i) => (
                  <li key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderTop: i > 0 ? '1px solid var(--hairline-light)' : 'none' }}>
                    <div>
                      <div style={{ fontSize: 13, fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--ink)' }}>{f[0]}</div>
                      <div className="caption-mono" style={{ marginTop: 2 }}>{f[1]}</div>
                    </div>
                    <a href="#" onClick={(e)=>e.preventDefault()} style={{ color: 'var(--brand-blue)', fontSize: 18 }}>↓</a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* OTHER COURSES */}
      <section className="section surface-ink" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, gap: 24, flexWrap: 'wrap' }}>
            <div>
              <Eyebrow dark>Continue your training</Eyebrow>
              <h2 className="display-2" style={{ marginTop: 12, color: 'var(--bone)' }}>Other courses you'll need.</h2>
            </div>
            <button className="btn btn-ghost-dark btn-arrow" onClick={()=>onNav('dashboard')}>View my library</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="rec-grid">
            {RECOMMENDED.map(r => (
              <a key={r.code} href="#" onClick={(e)=>{e.preventDefault();onNav('course');}} style={{ display: 'block', color: 'var(--bone)', border: '1px solid var(--hairline-dark)', transition: 'all .3s var(--ease)' }}
                onMouseEnter={(e)=>e.currentTarget.style.borderColor = 'var(--brand-teal)'}
                onMouseLeave={(e)=>e.currentTarget.style.borderColor = 'var(--hairline-dark)'}
              >
                <Placeholder label={r.portrait} ratio="16/10" dark corner={r.code} style={{ border: 'none', borderRadius: 0 }} />
                <div style={{ padding: 24 }}>
                  <span className="caption-mono" style={{ color: 'var(--brand-teal)' }}>{r.cat} · {r.hours}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--bone)', margin: '8px 0 0', letterSpacing: '-0.01em' }}>{r.t}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer onNav={onNav} />

      <style>{`
        .hero-play:hover > div:first-child { transform: scale(1.05); }
        .up-next-grid a:hover .play-overlay { opacity: 1; }
        @media (max-width: 1100px) {
          .outline-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
          .course-aside { position: static !important; }
          .up-next-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 720px) {
          .up-next-grid { grid-template-columns: 1fr !important; }
          .rec-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

window.CoursePage = CoursePage;
