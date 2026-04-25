import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.2, 0.8, 0.2, 1], delay },
});

export default function FinalCTA({ onApply }) {
  return (
    <section className="final-cta" id="apply">
      <div className="wrap">
        <motion.div className="eyebrow eyebrow-plain" {...fadeUp(0)} style={{ justifyContent: 'center', display: 'flex' }}>
          Applications open · June 2026
        </motion.div>
        <motion.h2 {...fadeUp(0.08)}>
          Build the skills that <em>companies actually hire for.</em>
        </motion.h2>
        <motion.p className="lede" {...fadeUp(0.14)}>
          Join the next cohort across any of our six tracks. Seats are limited — we keep cohorts small on purpose.
        </motion.p>
        <motion.div className="final-cta-btns" {...fadeUp(0.2)}>
          <button className="btn btn-primary" onClick={onApply}>
            Apply Now
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </button>
          <a href="#courses" className="btn btn-ghost">Browse Courses</a>
        </motion.div>
      </div>
    </section>
  );
}
