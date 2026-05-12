/* Tier 1 Sales Page — template for all 4 tiers */

function Tier1Page({ tweaks, onNav }) {
  const dark = tweaks.darkHero;
  const ctaPrimary = tweaks.ctaCopy === 'apply' ? 'Apply Now' : tweaks.ctaCopy === 'join' ? 'Join Free' : 'Begin Inside';

  const includes = [
    { t: 'Full Vault Search', d: 'Browse the entire script and tool library. See exactly what each tier unlocks.' },
    { t: 'Pay-Per-Item Access', d: 'Need one script? Buy it. Average $19–$49 per asset, instant download.' },
    { t: 'Weekly Market Briefing', d: 'Bradley\'s 6-minute Monday email with the data points worth your attention.' },
    { t: 'Foundations Mini-Course', d: 'A 4-lesson primer on the RMA operating system. The map before the territory.' },
    { t: '5 Free Scripts', d: 'Hand-picked starter scripts: cold call, follow-up, listing pre-frame, objection, close.' },
    { t: 'Community Read-Only', d: 'See producer conversations, ask questions in the open forum.' },
  ];

  const faq = [
    { q: 'Is The Portal really free?', a: 'Yes. Account creation, Vault search, weekly briefing, and the foundations course are all free, indefinitely. We charge per-asset for downloads, and we charge for the deeper tiers. That\'s it.' },
    { q: 'How does pay-per-item work?', a: 'Every asset in the Vault has a price ($19–$49 typical). Click, pay, download. No subscription required at this tier. Most members eventually upgrade to The Academy because the math stops working at ~6 assets.' },
    { q: 'Can I upgrade later?', a: 'Yes. Any pay-per-item purchase credits 100% toward your first month if you upgrade to Tier 2 within 30 days.' },
    { q: 'Who is this NOT for?', a: 'Brand-new agents looking for licensing prep, anyone wanting passive content, or agents who don\'t want to actually run scripts. RMA is operational. You will work.' },
    { q: 'Do I need to be in a specific market?', a: 'No. Our members operate in 47 states and Canada. The frameworks are market-agnostic; the scripts are tested across price points from $250K to $40M+.' },
  ];

  return (
    <div data-screen-label="Tier 1 — The Portal">
      {/* HERO */}
      <section className={dark ? 'surface-ink' : 'surface-paper'} style={{ paddingTop: 64, paddingBottom: 80, borderBottom: dark ? '1px solid var(--hairline-dark)' : '1px solid var(--hairline-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', color: dark ? 'var(--bone-muted)' : 'var(--ink-muted)' }}>
            <span>TIER 01</span>
            <span>/</span>
            <span>THE PORTAL</span>
            <span>/</span>
            <span style={{ color: dark ? 'var(--bronze-soft)' : 'var(--bronze)' }}>FREE</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'start', marginTop: 40 }} className="hero-grid">
            <div>
              <h1 className="display-1" style={{ color: dark ? 'var(--bone)' : 'var(--ink-text)' }}>
                Get inside the system.
                <span style={{ display: 'block', color: 'var(--bronze)' }}>Pay only for what moves the needle.</span>
              </h1>
              <p className={`lede ${dark ? 'lede-on-dark' : ''}`} style={{ marginTop: 32, fontSize: 19, maxWidth: '52ch' }}>
                The Portal opens the entire Vault to you — every script, every framework, every tool we use in production. Search it free. Download what you need, when you need it.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 40, flexWrap: 'wrap' }}>
                <button className={dark ? 'btn btn-bronze btn-lg btn-arrow' : 'btn btn-primary btn-lg btn-arrow'}>{ctaPrimary}</button>
                <button className={dark ? 'btn btn-ghost-dark btn-lg' : 'btn btn-outline btn-lg'} onClick={() => onNav('library')}>Preview the Vault</button>
              </div>
              <div style={{ marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 11, color: dark ? 'var(--bone-muted)' : 'var(--ink-muted)', letterSpacing: '0.08em' }}>
                <span style={{ width: 6, height: 6, borderRadius: 100, background: 'var(--bronze)' }} />
                NO CREDIT CARD · UPGRADE WHEN THE MATH STOPS WORKING
              </div>
            </div>
            <div className="frame">
              <Placeholder label="vault interface — desktop screenshot" ratio="4/5" dark={dark} corner="THE PORTAL · LIVE PREVIEW" />
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section className="section surface-bone">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="grid-2">
            <div>
              <Eyebrow>The shift</Eyebrow>
              <h2 className="display-2" style={{ marginTop: 16 }}>From <span style={{ textDecoration: 'line-through', color: 'var(--ink-muted)' }}>scrolling</span> to <span className="text-bronze">scripted</span>.</h2>
              <p className="lede" style={{ marginTop: 24 }}>
                Most agents lose deals at the same five moments. The Portal gives you the exact language Marjorie and Bradley use at those moments — tested across thousands of transactions.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  'The "we want to interview a few more agents" moment',
                  'The "your commission is too high" moment',
                  'The "we got a higher offer" moment',
                  'The "my Zillow says it\'s worth more" moment',
                  'The "let me think about it" moment',
                ].map((m, i) => (
                  <li key={m} style={{ display: 'flex', gap: 16, alignItems: 'baseline', borderTop: '1px solid var(--hairline-light)', paddingTop: 16 }}>
                    <span className="caption-mono" style={{ color: 'var(--bronze)', minWidth: 32 }}>0{i+1}</span>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17 }}>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Placeholder label="objection handling moment — listing appointment" ratio="3/4" corner="04 / In-the-room" />
          </div>
        </div>
      </section>

      {/* INCLUDES */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="What you get"
            title="Six things, free, the moment you create an account."
          />
          <div className="grid-3" style={{ gap: 0, border: '1px solid var(--hairline-light)' }}>
            {includes.map((it, i) => (
              <div key={it.t} style={{
                padding: 32,
                borderRight: (i + 1) % 3 !== 0 ? '1px solid var(--hairline-light)' : 'none',
                borderBottom: i < 3 ? '1px solid var(--hairline-light)' : 'none',
                background: 'var(--paper)',
              }}
              className="includes-cell"
              >
                <div className="eyebrow-mono">0{i+1}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, marginTop: 16, letterSpacing: '-0.01em' }}>{it.t}</h3>
                <p style={{ marginTop: 12, color: 'var(--ink-muted)', fontSize: 14, lineHeight: 1.6 }}>{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION KIT PREVIEW */}
      <section className="section surface-ink">
        <div className="container">
          <SectionHeader
            dark
            eyebrow="Free starter scripts"
            title="A taste of what's inside the Vault."
            lede="Five hand-picked scripts unlock free with your account. Real scripts. Used this week. Edit and run."
          />
          <div className="grid-3">
            {[
              { tag: 'Cold call', t: 'The 32-second open', desc: '"I\'ll be brief — three sentences and you can hang up." The opening that earns the next 30 seconds.', mins: '4 min · script + audio' },
              { tag: 'Listing', t: 'The pre-frame', desc: 'What you say in the parking lot before you walk in. Sets every conversation that follows.', mins: '6 min · script + checklist' },
              { tag: 'Objection', t: 'Commission is too high', desc: 'The "two columns" framework. Reframe price as outcome, not expense. Used at every appointment.', mins: '8 min · script + worksheet' },
            ].map(s => (
              <div key={s.t} style={{ background: 'var(--slate)', border: '1px solid var(--hairline-dark)', padding: 28, position: 'relative' }}>
                <div className="badge badge-unlocked badge-dot" style={{ background: 'transparent' }}>UNLOCKED · TIER 1</div>
                <div className="caption-mono" style={{ color: 'var(--bronze-soft)', marginTop: 24 }}>{s.tag}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--bone)', marginTop: 8, letterSpacing: '-0.01em' }}>{s.t}</h3>
                <p style={{ color: 'var(--bone-muted)', fontSize: 14, marginTop: 12, lineHeight: 1.6 }}>{s.desc}</p>
                <div className="caption-mono" style={{ color: 'var(--bone-muted)', marginTop: 24, paddingTop: 16, borderTop: '1px solid var(--hairline-dark)' }}>{s.mins}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON / STICKY UPGRADE PROMPT */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="The math"
            title="When pay-per-item stops making sense."
            lede="The Portal is the right home until you cross ~6 assets per month. Then The Academy pays for itself."
          />
          <div style={{ border: '1px solid var(--hairline-light)', overflow: 'hidden' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr',
              fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 12,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              background: 'var(--bone)', borderBottom: '1px solid var(--hairline-light)',
            }} className="compare-row">
              <div style={{ padding: 20 }}>Feature</div>
              <div style={{ padding: 20, textAlign: 'center', borderLeft: '1px solid var(--hairline-light)' }}>Portal</div>
              <div style={{ padding: 20, textAlign: 'center', borderLeft: '1px solid var(--hairline-light)' }}>Academy</div>
              <div style={{ padding: 20, textAlign: 'center', borderLeft: '1px solid var(--hairline-light)' }}>Growth</div>
              <div style={{ padding: 20, textAlign: 'center', borderLeft: '1px solid var(--hairline-light)' }}>Boardroom</div>
            </div>
            {[
              ['Vault search', 'Yes', 'Yes', 'Yes', 'Yes'],
              ['Vault downloads', 'Pay-per-item', 'Dripped 8mo', 'Full', 'Full + first access'],
              ['Live coaching', '—', 'Group, weekly', 'Group + 1:1', 'Direct founder'],
              ['Community access', 'Read only', 'Cohort', 'Producer-only', 'Boardroom + retreats'],
              ['Price', 'Free', '$497/mo', '$1,497/mo', 'By application'],
            ].map((row, idx) => (
              <div key={idx} style={{
                display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr',
                borderBottom: idx < 4 ? '1px solid var(--hairline-light)' : 'none',
                fontSize: 14,
              }} className="compare-row">
                <div style={{ padding: 20, fontFamily: 'var(--font-display)', fontWeight: 600 }}>{row[0]}</div>
                {row.slice(1).map((cell, i) => (
                  <div key={i} style={{
                    padding: 20, textAlign: 'center', borderLeft: '1px solid var(--hairline-light)',
                    color: cell === '—' ? 'var(--ink-muted)' : 'var(--ink-text)',
                    background: i === 0 ? 'rgba(154,123,79,0.04)' : 'transparent',
                  }}>{cell}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL ROW */}
      <section className="section surface-bone">
        <div className="container">
          <div className="grid-3">
            {[
              { q: '"Started free. Bought 4 scripts. Paid for The Academy out of one extra listing."', n: 'Marcus Weller', m: 'Keller Williams · Austin' },
              { q: '"The pre-frame script alone has changed every listing appointment I\'ve done since."', n: 'Janelle Park', m: 'Compass · Brooklyn' },
              { q: '"Bradley\'s C2C framework gave me back Friday afternoons. Worth ten times the price."', n: 'David Aliyev', m: 'eXp · Miami' },
            ].map(t => (
              <figure key={t.n} style={{ margin: 0, paddingTop: 32, borderTop: '1px solid var(--hairline-light)' }}>
                <div style={{ fontSize: 24, color: 'var(--bronze)', fontFamily: 'var(--font-display)', fontWeight: 800 }}>"</div>
                <blockquote style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, lineHeight: 1.4, letterSpacing: '-0.005em' }}>{t.q.replace(/^"|"$/g, '')}</blockquote>
                <figcaption style={{ marginTop: 24, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--ink-muted)' }}>
                  {t.n} · {t.m}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-narrow">
          <SectionHeader eyebrow="Common questions" title="Before you sign up." align="center" />
          <FAQList items={faq} />
        </div>
      </section>

      {/* PRICING / FINAL CTA */}
      <section className="section-lg surface-ink">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <Eyebrow dark>The Portal</Eyebrow>
          <h2 className="display-1" style={{ color: 'var(--bone)', marginTop: 24 }}>Free.<span style={{ color: 'var(--bronze)' }}>Forever.</span></h2>
          <p className="lede lede-on-dark" style={{ margin: '24px auto 0', textAlign: 'center', maxWidth: '52ch' }}>
            Account, search, briefing, foundations course, 5 starter scripts. No credit card. Upgrade if and when the math earns it.
          </p>
          <button className="btn btn-bronze btn-lg btn-arrow" style={{ marginTop: 40 }}>{ctaPrimary}</button>
          <div className="caption-mono" style={{ color: 'var(--bone-muted)', marginTop: 24 }}>30-DAY UPGRADE CREDIT · 100% OF PAY-PER-ITEM TRANSFERS TO TIER 2</div>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className="sticky-mobile-cta">
        <div>
          <div className="caption-mono" style={{ color: 'var(--bone-muted)' }}>TIER 1 · THE PORTAL</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--bone)', fontSize: 16 }}>Free Forever</div>
        </div>
        <button className="btn btn-bronze btn-sm">{ctaPrimary}</button>
      </div>

      <Footer onNav={onNav} />

      <style>{`
        .sticky-mobile-cta {
          display: none;
          position: fixed; bottom: 0; left: 0; right: 0;
          background: var(--ink);
          padding: 14px 20px;
          z-index: 40;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          border-top: 1px solid var(--hairline-dark);
        }
        @media (max-width: 720px) {
          .sticky-mobile-cta { display: flex; }
          .compare-row { grid-template-columns: 1.5fr 1fr 1fr !important; font-size: 12px !important; }
          .compare-row > div:nth-child(4), .compare-row > div:nth-child(5) { display: none; }
          .includes-cell { border-right: none !important; border-bottom: 1px solid var(--hairline-light) !important; }
        }
      `}</style>
    </div>
  );
}

function FAQList({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid var(--hairline-light)' }}>
      {items.map((item, i) => (
        <li key={i} style={{ borderBottom: '1px solid var(--hairline-light)' }}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            style={{
              width: '100%', textAlign: 'left',
              padding: '24px 0', display: 'flex', justifyContent: 'space-between', gap: 16,
              fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, letterSpacing: '-0.005em',
            }}
          >
            <span>{item.q}</span>
            <span style={{ color: 'var(--bronze)', fontSize: 22, fontWeight: 400, transform: open === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform .25s var(--ease)' }}>+</span>
          </button>
          {open === i && (
            <div style={{ paddingBottom: 28, color: 'var(--ink-muted)', fontSize: 16, lineHeight: 1.6, maxWidth: '60ch' }}>
              {item.a}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

Object.assign(window, { Tier1Page, FAQList });
