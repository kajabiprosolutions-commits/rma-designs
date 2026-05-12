/* About Page — "Proof of Production" — copy from client docs */

function AboutPage({ tweaks, onNav }) {
  return (
    <div data-screen-label="About">
      {/* HERO */}
      <section className="surface-ink" style={{ paddingTop: 80, paddingBottom: 100 }}>
        <div className="container">
          <Eyebrow dark>By Producers. For Producers.</Eyebrow>
          <h1 className="display-1" style={{ color: 'var(--bone)', marginTop: 24, maxWidth: '14ch' }}>
            Real Systems. <span style={{ color: 'var(--brand-teal)' }}>Real Production.</span> Real Life.
          </h1>
          <p className="lede lede-on-dark" style={{ marginTop: 32, fontSize: 19, maxWidth: '64ch' }}>
            The real estate industry has changed. The agents who are winning today are not guessing, reacting, or relying on outdated playbooks. They are operating with structure, systems, and clarity. That is exactly why Realtor Mastery Academy was built.
          </p>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="surface-bone" style={{ padding: '64px 0', borderBottom: '1px solid var(--hairline-light)' }}>
        <div className="container">
          <div className="grid-4">
            {[
              { n: '$140M+', l: 'Active producer business' },
              { n: '$700M+', l: 'Bradley · residential sales' },
              { n: '$MM+', l: 'Marjorie · multi-million producer' },
              { n: 'Today', l: 'Still in production' },
            ].map(s => (
              <div key={s.l}>
                <div className="stat-num">{s.n}</div>
                <div className="stat-label">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY RMA WAS BUILT */}
      <section className="section">
        <div className="container-narrow">
          <Eyebrow>Why RMA was built</Eyebrow>
          <h2 className="display-2" style={{ marginTop: 16 }}>By Producers, For Producers.</h2>
          <p className="lede" style={{ marginTop: 32 }}>
            Realtor Mastery Academy is a performance-driven coaching platform designed for agents who are serious about building a real business, not just surviving transaction to transaction. This is not theory. This is not recycled content. This is real-world application built from active, high-level production.
          </p>
          <p style={{ marginTop: 24, fontSize: 16, lineHeight: 1.7, color: 'var(--ink-muted)' }}>
            At RMA, everything we teach is pressure-tested inside businesses led by multi-million dollar producers. That means every system, every conversation, and every strategy has been used, refined, and proven in today's market — not five years ago.
          </p>
          <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.7, color: 'var(--ink-muted)' }}>
            RMA was built on a simple philosophy. The best way to learn this business is from people actively producing at a high level. Not coaches who stepped out of production years ago. Not scripts that sound good on paper but fall apart in real conversations. Real producers solving real problems, in real time.
          </p>
        </div>
      </section>

      {/* CHAOS → CONTROL */}
      <section className="section surface-bone" style={{ borderTop: '1px solid var(--hairline-light)', borderBottom: '1px solid var(--hairline-light)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'start', gap: 80 }}>
            <div>
              <Eyebrow>The shift</Eyebrow>
              <h2 className="display-2" style={{ marginTop: 16 }}>From chaos to control.</h2>
            </div>
            <div>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-muted)' }}>
                Most agents are stuck in a cycle. They are chasing leads, reacting to problems, and rebuilding their process with every client. It is exhausting, inconsistent, and ultimately limits growth.
              </p>
              <p style={{ marginTop: 16, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, lineHeight: 1.3, color: 'var(--ink)' }}>
                RMA replaces that chaos with structure.
              </p>
              <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.7, color: 'var(--ink-muted)' }}>
                We give agents plug-and-play systems for every stage of the business, from the first conversation to the closing table. Listing presentations that convert. Buyer consultations that create commitment. Contract-to-close workflows that keep transactions moving smoothly. You stop winging it and start operating like a professional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER 1 — MARJORIE (bio placeholder) */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 80, alignItems: 'start' }} className="founder-grid">
            <div style={{ position: 'sticky', top: 96 }}>
              <div className="frame">
                <div style={{ aspectRatio: '4/5', overflow: 'hidden', position: 'relative' }}>
                  <img src="assets/marjorie-portrait.jpg" alt="Marjorie Adam" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <span style={{ position: 'absolute', top: 12, left: 12, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--warm-white)', background: 'rgba(12,12,12,0.65)', padding: '4px 8px', textTransform: 'uppercase' }}>Marjorie Adam</span>
                </div>
              </div>
              <div style={{ marginTop: 24, display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-muted)', letterSpacing: '0.08em' }}>
                <span>CO-FOUNDER</span>
                <span>$MM+ PRODUCER</span>
              </div>
            </div>
            <div>
              <Eyebrow>Founder · 01</Eyebrow>
              <h2 className="display-2" style={{ marginTop: 16 }}>Marjorie Adam</h2>
              <div className="caption-mono" style={{ marginTop: 8, color: 'var(--brand-blue)' }}>ACTIVE REALTOR · $MM+ PRODUCER · CO-FOUNDER</div>

              <div style={{ marginTop: 32, padding: 24, border: '1px dashed var(--hairline-light)', background: 'var(--paper)' }}>
                <div className="caption-mono" style={{ color: 'var(--brand-blue)' }}>BIO PENDING</div>
                <p style={{ marginTop: 12, fontSize: 15, lineHeight: 1.6, color: 'var(--ink-muted)' }}>
                  Marjorie Adam is a multi-million dollar producer and co-founder of Realtor Mastery Academy. Her bio is being finalized and will be inserted here verbatim.
                </p>
                <p style={{ marginTop: 12, fontSize: 13, color: 'var(--ink-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                  /* placeholder — client to provide final bio copy */
                </p>
              </div>

              <div style={{ marginTop: 40, padding: 32, background: 'var(--bone)', borderLeft: '2px solid var(--brand-blue)' }}>
                <div className="caption-mono" style={{ color: 'var(--brand-blue)' }}>HER FOCUS</div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, marginTop: 12, lineHeight: 1.3, letterSpacing: '-0.005em' }}>
                  Confidence at the appointment. The exact scripts a $MM+ producer uses when commission is challenged on page six.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <section style={{ padding: '0 0 0' }}>
        <div className="container">
          <div className="hairline" />
        </div>
      </section>

      {/* FOUNDER 2 — BRADLEY (verbatim bio) */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 80, alignItems: 'start' }} className="founder-grid-rev">
            <div>
              <Eyebrow>Founder · 02</Eyebrow>
              <h2 className="display-2" style={{ marginTop: 16 }}>Bradley Hanson</h2>
              <div className="caption-mono" style={{ marginTop: 8, color: 'var(--brand-blue)' }}>FOUNDER · MASTERY COACH · MANAGING BROKER</div>

              <p className="lede" style={{ marginTop: 32 }}>
                Real estate success should be structured, scalable, and predictable.
              </p>
              <p style={{ marginTop: 24, fontSize: 16, lineHeight: 1.7, color: 'var(--ink-muted)' }}>
                Bradley Hanson is the Founder and Mastery Coach of Real Estate Mastery Academy, built on a simple premise. As a top-performing Managing Broker and team leader, Bradley has spent the last decade building and leading a high-production real estate business, closing hundreds of transactions and generating more than $700 million in residential sales. His perspective is grounded in active production, not theory, and the Academy is a direct extension of the systems, processes, and standards he uses daily to drive consistent results in a competitive market.
              </p>
              <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.7, color: 'var(--ink-muted)' }}>
                At RMA, Bradley focuses on installing operational clarity inside an agent's business. His coaching centers on identifying inefficiencies, eliminating guesswork, and building repeatable systems across every stage of the transaction cycle, from lead generation to contract-to-close execution. Rather than relying on rigid, one-size-fits-all models, he works to align structure with the individual agent's strengths while maintaining a clear framework for growth. The outcome is a more disciplined, process-driven business that creates consistency in performance, improved conversion, and stronger long-term scalability.
              </p>
              <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.7, color: 'var(--ink-muted)' }}>
                Known for his high standards and direct approach, Bradley emphasizes accountability, execution, and measurable progress. His methodology is designed for agents who want to move beyond inconsistent production and into a more controlled, intentional business model.
              </p>

              <div style={{ marginTop: 40, padding: 32, background: 'var(--ink)', color: 'var(--bone)' }}>
                <div className="caption-mono" style={{ color: 'var(--brand-teal)' }}>HIS APPROACH</div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, marginTop: 12, lineHeight: 1.3, letterSpacing: '-0.005em', color: 'var(--bone)' }}>
                  Move agents beyond inconsistent production and into a controlled, intentional business model.
                </p>
              </div>

              <div style={{ marginTop: 48 }}>
                <div className="eyebrow-mono" style={{ marginBottom: 24 }}>OPERATING STANDARDS</div>
                <div className="grid-2" style={{ gap: 16 }}>
                  {[
                    { t: 'Accountability', d: 'Measurable progress beats motivational momentum every quarter.' },
                    { t: 'Execution', d: 'Frameworks installed, not philosophies discussed.' },
                    { t: 'Process Discipline', d: 'Repeatable across every transaction, every market.' },
                    { t: 'Sustainable Pipelines', d: 'Built once, compounding for the next decade.' },
                  ].map(s => (
                    <div key={s.t} style={{ padding: '16px 0', borderTop: '1px solid var(--hairline-light)' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16 }}>{s.t}</div>
                      <div style={{ fontSize: 14, color: 'var(--ink-muted)', marginTop: 6 }}>{s.d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ position: 'sticky', top: 96 }}>
              <div className="frame">
                <div style={{ aspectRatio: '4/5', overflow: 'hidden', position: 'relative' }}>
                  <img src="assets/bradley-portrait.jpg" alt="Bradley Hanson" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <span style={{ position: 'absolute', top: 12, left: 12, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--warm-white)', background: 'rgba(12,12,12,0.65)', padding: '4px 8px', textTransform: 'uppercase' }}>Bradley Hanson</span>
                </div>
              </div>
              <div style={{ marginTop: 24, display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-muted)', letterSpacing: '0.08em' }}>
                <span>$700M+ VOLUME</span>
                <span>MANAGING BROKER</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section surface-bone">
        <div className="container">
          <SectionHeader eyebrow="In their words" title="From producers working with Bradley." />
          <div className="grid-2" style={{ marginTop: 48, gap: 32 }}>
            {[
              {
                quote: "Brad's coaching is different because he doesn't try to force you into a rigid system. Instead, he gives you full access to his playbook and helps you build a structure that actually fits your business. His biggest impact for me has been identifying the gaps that were holding me back while keeping a clear long-term vision in place. From there, we've turned those improvements into documented processes that are trackable, repeatable, and built for growth. That shift has created more consistency and control in my business, which directly impacts results.",
                name: 'Angela Tauscher',
                title: 'Realtor · Arizona',
              },
              {
                quote: "If you want a coach who plays it safe, Bradley isn't your guy. He is a relentless, gritty powerhouse who brings a level of innovation to the table that most people can't even wrap their heads around. He doesn't just push you; he demands excellence and holds you to the fire until you reach it. There is absolutely nobody else I'd want in my corner — his energy is infectious, his drive is inspiring, and his accountability is the secret weapon every agent needs to actually win.",
                name: 'Chaney Compher',
                title: 'Realtor · Washington',
              },
            ].map(t => (
              <div key={t.name} className="card" style={{ background: 'var(--paper)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 40, color: 'var(--brand-blue)', lineHeight: 0.5 }}>"</div>
                <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.65, color: 'var(--ink-text)' }}>
                  {t.quote}
                </p>
                <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid var(--hairline-light)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                  <div className="caption-mono" style={{ marginTop: 4 }}>{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section-lg surface-ink">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <Eyebrow dark>More Than Coaching. A Standard.</Eyebrow>
          <p className="display-2" style={{ color: 'var(--bone)', marginTop: 24, fontWeight: 700 }}>
            This is not just about more transactions. It is about raising the standard of how you operate.
          </p>
          <p className="lede lede-on-dark" style={{ marginTop: 24, textAlign: 'center', margin: '24px auto 0' }}>
            How you show up to appointments. How you communicate with clients. How you manage your pipeline. How you build a business that actually supports your life.
          </p>
          <p style={{ marginTop: 32, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--brand-teal)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            If you are ready to stop chasing and start building, you are in the right place.
          </p>
          <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <button className="btn btn-brand btn-arrow" onClick={() => onNav('sales-main')}>Install the System</button>
            <button className="btn btn-ghost-dark btn-arrow" onClick={() => onNav('tier4')}>Apply for Mastery</button>
          </div>
        </div>
      </section>

      {/* OPERATING PRINCIPLES */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Operating principles" title="What we will not compromise." />
          <div className="grid-3" style={{ gap: 0, border: '1px solid var(--hairline-light)' }}>
            {[
              { n: '01', t: 'Active producers only', d: 'Every coach in RMA is currently in production. We coach what we are still doing today.' },
              { n: '02', t: 'Systems, not slogans', d: 'You will leave with scripts, checklists, and frameworks — not catchphrases.' },
              { n: '03', t: 'Proof of Action', d: 'Inside the Academy, you do the work to unlock the next month. No work, no progress.' },
              { n: '04', t: 'Real-world tested', d: 'Every system has been used, refined, and proven inside a $MM+ business this year.' },
              { n: '05', t: 'Standards over hype', d: 'Raising the standard of how you operate is the only measure of success.' },
              { n: '—', t: '', d: '' },
            ].map((v, i) => v.n === '—' ? (
              <div key={i} style={{ background: 'var(--bone)', padding: 32, borderRight: 'none', display: 'flex', alignItems: 'flex-end' }}>
                <div className="caption-mono">— THE STANDARDS WE TEACH ARE THE STANDARDS WE RUN.</div>
              </div>
            ) : (
              <div key={i} style={{
                padding: 32, background: 'var(--paper)',
                borderRight: (i + 1) % 3 !== 0 ? '1px solid var(--hairline-light)' : 'none',
                borderBottom: i < 3 ? '1px solid var(--hairline-light)' : 'none',
              }}
              className="value-cell"
              >
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: 'var(--brand-blue)', letterSpacing: '-0.02em' }}>{v.n}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, marginTop: 16, letterSpacing: '-0.01em' }}>{v.t}</h3>
                <p style={{ marginTop: 12, fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.6 }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer onNav={onNav} />

      <style>{`
        @media (max-width: 920px) {
          .founder-grid, .founder-grid-rev { grid-template-columns: 1fr !important; gap: 48px !important; }
          .founder-grid > div, .founder-grid-rev > div { position: static !important; }
          .value-cell { border-right: none !important; border-bottom: 1px solid var(--hairline-light) !important; }
        }
      `}</style>
    </div>
  );
}

Object.assign(window, { AboutPage });
