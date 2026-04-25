import { motion } from 'framer-motion';

const PLANS = [
  {
    tag: 'UI/UX Design',
    title: 'Design & prototype with purpose.',
    sub: 'Build a product-ready design portfolio through live critique and real case studies.',
    price: '₹19,999',
    items: ['Starts June 15, 2026', '10 Weeks · Live Online', '18 seats remaining'],
    featured: false,
  },
  {
    tag: 'Most Popular · AI & Automation',
    title: 'Become an AI engineer the industry actually hires.',
    sub: 'Our flagship program — career-focused, industry-led, outcome-guaranteed.',
    price: '₹29,999',
    items: ['Starts June 22, 2026', '12 Weeks · Live Online', '12 seats remaining'],
    featured: true,
  },
  {
    tag: 'Full-Stack Development',
    title: 'Ship modern web apps, end to end.',
    sub: 'From fundamentals to production-grade React + Node deployments.',
    price: '₹34,999',
    items: ['Starts July 6, 2026', '16 Weeks · Live Online', '20 seats remaining'],
    featured: false,
  },
];

export default function Pricing({ onApply }) {
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div>
            <div className="eyebrow">07 — Join a cohort</div>
            <h2 className="display h2" style={{ marginTop: 8 }}>
              Upcoming <em>cohorts.</em>
            </h2>
          </div>
          <p className="lede">
            Limited seats per cohort keeps mentorship genuine and personal.
            Flexible payment plans available on every track.
          </p>
        </motion.div>

        <div className="pricing-grid">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.tag}
              className={`price${plan.featured ? ' featured' : ''}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.1 }}
            >
              <span className="price-tag">{plan.tag}</span>
              <h3>{plan.title}</h3>
              <p className="price-sub">{plan.sub}</p>
              <div className="price-amount">
                {plan.price} <span className="per">/ cohort</span>
              </div>
              <ul>
                {plan.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <button
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-ghost'}`}
                onClick={onApply}
              >
                Apply Now
                {plan.featured ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                ) : null}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a className="link-arrow" href="#courses">
            Explore all six courses
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
