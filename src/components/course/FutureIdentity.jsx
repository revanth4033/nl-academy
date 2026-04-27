import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const ROLES = [
  {
    title: 'AI Automation Engineer',
    salary: '₹8L – ₹18L / yr',
    desc: 'Build end-to-end AI pipelines that automate complex business workflows at scale.',
    demand: 94,
    icon: '⚡',
  },
  {
    title: 'AI Workflow Builder',
    salary: '₹7L – ₹15L / yr',
    desc: 'Design and deploy intelligent automation flows using LLMs, APIs, and no-code tools.',
    demand: 87,
    icon: '🔄',
  },
  {
    title: 'AI Agent Developer',
    salary: '₹10L – ₹22L / yr',
    desc: 'Create autonomous AI agents with memory, tools, and reasoning that act independently.',
    demand: 96,
    icon: '🤖',
  },
  {
    title: 'AI Product Builder',
    salary: '₹9L – ₹20L / yr',
    desc: 'Turn AI capabilities into user-facing products — from prototype to production.',
    demand: 91,
    icon: '🚀',
  },
];

function TiltCard({ role, i }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-60, 60], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-60, 60], [-8, 8]), { stiffness: 200, damping: 20 });

  function onMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function onMouseLeave() { x.set(0); y.set(0); }

  return (
    <motion.div
      className="identity-card"
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.1 }}
      whileHover={{ scale: 1.02, y: -6 }}
    >
      <div className="identity-icon">{role.icon}</div>
      <h3 className="identity-title">{role.title}</h3>
      <p className="identity-desc">{role.desc}</p>
      <div className="identity-bottom">
        <div className="identity-salary-row">
          <span className="identity-salary">{role.salary}</span>
          <span className="demand-badge" data-level={role.demand >= 93 ? 'very-high' : 'high'}>
            {role.demand >= 93 ? '🔥 Very High Demand' : '📈 High Demand'}
          </span>
        </div>
        <div className="identity-demand">
          <div className="demand-bar">
            <motion.div
              className="demand-fill"
              initial={{ width: 0 }}
              whileInView={{ width: `${role.demand}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 + i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            />
          </div>
          <span className="demand-pct">{role.demand}%</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function FutureIdentity() {
  return (
    <section className="section identity-section">
      <div className="wrap">
        <motion.div
          className="section-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="eyebrow eyebrow-plain" style={{ justifyContent: 'center', display: 'flex', marginBottom: 16 }}>02 — Future Identity</div>
          <h2 className="display h2" style={{ textAlign: 'center' }}>
            Who You Become <em>After This Program</em>
          </h2>
          <p className="lede" style={{ textAlign: 'center', margin: '16px auto 0' }}>
            Four career paths opening up — each one in high demand and growing.
          </p>
        </motion.div>

        <div className="identity-grid">
          {ROLES.map((role, i) => <TiltCard key={role.title} role={role} i={i} />)}
        </div>
      </div>
    </section>
  );
}
