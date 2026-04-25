const ITEMS = [
  { label: 'Industry-led', sub: 'curriculum' },
  { label: 'Cohort-based', sub: 'live learning' },
  { label: 'Portfolio-first', sub: 'outcomes' },
  { label: 'Hyderabad', sub: '& remote' },
  { label: 'Industry-led', sub: 'curriculum' },
  { label: 'Cohort-based', sub: 'live learning' },
  { label: 'Portfolio-first', sub: 'outcomes' },
  { label: 'Hyderabad', sub: '& remote' },
];

export default function TrustStrip() {
  return (
    <div className="trust">
      <div className="trust-row">
        <div className="trust-track" aria-hidden="true">
          {ITEMS.map((item, i) => (
            <span key={i} className="trust-item">
              {item.label}
              <span>/ {item.sub}</span>
              {i < ITEMS.length - 1 ? <span className="trust-sep" /> : null}
            </span>
          ))}
        </div>
        <div className="trust-track" aria-hidden="true">
          {ITEMS.map((item, i) => (
            <span key={i} className="trust-item">
              {item.label}
              <span>/ {item.sub}</span>
              {i < ITEMS.length - 1 ? <span className="trust-sep" /> : null}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
