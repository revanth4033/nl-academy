import { motion } from 'framer-motion';

const PAINS = [
  { icon: '🎲', text: 'Random tutorials with no direction' },
  { icon: '🗺️', text: 'No structured roadmap to follow' },
  { icon: '🙋', text: 'No mentorship when you get stuck' },
  { icon: '🛠️', text: 'No real projects for your portfolio' },
  { icon: '😰', text: 'No confidence to apply for jobs' },
];

const PILLARS = [
  { icon: '🗺️', title: 'Structured Roadmap', desc: '12-week plan — every topic, every week, in the right order.' },
  { icon: '🏭', title: 'Industry-First Learning', desc: 'Content built around what companies actually use in production.' },
  { icon: '🧠', title: 'Mentorship Support', desc: 'Weekly live sessions + async support from working professionals.' },
  { icon: '💼', title: 'Real Implementation', desc: 'Ship 4+ production-grade projects you can show in interviews.' },
];

export default function CourseProblem() {
  return (
    <section className="section problem-section">
      <div className="wrap problem-inner">
        {/* LEFT */}
        <motion.div
          className="problem-left"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="eyebrow" style={{ marginBottom: 20 }}>03 — The Problem</div>
          <h2 className="display h2" style={{ marginBottom: 32 }}>
            Why Most Learners<br /><em>Stay Stuck</em>
          </h2>
          <ul className="pain-list">
            {PAINS.map((p, i) => (
              <motion.li
                key={p.text}
                className="pain-item"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <span className="pain-icon">{p.icon}</span>
                <span>{p.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="problem-right"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="solution-label">NuLyft Fixes This</div>
          <div className="pillar-grid">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                className="pillar-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.09 }}
              >
                <div className="pillar-icon">{p.icon}</div>
                <div>
                  <div className="pillar-title">{p.title}</div>
                  <div className="pillar-desc">{p.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
