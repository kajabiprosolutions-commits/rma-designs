/* Homepage V4 (Boutique editorial) + V5 (Performance / athletic data) */

/* ============================================================
   V4 — BOUTIQUE
   Luxury magazine. Serif italics, asymmetric editorial layout,
   generous whitespace, ivory + espresso + champagne. Numbers
   are de-emphasized; quotes, captions, and craft cues dominate.
   ============================================================ */
function HomeV4({ h, ctaPrimary, ctaSecondary, onNav }) {
  return (
    <div data-screen-label="Home · V4 Boutique" style={{ background: 'var(--warm-white)' }}>
      {/* HERO — split editorial spread */}
      <section style={{ paddingTop: 64, paddingBottom: 120, position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 80, alignItems: 'center' }} className="hero-grid">
            <div style={{ paddingTop: 40 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 16, color: 'var(--brand-blue)', letterSpacing: '0.04em', marginBottom: 32 }}>
                — {h.eyebrow}
              </div>
              <h1 className="display-1" style={{ margin: 0, lineHeight: 0.98 }}>
                Real <em style={{ fontStyle: 'italic', color: 'var(--brand-blue)' }}>Systems.</em>
                <span style={{ display: 'block' }}>Real Production.</span>
                <span style={{ display: 'block' }}>Real <em style={{ fontStyle: 'italic', color: 'var(--brand-blue)' }}>Life.</em></span>
              </h1>
              <p style={{ marginTop: 48, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, fontSize: 22, lineHeight: 1.5, color: 'var(--ink-muted)', maxWidth: 520 }}>
                {h.lede}
              </p>
              <div style={{ display: 'flex', gap: 16, marginTop: 48, alignItems: 'center', flexWrap: 'wrap' }}>
                <button className="btn btn-primary btn-lg" onClick={() => onNav('tier1')}>{ctaPrimary}</button>
                <a onClick={(e) => { e.preventDefault(); onNav('library'); }} href="#" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 15, color: 'var(--ink)', textDecoration: 'underline', textUnderlineOffset: 4, textDecorationColor: 'var(--brand-blue)' }}>
                  {ctaSecondary} →
                </a>
              </div>
              <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--hairline-light)', display: 'flex', gap: 48, flexWrap: 'wrap' }}>
                {[
                  { v: '$840M', l: 'in residential volume' },
                  { v: '2,000', l: 'homes closed' },
                  { v: '40 yrs', l: 'in active production' },
                ].map(s => (
                  <div key={s.l}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 36, letterSpacing: '-0.01em' }}>{s.v}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 14, color: 'var(--ink-muted)', marginTop: 4 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right portrait, two stacked */}
            <div style={{ position: 'relative', height: 720 }} className="hero-media">
              <div style={{ position: 'absolute', top: 0, right: 0, width: '70%', aspectRatio: '4/5', overflow: 'hidden' }}>
                <img src="assets/marjorie-portrait.jpg" alt="Marjorie Adam" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'sepia(0.08) saturate(0.92)' }} />
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '52%', aspectRatio: '3/4', overflow: 'hidden' }}>
                <img src="assets/bradley-portrait.jpg" alt="Bradley Hanson" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'sepia(0.08) saturate(0.92)' }} />
              </div>
              {/* Caption tags */}
              <div style={{ position: 'absolute', top: 24, right: 24, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 12, color: 'var(--bone-text)', mixBlendMode: 'difference', textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
                Plate i. — Marjorie, on the floor
              </div>
              <div style={{ position: 'absolute', bottom: -24, left: 0, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 12, color: 'var(--ink-muted)' }}>
                Plate ii. — Bradley, at close
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRESS LINE — refined */}
      <section style={{ borderTop: '1px solid var(--hairline-light)', borderBottom: '1px solid var(--hairline-light)', padding: '36px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 14, color: 'var(--brand-blue)' }}>As featured in —</div>
          <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 16, color: 'var(--ink)' }}>
            {['Real Trends', 'Inman', 'HousingWire', 'RISMedia', 'The Close', 'Broker · Agent'].map(n => (
              <span key={n}>{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO — pull quote */}
      <section style={{ padding: '160px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 14, color: 'var(--brand-blue)', letterSpacing: '0.04em' }}>
              — On position
              <div style={{ marginTop: 24, fontStyle: 'normal', fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 18, color: 'var(--ink)' }}>i.</div>
            </div>
            <div>
              <p className="display-2" style={{ margin: 0, lineHeight: 1.1 }}>
                Most coaching teaches you <em style={{ color: 'var(--brand-blue)' }}>what to think.</em>
                <span style={{ display: 'block' }}>RMA installs <em style={{ color: 'var(--brand-blue)' }}>what to do</em> — the same scripts, processes, and standards we use to close hundreds of transactions a year, while you read this.</span>
              </p>
              <div style={{ marginTop: 56, display: 'flex', alignItems: 'center', gap: 16, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 13, color: 'var(--ink-muted)' }}>
                <div style={{ width: 40, height: 1, background: 'var(--brand-blue)' }} />
                Signed, Marjorie Adam & Bradley Hanson · still in production
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEVERS — magazine spread */}
      <section style={{ padding: '120px 0', borderTop: '1px solid var(--hairline-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, marginBottom: 80 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 14, color: 'var(--brand-blue)' }}>— On craft / ii.</div>
            <h2 className="display-2" style={{ margin: 0, fontStyle: 'italic' }}>
              The four levers we <em style={{ color: 'var(--brand-blue)' }}>install</em> in every member.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px 64px' }}>
            {[
              { n: 'i.', t: 'Listing Domination', d: 'The seven-step presentation Marjorie has refined across two thousand homes. Objection scripts for over-pricing, dual-agency, and the soft "we\'ll think about it."', img: 'assets/marjorie-portrait.jpg' },
              { n: 'ii.', t: 'Operational Clarity', d: 'Bradley\'s contract-to-close framework. Transaction coordinator SOPs, vendor stacks, and dashboards that turn chaos into a predictable pipeline.', img: 'assets/bradley-portrait.jpg' },
              { n: 'iii.', t: 'Lead Conversion', d: 'Cold call frameworks, ISA scripts, follow-up cadences, and the exact texts our team sends six hours, six days, and six months out. Tested daily.', img: null },
              { n: 'iv.', t: 'Team & Recruiting', d: 'How to recruit producers — not licensees. Structure splits. Build a brokerage that runs without you in the middle of every deal.', img: null },
            ].map(o => (
              <article key={o.n} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 24 }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500, fontSize: 56, color: 'var(--brand-blue)', lineHeight: 0.9, letterSpacing: '-0.02em' }}>{o.n}</div>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontStyle: 'italic', fontSize: 28, margin: 0, color: 'var(--ink)' }}>{o.t}</h3>
                  <p style={{ marginTop: 16, fontSize: 16, color: 'var(--ink-muted)', lineHeight: 1.65, maxWidth: '48ch' }}>{o.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TierOverview onNav={onNav} />

      {/* OUTCOMES — restrained */}
      <section style={{ padding: '160px 0', background: 'var(--bone)', borderTop: '1px solid var(--hairline-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 880, margin: '0 auto 96px' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 14, color: 'var(--brand-blue)' }}>— On outcomes / iii.</div>
            <h2 className="display-2" style={{ marginTop: 24 }}>
              What our members <em style={{ color: 'var(--brand-blue)' }}>produce.</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
            {[
              { num: '+47%', label: 'Avg. listing conversion lift', sub: '90 days · 218 members tracked Q1 \'26' },
              { num: '$2.1M', label: 'Avg. additional GCI', sub: 'Year one · top quartile, Tier 2+' },
              { num: '14 hrs', label: 'Reclaimed each week', sub: 'After installing the C2C framework' },
            ].map(o => (
              <figure key={o.label} style={{ margin: 0, textAlign: 'center', padding: '0 16px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500, fontSize: 88, lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--ink)' }}>{o.num}</div>
                <figcaption style={{ marginTop: 24, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 18, fontStyle: 'italic' }}>{o.label}</figcaption>
                <div style={{ marginTop: 8, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 13, color: 'var(--ink-muted)' }}>{o.sub}</div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSlider />

      {/* CTA — invitation card */}
      <section style={{ padding: '160px 0', borderTop: '1px solid var(--hairline-light)' }}>
        <div className="container" style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 14, color: 'var(--brand-blue)' }}>— With our compliments</div>
          <h3 className="display-2" style={{ marginTop: 24, marginBottom: 40 }}>
            Begin with <em style={{ color: 'var(--brand-blue)' }}>The Portal</em> — free.<br />
            Move deeper when the system earns it.
          </h3>
          <div style={{ display: 'inline-flex', gap: 24, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button className="btn btn-primary btn-lg" onClick={() => onNav('tier1')}>{ctaPrimary}</button>
            <a onClick={(e) => { e.preventDefault(); onNav('library'); }} href="#" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 16, textDecoration: 'underline', textUnderlineOffset: 4, textDecorationColor: 'var(--brand-blue)', color: 'var(--ink)' }}>Tour the Vault →</a>
          </div>
        </div>
      </section>

      <Footer onNav={onNav} />
    </div>
  );
}


/* ============================================================
   V5 — PERFORMANCE
   Athletic data console. Condensed all-caps, mono numbers,
   black + volt orange + electric cyan. Hero is a giant
   nameplate. Sections feel like dashboard panels.
   ============================================================ */
function HomeV5({ h, ctaPrimary, ctaSecondary, onNav }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick(x => x + 1), 1200);
    return () => clearInterval(t);
  }, []);
  // Build a deterministic-ish jittered pulse value for the live readouts
  const jitter = (base, span) => base + Math.round(((Math.sin(tick * 1.3 + base) + 1) / 2) * span);

  return (
    <div data-screen-label="Home · V5 Performance" style={{ background: '#0a0a0a', color: '#fff' }}>
      {/* HERO — giant nameplate over data stripe */}
      <section style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid #2A2A2A' }}>
        {/* Background grid */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '80px 80px', pointerEvents: 'none' }} />
        {/* Big diagonal accent */}
        <div aria-hidden="true" style={{ position: 'absolute', right: '-12%', top: '-20%', width: '70%', height: '140%', background: 'linear-gradient(135deg, rgba(255,77,20,0.18) 0%, transparent 50%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 80, paddingBottom: 64 }}>
          {/* Sport-spec top bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 56, paddingBottom: 16, borderBottom: '1px solid #2A2A2A', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', color: '#9a9a9a', textTransform: 'uppercase', flexWrap: 'wrap', gap: 16 }}>
            <span>RMA · S2026 · WEEK 19</span>
            <span>{h.eyebrow.toUpperCase()}</span>
            <span style={{ color: 'var(--brand-teal)' }}>● LIVE / {String(jitter(847, 8))} ACTIVE</span>
          </div>

          {/* Stacked giant headline */}
          <h1 className="display-1" style={{ margin: 0 }}>
            REAL<br />
            SYSTEMS.<br />
            <span style={{ color: 'var(--brand-blue)' }}>REAL</span><br />
            PRODUCTION.
          </h1>

          {/* Right-aligned subhead + ctas */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginTop: 56, alignItems: 'end' }} className="hero-grid">
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 14, lineHeight: 1.7, color: '#9a9a9a', maxWidth: 540, textTransform: 'none', letterSpacing: 0 }}>{h.lede}</p>
            </div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-lg" onClick={() => onNav('tier1')}>{ctaPrimary.toUpperCase()}</button>
              <button className="btn btn-outline btn-lg" style={{ color: '#fff', borderColor: '#fff' }} onClick={() => onNav('library')}>{ctaSecondary.toUpperCase()}</button>
            </div>
          </div>

          {/* Bottom: athlete plates */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 80 }}>
            {[
              { name: 'M. ADAM', position: 'FOUNDER · LISTING SPECIALIST', vol: '$520M', src: 'assets/marjorie-portrait.jpg' },
              { name: 'B. HANSON', position: 'FOUNDER · OPERATIONS', vol: '$320M', src: 'assets/bradley-portrait.jpg' },
            ].map(p => (
              <div key={p.name} style={{ background: '#141414', border: '1px solid #2A2A2A', padding: 20, display: 'grid', gridTemplateColumns: '120px 1fr', gap: 20, alignItems: 'center' }}>
                <div style={{ aspectRatio: '1', overflow: 'hidden', background: '#000' }}>
                  <img src={p.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.6) contrast(1.1)' }} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 32, letterSpacing: '-0.02em' }}>{p.name}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.18em', color: '#9a9a9a', marginTop: 4 }}>{p.position}</div>
                  <div style={{ marginTop: 12, display: 'flex', gap: 16, alignItems: 'baseline' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 22, color: 'var(--brand-blue)' }}>{p.vol}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: '#9a9a9a' }}>CAREER VOLUME</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TICKER STRIP */}
      <section style={{ borderBottom: '1px solid #2A2A2A', overflow: 'hidden', background: '#0a0a0a' }}>
        <div style={{ display: 'flex', gap: 48, padding: '16px 0', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', whiteSpace: 'nowrap', color: '#9a9a9a', textTransform: 'uppercase', animation: 'v5tick 60s linear infinite' }}>
          {[...Array(2)].flatMap((_, dup) => [
            'AS FEATURED IN', '○ REAL TRENDS', '○ INMAN', '○ HOUSINGWIRE', '○ RISMEDIA', '○ THE CLOSE', '○ BROKER AGENT', '○ REALTOR.COM', '○ KW NEWS', '○ REAL ESTATE TODAY', '○ REM ONLINE',
          ].map((t, i) => <span key={`${dup}-${i}`} style={{ color: i === 0 ? 'var(--brand-blue)' : '#9a9a9a' }}>{t}</span>))}
        </div>
        <style>{`@keyframes v5tick { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </section>

      {/* MANIFESTO — bold console panel */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 48 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', color: 'var(--brand-blue)' }}>
              § 02<br /><span style={{ color: '#9a9a9a' }}>POSITION</span>
            </div>
            <div>
              <h2 className="display-2" style={{ margin: 0, color: '#fff' }}>
                MOST COACHING TEACHES YOU<br />
                WHAT TO <span style={{ color: '#6e6e6e' }}>THINK.</span>
              </h2>
              <h2 className="display-2" style={{ marginTop: 16, color: 'var(--brand-blue)' }}>
                RMA INSTALLS WHAT TO <em style={{ color: 'var(--brand-teal)', fontStyle: 'normal' }}>DO.</em>
              </h2>
              <div style={{ marginTop: 48, display: 'flex', gap: 16, alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, color: '#9a9a9a', letterSpacing: '0.18em' }}>
                <span style={{ width: 24, height: 2, background: 'var(--brand-blue)' }} />
                M. ADAM &amp; B. HANSON · ACTIVE BROKERS · {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEVERS — dashboard panel grid */}
      <section style={{ padding: '100px 0', borderTop: '1px solid #2A2A2A', borderBottom: '1px solid #2A2A2A' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 56, flexWrap: 'wrap', gap: 16 }}>
            <h2 className="display-2" style={{ margin: 0, color: '#fff' }}>FOUR LEVERS / ONE SYSTEM.</h2>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', color: 'var(--brand-blue)' }}>§ 03 · INSTALL</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid #2A2A2A' }}>
            {[
              { n: '01', t: 'LISTING DOMINATION', d: '7-step listing presentation, refined across 2,000+ homes.', metric: '+47%', metricLabel: 'CONV. LIFT' },
              { n: '02', t: 'OPERATIONAL CLARITY', d: 'Contract-to-close framework. TC SOPs. Vendor stacks.', metric: '14h', metricLabel: 'RECLAIMED/WK' },
              { n: '03', t: 'LEAD CONVERSION', d: 'Cold call scripts. ISA cadence. The 6/6/6 follow-up rule.', metric: '3.4x', metricLabel: 'PIPELINE' },
              { n: '04', t: 'TEAM & RECRUITING', d: 'Recruit producers — not licensees. Build a brokerage that runs.', metric: '$2.1M', metricLabel: 'ADD\'L GCI Y1' },
            ].map((o, i) => (
              <div key={o.n} style={{ padding: 28, borderRight: i < 3 ? '1px solid #2A2A2A' : 'none', background: '#0a0a0a', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', color: '#6e6e6e' }}>L.{o.n}</div>
                  <div style={{ width: 6, height: 6, background: 'var(--brand-blue)', borderRadius: '50%' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 22, letterSpacing: '-0.01em', margin: 0, lineHeight: 1.05, color: '#fff' }}>{o.t}</h3>
                <p style={{ marginTop: 16, fontSize: 13, color: '#9a9a9a', lineHeight: 1.5, fontFamily: 'var(--font-mono)' }}>{o.d}</p>
                <div style={{ marginTop: 32, paddingTop: 20, borderTop: '1px dashed #2A2A2A' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 40, color: 'var(--brand-blue)', letterSpacing: '-0.02em', lineHeight: 1 }}>{o.metric}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.18em', color: '#9a9a9a', marginTop: 4 }}>{o.metricLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TierOverview onNav={onNav} />

      {/* PERFORMANCE INDEX — large data block */}
      <section style={{ padding: '120px 0', borderTop: '1px solid #2A2A2A', background: '#0a0a0a' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <h2 className="display-2" style={{ margin: 0, color: '#fff' }}>MEMBER PERFORMANCE / Q1·2026.</h2>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', color: 'var(--brand-blue)' }}>§ 05 · INDEX</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: '1px solid #2A2A2A' }}>
            {[
              { num: '+47%', label: 'AVG. LISTING CONV. LIFT', sub: '218 MEMBERS TRACKED · 90D', bar: 0.47 },
              { num: '$2.1M', label: 'AVG. ADD\'L GCI / YR 1', sub: 'TOP QUARTILE TIER 2+', bar: 0.72 },
              { num: '14h', label: 'RECLAIMED PER WEEK', sub: 'AFTER C2C INSTALL', bar: 0.58 },
            ].map((o, i) => (
              <div key={o.label} style={{ padding: 32, borderRight: i < 2 ? '1px solid #2A2A2A' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.18em', color: '#6e6e6e', marginBottom: 16 }}>METRIC {String(i + 1).padStart(2, '0')}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 88, color: 'var(--brand-blue)', letterSpacing: '-0.03em', lineHeight: 0.95 }}>{o.num}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 16, marginTop: 16, letterSpacing: '0.04em' }}>{o.label}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#9a9a9a', marginTop: 8, letterSpacing: '0.14em' }}>{o.sub}</div>
                <div style={{ marginTop: 24, height: 6, background: '#2A2A2A', position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: 0, width: `${o.bar * 100}%`, background: 'linear-gradient(90deg, var(--brand-blue) 0%, var(--brand-teal) 100%)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSlider />

      {/* CTA BAND — race-finish */}
      <section style={{ padding: '100px 0', borderTop: '1px solid #2A2A2A', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, transparent 0, transparent 40px, rgba(255,77,20,0.06) 40px, rgba(255,77,20,0.06) 80px)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', color: 'var(--brand-blue)' }}>§ 07 · START</div>
            <h3 className="display-2" style={{ margin: '16px 0 0', color: '#fff' }}>FIRST WEEK FREE. LIFETIME WIN-RATE.</h3>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-lg" onClick={() => onNav('tier1')}>{ctaPrimary.toUpperCase()}</button>
            <button className="btn btn-outline btn-lg" style={{ color: '#fff', borderColor: '#fff' }} onClick={() => onNav('library')}>TOUR VAULT</button>
          </div>
        </div>
      </section>

      <Footer onNav={onNav} />
    </div>
  );
}

Object.assign(window, { HomeV4, HomeV5 });
