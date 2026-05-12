/* Phase C — Member Tools (Calculators + Community + Welcome) */

const CALC_TOOLS = [
  { id: 'gci', code: 'C-01', t: 'GCI Calculator', d: 'Project annual gross commission income from deal volume + average price + commission rate.', tier: 1 },
  { id: 'split', code: 'C-02', t: 'Split & Cap Calculator', d: 'Model brokerage splits, caps, and net take-home across the fiscal year.', tier: 1 },
  { id: 'lead', code: 'C-03', t: 'Lead → Close Funnel', d: 'Reverse-engineer how many leads you need to hit a GCI target — by tier and conversion rate.', tier: 2 },
  { id: 'team', code: 'C-04', t: 'Team P&L Builder', d: 'Build a 12-month P&L for a 3- to 12-person team. Splits, caps, comp.', tier: 4 },
];

function CalcGCI() {
  const [deals, setDeals] = useState(24);
  const [price, setPrice] = useState(485);
  const [rate, setRate] = useState(2.5);
  const volume = deals * price * 1000;
  const gci = volume * (rate / 100);
  const net = gci * 0.75;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 64 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        <CalcSlider label="Deals per year" value={deals} min={1} max={120} step={1} fmt={v => `${v} deals`} onChange={setDeals} />
        <CalcSlider label="Avg. sale price" value={price} min={150} max={5000} step={5} fmt={v => `$${v}K`} onChange={setPrice} />
        <CalcSlider label="Commission rate" value={rate} min={1} max={4} step={0.05} fmt={v => `${v.toFixed(2)}%`} onChange={setRate} />
      </div>
      <div style={{ background: 'var(--ink)', color: 'var(--bone)', padding: 40, display: 'flex', flexDirection: 'column', gap: 24 }}>
        <CalcStat label="Volume" value={`$${(volume / 1000000).toFixed(1)}M`} />
        <CalcStat label="GCI (gross)" value={`$${Math.round(gci).toLocaleString()}`} accent />
        <CalcStat label="After 75% split" value={`$${Math.round(net).toLocaleString()}`} muted />
        <div style={{ marginTop: 12, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <span className="caption-mono" style={{ color: 'var(--bone-muted)' }}>Per deal</span>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28, marginTop: 8 }}>${Math.round(gci / Math.max(deals, 1)).toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}

function CalcSplit() {
  const [gci, setGci] = useState(180);
  const [split, setSplit] = useState(70);
  const [cap, setCap] = useState(23);
  const preCap = Math.min(gci * 1000 * (1 - split / 100), cap * 1000);
  const postCap = Math.max(gci * 1000 - cap * 1000 / (1 - split / 100), 0);
  const toBrokerage = preCap;
  const net = gci * 1000 - toBrokerage;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 64 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        <CalcSlider label="Annual GCI" value={gci} min={20} max={1500} step={5} fmt={v => `$${v}K`} onChange={setGci} />
        <CalcSlider label="Brokerage split (you keep %)" value={split} min={50} max={100} step={1} fmt={v => `${v}%`} onChange={setSplit} />
        <CalcSlider label="Annual cap" value={cap} min={0} max={75} step={1} fmt={v => v === 0 ? 'No cap' : `$${v}K`} onChange={setCap} />
      </div>
      <div style={{ background: 'var(--ink)', color: 'var(--bone)', padding: 40, display: 'flex', flexDirection: 'column', gap: 24 }}>
        <CalcStat label="To brokerage" value={`$${Math.round(toBrokerage).toLocaleString()}`} muted />
        <CalcStat label="Net to you" value={`$${Math.round(net).toLocaleString()}`} accent />
        <CalcStat label="Effective split" value={`${Math.round((net / (gci * 1000)) * 100)}%`} />
      </div>
    </div>
  );
}

function CalcLead() {
  const [target, setTarget] = useState(250);
  const [leadToApt, setLeadToApt] = useState(8);
  const [aptToClose, setAptToClose] = useState(40);
  const [avgGci, setAvgGci] = useState(11);
  const dealsNeeded = Math.ceil(target / avgGci);
  const aptsNeeded = Math.ceil(dealsNeeded / (aptToClose / 100));
  const leadsNeeded = Math.ceil(aptsNeeded / (leadToApt / 100));
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 64 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        <CalcSlider label="GCI target" value={target} min={50} max={2000} step={10} fmt={v => `$${v}K`} onChange={setTarget} />
        <CalcSlider label="Avg. GCI per deal" value={avgGci} min={3} max={60} step={0.5} fmt={v => `$${v}K`} onChange={setAvgGci} />
        <CalcSlider label="Lead → appointment" value={leadToApt} min={1} max={50} step={1} fmt={v => `${v}%`} onChange={setLeadToApt} />
        <CalcSlider label="Appointment → close" value={aptToClose} min={10} max={90} step={1} fmt={v => `${v}%`} onChange={setAptToClose} />
      </div>
      <div style={{ background: 'var(--ink)', color: 'var(--bone)', padding: 40, display: 'flex', flexDirection: 'column', gap: 24 }}>
        <CalcStat label="Deals needed" value={dealsNeeded} />
        <CalcStat label="Appointments needed" value={aptsNeeded} />
        <CalcStat label="Leads needed" value={leadsNeeded.toLocaleString()} accent />
        <div style={{ marginTop: 8, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <span className="caption-mono" style={{ color: 'var(--bone-muted)' }}>Per week</span>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28, marginTop: 8 }}>{Math.ceil(leadsNeeded / 50)} leads</div>
        </div>
      </div>
    </div>
  );
}

function CalcSlider({ label, value, min, max, step, fmt, onChange }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
        <span className="caption-mono" style={{ color: 'var(--ink)' }}>{label}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 16, fontWeight: 600, color: 'var(--brand-teal)' }}>{fmt(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(parseFloat(e.target.value))}
        style={{ width: '100%', accentColor: 'var(--brand-teal)' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--ink-muted)', marginTop: 4 }}>
        <span>{fmt(min)}</span>
        <span>{fmt(max)}</span>
      </div>
    </div>
  );
}
function CalcStat({ label, value, accent, muted }) {
  return (
    <div>
      <span className="caption-mono" style={{ color: 'var(--bone-muted)' }}>{label}</span>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: accent ? 56 : 36, color: accent ? 'var(--brand-teal)' : muted ? 'var(--bone-muted)' : 'var(--bone)', marginTop: 8, lineHeight: 1 }}>{value}</div>
    </div>
  );
}

function CalculatorsPage({ tweaks, onNav }) {
  const [active, setActive] = useState('gci');
  const tool = CALC_TOOLS.find(t => t.id === active);
  return (
    <div data-screen-label="Calculators">
      <section className="surface-bone" style={{ paddingTop: 80, paddingBottom: 40 }}>
        <div className="container">
          <Eyebrow mono>Member Tools · Calculators</Eyebrow>
          <h1 className="display-1" style={{ marginTop: 16, maxWidth: 880 }}>The math behind the playbook.</h1>
          <p className="lede" style={{ marginTop: 16, maxWidth: 720 }}>Four calculators we use in coaching calls. They mirror the spreadsheets in the Vault — but live, in your browser.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--ink)', marginBottom: 48 }}>
            {CALC_TOOLS.map(t => (
              <button key={t.id} onClick={() => setActive(t.id)} disabled={t.tier > 2}
                style={{ background: 'none', border: 'none', padding: '20px 24px', cursor: t.tier > 2 ? 'not-allowed' : 'pointer', borderBottom: active === t.id ? '2px solid var(--brand-teal)' : '2px solid transparent', marginBottom: -1, textAlign: 'left', opacity: t.tier > 2 ? 0.4 : 1 }}>
                <div className="caption-mono" style={{ color: 'var(--brand-teal)', marginBottom: 4 }}>{t.code} {t.tier > 2 ? `· Tier ${t.tier} only` : ''}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: active === t.id ? 'var(--ink)' : 'var(--ink-muted)' }}>{t.t}</div>
              </button>
            ))}
          </div>

          <div style={{ marginBottom: 32 }}>
            <h2 className="display-2" style={{ marginBottom: 12 }}>{tool.t}</h2>
            <p className="lede">{tool.d}</p>
          </div>

          {active === 'gci' && <CalcGCI />}
          {active === 'split' && <CalcSplit />}
          {active === 'lead' && <CalcLead />}
        </div>
      </section>

      <Footer onNav={onNav} />
    </div>
  );
}

/* ============ COMMUNITY ============ */

const THREADS = [
  { id: 't1', cat: 'Listing', t: 'Pre-frame: how do you handle a seller who refuses the call?', author: 'Sarah W.', tier: 'Tier 3', replies: 14, last: '12 min ago', pinned: true },
  { id: 't2', cat: 'Objections', t: '"My Zillow says it\'s worth 1.4 — you have it at 1.2"', author: 'Daniel R.', tier: 'Tier 3', replies: 23, last: '38 min ago' },
  { id: 't3', cat: 'Buyer agency', t: 'Buyer reps in NJ post-NAR — what\'s actually in your contract?', author: 'Marcus T.', tier: 'Tier 4', replies: 41, last: '1h ago' },
  { id: 't4', cat: 'Recruiting', t: 'First-call script for a producer doing 8 deals/yr', author: 'Jennifer O.', tier: 'Tier 4', replies: 9, last: '3h ago' },
  { id: 't5', cat: 'Tech stack', t: 'CRM that doesn\'t suck — current 2026 picks', author: 'Ashley P.', tier: 'Tier 3', replies: 67, last: '5h ago' },
  { id: 't6', cat: 'Marketing', t: 'Listing video — phone vs DSLR vs drone in 2026', author: 'David M.', tier: 'Tier 2', replies: 18, last: '8h ago' },
];
const COMMUNITY_CATS = ['All', 'Listing', 'Objections', 'Buyer agency', 'Recruiting', 'Tech stack', 'Marketing'];

function CommunityPage({ tweaks, onNav }) {
  const [cat, setCat] = useState('All');
  const list = cat === 'All' ? THREADS : THREADS.filter(t => t.cat === cat);
  return (
    <div data-screen-label="Community">
      <section className="surface-ink" style={{ paddingTop: 80, paddingBottom: 60 }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 64, alignItems: 'end' }}>
          <div>
            <Eyebrow mono dark>Member Community</Eyebrow>
            <h1 className="display-1" style={{ marginTop: 16, color: 'var(--bone)' }}>The Floor.</h1>
            <p className="lede lede-on-dark" style={{ marginTop: 16, maxWidth: 600 }}>Members-only forum. No anonymity. No self-promo. The questions are sharp because the people asking are too.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {[{ n: '847', l: 'Active members' }, { n: '142', l: 'Posts this week' }, { n: '4.2h', l: 'Avg. first reply' }, { n: '94%', l: 'Get answered' }].map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: 'var(--brand-teal)' }}>{s.n}</div>
                <div className="caption-mono" style={{ color: 'var(--bone-muted)', marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {COMMUNITY_CATS.map(c => (
                <button key={c} onClick={() => setCat(c)} style={{ background: cat === c ? 'var(--ink)' : 'transparent', color: cat === c ? 'var(--bone)' : 'var(--ink)', border: '1px solid var(--ink)', padding: '8px 14px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer' }}>{c}</button>
              ))}
            </div>
            <button className="btn btn-bronze">+ New thread</button>
          </div>

          <div style={{ borderTop: '1px solid var(--ink)' }}>
            {list.map(th => (
              <a key={th.id} href="#" onClick={(e)=>e.preventDefault()} style={{ display: 'grid', gridTemplateColumns: '120px 1fr 200px 140px 80px', gap: 24, padding: '24px 0', borderBottom: '1px solid var(--hairline-light)', alignItems: 'center', color: 'var(--ink)' }}>
                <span className="caption-mono" style={{ color: 'var(--brand-teal)' }}>{th.cat}</span>
                <div>
                  {th.pinned && <span className="caption-mono" style={{ color: 'var(--brand-blue)', marginRight: 8 }}>★ PINNED</span>}
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17 }}>{th.t}</span>
                </div>
                <span style={{ fontSize: 13, color: 'var(--ink-muted)' }}>{th.author} · {th.tier}</span>
                <span className="caption-mono" style={{ color: 'var(--ink-muted)' }}>{th.last}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, textAlign: 'right' }}>{th.replies} replies</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer onNav={onNav} />
    </div>
  );
}

/* ============ WELCOME / ONBOARDING ============ */

function WelcomePage({ tweaks, onNav }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});
  const upd = (k, v) => setData(d => ({ ...d, [k]: v }));
  const total = 4;

  return (
    <div data-screen-label="Welcome" style={{ minHeight: '100vh', background: 'var(--bone-warm)' }}>
      <header style={{ padding: '24px 0', borderBottom: '1px solid var(--hairline-light)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Logo onClick={() => onNav('home')} />
          <span className="caption-mono" style={{ color: 'var(--ink-muted)' }}>Step {step} of {total}</span>
        </div>
        <div style={{ height: 2, background: 'var(--hairline-light)', marginTop: 24 }}>
          <div style={{ height: '100%', width: `${(step / total) * 100}%`, background: 'var(--brand-teal)', transition: 'width 0.3s' }} />
        </div>
      </header>

      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: 720, margin: '0 auto' }}>
          {step === 1 && (
            <div>
              <Eyebrow mono>Welcome to RMA · Tier 2</Eyebrow>
              <h1 className="display-1" style={{ marginTop: 16, marginBottom: 24 }}>Let's set up your account.</h1>
              <p className="lede" style={{ marginBottom: 40 }}>Four short questions. Two minutes. Then you're in.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 480 }}>
                <FormField label="First name" value={data.first || ''} onChange={v => upd('first', v)} />
                <FormField label="Last name" value={data.last || ''} onChange={v => upd('last', v)} />
                <FormField label="Brokerage" value={data.brokerage || ''} onChange={v => upd('brokerage', v)} />
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <Eyebrow mono>02 · Where you are</Eyebrow>
              <h1 className="display-2" style={{ marginTop: 16, marginBottom: 24 }}>How many deals did you close in the last 12 months?</h1>
              <p className="lede" style={{ marginBottom: 40 }}>This shapes the order we surface lessons.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, maxWidth: 480 }}>
                {['0–6 deals', '7–18 deals', '19–35 deals', '36+ deals'].map(o => (
                  <button key={o} onClick={() => upd('volume', o)} style={{ padding: 24, background: data.volume === o ? 'var(--ink)' : 'var(--bone)', color: data.volume === o ? 'var(--bone)' : 'var(--ink)', border: '1px solid var(--ink)', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17 }}>{o}</button>
                ))}
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <Eyebrow mono>03 · The next 90 days</Eyebrow>
              <h1 className="display-2" style={{ marginTop: 16, marginBottom: 24 }}>What's the one thing that would change everything?</h1>
              <p className="lede" style={{ marginBottom: 40 }}>Pick one. We'll show you the path that gets you there fastest.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 600 }}>
                {[
                  ['listing', 'Convert more listing appointments'],
                  ['objections', 'Stop losing on price / commission objections'],
                  ['cadence', 'Get my follow-up under control'],
                  ['team', 'Build or grow my team'],
                ].map(([k, v]) => (
                  <button key={k} onClick={() => upd('goal', k)} style={{ padding: '20px 24px', background: data.goal === k ? 'var(--ink)' : 'var(--bone)', color: data.goal === k ? 'var(--bone)' : 'var(--ink)', border: '1px solid var(--ink)', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-display)', fontSize: 17 }}>{v}</button>
                ))}
              </div>
            </div>
          )}
          {step === 4 && (
            <div>
              <Eyebrow mono>04 · You're in</Eyebrow>
              <h1 className="display-1" style={{ marginTop: 16, marginBottom: 24 }}>Welcome, {data.first || 'producer'}.</h1>
              <p className="lede" style={{ marginBottom: 40 }}>Based on what you told us, we've put <strong style={{ color: 'var(--ink)' }}>The Listing Presentation Mastery</strong> at the top of your queue. Module 1 is 47 minutes — most members finish it tonight.</p>
              <div style={{ background: 'var(--ink)', color: 'var(--bone)', padding: 32, marginBottom: 32 }}>
                <span className="caption-mono" style={{ color: 'var(--brand-teal)' }}>Recommended first 7 days</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>
                  {[
                    'Watch A-01 · Module 1 — Why most listings are lost in the first 60 seconds',
                    'Read the Friday Field Note: "The pre-frame call is the listing presentation"',
                    'Drop into The Floor and say hello',
                  ].map((s, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, fontSize: 15, lineHeight: 1.5 }}>
                      <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-teal)', flexShrink: 0 }}>0{i + 1}</span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button className="btn btn-bronze btn-lg" onClick={() => onNav('dashboard')}>Open my dashboard →</button>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 64, paddingTop: 32, borderTop: '1px solid var(--hairline-light)' }}>
            <button onClick={() => step > 1 && setStep(step - 1)} className="btn btn-ghost" disabled={step === 1} style={{ opacity: step === 1 ? 0.3 : 1 }}>← Back</button>
            {step < total && <button onClick={() => setStep(step + 1)} className="btn btn-bronze">Continue →</button>}
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { CalculatorsPage, CommunityPage, WelcomePage });
