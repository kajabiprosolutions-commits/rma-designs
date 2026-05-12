/* Login — member sign-in */

function LoginPage({ tweaks, onNav }) {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [remember, setRemember] = useState(true);

  return (
    <div data-screen-label="Login" style={{ minHeight: 'calc(100vh - 72px)', background: 'var(--ink)', display: 'grid', gridTemplateColumns: '1.05fr 1fr', position: 'relative' }} className="login-grid">
      {/* Left — editorial frame */}
      <div className="login-left" style={{
        position: 'relative',
        background: 'var(--ink)',
        color: 'var(--bone)',
        padding: 'clamp(40px, 5vw, 80px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        borderRight: '1px solid var(--hairline-dark)',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.55 }}>
          <Placeholder label="member portal — interior" ratio="auto" dark style={{ width: '100%', height: '100%', border: 'none' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(14,22,32,0.55) 0%, rgba(14,22,32,0.92) 100%)' }} />

        <div style={{ position: 'relative' }}>
          <Logo dark={true} />
        </div>

        <div style={{ position: 'relative', maxWidth: 520 }}>
          <div className="caption-mono" style={{ color: 'var(--bone-muted)', marginBottom: 20 }}>· Member access</div>
          <h1 className="display-1" style={{ fontSize: 'clamp(40px, 5vw, 64px)', color: 'var(--bone)', lineHeight: 0.98 }}>
            The same scripts <span style={{ background: 'var(--brand-grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>we&rsquo;re using</span> in the field today.
          </h1>
          <p style={{ color: 'var(--bone-muted)', fontSize: 17, lineHeight: 1.55, marginTop: 24, maxWidth: 460 }}>
            New listings, fresh objections, contract-to-close updates — published as we encounter them.
          </p>

          <div style={{ marginTop: 56, display: 'flex', gap: 40, paddingTop: 32, borderTop: '1px solid var(--hairline-dark)' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.02em' }}>1,847</div>
              <div className="caption-mono" style={{ color: 'var(--bone-muted)', marginTop: 4 }}>Active members</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.02em' }}>340+</div>
              <div className="caption-mono" style={{ color: 'var(--bone-muted)', marginTop: 4 }}>Vault assets</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.02em' }}>Daily</div>
              <div className="caption-mono" style={{ color: 'var(--bone-muted)', marginTop: 4 }}>New material</div>
            </div>
          </div>
        </div>

        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bone-muted)', letterSpacing: '0.08em' }}>
          <span>RMA / 2026</span>
          <span>SECURE PORTAL · TLS 1.3</span>
        </div>
      </div>

      {/* Right — form */}
      <div className="login-right" style={{
        background: 'var(--warm-white)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(32px, 5vw, 80px) clamp(24px, 4vw, 64px)',
      }}>
        <div style={{ width: '100%', maxWidth: 440 }}>
          <div className="caption-mono" style={{ marginBottom: 12 }}>· Sign in to your account</div>
          <h2 className="display-2" style={{ fontSize: 'clamp(32px, 3.4vw, 44px)', marginBottom: 16 }}>Welcome back.</h2>
          <p className="body-md" style={{ color: 'var(--ink-muted)', marginBottom: 40 }}>
            Pick up where you left off. Your last lesson, last script, last note — all where you left them.
          </p>

          <form onSubmit={(e) => { e.preventDefault(); onNav('dashboard'); }} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <label className="caption-mono" style={{ display: 'block', marginBottom: 8, color: 'var(--ink-muted)' }}>Email</label>
              <input className="input" type="email" placeholder="you@brokerage.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
                <label className="caption-mono" style={{ color: 'var(--ink-muted)' }}>Password</label>
                <a href="#" onClick={(e)=>e.preventDefault()} className="caption-mono" style={{ color: 'var(--brand-blue)' }}>Forgot?</a>
              </div>
              <input className="input" type="password" placeholder="••••••••••" value={pw} onChange={(e)=>setPw(e.target.value)} />
            </div>

            <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--ink-muted)', cursor: 'pointer', marginTop: 4 }}>
              <span style={{
                width: 16, height: 16, border: '1px solid var(--hairline-light)',
                background: remember ? 'var(--ink)' : 'var(--paper)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--bone)', fontSize: 11,
              }} onClick={()=>setRemember(!remember)}>{remember ? '✓' : ''}</span>
              <span onClick={()=>setRemember(!remember)}>Keep me signed in for 30 days</span>
            </label>

            <button type="submit" className="btn btn-primary btn-arrow btn-lg" style={{ marginTop: 12, width: '100%', justifyContent: 'space-between' }}>
              Enter the Academy
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '8px 0', color: 'var(--ink-muted)' }}>
              <div style={{ flex: 1, height: 1, background: 'var(--hairline-light)' }} />
              <span className="caption-mono" style={{ fontSize: 10 }}>OR</span>
              <div style={{ flex: 1, height: 1, background: 'var(--hairline-light)' }} />
            </div>

            <button type="button" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
              Sign in with SSO
            </button>
          </form>

          <p style={{ marginTop: 32, fontSize: 13, color: 'var(--ink-muted)', textAlign: 'center' }}>
            New to RMA? <a href="#" onClick={(e)=>{e.preventDefault();onNav('tier1');}} style={{ color: 'var(--ink)', textDecoration: 'underline', textUnderlineOffset: 3 }}>Start with The Portal — free.</a>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 920px) {
          .login-grid { grid-template-columns: 1fr !important; }
          .login-left { min-height: 320px; padding: 40px 24px !important; }
          .login-left h1 { font-size: 36px !important; }
          .login-left .caption-mono + p { display: none; }
        }
      `}</style>
    </div>
  );
}

window.LoginPage = LoginPage;
