/* Tier 4 — Boardroom Application — exclusive, form-led
   A: Application form (long, qualifying)
   B: Letter from founders + minimal apply CTA
*/

function Tier4Page({ tweaks, onNav }) {
  const [variant, setVariant] = useState('A');
  const variants = [
    { id: 'A', key: 'A', label: 'Application Form' },
    { id: 'B', key: 'B', label: 'Founders Letter' },
  ];
  return (
    <div data-screen-label="Tier 4 · Boardroom">
      <VariantStrip variants={variants} value={variant} onChange={setVariant} dark />
      {variant === 'A' && <T4_A onNav={onNav} />}
      {variant === 'B' && <T4_B onNav={onNav} />}
      <Footer onNav={onNav} />
    </div>
  );
}

function T4_A({ onNav }) {
  const [form, setForm] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const upd = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const submit = (e) => { e.preventDefault(); setSubmitted(true); };

  if (submitted) {
    return (
      <section className="surface-ink" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <Eyebrow mono dark>Application received</Eyebrow>
          <h1 className="display-2" style={{ marginTop: 24, color: 'var(--bone)' }}>Thank you, {form.firstName || 'producer'}.</h1>
          <p className="lede lede-on-dark" style={{ marginTop: 24 }}>Marjorie or Bradley will review your application personally within 5 business days. If we move forward, you'll receive a calendar link for a 45-minute interview.</p>
          <button className="btn btn-bronze" style={{ marginTop: 32 }} onClick={() => onNav('home')}>Back to home</button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="surface-ink" style={{ paddingTop: 80, paddingBottom: 60 }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <Eyebrow mono dark>Tier 4 · The Boardroom · By Application</Eyebrow>
          <h1 className="display-1" style={{ marginTop: 24, color: 'var(--bone)' }}>The Boardroom is 24 producers a year. We will read every word.</h1>
          <p className="lede lede-on-dark" style={{ marginTop: 24 }}>Quarterly in-person. Direct access to Marjorie + Bradley. 1:1 SOP review per quarter. The application below is intentionally long. There is no shortcut.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <fieldset style={{ border: 'none', padding: 0 }}>
              <legend className="caption-mono" style={{ color: 'var(--brand-teal)', marginBottom: 24, paddingBottom: 12, borderBottom: '1px solid var(--ink)', width: '100%' }}>01 / WHO YOU ARE</legend>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <FormField label="First name" value={form.firstName} onChange={v => upd('firstName', v)} required />
                <FormField label="Last name" value={form.lastName} onChange={v => upd('lastName', v)} required />
                <FormField label="Email" type="email" value={form.email} onChange={v => upd('email', v)} required />
                <FormField label="Mobile" type="tel" value={form.phone} onChange={v => upd('phone', v)} required />
                <FormField label="Brokerage" value={form.brokerage} onChange={v => upd('brokerage', v)} required />
                <FormField label="Primary market" value={form.market} onChange={v => upd('market', v)} placeholder="City, State" required />
              </div>
            </fieldset>

            <fieldset style={{ border: 'none', padding: 0 }}>
              <legend className="caption-mono" style={{ color: 'var(--brand-teal)', marginBottom: 24, paddingBottom: 12, borderBottom: '1px solid var(--ink)', width: '100%' }}>02 / PRODUCTION</legend>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
                <FormField label="Years in real estate" type="number" value={form.years} onChange={v => upd('years', v)} required />
                <FormField label="Last 12mo GCI" value={form.gci} onChange={v => upd('gci', v)} placeholder="$" required />
                <FormField label="Last 12mo units closed" type="number" value={form.units} onChange={v => upd('units', v)} required />
                <FormField label="Last 12mo volume" value={form.volume} onChange={v => upd('volume', v)} placeholder="$" required />
                <FormField label="Avg sale price" value={form.avgPrice} onChange={v => upd('avgPrice', v)} placeholder="$" required />
                <FormField label="Team size (incl. you)" type="number" value={form.team} onChange={v => upd('team', v)} required />
              </div>
            </fieldset>

            <fieldset style={{ border: 'none', padding: 0 }}>
              <legend className="caption-mono" style={{ color: 'var(--brand-teal)', marginBottom: 24, paddingBottom: 12, borderBottom: '1px solid var(--ink)', width: '100%' }}>03 / WHY NOW</legend>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <FormField label="What's the one thing you want to fix in the next 12 months?" type="textarea" value={form.fix} onChange={v => upd('fix', v)} rows={4} placeholder="Be specific. The more concrete, the better the application reads." required />
                <FormField label="What have you already tried? Why didn't it stick?" type="textarea" value={form.tried} onChange={v => upd('tried', v)} rows={4} required />
                <FormField label="If we said yes, what would you do differently next quarter?" type="textarea" value={form.next} onChange={v => upd('next', v)} rows={3} required />
              </div>
            </fieldset>

            <fieldset style={{ border: 'none', padding: 0 }}>
              <legend className="caption-mono" style={{ color: 'var(--brand-teal)', marginBottom: 24, paddingBottom: 12, borderBottom: '1px solid var(--ink)', width: '100%' }}>04 / REFERENCES</legend>
              <FormField label="Who recommended Boardroom to you?" value={form.referral} onChange={v => upd('referral', v)} placeholder="Name, brokerage. Or 'self-referred' — also fine." />
            </fieldset>

            <div style={{ background: 'var(--bone)', padding: 24, borderLeft: '3px solid var(--brand-teal)' }}>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-muted)' }}>
                <strong style={{ color: 'var(--ink)' }}>Tuition: $1,500/month · 12-month commitment · capped at 24 producers per year.</strong> If accepted, you'll receive a calendar link for a 45-minute interview within 5 business days. We typically respond to ~30% of applications.
              </p>
            </div>

            <button type="submit" className="btn btn-bronze" style={{ alignSelf: 'flex-start' }}>Submit Application →</button>
          </form>
        </div>
      </section>
    </>
  );
}

function T4_B({ onNav }) {
  return (
    <>
      <section className="surface-ink" style={{ paddingTop: 100, paddingBottom: 100, minHeight: '90vh' }}>
        <div className="container" style={{ maxWidth: 720, margin: '0 auto' }}>
          <Eyebrow mono dark>A note from the founders</Eyebrow>
          <h1 className="display-2" style={{ marginTop: 32, color: 'var(--bone)' }}>The Boardroom is the smallest, most expensive, and most uncomfortable thing we offer.</h1>
          <div style={{ marginTop: 48, color: 'var(--bone-text)', fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p>If you're reading this, you've probably already worked through Tier 2 or 3 — or you've been producing at the level where you didn't need them. Either way, what brings most Boardroom applicants here is the same thing: <em>they've stopped growing.</em></p>
            <p>Not from lack of effort. From lack of sparring partners. The producers we accept into the Boardroom have run out of people in their market who can tell them, with detail and authority, what to do next.</p>
            <p>That's what we're for. Quarterly, in-person, in a room of 24. No content. No curriculum. We will pull apart your business in front of your peers and put it back together with you.</p>
            <p>It costs $1,500 a month. We accept 24 producers a year. We talk to 80 to fill those 24 seats.</p>
            <p>If that sounds like the year you want to have, the application is below. It's long on purpose. We'll read every word.</p>
            <p style={{ marginTop: 16, fontFamily: 'var(--font-display)', fontWeight: 600 }}>— Marjorie Adam &amp; Bradley Hanson</p>
          </div>
          <div style={{ marginTop: 64, paddingTop: 32, borderTop: '1px solid var(--hairline-dark)', display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-bronze" onClick={() => onNav('tier4')}>Begin the application →</button>
            <span className="caption-mono" style={{ color: 'var(--bone-muted)' }}>~12 minutes · personal review · ~30% reply rate</span>
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { Tier4Page });
