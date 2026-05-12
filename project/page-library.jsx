/* The Vault — three desktop directions to compare */

const VAULT_DATA = [
  { id: 'v01', tag: 'Cold Call', t: 'The 32-second open', sub: 'Marjorie\'s exact opening on a recorded FSBO call', tier: 1, locked: false, type: 'Script', mins: 4, fav: true, hot: true, plays: 2840, instructor: 'Marjorie' },
  { id: 'v02', tag: 'Listing', t: 'The pre-frame', sub: 'How the appointment is won before you arrive', tier: 1, locked: false, type: 'Script', mins: 6, fav: true, plays: 1920, instructor: 'Marjorie' },
  { id: 'v03', tag: 'Objection', t: 'Commission is too high', sub: 'Two-column reframe — works on 9 of 10 sellers', tier: 1, locked: false, type: 'Script', mins: 8, plays: 4210, instructor: 'Bradley' },
  { id: 'v04', tag: 'Listing', t: 'The 7-step listing presentation', sub: 'The deck Marjorie has used on 1,800+ listings', tier: 2, locked: true, type: 'Framework', mins: 24, plays: 3120, instructor: 'Marjorie' },
  { id: 'v05', tag: 'Objection', t: 'We want to interview a few more agents', sub: 'How to win the second seat — and the listing', tier: 2, locked: true, type: 'Script', mins: 7, plays: 1840, instructor: 'Marjorie' },
  { id: 'v06', tag: 'C2C', t: 'Contract-to-close SOP', sub: 'The exact 38-step pack Bradley\'s team runs', tier: 3, locked: true, type: 'SOP', mins: 42, hot: true, plays: 1240, instructor: 'Bradley' },
  { id: 'v07', tag: 'Objection', t: 'My Zillow says it\'s worth more', sub: 'How to anchor without losing the seller', tier: 1, locked: false, type: 'Script', mins: 5, plays: 3680, instructor: 'Marjorie' },
  { id: 'v08', tag: 'Recruiting', t: 'Producer recruiting first call', sub: 'The call Bradley used to land $42M producer', tier: 4, locked: true, type: 'Script', mins: 12, plays: 420, instructor: 'Bradley' },
  { id: 'v09', tag: 'Follow-up', t: '6-hour / 6-day / 6-month cadence', sub: 'The cadence for every lead in your database', tier: 2, locked: true, type: 'Framework', mins: 18, plays: 2240, instructor: 'Marjorie' },
  { id: 'v10', tag: 'Buyer', t: 'Buyer agency agreement walkthrough', sub: 'Post-NAR — how to present, charge, sign', tier: 1, locked: false, type: 'Script', mins: 9, hot: true, plays: 5180, instructor: 'Bradley' },
  { id: 'v11', tag: 'Negotiation', t: 'Multiple offer leverage script', sub: 'Use leverage without burning buyer trust', tier: 3, locked: true, type: 'Script', mins: 11, plays: 1820, instructor: 'Marjorie' },
  { id: 'v12', tag: 'Team', t: 'Splits, caps & the producer ladder', sub: 'How Bradley structures comp at every tier', tier: 4, locked: true, type: 'Framework', mins: 36, plays: 380, instructor: 'Bradley' },
  { id: 'v13', tag: 'Listing', t: 'The pricing strategy — three positions', sub: 'When to anchor low, market, or high', tier: 2, locked: true, type: 'Framework', mins: 19, plays: 1640, instructor: 'Marjorie' },
  { id: 'v14', tag: 'Objection', t: '"I want to think about it"', sub: 'The two-question close that ends ambiguity', tier: 1, locked: false, type: 'Script', mins: 6, plays: 4720, instructor: 'Bradley' },
];

const VAULT_CATS = ['All', 'Cold Call', 'Listing', 'Objection', 'Buyer', 'C2C', 'Negotiation', 'Recruiting', 'Team', 'Follow-up'];

function LibraryPage({ tweaks, onNav }) {
  const [variant, setVariant] = useState('streaming');
  return (
    <div data-screen-label="Vault — Member Library">
      <VariantSwitcher variant={variant} setVariant={setVariant} />
      {variant === 'streaming' && <VaultStreaming onNav={onNav} />}
      {variant === 'operator' && <VaultOperator onNav={onNav} />}
      {variant === 'club' && <VaultClub onNav={onNav} />}
      <Footer onNav={onNav} />
    </div>
  );
}

function VariantSwitcher({ variant, setVariant }) {
  const opts = [
    { id: 'streaming', label: 'A · Streaming Hub', sub: 'Cinematic · Netflix-style rails' },
    { id: 'operator', label: 'B · Operator Console', sub: 'Tactical · keyboard-first' },
    { id: 'club', label: 'C · Members Club', sub: 'Editorial · curated archive' },
  ];
  return (
    <div style={{ background: 'var(--warm-white)', borderBottom: '1px solid var(--hairline-light)', padding: '20px 0' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
        <div className="caption-mono" style={{ color: 'var(--ink-muted)' }}>VAULT — DESIGN OPTIONS</div>
        <div style={{ display: 'flex', gap: 0, border: '1px solid var(--hairline-light)' }}>
          {opts.map((o, i) => (
            <button key={o.id}
              onClick={() => setVariant(o.id)}
              style={{
                padding: '10px 16px', textAlign: 'left',
                borderRight: i < opts.length - 1 ? '1px solid var(--hairline-light)' : 'none',
                background: variant === o.id ? 'var(--ink)' : 'transparent',
                color: variant === o.id ? 'var(--bone)' : 'var(--ink)',
                transition: 'all .2s var(--ease)',
                cursor: 'pointer',
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, letterSpacing: '0.06em' }}>{o.label}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 2, opacity: 0.7 }}>{o.sub}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   VARIANT A — STREAMING HUB (cinematic / Netflix / club)
   ============================================================ */
function VaultStreaming({ onNav }) {
  const featured = VAULT_DATA[5]; // C2C SOP — hero
  const continueRow = VAULT_DATA.filter(s => !s.locked).slice(0, 5);
  const newRow = VAULT_DATA.slice(8, 14);
  const lockedRow = VAULT_DATA.filter(s => s.locked).slice(0, 5);

  return (
    <div style={{ background: 'var(--ink)', color: 'var(--bone)' }}>
      {/* HERO — featured asset */}
      <section style={{ position: 'relative', minHeight: '85vh', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', paddingBottom: 80 }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--slate)', opacity: 0.95 }}>
          <Placeholder label="featured asset still — bradley closing scene" ratio="auto" dark style={{ width: '100%', height: '100%', border: 'none' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(14,22,32,0.4) 0%, rgba(14,22,32,0.5) 50%, rgba(14,22,32,0.96) 92%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(14,22,32,0.92) 0%, rgba(14,22,32,0.5) 55%, rgba(14,22,32,0) 100%)' }} />

        <div className="container" style={{ position: 'relative', maxWidth: 720, paddingTop: 64 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--brand-teal)', padding: '4px 8px', border: '1px solid var(--brand-teal)' }}>FEATURED · {featured.code || 'NEW'}</span>
            <span className="caption-mono" style={{ color: 'var(--bone-muted)' }}>{featured.tag.toUpperCase()} · {featured.type.toUpperCase()} · TIER {featured.tier}</span>
          </div>
          <h1 className="display-1" style={{ color: 'var(--bone)', fontSize: 'clamp(40px, 6vw, 84px)' }}>{featured.t}</h1>
          <p style={{ fontSize: 18, color: 'var(--bone-muted)', marginTop: 24, maxWidth: 560, lineHeight: 1.55 }}>{featured.sub}. The most-requested asset in the Vault — used by 1,200+ teams to standardize transactions across 38 checkpoints.</p>

          <div style={{ marginTop: 36, display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-bronze btn-lg" onClick={()=>onNav('lesson')}>▶  Open Asset</button>
            <button className="btn btn-ghost-dark">+ Save to Library</button>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bone-muted)', letterSpacing: '0.1em', marginLeft: 12 }}>● {featured.plays.toLocaleString()} PLAYS · {featured.mins} MIN · {featured.instructor.toUpperCase()}</span>
          </div>
        </div>
      </section>

      {/* RAILS */}
      <div style={{ background: 'var(--ink)', paddingBottom: 80 }}>
        <Rail title="Continue where you left off" subtitle="Picked up by Sarah · 3 days ago" items={continueRow} onNav={onNav} />
        <Rail title="New this week" subtitle="6 just-dropped assets" items={newRow} onNav={onNav} dated />
        <Rail title="Unlock at Tier 3 — Growth Circle" subtitle="142 assets behind your current tier" items={lockedRow} onNav={onNav} locked />
        <Rail title="Most saved by your peers" subtitle="What top producers in your cohort are using" items={[...VAULT_DATA].sort((a,b) => b.plays - a.plays).slice(0, 6)} onNav={onNav} />
      </div>
    </div>
  );
}

function Rail({ title, subtitle, items, onNav, locked, dated }) {
  const scrollerRef = useRef(null);
  const scroll = (dir) => {
    if (scrollerRef.current) scrollerRef.current.scrollBy({ left: dir * 600, behavior: 'smooth' });
  };
  return (
    <section style={{ paddingTop: 56 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 20, gap: 24, flexWrap: 'wrap' }}>
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, letterSpacing: '-0.01em', color: 'var(--bone)' }}>{title}</h3>
          <div className="caption-mono" style={{ color: 'var(--bone-muted)', marginTop: 4 }}>{subtitle}</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => scroll(-1)} aria-label="Scroll left" style={railArrowStyle}>←</button>
          <button onClick={() => scroll(1)} aria-label="Scroll right" style={railArrowStyle}>→</button>
        </div>
      </div>
      <div ref={scrollerRef} style={{ display: 'flex', gap: 16, overflowX: 'auto', scrollSnapType: 'x mandatory', padding: '4px 24px', maxWidth: 'calc(100vw)', scrollbarWidth: 'none' }} className="rail-scroller">
        {items.map(s => <RailCard key={s.id} item={s} onNav={onNav} locked={locked} dated={dated} />)}
      </div>
    </section>
  );
}

const railArrowStyle = {
  width: 38, height: 38, border: '1px solid var(--hairline-dark)', color: 'var(--bone)',
  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
  background: 'transparent', cursor: 'pointer', transition: 'all .2s var(--ease)',
};

function RailCard({ item, onNav, locked, dated }) {
  const [hover, setHover] = useState(false);
  return (
    <a href="#" onClick={(e) => { e.preventDefault(); if (!item.locked) onNav('lesson'); }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        flex: '0 0 320px', scrollSnapAlign: 'start',
        position: 'relative', cursor: item.locked ? 'not-allowed' : 'pointer',
        transition: 'all .3s var(--ease)',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      <div style={{ position: 'relative', aspectRatio: '16/10', background: 'var(--slate)', border: '1px solid var(--hairline-dark)', overflow: 'hidden' }}>
        <Placeholder label={item.t.toLowerCase()} ratio="auto" dark corner={`${item.tag.toUpperCase()} · ${item.mins}M`} style={{ width: '100%', height: '100%', border: 'none' }} />
        {/* Top tags */}
        <div style={{ position: 'absolute', top: 12, right: 12, display: 'flex', gap: 6 }}>
          {item.hot && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', padding: '3px 6px', background: 'var(--brand-grad)', color: 'var(--warm-white)' }}>HOT</span>}
          {item.locked && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', padding: '3px 6px', background: 'rgba(14,22,32,0.85)', color: 'var(--bone-muted)', border: '1px solid var(--hairline-dark)' }}>TIER {item.tier}</span>}
        </div>
        {/* Hover overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(14,22,32,0.96) 100%)', display: 'flex', alignItems: 'flex-end', padding: 16, opacity: hover ? 1 : 0.7, transition: 'opacity .25s var(--ease)' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--bone)', letterSpacing: '-0.01em' }}>{item.t}</div>
          </div>
        </div>
        {/* Hover-revealed play */}
        {hover && !item.locked && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(14,22,32,0.4)' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--brand-grad)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--warm-white)', fontSize: 18, marginLeft: 4 }}>▶</div>
          </div>
        )}
        {item.locked && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(14,22,32,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 44, height: 44, border: '1.5px solid var(--brand-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brand-teal)" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
          </div>
        )}
      </div>
      {/* Below thumb meta */}
      <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="caption-mono" style={{ color: 'var(--brand-teal)', letterSpacing: '0.12em' }}>{item.type.toUpperCase()} · {item.instructor.toUpperCase()}</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'var(--bone)', marginTop: 4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.t}</div>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--bone-muted)', whiteSpace: 'nowrap' }}>
          {dated ? 'NEW' : `● ${(item.plays/1000).toFixed(1)}K`}
        </div>
      </div>
    </a>
  );
}

/* ============================================================
   VARIANT B — OPERATOR CONSOLE (tactical / keyboard-first)
   ============================================================ */
function VaultOperator({ onNav }) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [sortKey, setSortKey] = useState('plays');
  const [selected, setSelected] = useState(null);
  const filtered = VAULT_DATA
    .filter(s => filter === 'All' || s.tag === filter)
    .filter(s => !query || s.t.toLowerCase().includes(query.toLowerCase()) || s.tag.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => sortKey === 'plays' ? b.plays - a.plays : sortKey === 'mins' ? a.mins - b.mins : a.tier - b.tier);

  return (
    <div style={{ background: 'var(--ink)', color: 'var(--bone)', minHeight: 'calc(100vh - 73px)', display: 'flex', flexDirection: 'column' }}>
      {/* COMMAND BAR */}
      <div style={{ borderBottom: '1px solid var(--hairline-dark)', padding: '20px 0', background: '#070C13' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--bone-muted)' }}>
              <span style={{ width: 8, height: 8, borderRadius: 100, background: 'var(--brand-teal)', boxShadow: '0 0 8px var(--brand-teal)' }} />
              <span>VAULT // SARAH-K // TIER 3</span>
            </div>
            <div style={{ flex: 1, minWidth: 280, position: 'relative' }}>
              <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', fontFamily: 'var(--font-mono)', color: 'var(--brand-teal)', fontSize: 13 }}>&gt;</span>
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="search 480 assets · type to filter · esc to clear"
                style={{
                  width: '100%', padding: '14px 80px 14px 36px',
                  background: 'transparent', border: '1px solid var(--hairline-dark)',
                  color: 'var(--bone)', fontFamily: 'var(--font-mono)', fontSize: 13,
                  letterSpacing: '0.04em', outline: 'none',
                }}
              />
              <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: 4 }}>
                {['⌘', 'K'].map(k => <kbd key={k} style={kbdStyle}>{k}</kbd>)}
              </span>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {['↑↓ navigate', '↵ open', '⌘S save'].map(h => (
                <span key={h} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--bone-muted)', letterSpacing: '0.06em' }}>{h}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* LAYOUT: filter rail / table / detail */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '220px 1fr 360px', gap: 0, minHeight: 0 }} className="op-grid">
        {/* Sidebar filters */}
        <aside style={{ borderRight: '1px solid var(--hairline-dark)', padding: 24, display: 'flex', flexDirection: 'column', gap: 28, background: '#0B1220' }}>
          <div>
            <div className="caption-mono" style={{ color: 'var(--bone-muted)', marginBottom: 12 }}>CATEGORY</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {VAULT_CATS.map((c, i) => (
                <button key={c} onClick={() => setFilter(c)} style={{
                  textAlign: 'left', padding: '8px 10px',
                  fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.04em',
                  color: filter === c ? 'var(--bone)' : 'var(--bone-muted)',
                  background: filter === c ? 'var(--slate)' : 'transparent',
                  borderLeft: filter === c ? '2px solid var(--brand-teal)' : '2px solid transparent',
                  display: 'flex', justifyContent: 'space-between', cursor: 'pointer',
                }}>
                  <span>{c.toLowerCase()}</span>
                  <span style={{ opacity: 0.5 }}>{c === 'All' ? VAULT_DATA.length : VAULT_DATA.filter(s => s.tag === c).length}</span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="caption-mono" style={{ color: 'var(--bone-muted)', marginBottom: 12 }}>SORT BY</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[{k:'plays',l:'most played'},{k:'mins',l:'shortest first'},{k:'tier',l:'tier (asc)'}].map(s => (
                <button key={s.k} onClick={() => setSortKey(s.k)} style={{
                  textAlign: 'left', padding: '8px 10px',
                  fontFamily: 'var(--font-mono)', fontSize: 12,
                  color: sortKey === s.k ? 'var(--bone)' : 'var(--bone-muted)',
                  background: sortKey === s.k ? 'var(--slate)' : 'transparent',
                  borderLeft: sortKey === s.k ? '2px solid var(--brand-teal)' : '2px solid transparent',
                }}>{s.l}</button>
              ))}
            </div>
          </div>
          <div>
            <div className="caption-mono" style={{ color: 'var(--bone-muted)', marginBottom: 12 }}>QUICK FILTERS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {['unlocked only', 'saved (24)', 'updated this week', 'flagged hot'].map(q => (
                <label key={q} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bone-muted)', cursor: 'pointer' }}>
                  <span style={{ width: 12, height: 12, border: '1px solid var(--hairline-dark)' }} />
                  {q}
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Table */}
        <main style={{ overflow: 'auto', minWidth: 0 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr 120px 100px 80px 60px 50px', padding: '12px 20px', borderBottom: '1px solid var(--hairline-dark)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--bone-muted)', textTransform: 'uppercase', background: '#0B1220', position: 'sticky', top: 0, zIndex: 5 }}>
            <div>#</div><div>title</div><div>category</div><div>type</div><div>plays</div><div>mins</div><div>tier</div>
          </div>
          {filtered.map((s, i) => (
            <button key={s.id} onClick={() => setSelected(s)}
              style={{
                display: 'grid', gridTemplateColumns: '40px 1fr 120px 100px 80px 60px 50px',
                padding: '14px 20px', borderBottom: '1px solid var(--hairline-dark)',
                background: selected?.id === s.id ? 'var(--slate)' : 'transparent',
                color: 'var(--bone)', textAlign: 'left', cursor: 'pointer',
                transition: 'background .15s var(--ease)',
                opacity: s.locked ? 0.55 : 1,
                width: '100%',
              }}
              onMouseEnter={(e)=>{ if (selected?.id !== s.id) e.currentTarget.style.background = 'rgba(63,168,166,0.04)'; }}
              onMouseLeave={(e)=>{ if (selected?.id !== s.id) e.currentTarget.style.background = 'transparent'; }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bone-muted)' }}>{String(i + 1).padStart(2, '0')}</div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {s.hot && <span style={{ width: 6, height: 6, background: 'var(--brand-teal)', borderRadius: '50%' }} />}
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14 }}>{s.t}</span>
                  {s.locked && <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--bone-muted)" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bone-muted)', marginTop: 2 }}>{s.sub.toLowerCase()}</div>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--brand-teal)', letterSpacing: '0.06em' }}>{s.tag.toLowerCase()}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bone-muted)' }}>{s.type.toLowerCase()}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bone)' }}>{s.plays.toLocaleString()}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bone-muted)' }}>{s.mins}m</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: s.locked ? 'var(--bone-muted)' : 'var(--brand-teal)' }}>T{s.tier}</div>
            </button>
          ))}
          <div style={{ padding: 24, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bone-muted)', letterSpacing: '0.06em' }}>
            {filtered.length} results · 480 total · last sync 4 min ago
          </div>
        </main>

        {/* Detail panel */}
        <aside style={{ borderLeft: '1px solid var(--hairline-dark)', background: '#0B1220', overflowY: 'auto' }}>
          {selected ? <OpDetail item={selected} onOpen={() => onNav('lesson')} /> : <OpDetailEmpty />}
        </aside>
      </div>

      <style>{`
        .op-grid { min-height: 78vh; }
        .rail-scroller::-webkit-scrollbar { display: none; }
        @media (max-width: 1100px) {
          .op-grid { grid-template-columns: 1fr !important; }
          .op-grid > aside { display: none; }
        }
      `}</style>
    </div>
  );
}

const kbdStyle = {
  fontFamily: 'var(--font-mono)', fontSize: 10,
  padding: '2px 5px', border: '1px solid var(--hairline-dark)',
  color: 'var(--bone-muted)', background: 'var(--slate)',
};

function OpDetailEmpty() {
  return (
    <div style={{ padding: 28, color: 'var(--bone-muted)' }}>
      <div className="caption-mono" style={{ marginBottom: 12 }}>NO SELECTION</div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: 'var(--bone)', letterSpacing: '-0.01em' }}>Pick an asset to preview.</div>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, marginTop: 16, color: 'var(--bone-muted)', lineHeight: 1.65 }}>
        ↑↓ to navigate · ↵ to open in player · ⌘S to save · ⌘D to download
      </p>
      <div style={{ marginTop: 32, padding: 16, border: '1px dashed var(--hairline-dark)', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bone-muted)', letterSpacing: '0.04em' }}>
        TIP — type "obj:commission" to filter by tag and term simultaneously.
      </div>
    </div>
  );
}

function OpDetail({ item, onOpen }) {
  return (
    <div style={{ padding: 24, color: 'var(--bone)' }}>
      <div className="caption-mono" style={{ color: 'var(--brand-teal)', marginBottom: 8 }}>{item.tag.toUpperCase()} · {item.type.toUpperCase()}</div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, letterSpacing: '-0.015em', color: 'var(--bone)', margin: 0 }}>{item.t}</h3>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--bone-muted)', marginTop: 10, lineHeight: 1.55 }}>{item.sub}</p>

      <div style={{ marginTop: 20, aspectRatio: '4/3', border: '1px solid var(--hairline-dark)', position: 'relative', overflow: 'hidden' }}>
        <Placeholder label={`preview · ${item.tag.toLowerCase()}`} ratio="auto" dark style={{ width: '100%', height: '100%', border: 'none' }} />
        {item.locked && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(7,12,19,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 12 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brand-teal)" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <span className="caption-mono" style={{ color: 'var(--brand-teal)' }}>LOCKED · TIER {item.tier}</span>
          </div>
        )}
      </div>

      <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid var(--hairline-dark)' }}>
        {[
          { l: 'Length', v: `${item.mins} min` },
          { l: 'Plays', v: item.plays.toLocaleString() },
          { l: 'Tier', v: `T${item.tier}` },
          { l: 'Author', v: item.instructor },
        ].map((m, i) => (
          <div key={m.l} style={{ padding: 12, borderRight: i % 2 === 0 ? '1px solid var(--hairline-dark)' : 'none', borderBottom: i < 2 ? '1px solid var(--hairline-dark)' : 'none' }}>
            <div className="caption-mono" style={{ color: 'var(--bone-muted)', marginBottom: 2 }}>{m.l.toUpperCase()}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--bone)' }}>{m.v}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, display: 'flex', gap: 8 }}>
        {item.locked ? (
          <button className="btn btn-bronze btn-sm" style={{ flex: 1 }}>Unlock — Tier {item.tier}</button>
        ) : (
          <button className="btn btn-bronze btn-sm" style={{ flex: 1 }} onClick={onOpen}>Open ↵</button>
        )}
        <button style={{ width: 40, height: 40, border: '1px solid var(--hairline-dark)', color: 'var(--bone)' }}>★</button>
        <button style={{ width: 40, height: 40, border: '1px solid var(--hairline-dark)', color: 'var(--bone)' }}>↓</button>
      </div>
    </div>
  );
}

/* ============================================================
   VARIANT C — MEMBERS CLUB (editorial / curated archive)
   ============================================================ */
function VaultClub({ onNav }) {
  const featured = VAULT_DATA[5];
  const editorial = VAULT_DATA.slice(0, 4);
  const recent = [...VAULT_DATA].sort((a,b) => b.plays - a.plays).slice(0, 6);

  return (
    <div style={{ background: 'var(--warm-white)', color: 'var(--ink)' }}>
      {/* MASTHEAD */}
      <div style={{ borderBottom: '1px solid var(--hairline-light)', padding: '64px 0 32px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <div className="caption-mono" style={{ marginBottom: 8 }}>VOLUME XII · ISSUE 04 · MAY 2026</div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(48px, 7vw, 96px)', letterSpacing: '-0.04em', lineHeight: 0.92, margin: 0 }}>The Vault.</h1>
              <p className="lede" style={{ marginTop: 16, maxWidth: 540 }}>
                <span className="italic-serif" style={{ fontSize: 22 }}>A curated archive</span> — 480 scripts, frameworks &amp; SOPs, indexed by transaction stage and updated weekly by the founders.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 28 }}>
              {[{n:'480', l:'assets indexed'},{n:'312', l:'unlocked for you'},{n:'24', l:'in your collection'}].map(s => (
                <div key={s.l} style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, letterSpacing: '-0.02em', color: 'var(--ink)' }}>{s.n}</div>
                  <div className="caption-mono">{s.l.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 24, marginTop: 32, flexWrap: 'wrap', borderTop: '1px solid var(--hairline-light)', paddingTop: 20 }}>
            {VAULT_CATS.slice(0, 8).map((c, i) => (
              <a key={c} href="#" style={{
                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 12,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: i === 0 ? 'var(--ink)' : 'var(--ink-muted)',
                paddingBottom: 4,
                borderBottom: i === 0 ? '1px solid var(--brand-blue)' : '1px solid transparent',
              }}>{c}</a>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURE SPREAD */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'center' }} className="club-feature-grid">
          <div style={{ position: 'relative' }}>
            <Placeholder label="cover plate · contract to close sop" ratio="4/5" corner="FEATURE / 01" />
            <div style={{ position: 'absolute', bottom: -16, left: -16, padding: '8px 14px', background: 'var(--ink)', color: 'var(--bone)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em' }}>FEATURE · MAY {String(new Date().getDate()).padStart(2,'0')}</div>
          </div>
          <div>
            <Eyebrow>The Cover Story</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px, 4.6vw, 64px)', letterSpacing: '-0.025em', lineHeight: 1, margin: '20px 0 0', color: 'var(--ink)' }}>
              {featured.t}.
            </h2>
            <p className="lede" style={{ marginTop: 24, fontSize: 19 }}>
              <span className="italic-serif" style={{ fontSize: 22, color: 'var(--ink)' }}>{featured.sub}.</span> The pack standardizes 38 transaction checkpoints, removes 90% of the "where are we?" questions, and lets a coordinator run a file without missing a beat.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--hairline-light)' }}>
              <img src="assets/bradley-portrait.jpg" alt="" style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, letterSpacing: '0.02em' }}>BRADLEY ADAM</div>
                <div className="caption-mono">{featured.mins} MIN · {featured.type.toUpperCase()} · TIER {featured.tier}</div>
              </div>
              <button className="btn btn-primary btn-arrow" style={{ marginLeft: 'auto' }} onClick={() => onNav('lesson')}>Read</button>
            </div>
          </div>
        </div>
      </section>

      {/* THIS ISSUE — editorial grid */}
      <section style={{ borderTop: '1px solid var(--hairline-light)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
            <div>
              <Eyebrow>In this issue</Eyebrow>
              <h3 className="display-3" style={{ marginTop: 8 }}>Six pieces, hand-picked.</h3>
            </div>
            <a href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand-blue)' }}>SEE THE FULL INDEX →</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48, rowGap: 64 }} className="club-grid">
            {editorial.concat(VAULT_DATA[8], VAULT_DATA[9]).map((item, i) => (
              <ClubCard key={item.id} item={item} num={i + 1} onNav={onNav} />
            ))}
          </div>
        </div>
      </section>

      {/* THE INDEX — minimal text-led list */}
      <section style={{ borderTop: '1px solid var(--hairline-light)', padding: '80px 0', background: 'var(--bone)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, gap: 24, flexWrap: 'wrap' }}>
            <div>
              <Eyebrow>The Index</Eyebrow>
              <h3 className="display-3" style={{ marginTop: 8 }}>Most consulted this month.</h3>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {['By plays', 'By recency', 'A–Z'].map((s, i) => (
                <button key={s} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', padding: '8px 14px', textTransform: 'uppercase', border: '1px solid', borderColor: i === 0 ? 'var(--ink)' : 'var(--hairline-light)', background: i === 0 ? 'var(--ink)' : 'transparent', color: i === 0 ? 'var(--bone)' : 'var(--ink-muted)' }}>{s}</button>
              ))}
            </div>
          </div>
          <div>
            {recent.map((item, i) => (
              <a key={item.id} href="#" onClick={(e)=>{e.preventDefault();if(!item.locked)onNav('lesson');}} style={{
                display: 'grid', gridTemplateColumns: '60px 1fr 200px 100px 80px',
                gap: 24, alignItems: 'baseline',
                padding: '28px 0', borderTop: '1px solid var(--hairline-light)',
                opacity: item.locked ? 0.55 : 1,
              }}
              className="club-row"
              >
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: 'var(--ink-muted)', letterSpacing: '-0.02em' }}>{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, letterSpacing: '-0.015em', margin: 0, color: 'var(--ink)' }}>{item.t}</h4>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--ink-muted)', margin: '6px 0 0' }}>
                    <span className="italic-serif" style={{ fontSize: 16 }}>{item.sub}</span>
                  </p>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{item.tag} · {item.type}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-muted)', letterSpacing: '0.08em' }}>{item.plays.toLocaleString()} plays</div>
                <div style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 16, color: item.locked ? 'var(--ink-muted)' : 'var(--brand-blue)' }}>{item.locked ? '⌘' : '→'}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .club-row:hover h4 { text-decoration: underline; text-decoration-color: var(--brand-blue); text-underline-offset: 6px; }
        @media (max-width: 920px) {
          .club-feature-grid { grid-template-columns: 1fr !important; }
          .club-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </div>
  );
}

function ClubCard({ item, num, onNav }) {
  return (
    <a href="#" onClick={(e)=>{e.preventDefault();if(!item.locked)onNav('lesson');}} style={{ display: 'block', color: 'var(--ink)' }}>
      <div style={{ position: 'relative' }}>
        <Placeholder label={item.t.toLowerCase()} ratio="4/5" corner={`№ ${String(num).padStart(2,'0')}`} />
        {item.locked && (
          <div style={{ position: 'absolute', top: 12, right: 12, padding: '4px 8px', background: 'var(--ink)', color: 'var(--bone)', fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em' }}>TIER {item.tier}</div>
        )}
      </div>
      <div className="caption-mono" style={{ marginTop: 16, color: 'var(--brand-blue)' }}>{item.tag.toUpperCase()} · {item.type.toUpperCase()}</div>
      <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, letterSpacing: '-0.015em', margin: '8px 0 0' }}>{item.t}</h4>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--ink-muted)', marginTop: 8, lineHeight: 1.55 }}>
        <span className="italic-serif" style={{ fontSize: 16 }}>{item.sub}.</span>
      </p>
      <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 12, borderTop: '1px solid var(--hairline-light)' }}>
        <span className="caption-mono">{item.instructor.toUpperCase()} · {item.mins} MIN</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--brand-blue)' }}>→</span>
      </div>
    </a>
  );
}

Object.assign(window, { LibraryPage });
