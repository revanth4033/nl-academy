import { motion } from 'framer-motion';

const OUTCOME_CARDS = [
  {
    label: 'AI Track',
    title: 'AI systems & agents.',
    desc: 'Conversational agents, automation pipelines, custom LLM integrations.',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=200&h=140&fit=crop',
  },
  {
    label: 'Dev Track',
    title: 'Full-stack apps.',
    desc: 'Production-ready web and mobile apps with clean architecture.',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=140&fit=crop',
  },
  {
    label: 'Design + Security',
    title: 'Work you can show.',
    desc: 'Work you can point to in any interview — tangible and documented.',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b8?w=200&h=140&fit=crop',
  },
];

function OutcomeCard({ card, delay }) {
  return (
    <motion.div
      className="oc-card"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1], delay }}
    >
      <div className="oc-card-icon">
        <img src={card.img} alt={card.title} />
      </div>
      <div>
        <div className="oc-card-label">{card.label}</div>
        <h4>{card.title}</h4>
        <p>{card.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Outcomes() {
  return (
    <section className="section" style={{ background: 'var(--canvas-warm)' }} id="outcomes">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div>
            <div className="eyebrow">04 — Outcomes</div>
            <h2 className="display h2" style={{ marginTop: 8 }}>
              What you <em>actually</em> graduate with.
            </h2>
          </div>
          <p className="lede">
            A portfolio of deployed, defensible work — no matter which track you take.
            Certificates expire. Projects don't.
          </p>
        </motion.div>

        <div className="outcomes-grid">
          <motion.div
            className="oc-a"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <img
              className="outcome-bg"
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=1000&fit=crop"
              alt=""
            />
            <div className="oc-a-inner">
              <div className="oc-label">Capstone</div>
              <h3>Portfolio-ready projects across every track.</h3>
              <p>
                Every student will ship at least two real, deployed projects by the end of their
                program — reviewed by mentors, documented for interviews.
              </p>
            </div>
          </motion.div>

          <div className="outcomes-cards">
            {OUTCOME_CARDS.map((card, i) => (
              <OutcomeCard key={card.label} card={card} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
