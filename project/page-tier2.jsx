/* Tier 2 — Academy ($2,400, 8-month course) — long-form sales
   A: Curriculum-led (modules visible, what you'll learn)
   B: Story-led (problem → method → outcome narrative)
*/

const T2_MODULES = [
  { n: 1, t: 'Database & Lead Source Audit', d: 'Find the 80 deals already in your phone.' },
  { n: 2, t: 'The Listing Presentation', d: 'The 7-step appointment + the pre-frame call.' },
  { n: 3, t: 'Pricing Strategy', d: 'Three positions. The data conversation. When to walk away.' },
  { n: 4, t: 'Marketing Plan', d: 'Photography, staging, channels, the "first 10 days" sequence.' },
  { n: 5, t: 'Buyer Agency in the New Era', d: 'Agreements, fees, and the hard conversations.' },
  { n: 6, t: 'Objection Handling Library', d: 'Live recordings of the 18 objections that close 90% of deals.' },
  { n: 7, t: 'Contract-to-Close OS', d: 'Inspection, appraisal, financing — the SOP that prevents fall-throughs.' },
  { n: 8, t: 'Operating Cadence', d: 'The 6h / 6d / 6mo follow-up. CRM templates. Daily blocks.' },
];

const T2_OUTCOMES = [
  { stat: '+38%', label: 'Avg. listing conversion (Academy graduates, 2025 cohort)' },
  { stat: '$84k', label: 'Avg. additional GCI in graduate\'s first 12 months' },
  { stat: '94%', label: 'Cohort completion rate' },
  { stat: '12.6×', label: 'Reported ROI on tuition' },
];

function Tier2Page({ tweaks, onNav }) {
  const [variant, setVariant] = useState('A');
  const variants = [
    { id: 'A', key: 'A', label: 'Curriculum-led' },
    { id: 'B', key: 'B', label: 'Story-led' },
  ];
  return (
    <div data-screen-label="Tier 2 · Academy Sales">
      <VariantStrip variants={variants} value={variant} onChange={setVariant} />
      {variant === 'A' && <T2_A onNav={onNav} />}
      {variant === 'B' && <T2_B onNav={onNav} />}
      <Footer onNav={onNav} />
    </div>
  );
}

function T2_A({ onNav }) {
  return (
    <>
      <section className="surface-bone" style={{ paddingTop: 80, paddingBottom: 100 }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <Eyebrow mono>Tier 2 · The Academy · 8 months</Eyebrow>
            <h1 className="display-1" style={{ marginTop: 24 }}>The 8-month program that took us 30 years to build.</h1>
            <p className="lede" style={{ marginTop: 24 }}>
              Eight modules. Twenty-four hours of video. Vault assets that unlock as you progress. Weekly office hours with Marjorie. The exact system we used to build a $140M+ practice and now use to train every agent on our team.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 32, alignItems: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-bronze" onClick={() => onNav('login')}>Enroll Now — $300/mo</button>
              <button className="btn btn-ghost" onClick={() => onNav('tier1')}>Try Tier 1 free</button>
              <span className="caption-mono" style={{ color: 'var(--ink-muted)' }}>8-month track · $2,400 total</span>
            </div>
          </div>
          <Placeholder label="agent at desk — cat. b" ratio="4/5" />
        </div>
      </section>

      <section className="surface-ink" style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 48 }}>
            {T2_OUTCOMES.map((o, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 48, color: 'var(--bone)', lineHeight: 1 }}>{o.stat}</div>
                <div className="caption-mono" style={{ color: 'var(--bone-muted)', marginTop: 12 }}>{o.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="The Curriculum" title="Eight modules. One system. Drip-released over 8 months." lede="Each module unlocks the next. Each unlocks Vault assets, scripts, and SOPs in your member library — so what you learn this month is what you use this month." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {T2_MODULES.map(m => (
              <div key={m.n} style={{ padding: 32, background: 'var(--bone)', border: '1px solid var(--hairline-light)', display: 'flex', gap: 24 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, color: 'var(--brand-teal)', minWidth: 60 }}>0{m.n}</span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{m.t}</h3>
                  <p style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.5 }}>{m.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-bone">
        <div className="container">
          <SectionHeader eyebrow="What's included" title="Curriculum + Vault + Cohort." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { t: 'The 8-Month Curriculum', d: '7 modules, 80+ video lessons, 24 hours total. Ungated for life after completion.', s: 'Lifetime access' },
              { t: 'The Drip-Released Vault', d: 'Each month unlocks 30-60 new scripts, SOPs, and templates tied to that month\'s curriculum.', s: '480+ assets total' },
              { t: 'Office Hours', d: 'Weekly Zoom with Marjorie. Live coaching. Cohort Q&A. Recorded for replay.', s: 'Every Thursday, 10am PT' },
              { t: 'The Cohort Board', d: 'A private board of every agent in your cohort. Deal-stage check-ins, peer accountability.', s: '~80 agents per cohort' },
              { t: 'CRM Templates', d: 'Plug-and-play sequences for Follow Up Boss, kvCORE, and Sierra Interactive.', s: '14 templates' },
              { t: 'Tier 1 Portal Included', d: 'Full Tier 1 search portal access continues during and after the program.', s: 'No expiration' },
            ].map((b, i) => (
              <div key={i} style={{ padding: 32, background: 'var(--warm-white)', border: '1px solid var(--hairline-light)' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, marginBottom: 12 }}>{b.t}</h4>
                <p style={{ fontSize: 14, color: 'var(--ink-muted)', marginBottom: 16, lineHeight: 1.5 }}>{b.d}</p>
                <span className="caption-mono" style={{ color: 'var(--brand-teal)' }}>— {b.s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-ink" style={{ padding: '120px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <Eyebrow mono dark>The Investment</Eyebrow>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 96, color: 'var(--bone)', marginTop: 24, lineHeight: 1 }}>$300<span style={{ fontSize: 32, color: 'var(--bone-muted)' }}>/mo</span></div>
          <p className="lede lede-on-dark" style={{ marginTop: 16 }}>$300/month for 8 months · $2,400 total. The Proof of Action model — you turn in your work to unlock the next month. The 30-day refund window is real — we'll wire it back, no questions, if you complete Module 1 and decide it's not for you.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
            <button className="btn btn-bronze" onClick={() => onNav('login')}>Enroll Now</button>
            <button className="btn btn-ghost-light" onClick={() => onNav('contact')}>Talk to admissions</button>
          </div>
        </div>
      </section>
    </>
  );
}

function T2_B({ onNav }) {
  return (
    <>
      <section style={{ position: 'relative', minHeight: '70vh', background: 'var(--ink)', color: 'var(--bone)', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <Placeholder label="estate exterior — cat. a" ratio="auto" dark style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', opacity: 0.5 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(14,22,32,0.95) 0%, rgba(14,22,32,0.4) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Eyebrow mono dark>Tier 2 · The Academy</Eyebrow>
          <h1 className="display-1" style={{ marginTop: 24, color: 'var(--bone)', maxWidth: 880, fontSize: 'clamp(48px, 6vw, 88px)' }}>
            The agent you'll be in 8 months is the one your market hasn't met yet.
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <Eyebrow mono>The problem</Eyebrow>
          <h2 className="display-2" style={{ marginTop: 24, marginBottom: 32 }}>You don't have a content problem. You have a <em>system</em> problem.</h2>
          <p className="lede" style={{ marginBottom: 24 }}>Most agents we meet have read the books, watched the YouTube channels, listened to the podcasts. The information is everywhere. What's missing is the operating system that turns information into a deal pipeline that works in any market.</p>
          <p className="lede">RMA Tier 2 is that operating system. It's the same one we used to scale from 3 deals a month to 240 deals a year — built from 30 years of running active brokerages, not from a content business.</p>
        </div>
      </section>

      <section className="section surface-ink">
        <div className="container" style={{ maxWidth: 760 }}>
          <Eyebrow mono dark>The method</Eyebrow>
          <h2 className="display-2" style={{ marginTop: 24, marginBottom: 32, color: 'var(--bone)' }}>One module per month. Vault unlocks tied to your progress. No firehose.</h2>
          <p className="lede lede-on-dark">Every Monday of every month, a new module drops. Every module unlocks 30–60 Vault assets — scripts, SOPs, templates — that you use in that month's deals. By month 8, you have a 480-asset library and the muscle memory to use it.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="The outcome" title="Three things change in your business in 8 months." align="center" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginTop: 48 }}>
            {[
              { stat: '01', t: 'Your listing conversion rate', d: 'Average graduate goes from 32% to 68% on listing presentations within 90 days.' },
              { stat: '02', t: 'Your contract-to-close ratio', d: 'The C2C SOP cuts fall-throughs by an average of 41% across the 2025 cohort.' },
              { stat: '03', t: 'Your operating cadence', d: 'You stop reacting to the day. Daily blocks, follow-up sequences, weekly reviews — automated.' },
            ].map((o, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 64, color: 'var(--brand-teal)', lineHeight: 1, opacity: 0.4 }}>{o.stat}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, marginTop: 16, marginBottom: 12 }}>{o.t}</h3>
                <p style={{ color: 'var(--ink-muted)', lineHeight: 1.6 }}>{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-bone">
        <div className="container" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <h2 className="display-2" style={{ marginBottom: 16 }}>$300/month · 8-month track · $2,400 total</h2>
          <p className="lede" style={{ marginBottom: 32 }}>The 2026 spring cohort starts May 12. ~80 seats. Door closes when full or May 8 — whichever comes first.</p>
          <button className="btn btn-bronze" onClick={() => onNav('login')}>Reserve a Seat →</button>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { Tier2Page });
