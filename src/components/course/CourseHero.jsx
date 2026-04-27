import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const TECH = [
  { label: 'Python', color: '#3776AB' },
  { label: 'LangChain', color: '#1C3C3C' },
  { label: 'OpenAI', color: '#10A37F' },
  { label: 'FastAPI', color: '#009688' },
  { label: 'RAG', color: '#834DFB' },
  { label: 'Agents', color: '#FF6B35' },
];

const float = (delay = 0, range = 12) => ({
  animate: { y: [0, -range, 0] },
  transition: { duration: 3.5 + delay * 0.4, repeat: Infinity, ease: 'easeInOut', delay },
});

export default function CourseHero({ onApply }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section className="course-hero" ref={ref} id="top">
      <motion.div className="course-hero-bg" style={{ y: bgY }} />
      {/* Ambient animated glow blob */}
      <motion.div
        className="course-hero-blob"
        animate={{ x: [0, 30, 0, -20, 0], y: [0, -15, 5, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="wrap course-hero-inner">
        {/* LEFT */}
        <motion.div
          className="course-hero-left"
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="eyebrow" style={{ marginBottom: 24 }}>
            AI & Automation Engineering · 12 Weeks
          </div>
          <h1 className="display h1 course-hero-title">
            Become an AI<br />
            Automation <em>Engineer</em> —<br />
            Not Just Another Learner
          </h1>
          <p className="course-hero-sub">
            Build real AI systems, workflows, and agents used in industry.
            From zero to deployment — with mentors who've shipped it themselves.
          </p>
          <div className="course-hero-btns">
            <button className="btn btn-primary btn-hero-glow btn-pulse" onClick={onApply}>
              Join Upcoming Batch
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
            <button className="btn btn-ghost">
              Watch Program Preview
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
            </button>
          </div>
          <motion.div
            className="course-trust-line"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <span>Live Mentorship</span>
            <span className="trust-dot" />
            <span>Real Projects</span>
            <span className="trust-dot" />
            <span>Career Focused</span>
          </motion.div>
        </motion.div>

        {/* RIGHT — floating visual */}
        <div className="course-hero-right">
          {/* Salary badge */}
          <motion.div className="hero-float-card salary-badge" {...float(0)}>
            <div className="salary-badge-inner">
              <div className="salary-label">Avg. Salary After</div>
              <div className="salary-amount">₹12 LPA</div>
              <div className="salary-bar">
                <motion.div
                  className="salary-bar-fill"
                  initial={{ width: 0 }}
                  animate={{ width: '78%' }}
                  transition={{ duration: 1.2, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                />
              </div>
            </div>
          </motion.div>

          {/* Project preview card */}
          <motion.div className="hero-float-card project-preview-card" {...float(0.6)}>
            <div className="ppc-header">
              <div className="ppc-dot red" /><div className="ppc-dot yellow" /><div className="ppc-dot green" />
            </div>
            <div className="ppc-line w80" />
            <div className="ppc-line w60" />
            <div className="ppc-line w90" />
            <div className="ppc-line w50" />
            <div className="ppc-label">AI Resume Analyzer</div>
          </motion.div>

          {/* Placement card */}
          <motion.div className="hero-float-card placement-card" {...float(1.1)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>12 placed in last cohort</span>
          </motion.div>

          {/* Tech stack */}
          <motion.div className="hero-float-card tech-stack-card" {...float(0.3)}>
            <div className="tsc-label">Tech Stack</div>
            <div className="tsc-tags">
              {TECH.map(t => (
                <span key={t.label} className="tsc-tag" style={{ '--tc': t.color }}>
                  {t.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Cohort card */}
          <motion.div className="hero-float-card cohort-card" {...float(0.8)}>
            <div className="cohort-avatars">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="cohort-avatar" style={{ background: `hsl(${260 + i * 20}, 60%, ${55 + i * 5}%)` }} />
              ))}
            </div>
            <span>12 seats left</span>
          </motion.div>

          {/* Main visual glow */}
          <div className="hero-visual-glow" />
          <div className="hero-visual-grid" />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <motion.div
          className="scroll-dot"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
