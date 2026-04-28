import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const STATS = [
  { val: '94%', label: 'Placement Rate' },
  { val: '6x', label: 'Avg Salary Hike' },
  { val: '12 wks', label: 'To Job-Ready' },
  { val: '< 25', label: 'Seats Left' },
];

export default function CourseHero({ onEnroll }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <header className="ch-hero" ref={ref}>
      <div className="ch-grid-bg" />
      <motion.div
        className="ch-orb ch-orb-1"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="ch-orb ch-orb-2"
        animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
      />
      <motion.div
        className="ch-orb ch-orb-3"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <motion.div className="wrap" style={{ y, opacity, position: 'relative', zIndex: 2 }}>
        <div className="ch-hero-inner">
          <motion.div
            className="ch-live-badge"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <span className="ch-badge-dot" />
            Next cohort · June 22, 2026 · 12 seats remaining
          </motion.div>

          <motion.h1
            className="ch-headline"
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 0.08 }}
          >
            Stop learning <em>about</em> AI.<br />
            Start building <span className="ch-grad">with it.</span>
          </motion.h1>

          <motion.p
            className="ch-sub"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 0.18 }}
          >
            A 12-week live cohort that turns ambitious people into AI Automation Engineers —
            with real projects, real mentors, and a portfolio that gets you hired.
          </motion.p>

          <motion.div
            className="ch-hero-cta"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.28 }}
          >
            <button className="btn btn-primary ch-btn-enroll" onClick={onEnroll}>
              Enroll Now — ₹29,999
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
            <button className="btn btn-ghost">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" style={{ marginRight: 4 }}>
                <circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
              </svg>
              Watch Preview
            </button>
          </motion.div>

          <motion.div
            className="ch-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.42 }}
          >
            {STATS.map(({ val, label }) => (
              <div key={label} className="ch-stat">
                <div className="ch-stat-val">{val}</div>
                <div className="ch-stat-label">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}
