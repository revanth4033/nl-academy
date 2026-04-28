import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay },
});

export default function CourseFinalPush({ onEnroll }) {
  return (
    <section className="cfp-section">
      <div className="cfp-orb-1" />
      <div className="cfp-orb-2" />

      <div className="wrap">
        <div className="cfp-inner">
          <motion.div className="cfp-label" {...fadeUp(0)}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(155,107,255,0.7)', display: 'inline-block' }} />
            June 22, 2026 · Final seats
          </motion.div>

          <motion.h2 className="cfp-headline" {...fadeUp(0.08)}>
            The version of you<br />
            that knows how to build<br />
            AI — <span className="ch-grad">starts here.</span>
          </motion.h2>

          <motion.p className="cfp-sub" {...fadeUp(0.16)}>
            A year from now, you'll either be the person who built AI systems for a living —
            or the person who kept meaning to start. The only difference is what you do today.
          </motion.p>

          <motion.div className="cfp-cta-wrap" {...fadeUp(0.22)}>
            <button className="btn btn-primary cfp-btn" onClick={onEnroll}>
              Enroll Before Seats Fill
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
            <a
              href="mailto:hello@nulyft.academy"
              className="btn btn-ghost"
            >
              Talk to an advisor
            </a>
          </motion.div>

          <motion.p className="cfp-fine" {...fadeUp(0.3)}>
            30-day money-back guarantee · Secure payment · Instant enrollment confirmation
          </motion.p>
        </div>
      </div>
    </section>
  );
}
