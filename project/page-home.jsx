/* Homepage */

// Client taglines (brand guide):
//   Primary: "Real Systems. Real Production. Real Life."
//   Secondary: "By Producers, For Producers."
// CTA language: "Join the Academy" / "Apply for Mastery" / "Install the System"
const HEADLINES = {
  authority: { eyebrow: 'By Producers, For Producers.', main: 'Real Systems. Real Production. Real Life.', lede: '30 years. 2,000+ homes sold. $700M+ in residential volume. Marjorie Adam and Bradley Hanson built RMA to install the exact scripts, frameworks, and operating standards they use in production today.' },
  restrained: { eyebrow: 'Realtor Mastery Academy', main: 'Real Systems. Real Production.', lede: 'A four-tier education and community platform built by active brokers who still close every week. Scripts, systems, and standards — not theory.' },
  direct: { eyebrow: 'By Producers. For Producers.', main: 'Install the system. Close more deals.', lede: 'Stop scrolling for tactics. Get the scripts, checklists, and operating systems active $140M+ producers use to run their teams every day.' },
};

function TestimonialSlider() {
  // NOTE: Real testimonial quotes pending from client (Angela Tauscher, Chaney Compher confirmed as names).
  // Until quotes are supplied, slides use role-only attribution rather than fabricating named brokerages.
  const data = [
    {
      quote: '[ Pending client quote — ]',
      highlight: 'Angela Tauscher',
      tail: ' · Top Producer · Northern Virginia',
      name: 'ANGELA TAUSCHER', role: 'Top Producer · Tier 3 Member',
      portrait: 'testimonial — top producer',
    },
    {
      quote: '[ Pending client quote — ]',
      highlight: 'Chaney Compher',
      tail: ' · Producing Agent · DMV Metro',
      name: 'CHANEY COMPHER', role: 'Producing Agent · Tier 2 Member',
      portrait: 'agent on listing appointment',
    },
    {
      quote: 'Three months in,',
      highlight: 'we doubled our listing-to-appointment conversion',
      tail: '. The contract-to-close SOP eliminated the chaos in our team. We finally feel like we run a business.',
      name: 'TEAM LEAD', role: 'Tier 3 Member · 6 years in market',
      portrait: 'team lead at office',
    },
    {
      quote: 'I had been "coached" before. RMA is the first program where',
      highlight: 'the founders are still in the field, closing this week',
      tail: '. The material is dated by days, not years. That changes everything.',
      name: 'TOP PRODUCER', role: 'Tier 4 Member · 12 years in market',
      portrait: 'agent on listing appointment',
    },
    {
      quote: 'My team uses the Vault every single day.',
      highlight: 'It paid for itself in the first 11 days',
      tail: ' from one objection script alone. We renewed for two years on the spot.',
      name: 'BROKER-OWNER', role: 'Tier 4 Member · Team of 14',
      portrait: 'broker portrait — confident',
    },
  ];
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI(x => (x + 1) % data.length), 7500);
    return () => clearInterval(t);
  }, [paused, data.length]);

  const t = data[i];
  return (
    <section
      className="section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 40, gap: 24 }}>
          <Eyebrow>Member stories</Eyebrow>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <span className="caption-mono">{String(i + 1).padStart(2, '0')} <span style={{ color: 'var(--hairline-light)', margin: '0 6px' }}>/</span> {String(data.length).padStart(2, '0')}</span>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                onClick={() => setI((i - 1 + data.length) % data.length)}
                aria-label="Previous"
                style={{ width: 44, height: 44, border: '1px solid var(--hairline-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .25s var(--ease)', color: 'var(--ink)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--bone)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)'; }}
              >←</button>
              <button
                onClick={() => setI((i + 1) % data.length)}
                aria-label="Next"
                style={{ width: 44, height: 44, border: '1px solid var(--hairline-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .25s var(--ease)', color: 'var(--ink)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--bone)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)'; }}
              >→</button>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 64, alignItems: 'center' }} className="hero-grid">
          <div style={{ position: 'relative' }}>
            {data.map((d, idx) => (
              <div key={idx} style={{
                position: idx === i ? 'relative' : 'absolute',
                inset: idx === i ? 'auto' : 0,
                opacity: idx === i ? 1 : 0,
                transform: idx === i ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity .55s var(--ease), transform .55s var(--ease)',
                pointerEvents: idx === i ? 'auto' : 'none',
              }}>
                <Placeholder label={d.portrait} ratio="4/5" corner={`0${idx + 1} / Member`} />
              </div>
            ))}
          </div>

          <div style={{ position: 'relative', minHeight: 440, paddingBottom: 56 }}>
            {data.map((d, idx) => (
              <div key={idx} style={{
                position: idx === i ? 'relative' : 'absolute',
                inset: idx === i ? 'auto' : 0,
                opacity: idx === i ? 1 : 0,
                transform: idx === i ? 'translateX(0)' : 'translateX(16px)',
                transition: 'opacity .55s var(--ease), transform .55s var(--ease)',
                pointerEvents: idx === i ? 'auto' : 'none',
              }}>
                <blockquote className="display-3" style={{ margin: 0, fontWeight: 600, fontSize: 'clamp(22px, 2.4vw, 32px)', lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                  &ldquo;{d.quote} <span className="text-bronze">{d.highlight}</span>{d.tail}&rdquo;
                </blockquote>
                <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 40, height: 1, background: 'var(--brand-blue)' }} />
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, letterSpacing: '0.04em' }}>{d.name}</div>
                    <div className="caption-mono">{d.role}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Square dots (matches original styling) */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, display: 'flex', gap: 8 }}>
              {data.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  style={{
                    width: 36,
                    height: 36,
                    border: '1px solid var(--hairline-light)',
                    cursor: 'pointer',
                    opacity: idx === i ? 1 : 0.4,
                    background: idx === i ? 'var(--ink)' : 'transparent',
                    transition: 'all .25s var(--ease)',
                    padding: 0,
                  }}
                  onMouseEnter={(e) => { if (idx !== i) e.currentTarget.style.opacity = 0.7; }}
                  onMouseLeave={(e) => { if (idx !== i) e.currentTarget.style.opacity = 0.4; }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage({ tweaks, onNav }) {
  const theme = useTheme();
  const dark = tweaks.darkHero;
  const h = HEADLINES[tweaks.voice] || HEADLINES.authority;
  const ctaPrimary = tweaks.ctaCopy === 'apply' ? 'Apply for Mastery' : tweaks.ctaCopy === 'join' ? 'Join the Academy' : 'Install the System';
  const ctaSecondary = tweaks.ctaCopy === 'apply' ? 'View Programs' : tweaks.ctaCopy === 'join' ? 'See Tiers' : 'Tour the Platform';

  if (theme === 'v2') return <HomeV2 h={h} ctaPrimary={ctaPrimary} ctaSecondary={ctaSecondary} onNav={onNav} />;
  if (theme === 'v3') return <HomeV3 h={h} ctaPrimary={ctaPrimary} ctaSecondary={ctaSecondary} onNav={onNav} />;
  if (theme === 'v4') return <HomeV4 h={h} ctaPrimary={ctaPrimary} ctaSecondary={ctaSecondary} onNav={onNav} />;
  if (theme === 'v5') return <HomeV5 h={h} ctaPrimary={ctaPrimary} ctaSecondary={ctaSecondary} onNav={onNav} />;

  return (
    <div data-screen-label="Home">
      {/* HERO */}
      <section className={dark ? 'surface-ink' : 'surface-paper'} style={{ paddingTop: 80, paddingBottom: 100, position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 0.85fr)', gap: 80, alignItems: 'end' }} className="hero-grid">
            <div>
              <Eyebrow dark={dark}>{h.eyebrow}</Eyebrow>
              <h1 className="display-1" style={{ marginTop: 24, color: dark ? 'var(--bone)' : 'var(--ink-text)' }}>
                {h.main.split('.').slice(0,1).join('.')}.
                <span style={{ display: 'block', color: 'var(--bronze)', fontStyle: 'normal' }}>
                  {h.main.split('.').slice(1).join('.').trim() || ''}
                </span>
              </h1>
              <p className={`lede ${dark ? 'lede-on-dark' : ''}`} style={{ marginTop: 32, fontSize: 19 }}>
                {h.lede}
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 40, flexWrap: 'wrap' }}>
                <button className={dark ? 'btn btn-bronze btn-lg btn-arrow' : 'btn btn-primary btn-lg btn-arrow'} onClick={() => onNav('tier1')}>{ctaPrimary}</button>
                <button className={dark ? 'btn btn-ghost-dark btn-lg' : 'btn btn-outline btn-lg'} onClick={() => onNav('library')}>{ctaSecondary}</button>
              </div>
              <div style={{ display: 'flex', gap: 32, marginTop: 56, flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: dark ? 'var(--bone)' : 'var(--ink)' }}>$840M+</div>
                  <div className="stat-label">Combined Volume</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: dark ? 'var(--bone)' : 'var(--ink)' }}>2,000+</div>
                  <div className="stat-label">Homes Closed</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: dark ? 'var(--bone)' : 'var(--ink)' }}>40 yrs</div>
                  <div className="stat-label">Active Production</div>
                </div>
              </div>
            </div>
            <div style={{ position: 'relative' }} className="hero-media">
              <div className="frame">
                <div style={{ aspectRatio: '4/5', overflow: 'hidden', position: 'relative', background: 'var(--ink)' }}>
                  <img src="assets/marjorie-portrait.jpg" alt="Marjorie Adam" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: dark ? 'brightness(0.92) contrast(1.05)' : 'none' }} />
                  <span style={{ position: 'absolute', top: 12, left: 12, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--warm-white)', background: 'rgba(14,22,32,0.55)', padding: '4px 8px', textTransform: 'uppercase' }}>01 / Marjorie Adam</span>
                </div>
              </div>
              <div style={{ position: 'absolute', bottom: -40, left: -40, width: 220, transform: 'rotate(-2deg)' }}>
                <div className="frame" style={{ background: 'var(--ink)' }}>
                  <div style={{ aspectRatio: '4/5', overflow: 'hidden', position: 'relative' }}>
                    <img src="assets/bradley-portrait.jpg" alt="Bradley Hanson" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    <span style={{ position: 'absolute', top: 8, left: 8, fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', color: 'var(--warm-white)', background: 'rgba(14,22,32,0.55)', padding: '3px 6px', textTransform: 'uppercase' }}>02 / Bradley</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hairline" style={{ position: 'absolute', bottom: 0, background: dark ? 'var(--hairline-dark)' : 'var(--hairline-light)' }} />
      </section>

      {/* MARQUEE / CREDENTIALS — infinite slider */}
      <section className={dark ? 'surface-ink' : 'surface-bone'} style={{ padding: '36px 0', borderTop: dark ? '1px solid var(--hairline-dark)' : '1px solid var(--hairline-light)', borderBottom: dark ? '1px solid var(--hairline-dark)' : '1px solid var(--hairline-light)', overflow: 'hidden' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <div className="caption-mono" style={{ color: dark ? 'var(--bone-muted)' : null, flexShrink: 0, paddingRight: 24, borderRight: dark ? '1px solid var(--hairline-dark)' : '1px solid var(--hairline-light)' }}>As featured in</div>
          <div className="press-marquee" data-dark={dark ? 'true' : 'false'}>
            <div className="press-track">
              {[...Array(2)].flatMap((_, dup) => (
                ['REAL TRENDS', 'INMAN', 'HOUSINGWIRE', 'RISMEDIA', 'THE CLOSE', 'BROKER AGENT', 'REALTOR.COM', 'KW NEWS'].map((name, i) => (
                  <div key={`${dup}-${i}`} className="press-item">{name}</div>
                ))
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <Eyebrow>Our Position</Eyebrow>
          <p className="display-3" style={{ marginTop: 24, fontWeight: 600, fontSize: 'clamp(28px, 3.2vw, 44px)', lineHeight: 1.2, letterSpacing: '-0.015em' }}>
            Most coaching teaches you what to think. <span className="text-bronze">RMA installs what to do</span> — the same scripts, processes, and standards we use to close hundreds of transactions a year, while you read this.
          </p>
          <div style={{ marginTop: 40, display: 'inline-flex', alignItems: 'center', gap: 16, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-muted)', letterSpacing: '0.1em' }}>
            <div style={{ width: 40, height: 1, background: 'var(--bronze)' }} />
            MARJORIE ADAM &amp; BRADLEY HANSON · ACTIVE BROKERS
          </div>
        </div>
      </section>

      {/* OUTCOMES GRID */}
      <section className="section surface-bone">
        <div className="container">
          <SectionHeader
            eyebrow="What changes inside"
            title="The four levers we install in every member."
            lede="Each is structured, scripted, and measurable. No motivation. No theory. Just operating standards you can run on a Tuesday morning."
          />
          <div className="grid-2" style={{ gap: 1, background: 'var(--hairline-light)', border: '1px solid var(--hairline-light)' }}>
            {[
              { n: '01', t: 'Listing Domination', d: 'The 7-step listing presentation Marjorie has refined across 2,000+ homes. Including objection scripts for over-pricing, dual-agency, and "we\'re going to think about it."' },
              { n: '02', t: 'Operational Clarity', d: 'Bradley\'s contract-to-close framework. Transaction coordinator SOPs, vendor stacks, and the dashboards that turn chaos into a predictable pipeline.' },
              { n: '03', t: 'Lead Conversion', d: 'Cold call frameworks, ISA scripts, follow-up cadences, and the exact texts our team sends 6 hours, 6 days, and 6 months out. Tested daily.' },
              { n: '04', t: 'Team & Recruiting', d: 'How to recruit producers (not just licensees), structure splits, and build a brokerage that runs without you in the middle of every deal.' },
            ].map(o => (
              <div key={o.n} style={{ background: 'var(--paper)', padding: 'clamp(28px, 3vw, 48px)' }}>
                <div className="eyebrow-mono">{o.n} / Lever</div>
                <h3 className="display-3" style={{ marginTop: 16, fontWeight: 700 }}>{o.t}</h3>
                <p style={{ marginTop: 16, color: 'var(--ink-muted)', maxWidth: '46ch' }}>{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIER OVERVIEW */}
      <TierOverview onNav={onNav} />

      {/* FEATURED OUTCOMES */}
      <section className="section surface-ink">
        <div className="container">
          <SectionHeader
            dark
            eyebrow="What members produce"
            title="Outcomes from active members."
            lede="Sample of self-reported member outcomes. Aggregate, not guaranteed. We don't sell potential — we sell the system."
          />
          <div className="grid-3">
            {[
              { num: '+47%', label: 'Avg. listing conversion lift, 90 days', sub: 'Across 218 members tracked Q1 \'26' },
              { num: '$2.1M', label: 'Avg. additional GCI, year one', sub: 'Top quartile of Tier 2+ members' },
              { num: '14 hrs', label: 'Reclaimed per week', sub: 'After installing the C2C framework' },
            ].map(o => (
              <div key={o.label} style={{ borderTop: '1px solid var(--hairline-dark)', paddingTop: 32 }}>
                <div className="stat-num" style={{ color: 'var(--bone)' }}>{o.num}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, color: 'var(--bone)', marginTop: 16, letterSpacing: '-0.005em' }}>{o.label}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bone-muted)', marginTop: 8, letterSpacing: '0.06em' }}>{o.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL — slider */}
      <TestimonialSlider />

      {/* CTA BAND */}
      <section className="section-sm surface-ink" style={{ borderTop: '1px solid var(--hairline-dark)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
          <div>
            <Eyebrow dark>Begin</Eyebrow>
            <h3 className="display-2" style={{ color: 'var(--bone)', marginTop: 12, maxWidth: 680 }}>Start with The Portal — free. Upgrade when the system earns it.</h3>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="btn btn-bronze btn-lg btn-arrow" onClick={() => onNav('tier1')}>{ctaPrimary}</button>
            <button className="btn btn-ghost-dark btn-lg" onClick={() => onNav('library')}>Tour the Vault</button>
          </div>
        </div>
      </section>

      <Footer onNav={onNav} />

      <style>{`
        @media (max-width: 920px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-media { max-width: 480px; }
        }
      `}</style>
    </div>
  );
}

function TierOverview({ onNav }) {
  const tiers = [
    { id: '01', name: 'The Portal', tag: 'Public · Free', price: 'Free', desc: 'Search the entire library. Pay-per-item access to scripts and tools as you need them.', features: ['Full library search', 'Pay-per-item downloads', 'Weekly market briefing'], cta: 'Create Account' },
    { id: '02', name: 'The Academy', tag: '8-Month Course', price: '$497/mo', desc: 'Structured 8-month curriculum. Vault assets unlock as you progress through each month.', features: ['Full 8-month curriculum', 'Dripped Vault access', 'Group coaching, weekly'], cta: 'Enroll', featured: true },
    { id: '03', name: 'Growth Circle', tag: 'Advanced', price: '$1,497/mo', desc: 'Immediate access to the full script library, tools, and a peer group of producers doing $5M+.', features: ['Full Vault unlocked', 'Producer-only community', 'Quarterly intensives'], cta: 'Apply' },
    { id: '04', name: 'The Boardroom', tag: 'Invitation Only', price: 'By Application', desc: 'God-mode. Direct access to Marjorie & Bradley. Quarterly retreats. Curated room of $10M+ producers.', features: ['Everything unlocked', 'Direct founder access', '4 retreats / year'], cta: 'Request Invitation' },
  ];

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Four tiers · One system"
          title="Choose how deep you go."
          lede="Every tier shares the same operating system. The only difference is depth, access, and proximity."
        />
        <div className="grid-4" style={{ gap: 0, border: '1px solid var(--hairline-light)' }}>
          {tiers.map((t, i) => (
            <div
              key={t.id}
              style={{
                padding: 'clamp(24px, 2.4vw, 36px)',
                borderRight: i < tiers.length - 1 ? '1px solid var(--hairline-light)' : 'none',
                background: t.featured ? 'var(--ink)' : 'var(--paper)',
                color: t.featured ? 'var(--bone)' : 'var(--ink)',
                position: 'relative',
                display: 'flex', flexDirection: 'column',
              }}
              className="tier-cell"
            >
              <div className="eyebrow-mono" style={{ color: t.featured ? 'var(--bronze-soft)' : 'var(--ink-muted)' }}>Tier {t.id}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, letterSpacing: '-0.015em', margin: '12px 0 4px' }}>{t.name}</h3>
              <div className="caption-mono" style={{ color: t.featured ? 'var(--bone-muted)' : 'var(--ink-muted)' }}>{t.tag}</div>
              <div style={{ marginTop: 24, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22 }}>{t.price}</div>
              <p style={{ marginTop: 16, fontSize: 14, color: t.featured ? 'var(--bone-muted)' : 'var(--ink-muted)', minHeight: 80 }}>{t.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 32px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {t.features.map(f => (
                  <li key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13 }}>
                    <span style={{ color: 'var(--bronze)', fontWeight: 700 }}>+</span>{f}
                  </li>
                ))}
              </ul>
              <button
                className={t.featured ? 'btn btn-bronze btn-arrow' : 'btn btn-outline btn-arrow'}
                style={{ marginTop: 'auto', width: '100%', justifyContent: 'space-between' }}
                onClick={() => onNav('tier1')}
              >{t.cta}</button>
              {t.featured && (
                <div style={{
                  position: 'absolute', top: 0, right: 0,
                  background: 'var(--bronze)', color: 'var(--warm-white)',
                  fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em',
                  padding: '6px 12px',
                }}>MOST POPULAR</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 920px) {
          .tier-cell { border-right: none !important; border-bottom: 1px solid var(--hairline-light); }
        }
      `}</style>
    </section>
  );
}

/* ============ V2 — ARCHITECTURAL HOMEPAGE ============ */
function HomeV2({ h, ctaPrimary, ctaSecondary, onNav }) {
  return (
    <div data-screen-label="Home · V2 Architect">
      <section style={{ paddingTop: 56, paddingBottom: 0, borderBottom: '1px solid var(--ink)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 1fr', gap: 32, alignItems: 'stretch', minHeight: '70vh' }} className="hero-grid">
            <div style={{ borderRight: '1px solid var(--hairline-light)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '24px 0' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', color: 'var(--brand-teal)', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>RMA / SYSTEM · 2026 · INDEX 01</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', color: 'var(--ink-muted)' }}>↓</div>
            </div>
            <div style={{ padding: '32px 0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div className="caption-mono" style={{ color: 'var(--brand-teal)' }}>01 / Position</div>
              <div>
                <h1 className="display-1" style={{ marginBottom: 32 }}>{h.main}</h1>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, paddingTop: 32, borderTop: '1px solid var(--ink)' }}>
                  {[
                    { l: 'Combined Volume', v: '$840M+' },
                    { l: 'Homes Closed', v: '2,000+' },
                    { l: 'Active Production', v: '40 yrs' },
                    { l: 'Members', v: '847' },
                  ].map(s => (
                    <div key={s.l}>
                      <div className="caption-mono" style={{ color: 'var(--brand-teal)', marginBottom: 6 }}>{s.l}</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, letterSpacing: '-0.02em' }}>{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ padding: '32px 0', display: 'flex', flexDirection: 'column' }}>
              <div className="caption-mono" style={{ color: 'var(--brand-teal)', marginBottom: 16 }}>02 / Founders</div>
              <Placeholder label="marjorie at listing appointment" ratio="4/5" corner="01 / Marjorie Adam" style={{ flex: 1, minHeight: 0 }} />
              <p style={{ fontSize: 14, color: 'var(--ink-muted)', marginTop: 16, lineHeight: 1.6 }}>{h.lede}</p>
              <div style={{ display: 'flex', gap: 8, marginTop: 24 }}>
                <button className="btn btn-primary" onClick={() => onNav('tier1')}>{ctaPrimary} →</button>
                <button className="btn btn-outline" onClick={() => onNav('library')}>{ctaSecondary}</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderBottom: '1px solid var(--ink)', padding: '24px 0', background: 'var(--bone)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 16, alignItems: 'center' }}>
          <div className="caption-mono" style={{ color: 'var(--brand-teal)' }}>FEATURED IN</div>
          {['REAL TRENDS', 'INMAN', 'HOUSINGWIRE', 'RISMEDIA', 'THE CLOSE', 'BROKER AGENT', 'KW NEWS'].map(n => (
            <div key={n} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', color: 'var(--ink)' }}>{n}</div>
          ))}
        </div>
      </section>

      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr', gap: 32 }}>
            <div className="caption-mono" style={{ color: 'var(--brand-teal)' }}>§ 02 / Position</div>
            <div style={{ gridColumn: '2 / 4' }}>
              <p className="display-3" style={{ fontWeight: 600, fontSize: 'clamp(28px, 3.4vw, 44px)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
                Most coaching teaches you what to think. <span style={{ color: 'var(--brand-teal)' }}>RMA installs what to do</span> — the same scripts, processes, and standards we use to close hundreds of transactions a year, while you read this.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--ink)', borderBottom: '1px solid var(--ink)' }}>
        <div className="container" style={{ padding: '64px 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 32, marginBottom: 48 }}>
            <div className="caption-mono" style={{ color: 'var(--brand-teal)' }}>§ 03 / Levers</div>
            <h2 className="display-2">The four levers we install in every member.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {[
              { n: '01', t: 'Listing Domination', d: 'The 7-step listing presentation refined across 2,000+ homes.' },
              { n: '02', t: 'Operational Clarity', d: 'Contract-to-close framework. TC SOPs. Vendor stacks.' },
              { n: '03', t: 'Lead Conversion', d: 'Cold call frameworks, ISA scripts, the 6/6/6 cadence.' },
              { n: '04', t: 'Team & Recruiting', d: 'Recruit producers, structure splits, build a brokerage that runs.' },
            ].map((o, i) => (
              <div key={o.n} style={{ padding: 32, borderRight: i < 3 ? '1px solid var(--ink)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 64, color: 'var(--brand-teal)', letterSpacing: '-0.03em', marginBottom: 16 }}>{o.n}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, marginBottom: 12 }}>{o.t}</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.6 }}>{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TierOverview onNav={onNav} />

      <section className="surface-ink" style={{ padding: '120px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr 1fr', gap: 32 }}>
            <div className="caption-mono" style={{ color: 'var(--brand-teal)' }}>§ 05 / Outcomes</div>
            {[
              { num: '+47%', label: 'Avg. listing lift, 90 days' },
              { num: '$2.1M', label: 'Avg. added GCI, yr one' },
              { num: '14 hrs', label: 'Reclaimed per week' },
            ].map(o => (
              <div key={o.label} style={{ borderLeft: '1px solid var(--hairline-dark)', paddingLeft: 24 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 64, color: 'var(--brand-teal)', letterSpacing: '-0.03em' }}>{o.num}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--bone-muted)', marginTop: 12 }}>{o.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSlider />

      <section style={{ borderTop: '1px solid var(--ink)', padding: '64px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '120px 1fr auto', gap: 32, alignItems: 'center' }}>
          <div className="caption-mono" style={{ color: 'var(--brand-teal)' }}>§ 07 / Begin</div>
          <h3 className="display-2" style={{ maxWidth: 720 }}>Start with The Portal — free. Upgrade when the system earns it.</h3>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn btn-primary btn-lg" onClick={() => onNav('tier1')}>{ctaPrimary} →</button>
          </div>
        </div>
      </section>

      <Footer onNav={onNav} />
    </div>
  );
}

/* ============ V3 — CINEMATIC HOMEPAGE ============ */
function HomeV3({ h, ctaPrimary, ctaSecondary, onNav }) {
  return (
    <div data-screen-label="Home · V3 Cinema" style={{ background: '#0B121C', color: 'var(--bone)' }}>
      {/* Full-bleed hero */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="assets/marjorie-portrait.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', filter: 'brightness(0.55) saturate(0.85)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,18,28,0.4) 0%, rgba(11,18,28,0.3) 50%, rgba(11,18,28,0.98) 100%)' }} />
        </div>
        <span className="v3-side-label">RMA · 2026 / The System</span>
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingBottom: 100, paddingTop: 200 }}>
          <Eyebrow mono>{h.eyebrow}</Eyebrow>
          <h1 className="display-1" style={{ marginTop: 32, maxWidth: '14ch', color: 'var(--bone)' }}>{h.main}</h1>
          <p style={{ marginTop: 32, fontSize: 22, lineHeight: 1.5, maxWidth: 640, color: 'rgba(245,241,234,0.85)' }}>{h.lede}</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 48, flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-lg" onClick={() => onNav('tier1')}>{ctaPrimary} →</button>
            <button className="btn btn-outline btn-lg" onClick={() => onNav('library')}>{ctaSecondary}</button>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 32, right: 32, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', color: 'rgba(245,241,234,0.5)' }}>SCROLL ↓</div>
      </section>

      {/* Stat band */}
      <section style={{ padding: '100px 0', borderBottom: '1px solid rgba(245,241,234,0.08)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
          {[
            { num: '$840M+', label: 'Combined Volume' },
            { num: '2,000+', label: 'Homes Closed' },
            { num: '40 yrs', label: 'Active Production' },
            { num: '847', label: 'Members' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 56, color: 'var(--brand-teal)', letterSpacing: '-0.03em' }}>{s.num}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,241,234,0.55)', marginTop: 12 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Manifesto — center stage */}
      <section style={{ padding: '160px 0', position: 'relative' }}>
        <span className="v3-side-label">§ 02 / Position</span>
        <div className="container" style={{ maxWidth: 1080, margin: '0 auto', textAlign: 'center' }}>
          <Eyebrow mono>Our position</Eyebrow>
          <p className="display-2" style={{ marginTop: 32, fontWeight: 600, color: 'var(--bone)' }}>
            Most coaching teaches you what to think.
            <span style={{ display: 'block', color: 'var(--brand-teal)', marginTop: 8 }}>RMA installs what to do.</span>
          </p>
        </div>
      </section>

      {/* Levers — vertical cinematic cards */}
      <section style={{ padding: '160px 0', borderTop: '1px solid rgba(245,241,234,0.08)' }}>
        <div className="container">
          <Eyebrow mono>§ 03 / Levers</Eyebrow>
          <h2 className="display-2" style={{ marginTop: 16, marginBottom: 80, maxWidth: 880 }}>The four levers we install in every member.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { n: '01', t: 'Listing Domination', d: 'The 7-step listing presentation Marjorie has refined across 2,000+ homes.', img: 'modernHome' },
              { n: '02', t: 'Operational Clarity', d: 'Contract-to-close framework. TC SOPs. Vendor stacks. Dashboards that turn chaos into pipeline.', img: 'deskOffice' },
              { n: '03', t: 'Lead Conversion', d: 'Cold call frameworks. ISA scripts. The 6/6/6 follow-up cadence — tested daily.', img: 'phoneCall' },
              { n: '04', t: 'Team & Recruiting', d: 'Recruit producers (not licensees). Structure splits. Build a brokerage that runs without you.', img: 'meetingRoom' },
            ].map((o, i) => (
              <div key={o.n} style={{ display: 'grid', gridTemplateColumns: i % 2 ? '1.4fr 1fr' : '1fr 1.4fr', gap: 64, alignItems: 'center', padding: '48px 0', borderBottom: '1px solid rgba(245,241,234,0.06)' }}>
                {i % 2 === 0 ? (
                  <>
                    <Placeholder label={o.img === 'modernHome' ? 'modern home interior' : o.img === 'deskOffice' ? 'agent at desk' : o.img === 'phoneCall' ? 'agent on phone call' : 'team meeting'} ratio="16/10" />
                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.2em', color: 'var(--brand-teal)' }}>{o.n} / Lever</div>
                      <h3 className="display-3" style={{ marginTop: 16, fontWeight: 700, color: 'var(--bone)' }}>{o.t}</h3>
                      <p style={{ marginTop: 16, fontSize: 18, lineHeight: 1.6, color: 'rgba(245,241,234,0.65)' }}>{o.d}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.2em', color: 'var(--brand-teal)' }}>{o.n} / Lever</div>
                      <h3 className="display-3" style={{ marginTop: 16, fontWeight: 700, color: 'var(--bone)' }}>{o.t}</h3>
                      <p style={{ marginTop: 16, fontSize: 18, lineHeight: 1.6, color: 'rgba(245,241,234,0.65)' }}>{o.d}</p>
                    </div>
                    <Placeholder label={o.img === 'modernHome' ? 'modern home interior' : o.img === 'deskOffice' ? 'agent at desk' : o.img === 'phoneCall' ? 'agent on phone call' : 'team meeting'} ratio="16/10" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <TierOverview onNav={onNav} />

      <section style={{ padding: '120px 0', borderTop: '1px solid rgba(245,241,234,0.08)' }}>
        <div className="container">
          <Eyebrow mono>§ 05 / Outcomes</Eyebrow>
          <h2 className="display-2" style={{ marginTop: 16, marginBottom: 80 }}>What members produce.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {[
              { num: '+47%', label: 'Avg. listing conversion lift', sub: '90 days · 218 members tracked Q1 \'26' },
              { num: '$2.1M', label: 'Avg. additional GCI', sub: 'Year one · Top quartile Tier 2+' },
              { num: '14 hrs', label: 'Reclaimed per week', sub: 'After installing C2C framework' },
            ].map(o => (
              <div key={o.label} style={{ background: 'rgba(245,241,234,0.03)', border: '1px solid rgba(245,241,234,0.08)', borderRadius: 12, padding: 40 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 72, color: 'var(--brand-teal)', letterSpacing: '-0.03em', lineHeight: 0.95 }}>{o.num}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 600, marginTop: 24, color: 'var(--bone)' }}>{o.label}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(245,241,234,0.5)', marginTop: 12, letterSpacing: '0.08em' }}>{o.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSlider />

      <section style={{ padding: '140px 0', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(245,241,234,0.08)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 50%, rgba(63,168,166,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
          <Eyebrow mono>Begin</Eyebrow>
          <h3 className="display-2" style={{ marginTop: 24, color: 'var(--bone)' }}>Start with The Portal — free.<br/>Upgrade when the system earns it.</h3>
          <div style={{ display: 'flex', gap: 12, marginTop: 48, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-lg" onClick={() => onNav('tier1')}>{ctaPrimary} →</button>
            <button className="btn btn-outline btn-lg" onClick={() => onNav('library')}>Tour the Vault</button>
          </div>
        </div>
      </section>

      <Footer onNav={onNav} />
    </div>
  );
}

Object.assign(window, { HomePage });
