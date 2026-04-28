import { motion } from 'framer-motion';

const MENTORS = [
  {
    name: 'Arjun Kapoor',
    role: 'Senior AI Engineer · ex-Razorpay',
    quote: "I built production RAG systems and LLM pipelines before anyone called it 'AI engineering'. That's exactly what I'll teach — no fluff, just what works at scale.",
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=faces',
    creds: ['Built internal AI tooling at Razorpay used by 2000+ merchants', 'Open-source LangChain contributor', '7 years building production ML systems'],
  },
  {
    name: 'Priya Raghavan',
    role: 'AI Product Lead · ex-Flipkart',
    quote: "Most AI courses teach you to prompt. I'll show you how companies actually architect these systems — the decisions, tradeoffs, and patterns behind real products.",
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=faces',
    creds: ['Led AI personalization at Flipkart — 400M+ users', 'Shipped 3 AI-native SaaS products', 'Advisor to 2 YC-backed startups'],
  },
  {
    name: 'Sameer Khan',
    role: 'Automation Architect · Freelance',
    quote: "I left corporate to build automation systems full-time. This industry doesn't just need engineers — it needs builders who can see the whole picture.",
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces',
    creds: ['Built automation workflows for 40+ companies', 'Bootstrapped an AI SaaS to ₹2Cr ARR', 'Teaches what he actively bills for'],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.2, 0.8, 0.2, 1], delay },
});

function MentorCard({ mentor, index }) {
  return (
    <motion.div
      className="ca-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: index * 0.1 }}
    >
      <img className="ca-photo" src={mentor.img} alt={mentor.name} loading="lazy" />
      <div className="ca-name">{mentor.name}</div>
      <div className="ca-role">{mentor.role}</div>
      <blockquote className="ca-quote">"{mentor.quote}"</blockquote>
      <div className="ca-creds">
        {mentor.creds.map(cred => (
          <div key={cred} className="ca-cred">
            <span className="ca-cred-dot" />
            {cred}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function CourseAuthority() {
  return (
    <section className="cp-section cp-deep">
      <div className="wrap">
        <motion.div {...fadeUp(0)}>
          <div className="cp-eyebrow cp-eyebrow-dark">07 — Who Teaches You</div>
          <h2 className="cp-h2 cp-h2-light">
            Not instructors.<br /><em>Builders who ship.</em>
          </h2>
          <p className="cp-lede cp-lede-light">
            Every mentor is someone actively working in AI today — not retired practitioners
            teaching from memory. When they show you how something works, it's because they
            did it last quarter.
          </p>
        </motion.div>

        <div className="ca-grid">
          {MENTORS.map((mentor, i) => (
            <MentorCard key={mentor.name} mentor={mentor} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
