/* Tier 3 — Growth Circle ($497/mo) — full Vault + monthly clinics
   A: Membership-style (recurring value emphasized)
   B: Operator-tools (live access, clinics, community as the product)
*/

const T3_BENEFITS = [
  { t: 'Full Vault unlocked', d: '480+ scripts, SOPs, templates — instant access to everything Tier 2 dripped over 8 months.', tag: 'Day one' },
  { t: 'Monthly Live Clinics', d: 'First Wednesday of every month — Marjorie + Bradley dissect a real deal a member is actively closing.', tag: '12×/yr · 90 min' },
  { t: 'Growth Circle Board', d: 'A peer board of ~120 active producers. Deal swaps, partner referrals, weekly accountability check-ins.', tag: 'Members-only' },
  { t: 'Quarterly Playbook Drops', d: '4 new playbooks per year — buyer agency, market shifts, recruiting plays — built from member field data.', tag: '4×/yr' },
  { t: 'Member Tools', d: 'GCI calculator, splits & caps simulator, ROI tracker — branded for your brokerage.', tag: 'Web + mobile' },
  { t: 'Tier 1 + 2 included', d: 'You don\'t lose the Academy curriculum or Portal access. Everything stacks.', tag: 'No expiration' },
];

function Tier3Page({ tweaks, onNav }) {
  const [variant, setVariant] = useState('A');
  const variants = [
    { id: 'A', key: 'A', label: 'Membership-style' },
    { id: 'B', key: 'B', label: 'Operator-tools' },
  ];
  return (
    <div data-screen-label="Tier 3 · Growth Sales">
      <VariantStrip variants={variants} value={variant} onChange={setVariant} />
      {variant === 'A' && <T3_A onNav={onNav} />}
      {variant === 'B' && <T3_B onNav={onNav} />}
      <Footer onNav={onNav} />
    </div>
  );
}

function T3_A({ onNav }) {
  return (
    <>
      <section className="surface-ink" style={{ paddingTop: 100, paddingBottom: 80 }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
          <Eyebrow mono dark>Tier 3 · Implementation Pods · $750/mo</Eyebrow>
          <h1 className="display-1" style={{ marginTop: 24, color: 'var(--bone)' }}>For the producers already running the offense. Now run the playbook.</h1>
          <p className="lede lede-on-dark" style={{ marginTop: 24 }}>The full Vault, monthly clinics with Marjorie + Bradley, and a peer board of producers doing $5M+ — without the 8-month curriculum gate.</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-bronze" onClick={() => onNav('login')}>Apply Now — $750/mo</button>
            <span className="caption-mono" style={{ color: 'var(--bone-muted)' }}>Cancel anytime · Annual saves 15%</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {T3_BENEFITS.map((b, i) => (
              <div key={i} style={{ padding: 32, border: '1px solid var(--hairline-light)' }}>
                <span className="caption-mono" style={{ color: 'var(--brand-teal)' }}>{b.tag}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, marginTop: 12, marginBottom: 12 }}>{b.t}</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.6 }}>{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-bone">
        <div className="container">
          <SectionHeader eyebrow="What a typical month looks like" title="A live, dated cadence — not a static library." />
          <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 0, borderTop: '1px solid var(--ink)' }}>
            {[
              { wk: 'Week 1', t: 'Live Clinic — first Wednesday', d: '90 minutes. Marjorie + Bradley walk through a real deal a Growth Circle member is actively closing. Tactical, granular, occasionally uncomfortable.' },
              { wk: 'Week 2', t: 'Playbook drop or guest operator', d: 'A new playbook lands in the Vault, or we bring in a $50M+ producer to walk their offense. Quarterly cadence, alternating.' },
              { wk: 'Week 3', t: 'Peer board hot seats', d: 'Member-led. Two members get the room for 30 minutes each on a deal/listing/recruiting situation. Async board carries it through the week.' },
              { wk: 'Week 4', t: 'Founders office hours', d: 'Open Q&A. No agenda. Bring the deal you\'re stuck on or the question you don\'t want to ask in public.' },
            ].map((r, i) => (
              <React.Fragment key={i}>
                <div style={{ padding: '32px 24px', borderBottom: '1px solid var(--hairline-light)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--brand-teal)', textTransform: 'uppercase' }}>{r.wk}</div>
                <div style={{ padding: '32px 24px', borderBottom: '1px solid var(--hairline-light)' }}>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{r.t}</h4>
                  <p style={{ color: 'var(--ink-muted)', lineHeight: 1.6 }}>{r.d}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-ink" style={{ padding: '100px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <Eyebrow mono dark>Pricing</Eyebrow>
          <div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
            <div style={{ padding: 32, border: '1px solid var(--hairline-dark)', minWidth: 240 }}>
              <div className="caption-mono" style={{ color: 'var(--bone-muted)' }}>MONTHLY</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 56, color: 'var(--bone)' }}>$750</div>
              <div className="caption-mono" style={{ color: 'var(--bone-muted)' }}>per month · cancel anytime</div>
            </div>
            <div style={{ padding: 32, border: '1px solid var(--brand-teal)', minWidth: 240, position: 'relative' }}>
              <span style={{ position: 'absolute', top: -10, left: 24, background: 'var(--brand-grad)', color: 'var(--ink)', padding: '4px 12px', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em' }}>SAVE 15%</span>
              <div className="caption-mono" style={{ color: 'var(--brand-teal)' }}>ANNUAL</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 56, color: 'var(--bone)' }}>$7,650</div>
              <div className="caption-mono" style={{ color: 'var(--bone-muted)' }}>per year · ~$637/mo equiv. · 6-month cycles</div>
            </div>
          </div>
          <button className="btn btn-bronze" style={{ marginTop: 40 }} onClick={() => onNav('login')}>Apply for Growth Circle →</button>
        </div>
      </section>
    </>
  );
}

function T3_B({ onNav }) {
  return (
    <>
      <section className="section surface-bone">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <Eyebrow mono>Tier 3 · Live Operator Channel</Eyebrow>
            <h1 className="display-1" style={{ marginTop: 24 }}>The Vault, unlocked. Plus 90 minutes a month with Marjorie + Bradley dissecting a live deal.</h1>
            <p className="lede" style={{ marginTop: 24 }}>$750/mo. 10:1 peer accountability pods. The next cycle begins June 1.</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
              <button className="btn btn-bronze" onClick={() => onNav('login')}>Apply Now</button>
              <button className="btn btn-ghost" onClick={() => onNav('library')}>Preview the Vault</button>
            </div>
          </div>
          <div style={{ background: 'var(--ink)', color: 'var(--bone)', padding: 40 }}>
            <div className="caption-mono" style={{ color: 'var(--brand-teal)', marginBottom: 16 }}>NEXT LIVE CLINIC</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, lineHeight: 1.2 }}>Wed · May 28 · 10am PT</div>
            <p style={{ color: 'var(--bone-muted)', marginTop: 16, marginBottom: 24, lineHeight: 1.6 }}>Topic: A $4.2M listing in Scottsdale that's been sitting 47 days. The price isn't the problem. The pre-frame was.</p>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', paddingTop: 16, borderTop: '1px solid var(--hairline-dark)' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand-grad)' }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>Marjorie Adam</div>
                <div className="caption-mono" style={{ color: 'var(--bone-muted)' }}>+ Bradley Hanson</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="What you get" title="Six layers of operator-grade leverage." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, borderTop: '1px solid var(--ink)' }}>
            {T3_BENEFITS.map((b, i) => (
              <div key={i} style={{ padding: 32, borderBottom: '1px solid var(--hairline-light)', borderRight: i % 2 === 0 ? '1px solid var(--hairline-light)' : 'none', display: 'flex', gap: 24 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, color: 'var(--brand-teal)', minWidth: 60, opacity: 0.4 }}>0{i+1}</span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, marginBottom: 6 }}>{b.t}</h3>
                  <p style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.5, marginBottom: 8 }}>{b.d}</p>
                  <span className="caption-mono" style={{ color: 'var(--brand-teal)' }}>{b.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-ink">
        <div className="container" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <h2 className="display-2" style={{ color: 'var(--bone)', marginBottom: 24 }}>$750/mo · 6-month cycles · annual saves $1,350</h2>
          <button className="btn btn-bronze" onClick={() => onNav('login')}>Start your application →</button>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { Tier3Page });
