import { motion } from 'framer-motion';

const ROLES = [
  {
    icon: '⚡',
    role: 'AI Automation Engineer',
    desc: 'Design and deploy intelligent pipelines that automate workflows across business systems.',
    demand: 'High Demand',
    salary: '₹12–28 LPA',
  },
  {
    icon: '🔗',
    role: 'AI Workflow Builder',
    desc: 'Connect APIs, models, and data sources into seamless end-to-end automation flows.',
    demand: 'Rapid Growth',
    salary: '₹10–22 LPA',
  },
  {
    icon: '🤖',
    role: 'AI Agent Developer',
    desc: 'Build autonomous agents that reason, plan, and execute complex multi-step tasks.',
    demand: 'Emerging Role',
    salary: '₹15–35 LPA',
  },
  {
    icon: '🚀',
    role: 'AI Product Builder',
    desc: 'Ship AI-powered products from zero to deployment — idea, build, launch.',
    demand: 'Founder-Ready',
    salary: '₹18–40+ LPA',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.2, 0.8, 0.2, 1], delay },
});

function RoleCard({ role, index }) {
  return (
    <motion.div
      className="ci-card"
      {...fadeUp(index * 0.1)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      <div className="ci-card-glow" />
      <div className="ci-icon">{role.icon}</div>
      <div className="ci-role">{role.role}</div>
      <p className="ci-desc">{role.desc}</p>
      <div className="ci-demand">
        <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
        {role.demand}
      </div>
      <div className="ci-salary">{role.salary}</div>
    </motion.div>
  );
}

export default function CourseIdentity() {
  return (
    <section className="cp-section cp-light">
      <div className="wrap">
        <motion.div {...fadeUp(0)}>
          <div className="cp-eyebrow">02 — Who You Become</div>
          <h2 className="cp-h2">
            Pick the version of you<br />that <em>companies fight over.</em>
          </h2>
          <p className="cp-lede">
            This program doesn't teach tools in isolation. It builds you into a specific kind
            of professional — one the market is actively searching for.
          </p>
        </motion.div>

        <div className="ci-grid">
          {ROLES.map((role, i) => (
            <RoleCard key={role.role} role={role} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
