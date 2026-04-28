import { motion } from 'framer-motion';

const PROJECTS = [
  {
    slot: 'hero',
    badge: '⭐ Flagship Project',
    name: 'AI Resume Analyzer',
    desc: 'Parses any resume, scores it against a job description, and returns structured improvement feedback using LLMs — end to end.',
    why: 'Shows recruiter-facing product thinking with real NLP',
    img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=900&h=700&fit=crop',
  },
  {
    slot: 'sm-a',
    badge: 'Agent Design',
    name: 'AI Interview Bot',
    desc: 'Multi-turn conversational agent that conducts mock interviews and gives coaching.',
    why: 'Demonstrates agent memory + multi-turn reasoning',
    img: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=500&h=320&fit=crop',
  },
  {
    slot: 'sm-b',
    badge: 'RAG System',
    name: 'RAG Knowledge Assistant',
    desc: 'Upload any document set — chat with it using semantic search and retrieval-augmented generation.',
    why: 'Core enterprise AI pattern used at scale',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&h=320&fit=crop',
  },
  {
    slot: 'sm-c',
    badge: 'Automation',
    name: 'Workflow Engine',
    desc: 'Connects Gmail, Notion, Slack and AI to automate real business tasks.',
    why: 'Freelance-ready — clients pay ₹50k+ for this',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=320&fit=crop',
  },
  {
    slot: 'wide',
    badge: 'Pipeline',
    name: 'AI Content Pipeline',
    desc: 'Input a topic — output a full content strategy with research, drafts, SEO analysis, and scheduling. Fully automated.',
    why: 'End-to-end agent orchestration in action',
    img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&h=400&fit=crop',
  },
  {
    slot: 'full',
    badge: '🏆 Capstone',
    name: 'Autonomous Research Agent',
    desc: 'Give it a question. It searches the web, reasons over multiple sources, cross-references, and returns a cited research summary — no human in the loop.',
    why: 'Capstone-level project demonstrating full-stack AI engineering thinking',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=500&fit=crop',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay },
});

function PortfolioBadge({ label }) {
  return <div className="cbento-badge">{label}</div>;
}

function WhyTag({ text }) {
  return (
    <div className="cbento-why">
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {text}
    </div>
  );
}

// Hero card — large, image fills most of the card, text at bottom over gradient
function HeroCard({ p }) {
  return (
    <motion.div className="cbento-card cbento-hero" {...fadeUp(0)}>
      <div className="cbento-img-wrap">
        <img src={p.img} alt={p.name} className="cbento-img cbento-img-animated" loading="lazy" />
        <div className="cbento-hero-grad" />
      </div>
      <div className="cbento-hero-text">
        <PortfolioBadge label={p.badge} />
        <div className="cbento-hero-name">{p.name}</div>
        <p className="cbento-hero-desc">{p.desc}</p>
        <WhyTag text={p.why} />
      </div>
    </motion.div>
  );
}

// Small card — image top, text bottom
function SmallCard({ p, delay }) {
  return (
    <motion.div className="cbento-card cbento-small" {...fadeUp(delay)}>
      <div className="cbento-sm-img-wrap">
        <img src={p.img} alt={p.name} className="cbento-img" loading="lazy" />
      </div>
      <div className="cbento-sm-body">
        <PortfolioBadge label={p.badge} />
        <div className="cbento-sm-name">{p.name}</div>
        <p className="cbento-sm-desc">{p.desc}</p>
        <WhyTag text={p.why} />
      </div>
    </motion.div>
  );
}

// Wide card — image left, text right (landscape)
function WideCard({ p, delay }) {
  return (
    <motion.div className="cbento-card cbento-wide" {...fadeUp(delay)}>
      <div className="cbento-wide-img-wrap">
        <img src={p.img} alt={p.name} className="cbento-img" loading="lazy" />
      </div>
      <div className="cbento-wide-body">
        <PortfolioBadge label={p.badge} />
        <div className="cbento-wide-name">{p.name}</div>
        <p className="cbento-wide-desc">{p.desc}</p>
        <WhyTag text={p.why} />
      </div>
    </motion.div>
  );
}

// Full-width card — large horizontal split
function FullCard({ p, delay }) {
  return (
    <motion.div className="cbento-card cbento-full" {...fadeUp(delay)}>
      <div className="cbento-full-img-wrap">
        <img src={p.img} alt={p.name} className="cbento-img" loading="lazy" />
        <div className="cbento-full-img-grad" />
      </div>
      <div className="cbento-full-body">
        <PortfolioBadge label={p.badge} />
        <div className="cbento-full-name">{p.name}</div>
        <p className="cbento-full-desc">{p.desc}</p>
        <WhyTag text={p.why} />
      </div>
    </motion.div>
  );
}

export default function CourseProjects() {
  const [hero, smA, smB, smC, wide, full] = PROJECTS;

  return (
    <section className="cp-section cp-alt">
      <div className="wrap">
        <motion.div {...fadeUp(0)}>
          <div className="cp-eyebrow">05 — What You Build</div>
          <h2 className="cp-h2">
            Not exercises.<br /><em>Real things you deploy.</em>
          </h2>
          <p className="cp-lede">
            Every project is designed to sit in your portfolio, withstand recruiter
            scrutiny, and demonstrate genuine capability.
          </p>
        </motion.div>

        <div className="cbento-grid">
          <HeroCard p={hero} />
          <SmallCard p={smA} delay={0.1} />
          <SmallCard p={smB} delay={0.18} />
          <SmallCard p={smC} delay={0.22} />
          <WideCard  p={wide} delay={0.28} />
          <FullCard  p={full} delay={0.34} />
        </div>
      </div>
    </section>
  );
}
