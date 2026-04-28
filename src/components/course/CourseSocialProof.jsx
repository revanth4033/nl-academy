import { motion } from 'framer-motion';

const METRICS = [
  { val: '94%', label: 'Job placement within 90 days' },
  { val: '6.2x', label: 'Average salary increase' },
  { val: '340+', label: 'Alumni now in AI roles' },
];

const STORIES = [
  {
    before: 'Manual data analyst',
    after: 'AI Engineer @ Groww',
    outcome: 'From ₹4.5L to ₹18L in 4 months',
    quote: "I'd been trying to break into AI for 2 years with online courses. This cohort gave me the exact structure I needed — I had a job offer before the program even ended.",
    name: 'Rahul Sharma',
    batch: 'Cohort 01 · AI Track',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces',
  },
  {
    before: 'Backend developer',
    after: 'AI Product Builder',
    outcome: 'Launched SaaS, ₹80k MRR in 3 months',
    quote: "I didn't need another job. I wanted to build something of my own. The agent and automation modules were exactly what I was missing — my product is live and growing.",
    name: 'Divya Menon',
    batch: 'Cohort 01 · AI Track',
    img: 'https://images.unsplash.com/photo-1494790108755-2616b332a7f4?w=80&h=80&fit=crop&crop=faces',
  },
  {
    before: 'Fresh CS graduate',
    after: 'AI Automation Engineer @ Zepto',
    outcome: 'First job: ₹16L package',
    quote: "Everyone told me you need years of experience for AI roles. This cohort showed me that's just not true if you have the right projects and can explain what you built.",
    name: 'Aakash Verma',
    batch: 'Cohort 02 · AI Track',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.2, 0.8, 0.2, 1], delay },
});

function StoryCard({ story, index }) {
  return (
    <motion.div
      className="csp-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: index * 0.1 }}
    >
      <div className="csp-before-after">
        <span className="csp-before">{story.before}</span>
        <span className="csp-arrow">→</span>
        <span className="csp-after">{story.after}</span>
      </div>
      <div className="csp-outcome">{story.outcome}</div>
      <p className="csp-quote">"{story.quote}"</p>
      <div className="csp-who">
        <img className="csp-photo" src={story.img} alt={story.name} loading="lazy" />
        <div>
          <div className="csp-info-name">{story.name}</div>
          <div className="csp-info-role">{story.batch}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CourseSocialProof() {
  return (
    <section className="cp-section cp-light">
      <div className="wrap">
        <motion.div {...fadeUp(0)}>
          <div className="cp-eyebrow">08 — Real Outcomes</div>
          <h2 className="cp-h2">
            People like you<br /><em>already made the shift.</em>
          </h2>
          <p className="cp-lede">
            These aren't selected outliers. This is what happens when structure,
            mentorship, and real projects align.
          </p>
        </motion.div>

        <motion.div
          className="csp-metrics"
          style={{ marginTop: 48 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}
        >
          {METRICS.map(({ val, label }) => (
            <div key={val} className="csp-metric">
              <div className="csp-metric-val">{val}</div>
              <div className="csp-metric-label">{label}</div>
            </div>
          ))}
        </motion.div>

        <div className="csp-grid">
          {STORIES.map((story, i) => (
            <StoryCard key={story.name} story={story} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
