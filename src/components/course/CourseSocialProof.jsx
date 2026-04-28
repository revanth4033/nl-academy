import { motion } from 'framer-motion';

const STORIES = [
  {
    before: 'Manual data analyst',
    after: 'AI Engineer @ Groww',
    outcome: '₹4.5L → ₹18L',
    timeframe: 'in 4 months',
    quote: "I'd been trying to break into AI for 2 years with online courses. This cohort gave me the exact structure I needed — I had a job offer before the program even ended.",
    name: 'Rahul Sharma',
    batch: 'Cohort 01 · AI Track',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces',
  },
  {
    before: 'Backend developer',
    after: 'AI Product Builder',
    outcome: '₹0 → ₹80k MRR',
    timeframe: 'in 3 months',
    quote: "I didn't need another job. I wanted to build something of my own. The agent and automation modules were exactly what I was missing — my product is live and growing.",
    name: 'Divya Menon',
    batch: 'Cohort 01 · AI Track',
    img: 'https://images.unsplash.com/photo-1494790108755-2616b332a7f4?w=80&h=80&fit=crop&crop=faces',
  },
  {
    before: 'Fresh CS graduate',
    after: 'AI Automation Engineer @ Zepto',
    outcome: '₹0 → ₹16L',
    timeframe: 'first offer',
    quote: "Everyone told me you need years of experience for AI roles. This cohort showed me that's just not true if you have the right projects and can explain what you built.",
    name: 'Aakash Verma',
    batch: 'Cohort 02 · AI Track',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces',
  },
];

function SplitCard({ story, index }) {
  return (
    <motion.div
      className="csp1-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: 0.08 + index * 0.12 }}
    >
      {/* Left/right split */}
      <div className="csp1-split">
        <div className="csp1-before">
          <div className="csp1-zone-label csp1-zone-label--before">
            <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
              <path d="M2 2l6 6M8 2L2 8" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Before
          </div>
          <div className="csp1-before-role">{story.before}</div>
        </div>

        {/* Divider with outcome pill */}
        <div className="csp1-divider">
          <div className="csp1-pill">
            <div className="csp1-pill-num">{story.outcome}</div>
            <div className="csp1-pill-time">{story.timeframe}</div>
          </div>
        </div>

        <div className="csp1-after">
          <div className="csp1-zone-label csp1-zone-label--after">
            <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
              <path d="M1.5 5l3 3L9 2" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            After
          </div>
          <div className="csp1-after-role">{story.after}</div>
        </div>
      </div>

      {/* Bottom: quote + avatar */}
      <div className="csp1-bottom">
        <p className="csp1-quote">"{story.quote}"</p>
        <div className="csp1-who">
          <img src={story.img} alt={story.name} className="csp1-photo" loading="lazy" />
          <div>
            <div className="csp1-name">{story.name}</div>
            <div className="csp1-batch">{story.batch}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CourseSocialProof() {
  return (
    <section className="cp-section cp-light">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="cp-eyebrow">08 — Real Outcomes</div>
          <h2 className="cp-h2">
            People like you<br /><em>already made the shift.</em>
          </h2>
          <p className="cp-lede">
            These aren't selected outliers. This is what happens when structure,
            mentorship, and real projects align.
          </p>
        </motion.div>

        <div className="csp1-grid">
          {STORIES.map((story, i) => (
            <SplitCard key={story.name} story={story} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
