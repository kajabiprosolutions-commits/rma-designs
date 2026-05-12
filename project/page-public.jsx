/* Phase B — Case Studies (index + detail) + Contact + Legal */

const CASES = [
  { code: 'CS-04', name: 'Sarah Whitlock', loc: 'Scottsdale, AZ', brokerage: 'Compass', tier: 'Tier 3', headline: 'From 18 deals to 47 in 14 months', delta: '+161%', kpi: 'Listing conversion', from: '32%', to: '74%' },
  { code: 'CS-03', name: 'Daniel Rivera', loc: 'Austin, TX', brokerage: 'eXp', tier: 'Tier 3', headline: 'A 9-person team that finally runs as a business', delta: '+$1.4M', kpi: 'Team GCI', from: '$2.1M', to: '$3.5M' },
  { code: 'CS-02', name: 'Ashley Park', loc: 'Bellevue, WA', brokerage: 'Coldwell Banker', tier: 'Tier 4', headline: 'The pricing conversation that took 9 months to internalize', delta: '+38d', kpi: 'Avg. days on market', from: '47d', to: '9d' },
  { code: 'CS-01', name: 'Jennifer Okafor', loc: 'Miami, FL', brokerage: 'Sotheby\'s', tier: 'Tier 2', headline: '2 years in. First $5M close.', delta: '+$5M', kpi: 'Largest single sale', from: '$1.2M', to: '$5.0M' },
];

function CasesPage({ tweaks, onNav }) {
  return (
    <div data-screen-label="Case Studies">
      <section className="surface-bone" style={{ paddingTop: 80, paddingBottom: 60 }}>
        <div className="container">
          <Eyebrow mono>Case Studies · 2025–26 cohort</Eyebrow>
          <h1 className="display-1" style={{ marginTop: 16, maxWidth: 880 }}>Four producers. Four very different problems. The same playbook.</h1>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '1px solid var(--ink)' }}>
          {CASES.map((c, i) => (
            <a key={c.code} href="#" onClick={(e)=>{e.preventDefault();onNav('case');}} style={{ color: 'var(--ink)', display: 'grid', gridTemplateColumns: '120px 1.6fr 1fr 200px', gap: 32, padding: '40px 0', borderBottom: '1px solid var(--hairline-light)', alignItems: 'center', transition: 'background 0.2s', }}
                onMouseEnter={(e)=>e.currentTarget.style.background = 'var(--bone)'}
                onMouseLeave={(e)=>e.currentTarget.style.background = 'transparent'}>
              <div className="caption-mono" style={{ color: 'var(--brand-teal)' }}>{c.code}</div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, marginBottom: 6 }}>{c.headline}</h3>
                <span className="caption-mono" style={{ color: 'var(--ink-muted)' }}>{c.name} · {c.brokerage} · {c.loc} · {c.tier}</span>
              </div>
              <div>
                <div className="caption-mono" style={{ color: 'var(--ink-muted)' }}>{c.kpi}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--ink)' }}>{c.from} → {c.to}</div>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, color: 'var(--brand-teal)', textAlign: 'right' }}>{c.delta}</div>
            </a>
          ))}
        </div>
      </section>
      <Footer onNav={onNav} />
    </div>
  );
}

function CaseDetailPage({ tweaks, onNav }) {
  const c = CASES[0];
  return (
    <div data-screen-label="Case Detail">
      <section className="surface-ink" style={{ paddingTop: 80, paddingBottom: 60 }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <Eyebrow mono dark>{c.code} · {c.tier}</Eyebrow>
          <h1 className="display-1" style={{ marginTop: 24, color: 'var(--bone)' }}>{c.headline}</h1>
          <div className="caption-mono" style={{ color: 'var(--bone-muted)', marginTop: 16 }}>{c.name} · {c.brokerage} · {c.loc}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid var(--ink)', borderBottom: '1px solid var(--ink)' }}>
            {[
              { l: 'Joined', v: 'Feb 2025' },
              { l: 'Tier', v: c.tier },
              { l: 'Listing conversion', v: `${c.from} → ${c.to}` },
              { l: 'Δ', v: c.delta },
            ].map((s, i) => (
              <div key={i} style={{ padding: 32, borderRight: i < 3 ? '1px solid var(--hairline-light)' : 'none' }}>
                <div className="caption-mono" style={{ color: 'var(--brand-teal)', marginBottom: 12 }}>{s.l}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24 }}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32 }}>
          {[
            { h: 'The situation', d: 'Sarah was 3 years into Compass Scottsdale. Production stuck at 18 deals/yr. Working harder than anyone in the office. The plateau was costing her about $180k in foregone GCI a year.' },
            { h: 'What we found', d: 'Her listing conversion was 32% — actually above average. Her pipeline was healthy. The problem wasn\'t lead-flow, it was time-allocation: 14 hours a week in admin she should never have been doing.' },
            { h: 'What we did', d: 'Three Tier 3 SOPs deployed in sequence: the pre-frame, the contract-to-close OS, the 6/6/6 cadence. By month 4 she\'d hired a part-time TC. By month 8 her listing conversion hit 64%. Month 14: 47 deals.' },
            { h: 'Where she is now', d: 'On track for 60+ deals in 2026. Hired her first buyer\'s agent in March. Renewed Growth Circle for year two.' },
          ].map((s, i) => (
            <div key={i}>
              <Eyebrow mono>0{i+1}</Eyebrow>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28, marginTop: 8, marginBottom: 12 }}>{s.h}</h3>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-text)' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="surface-ink" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <h3 className="display-2" style={{ color: 'var(--bone)', marginBottom: 16 }}>Ready to write the next case study?</h3>
          <button className="btn btn-bronze" onClick={() => onNav('tier2')}>Start with Tier 2 →</button>
        </div>
      </section>

      <Footer onNav={onNav} />
    </div>
  );
}

function ContactPage({ tweaks, onNav }) {
  const [form, setForm] = useState({ topic: 'admissions' });
  const [sent, setSent] = useState(false);
  const upd = (k, v) => setForm(f => ({ ...f, [k]: v }));

  if (sent) {
    return (
      <div data-screen-label="Contact · Sent">
        <section className="surface-ink" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', padding: '80px 0' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
            <Eyebrow mono dark>Message received</Eyebrow>
            <h1 className="display-2" style={{ marginTop: 24, color: 'var(--bone)' }}>Thank you. We'll reply within 1 business day.</h1>
            <button className="btn btn-bronze" style={{ marginTop: 32 }} onClick={() => onNav('home')}>Back to home</button>
          </div>
        </section>
        <Footer onNav={onNav} />
      </div>
    );
  }

  return (
    <div data-screen-label="Contact">
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80 }}>
          <div>
            <Eyebrow mono>Contact</Eyebrow>
            <h1 className="display-1" style={{ marginTop: 16, marginBottom: 24 }}>One inbox. Read by the founders.</h1>
            <p className="lede" style={{ marginBottom: 40 }}>Admissions, press, partnerships, and member support all flow into the same queue. We answer everything within one business day.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingTop: 32, borderTop: '1px solid var(--ink)' }}>
              {[
                { l: 'Admissions', v: 'admissions@realtormastery.com' },
                { l: 'Press', v: 'press@realtormastery.com' },
                { l: 'Partnerships', v: 'team@realtormastery.com' },
                { l: 'Member Support', v: 'support@realtormastery.com' },
                { l: 'Office', v: '15205 N Kierland Blvd · Scottsdale, AZ 85254' },
              ].map((r, i) => (
                <div key={i}>
                  <div className="caption-mono" style={{ color: 'var(--brand-teal)' }}>{r.l}</div>
                  <div style={{ fontSize: 16, marginTop: 4 }}>{r.v}</div>
                </div>
              ))}
            </div>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ background: 'var(--bone)', padding: 40, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <FormField label="Topic" type="select" value={form.topic} onChange={v => upd('topic', v)} options={[
              { value: 'admissions', label: 'Admissions — Tier 2/3/4' },
              { value: 'press', label: 'Press / media' },
              { value: 'partnerships', label: 'Partnerships' },
              { value: 'support', label: 'Member support' },
              { value: 'other', label: 'Something else' },
            ]} />
            <FormField label="Name" value={form.name || ''} onChange={v => upd('name', v)} required />
            <FormField label="Email" type="email" value={form.email || ''} onChange={v => upd('email', v)} required />
            <FormField label="Brokerage / company" value={form.brokerage || ''} onChange={v => upd('brokerage', v)} />
            <FormField label="Message" type="textarea" rows={6} value={form.msg || ''} onChange={v => upd('msg', v)} required />
            <button type="submit" className="btn btn-bronze" style={{ alignSelf: 'flex-start' }}>Send →</button>
          </form>
        </div>
      </section>
      <Footer onNav={onNav} />
    </div>
  );
}

function LegalPage({ tweaks, onNav, kind = 'terms' }) {
  const docs = {
    terms: { t: 'Terms of Service', d: 'Last updated May 2, 2026' },
    privacy: { t: 'Privacy Policy', d: 'Last updated May 2, 2026' },
  };
  const doc = docs[kind] || docs.terms;
  return (
    <div data-screen-label={`Legal · ${doc.t}`}>
      <section className="section">
        <div className="container" style={{ maxWidth: 760, margin: '0 auto' }}>
          <Eyebrow mono>{doc.d}</Eyebrow>
          <h1 className="display-2" style={{ marginTop: 16, marginBottom: 32 }}>{doc.t}</h1>
          <div style={{ display: 'flex', gap: 24, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--hairline-light)' }}>
            <a href="#" onClick={(e)=>{e.preventDefault();onNav('terms');}} className="caption-mono" style={{ color: kind === 'terms' ? 'var(--brand-teal)' : 'var(--ink-muted)' }}>Terms</a>
            <a href="#" onClick={(e)=>{e.preventDefault();onNav('privacy');}} className="caption-mono" style={{ color: kind === 'privacy' ? 'var(--brand-teal)' : 'var(--ink-muted)' }}>Privacy</a>
          </div>
          <div style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-text)', display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { h: '1. Overview', d: 'Realtor Mastery Academy ("RMA," "we," "our") provides educational content, software tools, and live programming for licensed real estate professionals. By creating an account or making a purchase, you agree to these terms.' },
              { h: '2. Account & Access', d: 'Tier 2/3/4 access is licensed per individual. You may not share login credentials, redistribute Vault assets, or resell our content. Suspected sharing triggers a temporary lock and a brief review.' },
              { h: '3. Refund Window', d: 'Tier 2 carries a 30-day refund window from your enrollment date if you complete Module 1 and decide RMA is not for you. Tier 3 is month-to-month and cancellable anytime. Tier 4 is a 12-month commitment, refundable pro-rata only in cases of medical or personal hardship.' },
              { h: '4. Content & IP', d: 'All Vault assets — scripts, SOPs, templates, video lessons — remain RMA intellectual property. You receive a perpetual, non-transferable license to use them in your own real estate practice.' },
              { h: '5. No Earnings Guarantee', d: 'We share averages and case studies because they are real and recent. Your results depend on your effort, market, and execution. RMA makes no income guarantees.' },
              { h: '6. Contact', d: 'Questions about these terms: legal@realtormastery.com' },
            ].map((s, i) => (
              <div key={i}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, marginBottom: 8 }}>{s.h}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer onNav={onNav} />
    </div>
  );
}

Object.assign(window, { CasesPage, CaseDetailPage, ContactPage, LegalPage });
