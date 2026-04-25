import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay },
});

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <motion.div className="eyebrow hero-eyebrow" {...fadeUp(0)}>
              Nu · Academy — Est. 2026
            </motion.div>
            <motion.h1 className="display h1" {...fadeUp(0.08)}>
              Learn what <em>shapes</em> careers, not what fills resumes.
            </motion.h1>
            <motion.p className="lede hero-lede" {...fadeUp(0.16)}>
              A premium educational academy offering structured, industry-led courses across AI,
              development, design, cybersecurity, and automation. Real skills. Real projects. Real outcomes.
            </motion.p>
            <motion.div className="hero-cta" {...fadeUp(0.22)}>
              <a href="#courses" className="btn btn-primary">
                Browse Courses
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
              <a href="#apply" className="btn btn-ghost">Apply for a cohort</a>
            </motion.div>
            <motion.div className="hero-meta" {...fadeUp(0.3)}>
              {[
                { k: '6', v: 'Disciplines' },
                { k: "Jun '26", v: 'Next Cohort' },
                { k: '25', v: 'Seats Per Track' },
                { k: 'Live', v: 'Cohort-Based' },
              ].map(({ k, v }) => (
                <div key={v} className="hero-meta-item">
                  <span className="k">{k}</span>
                  <span className="v">{v}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 }}
          >
            <img
              className="img-graded"
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&h=1100&fit=crop"
              alt="Students collaborating in a live cohort session"
            />
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span className="hero-badge-text">Founding Cohort · 2026</span>
            </div>
            <div className="hero-float">
              <div className="hero-float-label">Next Cohort</div>
              <div className="hero-float-val">June 22, 2026</div>
              <div className="hero-float-sub">Applications closing soon — 12 seats left across tracks.</div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
