import { motion, useInView, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const STATS = [
  { prefix: '',  num: 4.2,  suffix: 'M',  decimals: 1, label: 'AI jobs projected\nby 2027 in India' },
  { prefix: '',  num: 73,   suffix: '%',  decimals: 0, label: 'companies actively\nhiring AI engineers' },
  { prefix: '',  num: 3.2,  suffix: 'x',  decimals: 1, label: 'salary premium for\nAI automation skills' },
  { prefix: '$', num: 1.3,  suffix: 'T',  decimals: 1, label: 'global AI market\nsize by 2030' },
];

const INDUSTRIES = [
  'Banking & Fintech', 'Healthtech', 'E-commerce', 'Enterprise SaaS',
  'EdTech', 'Insurance', 'Logistics', 'Legal Tech', 'HR & Recruiting',
  'Media & Content', 'Manufacturing', 'Real Estate',
];

const USE_CASES = [
  { icon: '🏦', label: 'Banking', text: 'AI agents automate loan decisioning and fraud detection pipelines' },
  { icon: '🏥', label: 'Healthtech', text: 'RAG systems surface patient records and clinical notes instantly' },
  { icon: '📦', label: 'E-commerce', text: 'AI workflows drive personalization, dynamic pricing, and support' },
  { icon: '🏢', label: 'Enterprise', text: 'Internal copilots connect to proprietary knowledge bases at scale' },
];

function CountingStat({ stat, trigger }) {
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!trigger) return;
    const ctrl = animate(0, stat.num, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        setDisplay(v.toFixed(stat.decimals));
      },
    });
    return ctrl.stop;
  }, [trigger, stat.num, stat.decimals]);

  return (
    <div className="cin2-stat">
      <div className="cin2-stat-num">
        {stat.prefix}{display}{stat.suffix}
      </div>
      <div className="cin2-stat-label" style={{ whiteSpace: 'pre-line' }}>{stat.label}</div>
    </div>
  );
}

function Marquee() {
  const doubled = [...INDUSTRIES, ...INDUSTRIES];
  return (
    <div className="cin2-ticker-wrap">
      <div className="cin2-ticker">
        {doubled.map((name, i) => (
          <span key={i} className="cin2-ticker-item">
            {name}
            <span className="cin2-ticker-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.2, 0.8, 0.2, 1], delay },
});

export default function CourseIndustry() {
  const statsRef = useRef(null);
  const triggered = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <section className="cp-section cp-warm">
      <div className="wrap">

        <motion.div {...fadeUp(0)}>
          <div className="cp-eyebrow">06 — Why This Matters</div>
          <h2 className="cp-h2">
            Companies don't hire people who learned tools.<br />
            They hire people who <em>built systems.</em>
          </h2>
          <p className="cin2-sub">
            AI automation is operational infrastructure now — not a research topic.
            Every industry is replacing repetitive workflows with intelligent pipelines,
            and paying ₹20–40 LPA for engineers who can build them.
          </p>
        </motion.div>

        {/* ── Counting stats ───────────────── */}
        <div className="cin2-stats-row" ref={statsRef}>
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              {...fadeUp(0.08 + i * 0.1)}
            >
              <CountingStat stat={s} trigger={triggered} />
            </motion.div>
          ))}
        </div>

        {/* ── Industry ticker ──────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Marquee />
        </motion.div>

        {/* ── Use-case cards ───────────────── */}
        <div className="cin2-cases">
          {USE_CASES.map((uc, i) => (
            <motion.div
              key={uc.label}
              className="cin2-case"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 + i * 0.08 }}
            >
              <div className="cin2-case-icon">{uc.icon}</div>
              <div>
                <div className="cin2-case-label">{uc.label}</div>
                <div className="cin2-case-text">{uc.text}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
