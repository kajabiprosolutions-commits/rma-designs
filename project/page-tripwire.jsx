/* Tripwire — 15-Minute Fix product catalog
   Real product menu from client doc ("Tier 1 Launch materials")
   A: $27 Flash Sale (AI Prompt Library — the tripwire entry point)
   B: Full 10-product Fortress Pricing Menu */

const T1_FORTRESS_MENU = [
  { code: 'L01', title: 'Listing Presentation & Script', price: 249, strategy: 'High-End Anchor — Win the Listing', tier: 'anchor' },
  { code: 'B01', title: 'Buyer Presentation & Loyalty', price: 249, strategy: 'Problem Solver — Post-NAR Settlement', tier: 'anchor' },
  { code: 'S01', title: 'Seamless Transaction Bundle', price: 199, strategy: 'Combined Buyer/Seller Roadmaps (ROI: Time)', tier: 'pro' },
  { code: 'P01', title: 'Strategic Pricing Toolkit', price: 199, strategy: 'Expert Positioning (ROI: Price Reductions)', tier: 'pro' },
  { code: 'PL01', title: 'Pre-Listing Mastery Packet', price: 149, strategy: 'Professionalism — The "Pre-Game" Win', tier: 'standard' },
  { code: 'C01', title: 'Closing & Follow-Up System', price: 99, strategy: 'Referrals (ROI: Future Business)', tier: 'standard' },
  { code: 'AI01', title: 'AI Prompt Master Library', price: 79, strategy: 'Modern Entry Point (Regular Price)', tier: 'entry' },
  { code: 'TW01', title: 'Flash Sale: AI Prompt Library', price: 27, strategy: 'The Tripwire — First 15 minutes on site', tier: 'tripwire', flash: true },
  { code: 'LM01', title: '"All About You" Form', price: 0, strategy: 'Free Lead Magnet — Collects the Email', tier: 'free' },
];

function TripwirePage({ tweaks, onNav }) {
  const [variant, setVariant] = useState('A');
  const variants = [
    { id: 'A', key: 'A', label: '$27 Flash Sale (Tripwire)' },
    { id: 'B', key: 'B', label: 'Full Toolkit Menu' },
  ];
  return (
    <div data-screen-label="Tripwire · 15-Minute Fix">
      <VariantStrip variants={variants} value={variant} onChange={setVariant} />
      {variant === 'A' && <Tw_Flash onNav={onNav} />}
      {variant === 'B' && <Tw_Menu onNav={onNav} />}
      <Footer onNav={onNav} />
    </div>
  );
}

function Tw_Flash({ onNav }) {
  return (
    <section className="section">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'flex-start' }}>
        <div>
          <Placeholder label="ai prompt master library" ratio="16/10" corner="TW01" />
          <div style={{ marginTop: 32 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', background: 'var(--brand-blue)', color: 'var(--bone)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase' }}>Flash Sale · 72 hours</div>
            <h1 className="display-1" style={{ marginTop: 16, marginBottom: 24 }}>AI Prompt Master Library</h1>
            <p className="lede" style={{ marginBottom: 24 }}>The exact AI prompt library Marjorie &amp; Bradley use to do the work of a full team — even when flying solo. Listing descriptions, buyer follow-ups, market updates, and the negotiation framework that protects your commission. Regular price $79. Today: $27.</p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 12 }}>What's inside</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Canva Template Link — instant branding via "Apply Brand Kit"',
                '40+ production-tested AI prompts (listing, buyer, social, ops)',
                'The 15-minute "Hook → Mastery → Bridge" walkthrough video',
                'Quick-reference card — printable, CRM-ready',
                'Lifetime updates — additions ship to your email',
              ].map((it, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, fontSize: 14 }}><span style={{ color: 'var(--brand-teal)' }}>✓</span>{it}</li>
              ))}
            </ul>
          </div>
        </div>
        <aside style={{ position: 'sticky', top: 140, padding: 32, background: 'var(--bone)', border: '1px solid var(--hairline-light)' }}>
          <div className="caption-mono" style={{ color: 'var(--brand-blue)' }}>TW01 · TRIPWIRE</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 12, marginBottom: 4 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 56 }}>$27</span>
            <span className="caption-mono" style={{ textDecoration: 'line-through', color: 'var(--ink-muted)' }}>$79 reg.</span>
          </div>
          <p style={{ fontSize: 13, color: 'var(--ink-muted)', marginBottom: 24 }}>Once you trust us with $27, the mental friction for the $249 Listing Presentation disappears.</p>
          <button className="btn btn-brand btn-arrow" style={{ width: '100%' }}>Buy &amp; Download</button>
          <button className="btn btn-outline" style={{ width: '100%', marginTop: 12 }} onClick={() => onNav('tier2')}>Or join The Academy →</button>
          <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid var(--hairline-light)', fontSize: 12, color: 'var(--ink-muted)', lineHeight: 1.6 }}>
            <div style={{ marginBottom: 8 }}><span className="caption-mono" style={{ color: 'var(--ink)' }}>FORMAT</span><br />Canva Template + Video + PDF</div>
            <div style={{ marginBottom: 8 }}><span className="caption-mono" style={{ color: 'var(--ink)' }}>BY</span><br />Marjorie Adam &amp; Bradley Hanson</div>
            <div><span className="caption-mono" style={{ color: 'var(--ink)' }}>CHECKOUT</span><br />Apple Pay · Google Pay · Stripe</div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Tw_Menu({ onNav }) {
  const grouped = {
    'High-End Anchors': T1_FORTRESS_MENU.filter(p => p.tier === 'anchor'),
    'Pro Toolkits': T1_FORTRESS_MENU.filter(p => p.tier === 'pro'),
    'Standards': T1_FORTRESS_MENU.filter(p => p.tier === 'standard' || p.tier === 'entry'),
    'Entry Point': T1_FORTRESS_MENU.filter(p => p.tier === 'tripwire' || p.tier === 'free'),
  };
  return (
    <>
      <section className="surface-ink" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="container">
          <Eyebrow dark>Tier 1 · The 15-Minute Fix</Eyebrow>
          <h1 className="display-1" style={{ marginTop: 16, color: 'var(--bone)', maxWidth: '14ch' }}>The Fortress <span style={{ color: 'var(--brand-teal)' }}>Pricing Menu.</span></h1>
          <p className="lede lede-on-dark" style={{ marginTop: 24, maxWidth: '64ch' }}>
            Ready-to-use, downloadable systems. Don't spend 40 hours building it — download ours and use it today. Every product ships as a Canva Template Link, so you can click "Apply Brand Kit" and be done in minutes.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          {Object.entries(grouped).map(([groupName, items]) => (
            <div key={groupName} style={{ marginBottom: 64 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 24 }}>
                <h2 className="display-3">{groupName}</h2>
                <span className="caption-mono" style={{ color: 'var(--ink-muted)' }}>{items.length} {items.length === 1 ? 'product' : 'products'}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {items.map(p => (
                  <div key={p.code} style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto auto', gap: 24, padding: '24px 0', borderTop: '1px solid var(--hairline-light)', alignItems: 'center' }}>
                    <span className="caption-mono" style={{ color: 'var(--brand-blue)' }}>{p.code}</span>
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18 }}>{p.title}</h4>
                      <span style={{ fontSize: 13, color: 'var(--ink-muted)' }}>{p.strategy}</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      {p.flash && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--brand-blue)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Flash sale</div>}
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28 }}>{p.price === 0 ? 'FREE' : `$${p.price}`}</div>
                    </div>
                    <button className="btn btn-outline btn-sm btn-arrow">{p.price === 0 ? 'Download' : 'Buy'}</button>
                  </div>
                ))}
                <div style={{ borderTop: '1px solid var(--hairline-light)' }} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section surface-bone">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <Eyebrow>Bridge to Tier 2</Eyebrow>
          <h2 className="display-2" style={{ marginTop: 16 }}>"If you like how this one tool changed your week, imagine what 8 months of installation will do for your year."</h2>
          <button className="btn btn-brand btn-arrow" style={{ marginTop: 32 }} onClick={() => onNav('tier2')}>Join The Academy — $300/mo</button>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { TripwirePage });
