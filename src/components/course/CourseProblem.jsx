import { motion } from 'framer-motion';

// Fixed rotations + offsets so cards look scattered but are deterministic
const PAINS = [
  { short: 'Random tutorials', long: 'No direction, just endless YouTube rabbit holes', rot: -5, dx: -6, dy: 8 },
  { short: 'No roadmap',       long: 'Jumping between topics with no structured path',  rot:  4, dx:  8, dy: -10 },
  { short: 'Zero mentorship',  long: 'Stuck for days on problems a mentor solves in 5 mins', rot: -7, dx: -4, dy: 6 },
  { short: 'Too much theory',  long: 'Concepts but no hands-on, deployable practice',   rot:  6, dx:  6, dy: -6 },
  { short: 'No real projects', long: 'Nothing to show recruiters when it matters most', rot: -3, dx: -8, dy: 10 },
  { short: 'Interview fear',   long: 'No confidence because you never shipped anything real', rot: 5, dx: 4, dy: -8 },
];

const SOLUTIONS = [
  {
    icon: '📍',
    text: 'A clear 12-week path, week by week',
    img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=180&fit=crop',
  },
  {
    icon: '🎙️',
    text: 'Live sessions with active practitioners',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=180&fit=crop',
  },
  {
    icon: '🔁',
    text: 'Weekly 1:1 mentor check-ins & code reviews',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=180&fit=crop',
  },
  {
    icon: '🛠️',
    text: 'Every module ends with a deployable project',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=180&fit=crop',
  },
  {
    icon: '💼',
    text: 'Portfolio of 5+ real AI apps',
    img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=180&fit=crop',
  },
  {
    icon: '🎯',
    text: 'Mock interviews + support until you land',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=180&fit=crop',
  },
];

const CheckIcon = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
    <path d="M2 6l3 3 5-5" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function CourseProblem() {
  return (
    <section className="cp-section cp-warm cprob-root">
      <div className="wrap">

        {/* Header */}
        <motion.div
          className="cprob-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="cp-eyebrow">03 — The Problem</div>
          <h2 className="cp-h2">
            Why most people who start learning AI<br /><em>never actually make it.</em>
          </h2>
          <p className="cp-lede">
            It's not your fault. The ecosystem is built to keep you consuming — not building.
          </p>
        </motion.div>

        {/* ── Chaos zone ─────────────────────────────────── */}
        <motion.div
          className="cprob-chaos-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="cprob-chaos-pill">The self-taught trap</span>
        </motion.div>

        <div className="cprob-scatter">
          {PAINS.map((pain, i) => (
            <motion.div
              key={pain.short}
              className="cprob-card"
              initial={{ opacity: 0, rotate: pain.rot * 2.2, y: pain.dy * 2.4, x: pain.dx * 1.6, scale: 0.88 }}
              whileInView={{ opacity: 1, rotate: pain.rot, y: 0, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.12 + i * 0.09 }}
              style={{ '--rot': `${pain.rot}deg` }}
            >
              <div className="cprob-card-x">
                <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                  <path d="M2 2l8 8M10 2l-8 8" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="cprob-card-short">{pain.short}</div>
              <div className="cprob-card-long">{pain.long}</div>
            </motion.div>
          ))}
        </div>

        {/* ── Divider ─────────────────────────────────────── */}
        <motion.div
          className="cprob-divider"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}
        >
          <div className="cprob-divider-line" />
          <div className="cprob-divider-label">NuLyft changes this</div>
          <div className="cprob-divider-line" />
        </motion.div>

        {/* ── Order zone ──────────────────────────────────── */}
        <div className="cprob-order">
          {SOLUTIONS.map((sol, i) => (
            <motion.div
              key={sol.text}
              className="cprob-sol"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1], delay: 0.08 + i * 0.08 }}
            >
              <div className="cprob-sol-img-wrap">
                <img src={sol.img} alt={sol.text} className="cprob-sol-img" loading="lazy" />
                <div className="cprob-sol-img-overlay" />
                <div className="cprob-sol-check">
                  <CheckIcon />
                </div>
              </div>
              <div className="cprob-sol-body">
                <span className="cprob-sol-icon">{sol.icon}</span>
                <span className="cprob-sol-text">{sol.text}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
