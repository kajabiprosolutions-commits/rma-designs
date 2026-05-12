/* Main Academy Sales Page — 3 UI variants
   A: Editorial Long-form (deep narrative, magazine columns)
   B: Comparison Matrix (table-led, decision-driven)
   C: Cinematic Visual (image-led, scroll story)
*/

const TIERS = [
  { tier: 1, name: 'The Portal', price: 'Free', period: '+ tripwires', summary: 'Public access. Search 480+ titles, buy individual scripts pay-per-item, sample the system before committing.', included: ['Search the public Vault', 'Buy individual scripts ($19–$49)', '"Script of the Week" newsletter', 'Free Solution Kit preview'], cta: 'Start Free' },
  { tier: 2, name: 'The Academy', price: '$2,400', period: '/ 8 months', summary: 'The 8-month course that took us 30 years to build. Drip-released curriculum + Vault unlocks tied to your progress.', included: ['8-month dripped curriculum', '7 modules · 24 hours of video', 'Vault unlocks each month', 'Weekly office hours w/ Marjorie', 'Tier 1 Portal included'], cta: 'Enroll Now', featured: true },
  { tier: 3, name: 'Growth Circle', price: '$497', period: '/ month', summary: 'For Tier 2 graduates and active producers. Immediate full Vault access, monthly clinics, peer board.', included: ['Full Vault — instant access', 'Monthly live clinics (Marjorie + Bradley)', 'Growth Circle peer board', 'Quarterly playbook drops', 'Includes Tier 1 + 2'], cta: 'Apply' },
  { tier: 4, name: 'The Boardroom', price: 'By Application', period: '12-month commitment', summary: 'God-mode access. Direct access to Marjorie & Bradley. Quarterly in-person sessions. By application only.', included: ['Everything unlocked, forever', 'Direct access to founders', 'Quarterly in-person retreats', '1:1 SOP review per quarter', 'Tier 1 + 2 + 3 included'], cta: 'Apply for Boardroom' },
];

function SalesMainPage({ tweaks, onNav }) {
  const [variant, setVariant] = useState('A');
  const variants = [
    { id: 'A', key: 'A', label: 'Editorial Long-form' },
    { id: 'B', key: 'B', label: 'Comparison Matrix' },
    { id: 'C', key: 'C', label: 'Cinematic Visual' },
  ];
  return (
    <div data-screen-label="Sales · Main Academy">
      <VariantStrip variants={variants} value={variant} onChange={setVariant} />
      {variant === 'A' && <SalesA onNav={onNav} />}
      {variant === 'B' && <SalesB onNav={onNav} />}
      {variant === 'C' && <SalesC onNav={onNav} />}
      <Footer onNav={onNav} />
    </div>
  );
}

function SalesA({ onNav }) {
  // Editorial — magazine spread with serif drop cap, long narrative columns, sidebar
  return (
    <>
      <section className="surface-bone" style={{ paddingTop: 80, paddingBottom: 100 }}>
        <div className="container">
          <Eyebrow mono>The Programs · 2026</Eyebrow>
          <h1 className="display-1" style={{ marginTop: 24, maxWidth: 980 }}>
            Four tiers. One operating system for the next decade of top producers.
          </h1>
          <p className="lede" style={{ marginTop: 32, maxWidth: 720 }}>
            We built RMA the same way we built our brokerages — in layers, by problem, in the room with active agents. What you see below isn't a course catalogue. It's a sequence: each tier solves the problem the last one creates.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 64, alignItems: 'flex-start' }}>
          <div>
            {TIERS.map((t, i) => (
              <article key={t.tier} style={{ borderTop: '1px solid var(--hairline-light)', padding: '48px 0' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 16 }}>
                  <span className="caption-mono" style={{ color: 'var(--brand-teal)' }}>0{t.tier} / {t.name.toUpperCase()}</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24 }}>{t.price}<span className="caption-mono" style={{ color: 'var(--ink-muted)', marginLeft: 8 }}>{t.period}</span></span>
                </div>
                <h2 className="display-2" style={{ marginBottom: 20 }}>{t.name}</h2>
                <p className="lede" style={{ marginBottom: 24, maxWidth: 680 }}>{t.summary}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 32px', marginBottom: 32, maxWidth: 680 }}>
                  {t.included.map((it, j) => (
                    <div key={j} style={{ display: 'flex', gap: 12, fontSize: 14, lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--brand-teal)', fontFamily: 'var(--font-mono)', fontSize: 11 }}>0{j+1}</span>
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
                <button className={t.featured ? 'btn btn-bronze' : 'btn btn-primary'} onClick={() => onNav(t.tier === 1 ? 'tier1' : t.tier === 2 ? 'tier2' : t.tier === 3 ? 'tier3' : 'tier4')}>
                  {t.cta} →
                </button>
              </article>
            ))}
          </div>
          <aside style={{ position: 'sticky', top: 140, background: 'var(--ink)', color: 'var(--bone)', padding: 32 }}>
            <Eyebrow mono dark>Quick compare</Eyebrow>
            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {TIERS.map(t => (
                <div key={t.tier} style={{ paddingBottom: 16, borderBottom: '1px solid var(--hairline-dark)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16 }}>{t.name}</div>
                  <div className="caption-mono" style={{ color: 'var(--bone-muted)', marginTop: 2 }}>{t.price} · {t.period}</div>
                </div>
              ))}
            </div>
            <button className="btn btn-bronze" style={{ width: '100%', marginTop: 24 }} onClick={() => onNav('tier4')}>
              Apply to Boardroom
            </button>
          </aside>
        </div>
      </section>
    </>
  );
}

function SalesB({ onNav }) {
  // Comparison matrix — decision tool
  const features = [
    { label: 'Search the Vault (titles)', t1: true, t2: true, t3: true, t4: true },
    { label: 'Download scripts', t1: 'Pay-per-item', t2: 'Dripped', t3: 'All', t4: 'All' },
    { label: '8-month course', t1: false, t2: true, t3: true, t4: true },
    { label: 'Live clinics', t1: false, t2: 'Office hours', t3: 'Monthly', t4: 'Monthly' },
    { label: 'Peer community', t1: false, t2: 'Cohort', t3: 'Growth Circle', t4: 'Boardroom' },
    { label: 'Founders direct', t1: false, t2: false, t3: false, t4: 'Quarterly' },
    { label: 'In-person retreats', t1: false, t2: false, t3: false, t4: '4×/yr' },
    { label: '1:1 SOP review', t1: false, t2: false, t3: false, t4: 'Quarterly' },
  ];
  const cell = v => {
    if (v === true) return <span style={{ color: 'var(--brand-teal)', fontSize: 18 }}>●</span>;
    if (v === false) return <span style={{ color: 'var(--ink-muted)', fontSize: 18 }}>○</span>;
    return <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-text)' }}>{v}</span>;
  };
  return (
    <>
      <section className="surface-ink" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="container">
          <Eyebrow mono dark>The Programs / Comparison</Eyebrow>
          <h1 className="display-1" style={{ marginTop: 24, color: 'var(--bone)', maxWidth: 980 }}>
            Pick the tier that matches the problem you're solving this quarter.
          </h1>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 48 }}>
            {TIERS.map(t => (
              <PriceCard key={t.tier} {...t} ctaAction={() => onNav(t.tier === 1 ? 'tier1' : t.tier === 2 ? 'tier2' : t.tier === 3 ? 'tier3' : 'tier4')} />
            ))}
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--ink)' }}>
                  <th style={{ textAlign: 'left', padding: '16px 12px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--ink-muted)' }}>FEATURE</th>
                  {TIERS.map(t => (
                    <th key={t.tier} style={{ textAlign: 'center', padding: '16px 12px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14 }}>{t.name}<br /><span className="caption-mono" style={{ color: 'var(--ink-muted)', fontWeight: 400 }}>{t.price}</span></th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--hairline-light)' }}>
                    <td style={{ padding: '16px 12px', fontSize: 14, fontWeight: 500 }}>{f.label}</td>
                    <td style={{ padding: '16px 12px', textAlign: 'center' }}>{cell(f.t1)}</td>
                    <td style={{ padding: '16px 12px', textAlign: 'center', background: 'var(--bone)' }}>{cell(f.t2)}</td>
                    <td style={{ padding: '16px 12px', textAlign: 'center' }}>{cell(f.t3)}</td>
                    <td style={{ padding: '16px 12px', textAlign: 'center', background: 'var(--ink)', color: 'var(--bone)' }}>{cell(f.t4)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

function SalesC({ onNav }) {
  // Cinematic visual — image-led
  return (
    <>
      <section style={{ position: 'relative', minHeight: '85vh', background: 'var(--ink)', color: 'var(--bone)', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <Placeholder label="modern home" ratio="auto" dark style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', opacity: 0.4 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(14,22,32,0.95) 0%, rgba(14,22,32,0.5) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 80, paddingBottom: 80 }}>
          <Eyebrow mono dark>The Programs / 2026</Eyebrow>
          <h1 className="display-1" style={{ marginTop: 24, color: 'var(--bone)', maxWidth: 880, fontSize: 'clamp(48px, 6vw, 88px)' }}>
            The four-tier system $140M+ producers built for their own teams.
          </h1>
          <p className="lede lede-on-dark" style={{ marginTop: 32, maxWidth: 640 }}>
            Every tier opens a door. Every door reveals what the next one solves.
          </p>
        </div>
      </section>
      {TIERS.map((t, i) => (
        <section key={t.tier} className="section" style={{ background: i % 2 === 0 ? 'var(--warm-white)' : 'var(--bone)' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 96, color: 'var(--brand-teal)', lineHeight: 1, opacity: 0.3 }}>0{t.tier}</div>
              <h2 className="display-2" style={{ marginTop: -32, marginBottom: 16 }}>{t.name}</h2>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 24 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32 }}>{t.price}</span>
                <span className="caption-mono" style={{ color: 'var(--ink-muted)' }}>{t.period}</span>
              </div>
              <p className="lede" style={{ marginBottom: 24 }}>{t.summary}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {t.included.map((it, j) => (
                  <li key={j} style={{ display: 'flex', gap: 12, fontSize: 14 }}>
                    <span style={{ color: 'var(--brand-teal)' }}>—</span>{it}
                  </li>
                ))}
              </ul>
              <button className="btn btn-primary" onClick={() => onNav(t.tier === 1 ? 'tier1' : t.tier === 2 ? 'tier2' : t.tier === 3 ? 'tier3' : 'tier4')}>{t.cta} →</button>
            </div>
            <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
              <Placeholder label={['agent at front door', 'producer at desk', 'closing table', 'boardroom interior'][i]} ratio="4/5" />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

Object.assign(window, { SalesMainPage });
