import { motion } from 'framer-motion';

const STEPS = [
  {
    num: '01',
    title: 'Foundations',
    desc: 'Core concepts, critical thinking, and the fundamentals of your chosen field — taught without shortcuts.',
  },
  {
    num: '02',
    title: 'Tools & Technique',
    desc: "Hands-on with the platforms, frameworks, and workflows used in industry today. You'll build muscle memory.",
  },
  {
    num: '03',
    title: 'Real Projects',
    desc: 'Apply your skills on practical, portfolio-worthy work — with weekly mentor reviews and feedback loops.',
  },
  {
    num: '04',
    title: 'Mastery & Launch',
    desc: 'Polish your portfolio, prepare for interviews, and step into your career with mentor support.',
  },
];

export default function Journey() {
  return (
    <section className="section" style={{ background: 'var(--canvas-alt)' }}>
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div>
            <div className="eyebrow">02 — The Journey</div>
            <h2 className="display h2" style={{ marginTop: 8 }}>
              A structured path, start to <em>career.</em>
            </h2>
          </div>
          <p className="lede">
            Every course follows the same proven arc — foundations to portfolio to career.
            No shortcuts. No filler.
          </p>
        </motion.div>

        <div className="journey-grid">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className="journey-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.1 }}
            >
              <div className="journey-num">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
