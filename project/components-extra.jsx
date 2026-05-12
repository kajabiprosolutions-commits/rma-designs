/* Shared bits for the new pages: VariantStrip, LockModal, FormField */

function VariantStrip({ variants, value, onChange, dark = false }) {
  return (
    <div className={`variant-strip ${dark ? 'variant-strip-dark' : ''}`}>
      <div className="container variant-strip-inner">
        <span className="caption-mono variant-strip-label">{dark ? 'UI variant /' : 'UI variant /'}</span>
        <div className="variant-strip-tabs">
          {variants.map(v => (
            <button
              key={v.id}
              className={`variant-tab ${value === v.id ? 'active' : ''}`}
              onClick={() => onChange(v.id)}
            >
              <span className="variant-tab-key">{v.key}</span>
              <span className="variant-tab-label">{v.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function LockModal({ open, item, onClose, onUpgrade }) {
  if (!open || !item) return null;
  return (
    <div className="lock-modal-overlay" onClick={onClose}>
      <div className="lock-modal" onClick={e => e.stopPropagation()}>
        <button className="lock-modal-close" onClick={onClose} aria-label="Close">×</button>
        <div className="caption-mono" style={{ color: 'var(--brand-teal)', marginBottom: 12 }}>
          Wait — this is locked
        </div>
        <h3 className="display-3" style={{ marginBottom: 16 }}>
          Upgrade to <span style={{ background: 'var(--brand-grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{item.tierName || `Tier ${item.tier}`}</span> to unlock this asset
        </h3>
        <p className="lede" style={{ marginBottom: 28, color: 'var(--bone-muted)' }}>
          <strong style={{ color: 'var(--bone)' }}>{item.title}</strong> is part of {item.tierName || `Tier ${item.tier}`}. You'll get this plus {item.lockedTotal || '180+'} more assets, scripts, and SOPs the day you upgrade.
        </p>
        <div className="lock-modal-actions">
          <button className="btn btn-bronze" onClick={() => onUpgrade(item.tier)}>
            See Tier {item.tier} →
          </button>
          <button className="btn-ghost-light" onClick={onClose}>Keep browsing</button>
        </div>
      </div>
    </div>
  );
}

function FormField({ label, type = 'text', value, onChange, placeholder, required, rows, options, hint, dark = false }) {
  const id = `f-${label.replace(/\s+/g, '-').toLowerCase()}`;
  return (
    <div className="form-field">
      <label htmlFor={id} className="caption-mono" style={{ color: dark ? 'var(--bone-muted)' : 'var(--ink-muted)' }}>
        {label}{required && <span style={{ color: 'var(--brand-teal)', marginLeft: 4 }}>*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          className={dark ? 'input input-dark' : 'input'}
          value={value || ''}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows || 4}
        />
      ) : type === 'select' ? (
        <select
          id={id}
          className={dark ? 'input input-dark' : 'input'}
          value={value || ''}
          onChange={e => onChange(e.target.value)}
        >
          <option value="">{placeholder || 'Select…'}</option>
          {(options || []).map(o => (
            <option key={o.value || o} value={o.value || o}>{o.label || o}</option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          className={dark ? 'input input-dark' : 'input'}
          type={type}
          value={value || ''}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
        />
      )}
      {hint && <div className="caption-mono" style={{ color: 'var(--ink-muted)', marginTop: 6, fontSize: 10 }}>{hint}</div>}
    </div>
  );
}

function PriceCard({ tier, name, price, period, eyebrow, summary, included, cta, ctaAction, featured, dark = false, footnote }) {
  return (
    <div className={`price-card ${featured ? 'featured' : ''} ${dark ? 'dark' : ''}`}>
      {eyebrow && <div className="caption-mono" style={{ color: 'var(--brand-teal)', marginBottom: 12 }}>{eyebrow}</div>}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 8 }}>
        <h3 className="display-3" style={{ color: dark ? 'var(--bone)' : 'var(--ink)', marginBottom: 0 }}>{name}</h3>
        <span className="caption-mono" style={{ color: dark ? 'var(--bone-muted)' : 'var(--ink-muted)' }}>Tier {tier}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 16 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 44, color: dark ? 'var(--bone)' : 'var(--ink)' }}>{price}</span>
        {period && <span className="caption-mono" style={{ color: dark ? 'var(--bone-muted)' : 'var(--ink-muted)' }}>{period}</span>}
      </div>
      <p style={{ fontSize: 14, color: dark ? 'var(--bone-muted)' : 'var(--ink-muted)', marginBottom: 24, lineHeight: 1.6 }}>{summary}</p>
      <ul className="price-card-list">
        {(included || []).map((item, i) => (
          <li key={i}>
            <span style={{ color: 'var(--brand-teal)' }}>—</span>
            <span style={{ color: dark ? 'var(--bone)' : 'var(--ink-text)' }}>{item}</span>
          </li>
        ))}
      </ul>
      <button className={featured ? 'btn btn-bronze' : (dark ? 'btn btn-ghost-light' : 'btn btn-primary')} style={{ width: '100%', marginTop: 24 }} onClick={ctaAction}>
        {cta || 'Continue'}
      </button>
      {footnote && <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: dark ? 'var(--bone-muted)' : 'var(--ink-muted)', textAlign: 'center', marginTop: 12 }}>{footnote}</div>}
    </div>
  );
}

Object.assign(window, { VariantStrip, LockModal, FormField, PriceCard });
