import { motion } from 'framer-motion';

const USE_CASES = [
  { icon: '🏦', text: 'Banks use AI agents to automate loan decisioning and fraud detection pipelines.' },
  { icon: '🏥', text: 'Healthtech teams build RAG systems to surface patient records and clinical notes.' },
  { icon: '📦', text: 'E-commerce platforms run AI workflows for personalization, pricing, and support.' },
  { icon: '🏢', text: 'Enterprises deploy internal copilots that connect to their proprietary knowledge bases.' },
];

const STATS = [
  { val: '4.2M', sub: 'AI jobs projected\nby 2027 in India' },
  { val: '73%', sub: 'companies actively\nhiring AI engineers' },
  { val: '3.2x', sub: 'salary premium for\nAI automation skills' },
  { val: '$1.3T', sub: 'global AI market\nsize by 2030' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.2, 0.8, 0.2, 1], delay },
});

export default function CourseIndustry() {
  return (
    <section className="cp-section cp-warm">
      <div className="wrap">
        <motion.div {...fadeUp(0)}>
          <div className="cp-eyebrow">06 — Why This Matters</div>
          <h2 className="cp-h2">
            Companies don't hire people<br />who learned tools.<br />
            They hire people who <em>built systems.</em>
          </h2>
        </motion.div>

        <div className="cin-inner">
          <motion.div {...fadeUp(0.1)}>
            <p className="cin-sub">
              AI automation is no longer a research topic. It's operational infrastructure.
              Across every industry, teams are replacing repetitive workflows with intelligent pipelines —
              and they need engineers who can build them.
            </p>
            <p className="cin-sub" style={{ marginBottom: 28 }}>
              This course doesn't teach you how to use ChatGPT. It teaches you how to
              architect, build, and ship production-grade AI systems — the kind that companies
              are paying engineers ₹20–40 LPA to build.
            </p>
            <div className="cin-use-cases">
              {USE_CASES.map((uc, i) => (
                <motion.div
                  key={uc.text}
                  className="cin-uc"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1], delay: 0.18 + i * 0.08 }}
                >
                  <span className="cin-uc-icon">{uc.icon}</span>
                  {uc.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="cin-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 }}
          >
            {STATS.map(({ val, sub }) => (
              <div key={val} className="cin-stat-card">
                <div className="cin-stat-big">{val}</div>
                <div className="cin-stat-sub" style={{ whiteSpace: 'pre-line' }}>{sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
