/* Landing Pages — no header/footer, single-CTA focus
   - OptInLP: Tier 1 "Free Script of the Week" lead magnet
   - BoardroomApp: Tier 4 application (video + form, no Buy button)
   - LenderScholarshipPage: Hidden lender bulk-purchase page
   - ThankYouPage: 3 versions (Tier 2/3/4) — onboarding after purchase
   - TripwireLP: No-nav individual product LP (parameterized) */

function LpShell({ children, accent }) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--warm-white)' }}>
      <div style={{ borderTop: `4px solid ${accent || 'var(--brand-blue)'}` }} />
      <div style={{ position: 'absolute', top: 24, left: 24, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 12, letterSpacing: '0.2em', color: 'var(--ink)' }}>
        REALTOR MASTERY ACADEMY
        <div style={{ fontWeight: 500, fontSize: 9, letterSpacing: '0.28em', color: 'var(--ink-muted)', marginTop: 2 }}>BY PRODUCERS · FOR PRODUCERS</div>
      </div>
      {children}
      <div style={{ padding: '40px 24px', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-muted)', letterSpacing: '0.06em', borderTop: '1px solid var(--hairline-light)' }}>
        © 2026 Realtor Mastery Academy · <a href="#" style={{ color: 'inherit' }}>Privacy</a> · <a href="#" style={{ color: 'inherit' }}>Terms</a>
      </div>
    </div>
  );
}

/* ===== OPT-IN LP (Tier 1 Lead Magnet) ===== */
function OptInLP({ onNav }) {
  return (
    <LpShell>
      <section style={{ maxWidth: 880, margin: '0 auto', padding: '120px 24px 80px', textAlign: 'center' }} data-screen-label="LP · Tier 1 Opt-In">
        <div className="caption-mono" style={{ color: 'var(--brand-blue)' }}>FREE · FOR LICENSED AGENTS</div>
        <h1 className="display-1" style={{ marginTop: 24 }}>Get the Script of the Week.</h1>
        <p className="lede" style={{ marginTop: 24, margin: '24px auto 0', maxWidth: '54ch' }}>
          The exact script Marjorie &amp; Bradley used this week to win a listing, neutralize a commission objection, or convert a buyer. Delivered to your inbox every Monday. Free, forever.
        </p>
        <form onSubmit={(e) => { e.preventDefault(); onNav && onNav('tripwire'); }} style={{ marginTop: 48, display: 'flex', gap: 12, maxWidth: 520, margin: '48px auto 0', flexWrap: 'wrap' }}>
          <input className="input" placeholder="your@email.com" type="email" required style={{ flex: 1, minWidth: 240 }} />
          <button type="submit" className="btn btn-brand btn-arrow">Get Free Script</button>
        </form>
        <p className="caption-mono" style={{ marginTop: 24, color: 'var(--ink-muted)' }}>No spam · unsubscribe anytime · ~2,400 producers reading</p>
        <div style={{ marginTop: 80, padding: 32, background: 'var(--bone)', borderLeft: '3px solid var(--brand-blue)', textAlign: 'left' }}>
          <div className="caption-mono" style={{ color: 'var(--brand-blue)' }}>WHAT YOU'LL GET</div>
          <ul style={{ marginTop: 16, paddingLeft: 20, lineHeight: 1.8, color: 'var(--ink)' }}>
            <li>Monday: A script Marjorie or Bradley ran this week, with context.</li>
            <li>Wednesday: The number behind it — close rate, time saved, GCI impact.</li>
            <li>Friday: One question. One framework. Reply if you want our take.</li>
          </ul>
        </div>
      </section>
    </LpShell>
  );
}

/* ===== BOARDROOM APPLICATION (Tier 4 — NO BUY BUTTON) ===== */
function BoardroomApplicationLP({ onNav }) {
  return (
    <LpShell accent="var(--brand-teal-deep)">
      <section style={{ maxWidth: 920, margin: '0 auto', padding: '120px 24px 80px' }} data-screen-label="LP · Boardroom Application">
        <div className="caption-mono" style={{ color: 'var(--brand-teal-deep)' }}>TIER 4 · BY INVITATION ONLY</div>
        <h1 className="display-1" style={{ marginTop: 24, maxWidth: '14ch' }}>The Mastery <span style={{ color: 'var(--brand-teal-deep)' }}>Boardroom.</span></h1>
        <div style={{ marginTop: 48, aspectRatio: '16/9', background: 'var(--ink)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(245,241,234,0.1)', border: '1.5px solid var(--bone)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'var(--bone)', fontSize: 28 }}>▶</span>
          </div>
          <span style={{ position: 'absolute', bottom: 16, left: 16, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bone-muted)', letterSpacing: '0.12em' }}>FROM MARJORIE &amp; BRADLEY · 4:32</span>
        </div>
        <p style={{ marginTop: 40, fontSize: 17, lineHeight: 1.7, color: 'var(--ink-muted)' }}>
          The Boardroom is for $20M+ producers facing the big problems — hiring, firing, and protecting profit margins. We accept 24 producers a year. We talk to 80 to fill those 24 seats. <strong style={{ color: 'var(--ink)' }}>The investment is $1,500/month with a 12-month commitment.</strong>
        </p>
        <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: 'var(--ink-muted)' }}>
          The application below is long on purpose. We read every word. If accepted, you'll receive a calendar link for a 45-minute interview with Marjorie &amp; Bradley.
        </p>

        <form onSubmit={(e) => { e.preventDefault(); alert('Application submitted. Marjorie & Bradley have been notified.'); }} style={{ marginTop: 64, display: 'flex', flexDirection: 'column', gap: 24, padding: 40, background: 'var(--paper)', border: '1px solid var(--hairline-light)' }}>
          <div className="caption-mono" style={{ color: 'var(--brand-teal-deep)' }}>APPLICATION · BOARDROOM 2026 COHORT</div>
          {[
            { l: 'Full name', t: 'text' },
            { l: 'Brokerage & state', t: 'text' },
            { l: 'Last 12 months volume ($)', t: 'text' },
            { l: 'Last 12 months unit count', t: 'text' },
            { l: 'Team size today (incl. you)', t: 'text' },
          ].map(f => (
            <label key={f.l} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span className="caption-mono">{f.l}</span>
              <input className="input" type={f.t} required />
            </label>
          ))}
          <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span className="caption-mono">What's the actual problem you're hiring us to solve?</span>
            <textarea className="input" rows="5" required style={{ resize: 'vertical', fontFamily: 'var(--font-body)' }} />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span className="caption-mono">What happens to your business if you don't solve it in the next 12 months?</span>
            <textarea className="input" rows="4" required style={{ resize: 'vertical', fontFamily: 'var(--font-body)' }} />
          </label>
          <button type="submit" className="btn btn-brand btn-lg btn-arrow" style={{ alignSelf: 'flex-start' }}>Submit Application</button>
          <p className="caption-mono" style={{ color: 'var(--ink-muted)' }}>
            Submission triggers an immediate notification to Marjorie &amp; Bradley. Expect a reply within 72 hours.
          </p>
        </form>
      </section>
    </LpShell>
  );
}

/* ===== LENDER SCHOLARSHIP (hidden page) ===== */
function LenderScholarshipLP({ onNav }) {
  const [seats, setSeats] = useState(1);
  const PRICING = { 1: { amt: 900, label: '1 Agent' }, 2: { amt: 1800, label: '2 Agents' }, 3: { amt: 2700, label: '3 Agents' } };
  return (
    <LpShell accent="var(--brand-blue-deep)">
      <section style={{ maxWidth: 980, margin: '0 auto', padding: '120px 24px 60px' }} data-screen-label="LP · Lender Scholarship">
        <div className="caption-mono" style={{ color: 'var(--brand-blue-deep)' }}>EXCLUSIVELY FOR LENDERS · HIDDEN PAGE</div>
        <h1 className="display-1" style={{ marginTop: 24 }}>The RMA Scholarship <span style={{ color: 'var(--brand-blue-deep)' }}>Foundation.</span></h1>
        <p className="lede" style={{ marginTop: 24, maxWidth: '60ch' }}>
          Invest in your partner agents' first 90 days of RMA. You provide the opportunity; we install the systems; you both win the market.
        </p>

        <div style={{ marginTop: 48, aspectRatio: '16/9', background: 'var(--ink)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(245,241,234,0.1)', border: '1.5px solid var(--bone)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'var(--bone)', fontSize: 28 }}>▶</span>
          </div>
          <span style={{ position: 'absolute', bottom: 16, left: 16, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bone-muted)', letterSpacing: '0.12em' }}>MARJORIE &amp; BRADLEY · LENDER BRIEF · 6:14</span>
        </div>

        <div style={{ marginTop: 64, padding: 32, background: 'var(--ink)', color: 'var(--bone)' }}>
          <div className="caption-mono" style={{ color: 'var(--brand-teal)' }}>THE CHALLENGE</div>
          <h2 className="display-3" style={{ color: 'var(--bone)', marginTop: 12 }}>Pipelines are evaporating.</h2>
          <p style={{ marginTop: 16, color: 'var(--bone-muted)', lineHeight: 1.7 }}>
            The 2026 market has shifted. Your agents aren't just discouraged — they are stalled. Home sales are down, consumer confidence is low, and without a new system, their relationships (and your pipeline) are disappearing. A "lunch and learn" won't fix a broken business model. They need infrastructure to win.
          </p>
        </div>

        <div style={{ marginTop: 48 }}>
          <Eyebrow>How it works · The 90-day growth engine</Eyebrow>
          <div className="grid-3" style={{ marginTop: 24, gap: 0, border: '1px solid var(--hairline-light)' }}>
            {[
              { n: '01', t: 'The 15-Minute Fix', d: 'The exact listing decks and buyer presentations they need to win the few appointments available in this market.' },
              { n: '02', t: 'The Fin-Ops Model', d: 'Run a P&L. Remain profitable and viable through market fluctuations.' },
              { n: '03', t: 'AI-Driven Efficiency', d: 'Do the work of a full team, even if currently flying solo.' },
            ].map((s, i) => (
              <div key={s.n} style={{ padding: 32, background: 'var(--paper)', borderRight: i < 2 ? '1px solid var(--hairline-light)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: 'var(--brand-blue)' }}>{s.n}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, marginTop: 12 }}>{s.t}</h3>
                <p style={{ marginTop: 12, fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.6 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 64, padding: 40, background: 'var(--bone)' }}>
          <Eyebrow>Tier 2 Academy Scholarship · $300/mo per seat · 3-month commitment</Eyebrow>
          <h2 className="display-2" style={{ marginTop: 16 }}>Sponsor agents now.</h2>
          <div style={{ marginTop: 32, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {[1, 2, 3].map(n => (
              <button key={n} onClick={() => setSeats(n)} style={{
                padding: '20px 32px',
                background: seats === n ? 'var(--ink)' : 'var(--paper)',
                color: seats === n ? 'var(--bone)' : 'var(--ink)',
                border: '1px solid ' + (seats === n ? 'var(--ink)' : 'var(--hairline-light)'),
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                flex: '1 1 200px',
              }}>
                Sponsor {PRICING[n].label}
              </button>
            ))}
          </div>
          <div style={{ marginTop: 32, paddingTop: 32, borderTop: '1px solid var(--hairline-light)', display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
            <span className="caption-mono">YOUR INVESTMENT · 90 DAYS</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 56, color: 'var(--brand-blue)' }}>${PRICING[seats].amt.toLocaleString()}</span>
            <span className="caption-mono">total · ${(PRICING[seats].amt / 3).toLocaleString()}/mo billed</span>
          </div>
          <button className="btn btn-brand btn-lg btn-arrow" style={{ marginTop: 32 }}>Bulk Purchase · {seats} Seat{seats > 1 ? 's' : ''}</button>
          <p className="caption-mono" style={{ marginTop: 16, color: 'var(--ink-muted)' }}>
            After checkout, you'll receive a sign-up link to forward to your agent partners. Each agent is tagged to your name for our monthly Lender Hero report.
          </p>
        </div>

        <div style={{ marginTop: 64, padding: 32, border: '1px solid var(--hairline-light)' }}>
          <Eyebrow>The bottom line</Eyebrow>
          <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.7 }}>
            We're capping this event at 50 total scholarship seats — we refuse to dilute the quality of our implementation. <strong>Don't just hope they find a home sale. Give them the infrastructure that ensures they create one.</strong>
          </p>
        </div>
      </section>
    </LpShell>
  );
}

/* ===== THANK YOU PAGE (parameterized by tier) ===== */
function ThankYouLP({ onNav, tier = 'tier2' }) {
  const CONFIG = {
    tier2: { name: 'The Academy', price: '$300/mo', greeting: 'Welcome to The Academy.', sub: 'You just made the most important decision for your 2026 business.', next: 'Your Month 1 module is unlocked. Time-Blocked Calendar is your first homework.' },
    tier3: { name: 'Implementation Pods', price: '$750/mo', greeting: 'Welcome to the Pod.', sub: 'You\'re joining 9 other producers committed to going from 20 sales to 40.', next: 'Your pod assignment + first 90-minute session calendar lands in your inbox within 24 hours.' },
    tier4: { name: 'The Mastery Boardroom', price: '$1,500/mo', greeting: 'You\'re in the Boardroom.', sub: 'Marjorie & Bradley have been notified personally.', next: 'Within 48 hours you\'ll receive a calendar link for your onboarding audit. Bring your P&L.' },
  };
  const c = CONFIG[tier];
  return (
    <LpShell accent="var(--brand-blue)">
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '120px 24px 80px', textAlign: 'center' }} data-screen-label={`LP · Thank You ${tier}`}>
        <div className="caption-mono" style={{ color: 'var(--brand-blue)' }}>{c.name.toUpperCase()} · {c.price}</div>
        <h1 className="display-1" style={{ marginTop: 24 }}>{c.greeting}</h1>
        <p className="lede" style={{ marginTop: 24, margin: '24px auto 0', maxWidth: '52ch' }}>{c.sub}</p>

        <div style={{ marginTop: 48, aspectRatio: '16/9', background: 'var(--ink)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: 640, margin: '48px auto 0' }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(245,241,234,0.1)', border: '1.5px solid var(--bone)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'var(--bone)', fontSize: 22 }}>▶</span>
          </div>
          <span style={{ position: 'absolute', bottom: 12, left: 12, fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--bone-muted)', letterSpacing: '0.12em' }}>WELCOME · M &amp; B · 2:14</span>
        </div>

        <div style={{ marginTop: 48, padding: 32, background: 'var(--bone)', textAlign: 'left' }}>
          <div className="caption-mono" style={{ color: 'var(--brand-blue)' }}>WHAT'S NEXT</div>
          <p style={{ marginTop: 12, fontSize: 16, lineHeight: 1.7 }}>{c.next}</p>
        </div>

        <div style={{ marginTop: 40, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-brand btn-arrow" onClick={() => onNav('dashboard')}>Access the Library</button>
          <button className="btn btn-outline btn-arrow" onClick={() => onNav('community')}>Join the Community</button>
        </div>

        <p className="caption-mono" style={{ marginTop: 40, color: 'var(--ink-muted)' }}>Receipt + login details sent to your email · check spam if missing</p>
      </section>
    </LpShell>
  );
}

/* ===== TRIPWIRE LP (no-nav version of single product) ===== */
function TripwireLP({ onNav, productCode = 'TW01' }) {
  const product = (window.T1_FORTRESS_MENU || []).find(p => p.code === productCode) || { code: 'TW01', title: 'AI Prompt Master Library', price: 27, strategy: 'The Tripwire — First 15 minutes on site' };
  return (
    <LpShell>
      <section style={{ maxWidth: 980, margin: '0 auto', padding: '120px 24px 80px' }} data-screen-label="LP · Tripwire">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="hero-grid">
          <div>
            <div className="caption-mono" style={{ color: 'var(--brand-blue)' }}>{product.code} · 15-MINUTE FIX</div>
            <h1 className="display-1" style={{ marginTop: 16 }}>{product.title}</h1>
            <p className="lede" style={{ marginTop: 24 }}>{product.strategy}</p>
            <div style={{ marginTop: 32, display: 'flex', alignItems: 'baseline', gap: 16 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 72 }}>${product.price}</span>
              <span className="caption-mono">one-time · lifetime access</span>
            </div>
            <button className="btn btn-brand btn-lg btn-arrow" style={{ marginTop: 32 }}>Buy &amp; Download</button>
            <p className="caption-mono" style={{ marginTop: 16, color: 'var(--ink-muted)' }}>Apple Pay · Google Pay · Stripe · Instant Canva delivery</p>
          </div>
          <div style={{ aspectRatio: '4/5', background: 'var(--bone)', border: '1px solid var(--hairline-light)', position: 'relative' }}>
            <span style={{ position: 'absolute', top: 16, left: 16, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-muted)', letterSpacing: '0.12em' }}>{product.code}</span>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-muted)', letterSpacing: '0.08em' }}>{product.title.toLowerCase()}</div>
          </div>
        </div>
      </section>
    </LpShell>
  );
}

Object.assign(window, { OptInLP, BoardroomApplicationLP, LenderScholarshipLP, ThankYouLP, TripwireLP, T1_FORTRESS_MENU });
