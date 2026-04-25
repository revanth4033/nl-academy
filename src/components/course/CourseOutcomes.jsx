import { motion } from 'framer-motion';

const OUTCOMES = [
  {
    name: 'Priya M.',
    before: 'Customer support executive',
    after: 'AI Automation Engineer at a SaaS startup',
    salary: '₹4.2L → ₹11L',
    quote: 'Built my first AI agent in week 8. Got a job offer before the program ended.',
    color: '#834DFB',
  },
  {
    name: 'Arjun K.',
    before: 'Freelance web developer',
    after: 'AI Product Builder at a fintech company',
    salary: '₹5L → ₹14L',
    quote: 'The projects in the curriculum are exactly what interviewers asked about.',
    color: '#4A1FB8',
  },
  {
    name: 'Sneha R.',
    before: 'Recent CS graduate with no job',
    after: 'AI Engineer at an AI-first startup',
    salary: '₹0 → ₹9L',
    quote: 'Went from zero to shipping AI in production in 3 months. Insane.',
    color: '#10A37F',
  },
  {
    name: 'Rahul T.',
    before: 'Data analyst doing manual reports',
    after: 'AI Workflow Architect at a consulting firm',
    salary: '₹6L → ₹16L',
    quote: 'The mentorship made the difference. Real feedback, not just videos.',
    color: '#FF6B35',
  },
];

const float = (i) => ({
  animate: { y: [0, i % 2 === 0 ? -8 : 8, 0] },
  transition: { duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 },
});

export default function CourseOutcomes() {
  return (
    <section className="section outcomes-section">
      <div className="wrap">
        <motion.div
          className="section-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow eyebrow-plain" style={{ justifyContent: 'center', display: 'flex', marginBottom: 16 }}>08 — Student Outcomes</div>
          <h2 className="display h2" style={{ textAlign: 'center' }}>
            Real Learners. <em>Real Outcomes.</em>
          </h2>
          <p className="lede" style={{ textAlign: 'center', margin: '16px auto 0' }}>
            People who were exactly where you are — and made the leap.
          </p>
        </motion.div>

        <div className="outcomes-grid">
          {OUTCOMES.map((o, i) => (
            <motion.div
              key={o.name}
              className="outcome-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              {...float(i)}
            >
              <div className="outcome-header" style={{ '--oc': o.color }}>
                <div className="outcome-avatar" style={{ background: o.color + '22', border: `1px solid ${o.color}44` }}>
                  <span style={{ color: o.color, fontFamily: 'var(--f-mono)', fontSize: 16, fontWeight: 600 }}>
                    {o.name[0]}
                  </span>
                </div>
                <div>
                  <div className="outcome-name">{o.name}</div>
                  <div className="outcome-salary">{o.salary}</div>
                </div>
              </div>
              <div className="outcome-journey">
                <div className="outcome-before">
                  <span className="journey-label">Before</span>
                  <span>{o.before}</span>
                </div>
                <div className="outcome-arrow">→</div>
                <div className="outcome-after">
                  <span className="journey-label" style={{ color: o.color }}>After</span>
                  <span>{o.after}</span>
                </div>
              </div>
              <blockquote className="outcome-quote">"{o.quote}"</blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
