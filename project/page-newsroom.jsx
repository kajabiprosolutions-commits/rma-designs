/* Phase B — Newsroom (article index) */

const ARTICLES = [
  { code: 'N-12', date: 'May 06, 2026', cat: 'Field Notes', t: 'The pre-frame call is the listing presentation', d: 'Why the 6-minute call before you walk in the door does 70% of the work.', mins: 7, by: 'Marjorie Adam' },
  { code: 'N-11', date: 'Apr 28, 2026', cat: 'Market', t: 'Buyer agency in Q2 2026 — what changed, what didn\'t', d: 'Three months in, the dust is settling. Here\'s what\'s actually working in the field.', mins: 9, by: 'Bradley Hanson' },
  { code: 'N-10', date: 'Apr 21, 2026', cat: 'Tactics', t: 'The 32-second cold open, dissected', d: 'A line-by-line breakdown of why the first 32 seconds determine the next 32 minutes.', mins: 6, by: 'Marjorie Adam' },
  { code: 'N-09', date: 'Apr 14, 2026', cat: 'Operating', t: 'Why every top producer keeps a 6/6/6 cadence', d: '6 hours, 6 days, 6 months. The follow-up rhythm that compounds.', mins: 5, by: 'Bradley Hanson' },
  { code: 'N-08', date: 'Apr 07, 2026', cat: 'Recruiting', t: 'How to read the producer ladder before they tell you', d: 'Splits, caps, and the four signals that say a producer is one conversation from leaving.', mins: 11, by: 'Bradley Hanson' },
  { code: 'N-07', date: 'Mar 31, 2026', cat: 'Field Notes', t: 'Pricing strategy is a story, not a number', d: 'The three positions, and how to walk a seller through them in under 9 minutes.', mins: 8, by: 'Marjorie Adam' },
];

function NewsroomPage({ tweaks, onNav }) {
  const [cat, setCat] = useState('All');
  const cats = ['All', ...new Set(ARTICLES.map(a => a.cat))];
  const list = cat === 'All' ? ARTICLES : ARTICLES.filter(a => a.cat === cat);
  const [feature, ...rest] = list;
  return (
    <div data-screen-label="Newsroom">
      <section className="surface-bone" style={{ paddingTop: 80, paddingBottom: 40 }}>
        <div className="container">
          <Eyebrow mono>The Newsroom</Eyebrow>
          <h1 className="display-1" style={{ marginTop: 16, maxWidth: 720 }}>Field notes from the practice. Published when there's something to say.</h1>
          <div style={{ display: 'flex', gap: 24, marginTop: 40, borderBottom: '1px solid var(--ink)' }}>
            {cats.map(c => (
              <button key={c} onClick={() => setCat(c)} style={{ background: 'none', border: 'none', padding: '12px 0', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: cat === c ? 'var(--ink)' : 'var(--ink-muted)', cursor: 'pointer', borderBottom: cat === c ? '2px solid var(--brand-teal)' : '2px solid transparent', marginBottom: -1 }}>{c}</button>
            ))}
          </div>
        </div>
      </section>

      {feature && (
        <section className="section">
          <div className="container">
            <a href="#" onClick={(e)=>{e.preventDefault();onNav('article');}} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'center', color: 'var(--ink)' }}>
              <Placeholder label={feature.t.toLowerCase()} ratio="4/3" corner={feature.code} />
              <div>
                <span className="caption-mono" style={{ color: 'var(--brand-teal)' }}>{feature.cat} · {feature.date} · {feature.mins} min read</span>
                <h2 className="display-2" style={{ marginTop: 16, marginBottom: 16 }}>{feature.t}</h2>
                <p className="lede">{feature.d}</p>
                <div className="caption-mono" style={{ marginTop: 24, color: 'var(--ink-muted)' }}>By {feature.by} →</div>
              </div>
            </a>
          </div>
        </section>
      )}

      <section className="section surface-bone">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {rest.map(a => (
              <a key={a.code} href="#" onClick={(e)=>{e.preventDefault();onNav('article');}} style={{ color: 'var(--ink)' }}>
                <Placeholder label={a.t.toLowerCase()} ratio="4/3" corner={a.code} />
                <div style={{ marginTop: 20 }}>
                  <span className="caption-mono" style={{ color: 'var(--brand-teal)' }}>{a.cat} · {a.mins} min · {a.date}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, marginTop: 8, marginBottom: 12 }}>{a.t}</h3>
                  <p style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.6 }}>{a.d}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-ink" style={{ padding: '80px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <Eyebrow mono dark>Subscribe</Eyebrow>
            <h2 className="display-2" style={{ marginTop: 16, color: 'var(--bone)' }}>The Friday Field Note.</h2>
            <p className="lede lede-on-dark" style={{ marginTop: 16 }}>One short essay every Friday morning. ~6 minutes. No promotions. Cancel in one click.</p>
          </div>
          <form onSubmit={(e)=>e.preventDefault()} style={{ display: 'flex', gap: 12 }}>
            <input className="input input-dark" type="email" placeholder="you@brokerage.com" style={{ flex: 1 }} />
            <button className="btn btn-bronze" type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      <Footer onNav={onNav} />
    </div>
  );
}

/* Article — single post template */
function ArticlePage({ tweaks, onNav }) {
  return (
    <div data-screen-label="Article">
      <section style={{ position: 'relative', minHeight: '60vh', background: 'var(--ink)', color: 'var(--bone)', display: 'flex', alignItems: 'flex-end', padding: '80px 0' }}>
        <Placeholder label="the pre-frame" ratio="auto" dark style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', opacity: 0.45 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(14,22,32,0.5) 0%, rgba(14,22,32,0.96) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: 880 }}>
          <Eyebrow mono dark>Field Notes · 7 min read · May 06, 2026</Eyebrow>
          <h1 className="display-1" style={{ marginTop: 24, color: 'var(--bone)' }}>The pre-frame call is the listing presentation.</h1>
          <p className="lede lede-on-dark" style={{ marginTop: 16 }}>Why the 6-minute call before you walk in the door does 70% of the work.</p>
        </div>
      </section>

      <article className="section">
        <div className="container" style={{ maxWidth: 720, margin: '0 auto', fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.75, color: 'var(--ink-text)' }}>
          <p style={{ fontSize: 22, fontWeight: 500, marginBottom: 32, color: 'var(--ink)' }}>Most agents lose the appointment before they arrive. Here's the call that changes that.</p>
          <p style={{ marginBottom: 24 }}>For 18 years I walked into listing appointments cold. I'd researched the property, I had my CMA tight, my materials were sharp. And I lost about 4 in 10 to agents who, on paper, were less prepared than I was.</p>
          <p style={{ marginBottom: 24 }}>The one thing I started doing in 2008 — the one thing every agent on our team does today — is a 6-minute call the night before. We call it the pre-frame.</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 32, marginTop: 48, marginBottom: 16 }}>Why a phone call?</h2>
          <p style={{ marginBottom: 24 }}>Because the conversation in your kitchen tomorrow has already started in the seller's head. They've been thinking about price, timing, fear of being undervalued. The call lets you walk into a room where you've already addressed the three biggest objections — without the seller knowing they've been addressed.</p>
          <blockquote style={{ borderLeft: '3px solid var(--brand-teal)', padding: '12px 24px', margin: '32px 0', fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, fontStyle: 'italic', color: 'var(--ink)' }}>
            "If you do the pre-frame right, the appointment is a 20-minute confirmation, not a 90-minute pitch."
          </blockquote>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 32, marginTop: 48, marginBottom: 16 }}>The four moments</h2>
          <p style={{ marginBottom: 24 }}>The full script — with the four moments mapped against the seller's mental model — is in the Vault under V02. The short version: open with their timeline, surface their fear, name the three pricing positions, and close on what the room will look like tomorrow.</p>
          <p style={{ marginBottom: 24 }}>If you only do one of the four, do the pricing positions. It's the difference between walking into a debate and walking into a confirmation.</p>
        </div>
      </article>

      <section className="section surface-bone" style={{ paddingTop: 60 }}>
        <div className="container" style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
          <Eyebrow mono>Read the script</Eyebrow>
          <h3 className="display-2" style={{ marginTop: 16, marginBottom: 16 }}>The full pre-frame call is in the Vault — V02.</h3>
          <p className="lede" style={{ marginBottom: 32 }}>8-minute video, 2-page printable script. Free with Tier 2.</p>
          <button className="btn btn-bronze" onClick={() => onNav('tripwire')}>Get V02 — $29</button>
          <button className="btn btn-ghost" style={{ marginLeft: 12 }} onClick={() => onNav('tier2')}>Or join Tier 2 →</button>
        </div>
      </section>

      <Footer onNav={onNav} />
    </div>
  );
}

Object.assign(window, { NewsroomPage, ArticlePage });
