import { motion } from 'framer-motion';

const STATS = [
  { value: '8+', label: 'Years in industry' },
  { value: '12', label: 'Products shipped' },
  { value: '200+', label: 'Students mentored' },
  { value: '4', label: 'Companies built AI for' },
];

const BUILT = [
  'AI automation platform used by 3 Series-A startups',
  'Chatbot pipeline handling 100K+ conversations/month',
  'RAG system for a legal-tech company in production',
  'Internal AI tools at a Fortune 500 firm',
];

export default function CourseMentor() {
  return (
    <section className="section mentor-section">
      <div className="wrap mentor-inner">
        {/* LEFT */}
        <motion.div
          className="mentor-left"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow" style={{ marginBottom: 20 }}>07 — Mentor</div>
          <h2 className="display h2" style={{ marginBottom: 16 }}>
            Learn From Builders,<br /><em>Not Just Trainers</em>
          </h2>
          <p style={{ color: 'var(--ink-muted)', lineHeight: 1.7, marginBottom: 28, fontSize: 17, maxWidth: '44ch' }}>
            Your mentor has built AI systems that run in production — not just lab experiments.
            You get their hard-won lessons, not recycled slides.
          </p>

          <div className="mentor-stats">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                className="mentor-stat"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              >
                <div className="mentor-stat-value">{s.value}</div>
                <div className="mentor-stat-label">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mentor-built">
            <div className="mentor-built-label">What they've shipped</div>
            <ul>
              {BUILT.map((b, i) => (
                <motion.li
                  key={b}
                  className="mentor-built-item"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.25 + i * 0.07 }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>{b}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* RIGHT — workspace visual */}
        <motion.div
          className="mentor-right"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="mentor-workspace">
            <div className="workspace-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=640&h=480&fit=crop"
                alt="Mentor workspace"
                className="workspace-img img-graded"
              />
              <div className="workspace-overlay" />
            </div>
            <div className="mentor-quote-card">
              <div className="mentor-quote-mark">"</div>
              <p className="mentor-quote-text">
                I don't teach what's in docs. I teach what I wish someone had told me when I was building my first AI system in production.
              </p>
              <div className="mentor-quote-attr">— Lead Mentor, NuLyft Academy</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
