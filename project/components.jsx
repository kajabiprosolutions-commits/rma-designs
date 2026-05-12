/* Shared components: Logo, Nav, Footer, Eyebrow, Placeholder */
const { useState, useEffect, useRef, useMemo } = React;

function Logo({ dark = false, onClick, compact = false }) {
  // Use the supplied PNG lockup. The asset is white text + colored mark, designed for dark surfaces.
  // On light surfaces we tint the white parts to ink via CSS filter so the mark gradient stays intact.
  const filter = dark ? 'none' : 'invert(8%) sepia(15%) saturate(1100%) hue-rotate(180deg) brightness(0.9)';
  return (
    <div className="logo" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      <img
        src={dark ? 'assets/rma-logo-white.png' : 'assets/rma-logo-white.png'}
        alt="Realtor Mastery Academy"
        style={{
          height: compact ? 32 : 40,
          width: 'auto',
          display: 'block',
          filter: dark ? 'none' : 'brightness(0) saturate(100%) invert(8%) sepia(20%) saturate(900%) hue-rotate(185deg) brightness(0.55) contrast(1.1)',
        }}
      />
    </div>
  );
}

function ThemeSwitcher({ theme, setTheme }) {
  const opts = [
    { v: 'v1', l: 'V1', title: 'Editorial' },
    { v: 'v2', l: 'V2', title: 'Architectural' },
    { v: 'v3', l: 'V3', title: 'Cinematic' },
    { v: 'v4', l: 'V4', title: 'Boutique' },
    { v: 'v5', l: 'V5', title: 'Performance' },
  ];
  return (
    <div className="theme-switcher" role="group" aria-label="Layout theme">
      {opts.map(o => (
        <button key={o.v} className={theme === o.v ? 'active' : ''} onClick={() => setTheme(o.v)} title={`Layout ${o.l}`}>{o.l}</button>
      ))}
    </div>
  );
}

function Nav({ current, onNav, dark: darkProp = false, ctaCopy, memberPage = false, theme = 'v1', setTheme }) {
  // V3 is dark-first: force the nav into dark chrome so logo + dropdowns invert correctly.
  const dark = darkProp || theme === 'v3';
  const dropDark = dark; // dropdowns inherit nav chrome
  const [open, setOpen] = useState(null); // 'programs' | 'resources' | 'company' | null
  const publicLinks = [
    { id: 'home', label: 'Home' },
    {
      id: 'programs', label: 'Programs', menu: [
        { id: 'sales-main', label: 'Main Academy' },
        { id: 'tier1', label: 'Tier 1 — The Portal (Free)' },
        { id: 'tier2', label: 'Tier 2 — The Academy' },
        { id: 'tier3', label: 'Tier 3 — Growth Circle' },
        { id: 'tier4', label: 'Tier 4 — The Boardroom' },
        { id: 'tripwire', label: '$29 Starter Pack' },
      ]
    },
    {
      id: 'vault', label: 'The Vault', menu: [
        { id: 'library', label: 'Vault Search / Library' },
        { id: 'dashboard', label: 'My Library (Dashboard)' },
        { id: 'course', label: 'Course Overview' },
        { id: 'lesson', label: 'Lesson Watch View' },
        { id: 'optin-lp', label: '— LP · Tier 1 Opt-In' },
        { id: 'boardroom-app', label: '— LP · Boardroom Application' },
        { id: 'lender-scholarship', label: '— LP · Lender Scholarship' },
        { id: 'thanks-t2', label: '— LP · Thank You (T2)' },
        { id: 'thanks-t3', label: '— LP · Thank You (T3)' },
        { id: 'thanks-t4', label: '— LP · Thank You (T4)' },
        { id: 'tripwire-lp', label: '— LP · Single Tripwire' },
      ]
    },
    {
      id: 'resources', label: 'Resources', menu: [
        { id: 'newsroom', label: 'Newsroom' },
        { id: 'article', label: 'Featured Article' },
        { id: 'cases', label: 'Case Studies' },
        { id: 'case', label: 'Case Detail' },
        { id: 'calculators', label: 'Producer Calculators' },
        { id: 'community', label: 'The Floor (Community)' },
      ]
    },
    {
      id: 'company', label: 'Company', menu: [
        { id: 'about', label: 'About the Founders' },
        { id: 'contact', label: 'Contact' },
        { id: 'welcome', label: 'Member Onboarding' },
        { id: '404', label: '404 Page' },
        { id: 'terms', label: 'Terms' },
        { id: 'privacy', label: 'Privacy' },
      ]
    },
  ];
  const memberLinks = [
    { id: 'dashboard', label: 'My Library' },
    { id: 'course', label: 'Courses' },
    { id: 'library', label: 'The Vault' },
    { id: 'calculators', label: 'Calculators' },
    { id: 'community', label: 'The Floor' },
  ];
  const links = memberPage ? memberLinks : publicLinks;
  const dropOpen = open;
  return (
    <nav className={`nav ${dark ? 'nav-dark' : ''}`} onMouseLeave={() => setOpen(null)}>
      <div className="nav-inner">
        <Logo dark={dark} onClick={() => onNav(memberPage ? 'dashboard' : 'home')} />
        <ul className="nav-links desktop">
          {links.map(l => (
            <li key={l.id} style={{ position: 'relative' }} onMouseEnter={() => l.menu && setOpen(l.id)}>
              <a
                className={current === l.id || (l.menu && l.menu.some(m => m.id === current)) ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  if (l.menu) { setOpen(open === l.id ? null : l.id); }
                  else { onNav(l.id); setOpen(null); }
                }}
                href="#"
              >{l.label}{l.menu ? ' ▾' : ''}</a>
              {l.menu && dropOpen === l.id && (
                <div className="nav-dropdown" style={{
                  position: 'absolute', top: '100%', left: -16, marginTop: 8,
                  background: dropDark ? 'var(--ink)' : 'var(--warm-white)',
                  border: `1px solid ${dropDark ? 'var(--hairline-dark)' : 'var(--hairline-light)'}`,
                  minWidth: 260, padding: 8, zIndex: 100,
                  boxShadow: '0 24px 60px rgba(7,12,19,0.25)',
                  borderRadius: theme === 'v3' ? 12 : (theme === 'v2' ? 0 : 4),
                }}>
                  {l.menu.map(m => (
                    <a key={m.id} href="#"
                      onClick={(e) => { e.preventDefault(); onNav(m.id); setOpen(null); }}
                      style={{
                        display: 'block', padding: '10px 14px',
                        color: dropDark ? 'var(--bone)' : 'var(--ink-text)',
                        fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500,
                        borderBottom: `1px solid ${dropDark ? 'var(--hairline-dark)' : 'var(--hairline-light)'}`,
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = dropDark ? 'var(--slate)' : 'var(--bone)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >{m.label}</a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          {setTheme && <ThemeSwitcher theme={theme} setTheme={setTheme} />}
          {memberPage ? (
            <>
              <a href="#" onClick={(e)=>{e.preventDefault();onNav('home');}}
                style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--bone-muted)' }}
              >Sign out</a>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--brand-grad)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--warm-white)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12 }}>SK</div>
            </>
          ) : (
            <>
              <a
                onClick={(e) => { e.preventDefault(); onNav('login'); }}
                href="#"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 12, fontWeight: 500,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: dark ? 'var(--bone-muted)' : 'var(--ink-muted)',
                }}
              >Member Login</a>
              <button
                className={dark ? 'btn btn-bronze' : 'btn btn-primary'}
                onClick={() => onNav('tier1')}
              >{ctaCopy || 'Apply Now'}</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

function Footer({ onNav }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Logo dark={true} />
            <p style={{ color: 'var(--bone-muted)', fontSize: 14, marginTop: 24, maxWidth: 320 }}>
              The system $140M+ producers use to train their next decade of agents. Built by active brokers, not coaches.
            </p>
          </div>
          <div className="footer-col">
            <h5>Programs</h5>
            <ul>
              <li><a onClick={(e)=>{e.preventDefault();onNav('tier1');}} href="#">Tier 1 — The Portal</a></li>
              <li><a onClick={(e)=>{e.preventDefault();onNav('tier2');}} href="#">Tier 2 — The Academy</a></li>
              <li><a onClick={(e)=>{e.preventDefault();onNav('tier3');}} href="#">Tier 3 — Growth Circle</a></li>
              <li><a onClick={(e)=>{e.preventDefault();onNav('tier4');}} href="#">Tier 4 — Boardroom</a></li>
              <li><a onClick={(e)=>{e.preventDefault();onNav('tripwire');}} href="#">$29 Starter Pack</a></li>
              <li><a onClick={(e)=>{e.preventDefault();onNav('sales-main');}} href="#">Main Academy</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Resources</h5>
            <ul>
              <li><a onClick={(e)=>{e.preventDefault();onNav('library');}} href="#">The Vault</a></li>
              <li><a onClick={(e)=>{e.preventDefault();onNav('newsroom');}} href="#">Newsroom</a></li>
              <li><a onClick={(e)=>{e.preventDefault();onNav('cases');}} href="#">Case Studies</a></li>
              <li><a onClick={(e)=>{e.preventDefault();onNav('calculators');}} href="#">Producer Calculators</a></li>
              <li><a onClick={(e)=>{e.preventDefault();onNav('community');}} href="#">The Floor</a></li>
              <li><a onClick={(e)=>{e.preventDefault();onNav('login');}} href="#">Member Login</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a onClick={(e)=>{e.preventDefault();onNav('about');}} href="#">About</a></li>
              <li><a onClick={(e)=>{e.preventDefault();onNav('contact');}} href="#">Contact</a></li>
              <li><a onClick={(e)=>{e.preventDefault();onNav('welcome');}} href="#">Member Onboarding</a></li>
              <li><a onClick={(e)=>{e.preventDefault();onNav('404');}} href="#">404</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <span>© 2026 Realtor Mastery Academy. All rights reserved.</span>
          <span>
            <a onClick={(e)=>{e.preventDefault();onNav('privacy');}} href="#" style={{ color: 'var(--bone-muted)' }}>Privacy</a>
            {' · '}
            <a onClick={(e)=>{e.preventDefault();onNav('terms');}} href="#" style={{ color: 'var(--bone-muted)' }}>Terms</a>
            {' · Cookies'}
          </span>
        </div>
      </div>
    </footer>
  );
}

// Real photographic placeholders sourced from Unsplash (people, places, scenes)
const U = (id, w = 1200, h) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}${h ? `&h=${h}` : ''}`;

// Curated Unsplash photo IDs by content type
const PHOTO = {
  // Real estate / homes / interiors
  modernHome: '1564013799919-ab600027ffc6',
  whiteHouse: '1568605114967-8130f3a36994',
  livingRoom: '1600596542815-ffad4c1539a9',
  livingRoom2: '1600585154340-be6161a56a0c',
  loftKitchen: '1583608205776-bfd35f0d9f83',
  estate: '1512917774080-9991f1c4c750',
  bedroomLight: '1600210492486-724fe5c67fb0',
  frontDoor: '1605146769289-440113cc3d00',
  modernHome2: '1560448204-e02f11c3d0e2',
  // Office / desk / workspace
  deskOffice: '1497366216548-37526070297c',
  laptopDesk: '1486312338219-ce68d2c6f44d',
  meetingRoom: '1542744173-8e7e53415bb0',
  teamMeeting: '1521737852567-6949f3f9f2b5',
  signing: '1450101499163-c8848c66ca85',
  handshake: '1556761175-b413da4baf72',
  // Portraits
  womanProf1: '1573496359142-b8d87734a5a2',
  womanProf2: '1573497019940-1c28c88b4f3e',
  manProf1: '1507003211169-0a1dd7228f2d',
  manProf2: '1500648767791-00dcc994a43e',
  womanPortrait: '1438761681033-6461ffad8d80',
  womanPortrait2: '1494790108377-be9c29b29330',
  manPortrait: '1472099645785-5658abf4ff4e',
  // Negotiation / phone / coaching
  phoneCall: '1556909114-f6e7ad7d3136',
  videoStudio: '1487014679447-9f8336841d58',
  boardroom: '1497366811353-6870744d04b2',
  // Interface
  laptopCrm: '1551288049-bebda4e38f71',
  charts: '1460925895917-afdab827c52f',
};

const PH_REGISTRY = {
  // Course / lessons
  'hero still — marjorie at a $2m listing appointment': PHOTO.modernHome,
  'lesson player — marjorie at desk': PHOTO.womanProf1,
  'featured asset still — bradley closing scene': PHOTO.signing,
  'cover plate · contract to close sop': PHOTO.signing,
  'l12 still': PHOTO.phoneCall,
  'l13 still': PHOTO.charts,
  'l14 still': PHOTO.livingRoom,
  'l15 still': PHOTO.charts,
  'l16 still': PHOTO.deskOffice,
  // Vault / library scripts
  'the 32-second open': PHOTO.phoneCall,
  'the pre-frame': PHOTO.frontDoor,
  'commission is too high': PHOTO.handshake,
  'the 7-step listing presentation': PHOTO.modernHome,
  'my zillow says it\'s worth more': PHOTO.charts,
  'buyer agency agreement walkthrough': PHOTO.signing,
  'multiple offer leverage': PHOTO.estate,
  'producer recruiting first call': PHOTO.meetingRoom,
  '6-hour / 6-day / 6-month cadence': PHOTO.laptopDesk,
  '"i want to think about it"': PHOTO.handshake,
  'the pricing strategy — three positions': PHOTO.charts,
  'splits, caps & the producer ladder': PHOTO.boardroom,
  'objection handling moment — listing appointment': PHOTO.livingRoom2,
  'vault interface — desktop screenshot': PHOTO.laptopCrm,
  'member portal — interior': PHOTO.modernHome2,
  // Course recommended
  'closing table': PHOTO.signing,
  'producer at desk': PHOTO.deskOffice,
  'crm dashboard': PHOTO.laptopCrm,
  'agent at front door': PHOTO.frontDoor,
  // Dashboard
  'marjorie at listing appointment': PHOTO.modernHome,
  'agent at desk': PHOTO.deskOffice,
  // Testimonial portraits
  'testimonial — top producer': PHOTO.womanProf1,
  'team lead at office': PHOTO.manProf1,
  'agent on listing appointment': PHOTO.womanPortrait2,
  'broker portrait — confident': PHOTO.manProf2,
  'realtor headshot — editorial': PHOTO.womanProf2,
  // Dashboard enrolled
  'luxury home interior — cat. a': PHOTO.livingRoom,
  'estate exterior — cat. a': PHOTO.estate,
  'team meeting — cat. c': PHOTO.teamMeeting,
  'agent at desk — cat. b': PHOTO.deskOffice,
  // Dashboard "other"
  'laptop crm screen': PHOTO.laptopCrm,
  'video studio setup': PHOTO.videoStudio,
  'boardroom interior': PHOTO.boardroom,
  'home tour walkthrough': PHOTO.livingRoom2,
};

const PORTRAITS_BY_INDEX = [
  PHOTO.womanProf1, PHOTO.manProf1, PHOTO.womanPortrait2, PHOTO.manProf2, PHOTO.womanProf2,
];

function lookupPh(label) {
  if (!label) return null;
  const key = String(label).toLowerCase().trim();
  if (PH_REGISTRY[key]) return PH_REGISTRY[key];
  for (const [k, v] of Object.entries(PH_REGISTRY)) {
    if (key.includes(k) || k.includes(key)) return v;
  }
  const m = key.match(/0?(\d)\s*\/?\s*member/);
  if (m) {
    const i = parseInt(m[1], 10) - 1;
    return PORTRAITS_BY_INDEX[i] || null;
  }
  // Keyword fallback so unmapped labels still get a demo image
  const KW = [
    [/(home|house|estate|listing|property|exterior)/, PHOTO.modernHome],
    [/(interior|living|room|kitchen|bedroom)/, PHOTO.livingRoom],
    [/(door|threshold)/, PHOTO.frontDoor],
    [/(desk|laptop|office|workspace)/, PHOTO.deskOffice],
    [/(crm|dashboard|interface|screen|portal|vault)/, PHOTO.laptopCrm],
    [/(meeting|team|board|huddle)/, PHOTO.teamMeeting],
    [/(boardroom)/, PHOTO.boardroom],
    [/(phone|call|cold)/, PHOTO.phoneCall],
    [/(sign|contract|closing|paperwork|negotiat|handshake)/, PHOTO.signing],
    [/(chart|metric|stat|data|analytic|number)/, PHOTO.charts],
    [/(video|studio|broadcast|record)/, PHOTO.videoStudio],
    [/(marjorie|woman|female|she|her)/, PHOTO.womanProf1],
    [/(bradley|man|male|he|him)/, PHOTO.manProf1],
    [/(agent|realtor|broker|producer|member)/, PHOTO.womanProf2],
    [/(script|objection|presentation|preview|cover|plate|asset|still|module|lesson|sop|tool|checklist|frame|recommend|featured)/, PHOTO.signing],
  ];
  for (const [re, v] of KW) if (re.test(key)) return v;
  // Final fallback — return a neutral interior image so we never show the dashed empty state
  return PHOTO.livingRoom;
}

function Placeholder({ label, ratio = '4/3', dark = false, corner, style, src }) {
  const id = src || lookupPh(label);
  if (id) {
    const url = id.startsWith('http') ? id : U(id, 1400);
    return (
      <div
        className={`ph ph-img ${dark ? 'ph-dark' : ''}`}
        style={{
          aspectRatio: ratio,
          backgroundImage: `url("${url}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'var(--slate)',
          ...style,
        }}
      />
    );
  }
  return (
    <div
      className={`ph ${dark ? 'ph-dark' : ''}`}
      style={{ aspectRatio: ratio, ...style }}
    >
      {corner && <span className="ph-corner">{corner}</span>}
      <span>[ {label} ]</span>
    </div>
  );
}

function Eyebrow({ children, mono = false, dark = false }) {
  return (
    <div className={mono ? 'eyebrow-mono' : 'eyebrow'} style={dark ? { color: 'var(--bronze-soft)' } : null}>
      {mono && <span style={{ marginRight: 8 }}>—</span>}
      {children}
    </div>
  );
}

function Stat({ num, label, dark = false }) {
  return (
    <div>
      <div className="stat-num">{num}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, lede, align = 'left', dark = false }) {
  return (
    <div style={{ textAlign: align, maxWidth: align === 'center' ? 720 : 'none', margin: align === 'center' ? '0 auto' : 0, marginBottom: 56 }}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2 className="display-2" style={{ marginTop: 16, color: dark ? 'var(--bone)' : 'var(--ink-text)' }}>{title}</h2>
      {lede && <p className={`lede ${dark ? 'lede-on-dark' : ''}`} style={{ marginTop: 20, marginLeft: align === 'center' ? 'auto' : 0, marginRight: align === 'center' ? 'auto' : 0 }}>{lede}</p>}
    </div>
  );
}

Object.assign(window, { Logo, Nav, Footer, Placeholder, Eyebrow, Stat, SectionHeader });
