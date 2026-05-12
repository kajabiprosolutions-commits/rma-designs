/* Lesson page — watch view with sidebar lesson list */

const LESSON = {
  code: 'A-01 · L12',
  module: 'Module 03 — The Presentation',
  title: 'The pre-frame call (revisited live)',
  dur: '20:08',
  desc: `In this lesson we revisit the pre-frame call from Module 1, but this time with Marjorie running it on a real seller — a referral lead for a $1.8M waterfront listing. You'll watch the call live, then we'll deconstruct the four moments where the appointment was actually won: the credential drop, the diagnostic question, the home-visit positioning, and the packet send.`,
  takeaways: [
    'The 4-question diagnostic that surfaces the seller\'s real motivation in under 90 seconds',
    'How to position the home visit so the seller treats it as a working session, not a sales pitch',
    'The exact wording for sending the listing packet without sounding scripted',
    'When to skip the pre-frame entirely (yes, sometimes)',
  ],
  downloads: [
    { name: 'Pre-frame call script (annotated)', size: '2.4 MB', type: 'PDF' },
    { name: 'Diagnostic question framework', size: '880 KB', type: 'PDF' },
    { name: 'Listing packet template — fillable', size: '4.1 MB', type: 'KEY' },
    { name: 'Audio-only version of this lesson', size: '18.6 MB', type: 'MP3' },
  ],
};

const LESSON_LIST = [
  { mod: 'M03 — The Presentation', items: [
    { n: '10', t: 'The CMA — building it, defending it', d: '24:18', done: true },
    { n: '11', t: 'Anchoring price without losing the seller', d: '16:42', done: true },
    { n: '12', t: 'The pre-frame call (revisited live)', d: '20:08', current: true },
    { n: '13', t: 'The marketing plan — what sellers care about', d: '14:55' },
    { n: '14', t: 'Photography & staging conversation', d: '11:20' },
    { n: '15', t: 'Pricing strategy — three positions', d: '19:34' },
    { n: '16', t: 'The full slide deck walkthrough', d: '28:42' },
    { n: '17', t: 'When to skip the deck entirely', d: '08:18' },
  ]},
  { mod: 'M04 — The Close', items: [
    { n: '18', t: 'The 30-second close script', d: '07:20', locked: false },
    { n: '19', t: '"Can you do it for less?" — 4 responses', d: '14:08', locked: false },
    { n: '20', t: 'When the seller wants 6 months', d: '11:50', locked: true },
    { n: '21', t: 'Multiple agent interviews', d: '13:42', locked: true },
  ]},
];

function LessonPage({ tweaks, onNav }) {
  const [tab, setTab] = useState('description');
  const [completed, setCompleted] = useState(false);

  return (
    <div data-screen-label="Lesson 12 — Pre-frame call" style={{ background: 'var(--ink)', minHeight: 'calc(100vh - 72px)', color: 'var(--bone)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', minHeight: 'calc(100vh - 72px)' }} className="lesson-grid">

        {/* Main column */}
        <div style={{ borderRight: '1px solid var(--hairline-dark)' }}>
          {/* Breadcrumb */}
          <div style={{ padding: '20px 40px', borderBottom: '1px solid var(--hairline-dark)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em' }}>
              <a href="#" onClick={(e)=>{e.preventDefault();onNav('dashboard');}} style={{ color: 'var(--bone-muted)' }}>MY LIBRARY</a>
              <span style={{ color: 'var(--ink-muted)' }}>/</span>
              <a href="#" onClick={(e)=>{e.preventDefault();onNav('course');}} style={{ color: 'var(--bone-muted)' }}>LISTING MASTERY</a>
              <span style={{ color: 'var(--ink-muted)' }}>/</span>
              <span style={{ color: 'var(--brand-teal)' }}>{LESSON.code}</span>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn btn-ghost-dark btn-sm" onClick={()=>onNav('lesson')} style={{ padding: '8px 14px' }}>← Prev</button>
              <button className="btn btn-bronze btn-sm" onClick={()=>onNav('lesson')} style={{ padding: '8px 14px' }}>Next →</button>
            </div>
          </div>

          {/* Player */}
          <div style={{ padding: 40 }}>
            <div style={{ position: 'relative', background: 'var(--slate)', border: '1px solid var(--hairline-dark)' }}>
              <Placeholder label="lesson player — marjorie at desk" ratio="16/9" dark style={{ borderRadius: 0, border: 'none' }} />
              {/* Play button */}
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                  width: 96, height: 96, borderRadius: '50%',
                  background: 'var(--brand-grad)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 0 0 12px rgba(63,168,166,0.12)',
                  cursor: 'pointer',
                }}>
                  <span style={{ color: 'var(--warm-white)', fontSize: 28, marginLeft: 6 }}>▶</span>
                </div>
              </div>
              {/* Top labels */}
              <div style={{ position: 'absolute', top: 16, left: 16, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--bone)', background: 'rgba(14,22,32,0.7)', padding: '4px 8px' }}>
                LESSON 12 / 24
              </div>
              <div style={{ position: 'absolute', top: 16, right: 16, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--bone)', background: 'rgba(14,22,32,0.7)', padding: '4px 8px' }}>
                LIVE CALL · {LESSON.dur}
              </div>
              {/* Bottom controls bar */}
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '20px 24px 16px', background: 'linear-gradient(to top, rgba(14,22,32,0.95), transparent)' }}>
                <div style={{ height: 3, background: 'rgba(245,241,234,0.2)', position: 'relative', marginBottom: 14 }}>
                  <div style={{ position: 'absolute', inset: 0, width: '12%', background: 'var(--brand-grad)' }} />
                  <div style={{ position: 'absolute', left: '12%', top: '50%', transform: 'translate(-50%,-50%)', width: 12, height: 12, background: 'var(--brand-teal)', borderRadius: '50%' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bone-muted)' }}>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <span style={{ color: 'var(--bone)' }}>2:24 / {LESSON.dur}</span>
                    <span>1.0×</span>
                    <span>CC</span>
                  </div>
                  <div style={{ display: 'flex', gap: 16 }}>
                    <span>⌘ Notes</span>
                    <span>⤓ Download</span>
                    <span>⛶</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Title block */}
            <div style={{ marginTop: 32 }}>
              <div className="caption-mono" style={{ color: 'var(--brand-teal)', marginBottom: 12 }}>· {LESSON.module}</div>
              <h1 className="display-2" style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: 'var(--bone)' }}>{LESSON.title}</h1>

              <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button
                  className={completed ? 'btn btn-bronze' : 'btn btn-outline'}
                  onClick={() => setCompleted(!completed)}
                  style={completed ? {} : { borderColor: 'var(--brand-teal)', color: 'var(--brand-teal)' }}
                >
                  {completed ? '✓ Marked complete' : 'Mark as complete'}
                </button>
                <button className="btn btn-ghost-dark">⌘ Add to notes</button>
                <button className="btn btn-ghost-dark">⇡ Bookmark</button>
              </div>
            </div>

            {/* Tabs */}
            <div style={{ marginTop: 56, borderBottom: '1px solid var(--hairline-dark)', display: 'flex', gap: 4 }}>
              {[
                { id: 'description', label: 'Description' },
                { id: 'downloads', label: `Downloads (${LESSON.downloads.length})` },
                { id: 'transcript', label: 'Transcript' },
                { id: 'comments', label: 'Discussion (24)' },
              ].map(t => (
                <button key={t.id} onClick={() => setTab(t.id)} style={{
                  padding: '14px 20px',
                  fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 12,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: tab === t.id ? 'var(--bone)' : 'var(--bone-muted)',
                  borderBottom: tab === t.id ? '2px solid var(--brand-teal)' : '2px solid transparent',
                  marginBottom: -1,
                  transition: 'all .2s var(--ease)',
                }}>{t.label}</button>
              ))}
            </div>

            {/* Tab content */}
            <div style={{ padding: '40px 0 80px' }}>
              {tab === 'description' && (
                <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56 }} className="lesson-tab-grid">
                  <div>
                    <Eyebrow mono dark>About this lesson</Eyebrow>
                    <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--bone)', marginTop: 16 }}>
                      {LESSON.desc}
                    </p>

                    <Eyebrow mono dark>What you&rsquo;ll take away</Eyebrow>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
                      {LESSON.takeaways.map((t, i) => (
                        <li key={i} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 12, alignItems: 'baseline', color: 'var(--bone)', fontSize: 15, lineHeight: 1.5 }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--brand-teal)', letterSpacing: '0.1em' }}>0{i+1}</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <aside>
                    <div style={{ border: '1px solid var(--hairline-dark)', padding: 24 }}>
                      <Eyebrow mono dark>Instructor</Eyebrow>
                      <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginTop: 16 }}>
                        <img src="assets/marjorie-portrait.jpg" alt="" style={{ width: 56, height: 56, objectFit: 'cover', borderRadius: '50%', border: '1px solid var(--hairline-dark)' }} />
                        <div>
                          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--bone)' }}>Marjorie Adam</div>
                          <div style={{ fontSize: 12, color: 'var(--bone-muted)' }}>Founder · Active broker</div>
                        </div>
                      </div>
                      <p style={{ fontSize: 13, color: 'var(--bone-muted)', marginTop: 16, lineHeight: 1.55 }}>
                        Filmed 11 days ago. The seller signed at full commission and the home is in escrow.
                      </p>
                    </div>

                    <div style={{ marginTop: 16, border: '1px solid var(--hairline-dark)', padding: 24, background: 'var(--slate)' }}>
                      <Eyebrow mono dark>Up next</Eyebrow>
                      <div style={{ marginTop: 14, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--bone)' }}>L13 · The marketing plan</div>
                      <div style={{ fontSize: 13, color: 'var(--bone-muted)', marginTop: 4 }}>14:55 · 4 lessons left in this module</div>
                      <button className="btn btn-bronze btn-arrow btn-sm" style={{ marginTop: 16, width: '100%', justifyContent: 'space-between' }} onClick={()=>onNav('lesson')}>Next lesson</button>
                    </div>
                  </aside>
                </div>
              )}
              {tab === 'downloads' && (
                <div style={{ maxWidth: 720 }}>
                  <Eyebrow mono dark>Files attached to this lesson</Eyebrow>
                  <div style={{ marginTop: 16, border: '1px solid var(--hairline-dark)' }}>
                    {LESSON.downloads.map((f, i) => (
                      <div key={i} style={{ display: 'grid', gridTemplateColumns: '60px 1fr auto auto', gap: 20, alignItems: 'center', padding: 18, borderBottom: i < LESSON.downloads.length-1 ? '1px solid var(--hairline-dark)' : 'none' }}>
                        <span className="caption-mono" style={{ color: 'var(--brand-teal)' }}>{f.type}</span>
                        <span style={{ fontSize: 15, color: 'var(--bone)' }}>{f.name}</span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--bone-muted)' }}>{f.size}</span>
                        <a href="#" onClick={(e)=>e.preventDefault()} style={{ color: 'var(--brand-teal)', fontSize: 18 }}>↓</a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {tab === 'transcript' && (
                <div style={{ maxWidth: 720, color: 'var(--bone-muted)', fontSize: 15, lineHeight: 1.7 }}>
                  <p><span className="caption-mono" style={{ color: 'var(--brand-teal)', marginRight: 12 }}>00:12</span>Alright, so before we dial, I want to walk you through what I'm thinking right now — because the call lasts about ninety seconds and 80% of the work is what I'm doing in my head before I pick up the phone.</p>
                  <p style={{ marginTop: 20 }}><span className="caption-mono" style={{ color: 'var(--brand-teal)', marginRight: 12 }}>00:54</span>The seller's name is Karen. She's a referral from a closing I did six months ago. Single-family home in Mercer Island, listed eighteen months ago with another agent — it expired. So I already know two things…</p>
                  <p style={{ marginTop: 20 }}><span className="caption-mono" style={{ color: 'var(--brand-teal)', marginRight: 12 }}>01:38</span>Listen carefully here, because this is the moment most agents fumble.</p>
                </div>
              )}
              {tab === 'comments' && (
                <div style={{ maxWidth: 760, display: 'flex', flexDirection: 'column', gap: 24 }}>
                  {[
                    { who: 'Sarah K.', when: '2 days ago', body: 'The credential drop at 04:32 — I tried this on a listing yesterday and the seller literally said "okay, when can you come over." Game changer.' },
                    { who: 'Daniel R.', when: '4 days ago', body: 'Question for Marjorie — when the seller is referred but you have zero shared context, do you still open with the diagnostic? Or do you build rapport first?' },
                    { who: 'Marjorie Adam', who_role: 'Instructor', when: '4 days ago', body: 'Diagnostic always. Rapport is built BY the diagnostic when it\'s done well — the seller feels heard and you\'re showing up as a professional, not a friend.', highlight: true },
                  ].map((c, i) => (
                    <div key={i} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 16, paddingBottom: 24, borderBottom: '1px solid var(--hairline-dark)' }}>
                      <div style={{ width: 48, height: 48, borderRadius: '50%', background: c.highlight ? 'var(--brand-grad)' : 'var(--slate)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--bone)' }}>
                        {c.who.split(' ').map(p => p[0]).join('')}
                      </div>
                      <div>
                        <div style={{ display: 'flex', gap: 10, alignItems: 'baseline', marginBottom: 6 }}>
                          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--bone)' }}>{c.who}</span>
                          {c.who_role && <span className="caption-mono" style={{ color: 'var(--brand-teal)' }}>· {c.who_role}</span>}
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bone-muted)' }}>· {c.when}</span>
                        </div>
                        <p style={{ fontSize: 15, color: 'var(--bone)', lineHeight: 1.6, margin: 0 }}>{c.body}</p>
                      </div>
                    </div>
                  ))}
                  <button className="btn btn-outline" style={{ borderColor: 'var(--hairline-dark)', color: 'var(--bone)', alignSelf: 'flex-start' }}>Add a comment</button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar — lesson list */}
        <aside style={{ background: 'var(--slate)', overflowY: 'auto', maxHeight: 'calc(100vh - 72px)', position: 'sticky', top: 72 }} className="lesson-sidebar">
          <div style={{ padding: '24px 28px', borderBottom: '1px solid var(--hairline-dark)' }}>
            <Eyebrow mono dark>Course outline</Eyebrow>
            <div style={{ marginTop: 10, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--bone)' }}>Listing Presentation Mastery</div>
            <div style={{ marginTop: 14, height: 3, background: 'var(--hairline-dark)', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, width: '38%', background: 'var(--brand-grad)' }} />
            </div>
            <div style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bone-muted)' }}>
              <span>9 / 24 LESSONS</span>
              <span>38%</span>
            </div>
          </div>

          {LESSON_LIST.map(group => (
            <div key={group.mod}>
              <div style={{ padding: '18px 28px 10px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', color: 'var(--bone-muted)' }}>· {group.mod}</div>
              {group.items.map((l, i) => (
                <a key={i} href="#" onClick={(e)=>{e.preventDefault(); if(!l.locked) onNav('lesson');}} style={{
                  display: 'grid', gridTemplateColumns: '28px 1fr auto', gap: 12, alignItems: 'center',
                  padding: '14px 28px',
                  borderLeft: l.current ? '2px solid var(--brand-teal)' : '2px solid transparent',
                  background: l.current ? 'rgba(63,168,166,0.08)' : 'transparent',
                  opacity: l.locked ? 0.45 : 1,
                  cursor: l.locked ? 'not-allowed' : 'pointer',
                  transition: 'background .2s var(--ease)',
                }}
                onMouseEnter={(e) => { if(!l.locked && !l.current) e.currentTarget.style.background = 'rgba(245,241,234,0.04)'; }}
                onMouseLeave={(e) => { if(!l.current) e.currentTarget.style.background = 'transparent'; }}
                >
                  <span style={{
                    width: 22, height: 22, border: '1px solid', borderColor: l.done ? 'var(--brand-teal)' : 'var(--hairline-dark)',
                    background: l.done ? 'var(--brand-teal)' : (l.current ? 'rgba(63,168,166,0.2)' : 'transparent'),
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, color: 'var(--warm-white)',
                  }}>{l.done ? '✓' : (l.locked ? '⌘' : (l.current ? '▶' : ''))}</span>
                  <div>
                    <div style={{ fontSize: 13.5, fontWeight: l.current ? 600 : 400, color: 'var(--bone)', lineHeight: 1.35 }}>L{l.n} · {l.t}</div>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bone-muted)' }}>{l.d}</span>
                </a>
              ))}
            </div>
          ))}

          <div style={{ padding: 24 }}>
            <button className="btn btn-ghost-dark btn-sm btn-arrow" style={{ width: '100%', justifyContent: 'space-between' }} onClick={()=>onNav('course')}>View full outline</button>
          </div>
        </aside>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .lesson-grid { grid-template-columns: 1fr !important; }
          .lesson-sidebar { position: static !important; max-height: none !important; }
          .lesson-tab-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

window.LessonPage = LessonPage;
