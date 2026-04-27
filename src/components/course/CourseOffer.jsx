import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const FEATURES = [
  { icon: '🎯', text: '12 weeks of live mentorship sessions' },
  { icon: '🏗️', text: '4 production-grade capstone projects' },
  { icon: '💼', text: 'Career support — resume, LinkedIn, mock interviews' },
  { icon: '👥', text: 'Private cohort community (Discord)' },
  { icon: '♾️', text: 'Lifetime access to all recordings and resources' },
  { icon: '📜', text: 'NuLyft completion certificate' },
  { icon: '🤝', text: 'Hiring partner introductions' },
  { icon: '🔁', text: 'Free repeat — audit the next cohort anytime' },
];

const BONUSES = [
  '50+ prompt templates library',
  'AI tools cheatsheet (updated monthly)',
  '1:1 career strategy session',
];

function Countdown() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const target = new Date('2026-06-22T00:00:00');
    function tick() {
      const diff = target - Date.now();
      if (diff <= 0) return;
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="countdown">
      {[['d', 'Days'], ['h', 'Hrs'], ['m', 'Min'], ['s', 'Sec']].map(([k, l]) => (
        <div key={k} className="countdown-unit">
          <div className="countdown-val">{String(time[k]).padStart(2, '0')}</div>
          <div className="countdown-label">{l}</div>
        </div>
      ))}
    </div>
  );
}

export default function CourseOffer({ onApply }) {
  return (
    <section className="section offer-section" id="pricing">
      <div className="wrap offer-inner">
        {/* LEFT */}
        <motion.div
          className="offer-left"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow" style={{ marginBottom: 20 }}>09 — The Offer</div>
          <h2 className="display h2" style={{ marginBottom: 32 }}>
            Everything You <em>Get</em>
          </h2>
          <ul className="offer-features">
            {FEATURES.map((f, i) => (
              <motion.li
                key={f.text}
                className="offer-feature"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <span className="feature-icon">{f.icon}</span>
                <span>{f.text}</span>
              </motion.li>
            ))}
          </ul>

          <div className="offer-bonuses">
            <div className="bonus-label">Bonuses (limited cohort)</div>
            {BONUSES.map(b => (
              <div key={b} className="bonus-item">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — pricing card */}
        <motion.div
          className="offer-right"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <motion.div
            className="pricing-card-glow"
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(131,77,251,0), 0 4px 24px rgba(131,77,251,0.06)',
                '0 0 0 8px rgba(131,77,251,0.1), 0 4px 24px rgba(131,77,251,0.12)',
                '0 0 0 0 rgba(131,77,251,0), 0 4px 24px rgba(131,77,251,0.06)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.5 }}
            whileHover={{ scale: 1.015 }}
          >
            <div className="pcg-badge">Most Popular · AI & Automation</div>
            <div className="pcg-price-row">
              <div className="pcg-price">₹29,999</div>
              <div className="pcg-original">₹49,999</div>
            </div>
            <div className="pcg-emi">or ₹9,999 × 3 EMI — 0% interest</div>

            <div className="pcg-divider" />

            <div className="pcg-detail-row">
              <span>Batch starts</span><strong>June 22, 2026</strong>
            </div>
            <div className="pcg-detail-row">
              <span>Seats remaining</span>
              <strong className="accent-text seats-urgent">
                <motion.span
                  className="urgency-dot"
                  animate={{ opacity: [1, 0.25, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                />
                12 of 30
              </strong>
            </div>
            <div className="pcg-detail-row">
              <span>Format</span><strong>Live · Online</strong>
            </div>
            <div className="pcg-detail-row">
              <span>Duration</span><strong>12 Weeks</strong>
            </div>

            <div className="pcg-divider" />
            <div className="pcg-countdown-label">Offer expires in</div>
            <Countdown />

            <button className="btn btn-primary btn-full btn-hero-glow" onClick={onApply} style={{ marginTop: 28 }}>
              Join Upcoming Batch
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>

            <div className="pcg-guarantee">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink-soft)" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>7-day money-back guarantee</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
