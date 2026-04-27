import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.2, 0.8, 0.2, 1], delay },
});

export default function CourseFinalCTA({ onApply }) {
  return (
    <section className="course-final-cta">
      {/* Animated gradient background */}
      <motion.div
        className="cta-bg-gradient"
        animate={{
          background: [
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(131,77,251,0.14) 0%, transparent 70%)',
            'radial-gradient(ellipse 80% 70% at 45% 55%, rgba(74,31,184,0.16) 0%, transparent 70%)',
            'radial-gradient(ellipse 70% 60% at 55% 45%, rgba(131,77,251,0.14) 0%, transparent 70%)',
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(131,77,251,0.14) 0%, transparent 70%)',
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="cta-pulse-ring"
        animate={{ scale: [1, 1.4, 1], opacity: [0.18, 0, 0.18] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="cta-pulse-ring cta-pulse-ring-2"
        animate={{ scale: [1, 1.6, 1], opacity: [0.1, 0, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div className="eyebrow eyebrow-plain" {...fadeUp(0)} style={{ justifyContent: 'center', display: 'flex', marginBottom: 16 }}>
          10 — Join the Next Cohort
        </motion.div>
        <motion.h2 className="display h2 course-cta-title" {...fadeUp(0.08)}>
          Your Career Won't Change<br /><em>By Waiting</em>
        </motion.h2>
        <motion.p className="lede" {...fadeUp(0.14)} style={{ margin: '20px auto', textAlign: 'center' }}>
          The next version of your career starts today.
          12 weeks from now you could be building AI systems in production.
        </motion.p>
        <motion.div {...fadeUp(0.2)}>
          <button className="btn btn-primary btn-xl btn-hero-glow btn-pulse" onClick={onApply}>
            Join Upcoming Batch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </button>
          <div style={{ marginTop: 20, fontFamily: 'var(--f-mono)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
            Batch starts June 22, 2026 · 12 seats left
          </div>
        </motion.div>
        <motion.div className="cta-reinforcement" {...fadeUp(0.28)}>
          <span>Beginner Friendly</span>
          <span className="trust-dot" />
          <span>Structured Learning</span>
          <span className="trust-dot" />
          <span>Industry Focused</span>
        </motion.div>
      </div>
    </section>
  );
}
