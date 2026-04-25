import { motion } from 'framer-motion';

const QUOTES = [
  {
    quote: "Most bootcamps optimise for scale. Nulyft optimises for depth. That's why I said yes — here I actually get to teach, not perform for a camera.",
    name: 'Arjun Kapoor',
    role: 'Senior AI Engineer · Mentor',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=faces',
  },
  {
    quote: "I've taught at two other programs and both felt like assembly lines. Small cohorts and a live format are the only way design is actually learned — Nulyft gets that right.",
    name: 'Priya Raghavan',
    role: 'Lead Product Designer · Mentor',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=faces',
  },
  {
    quote: "Security isn't a subject you watch videos to learn. You learn it by breaking things under guidance. This is the first academy I've seen build a program around that truth.",
    name: 'Sameer Khan',
    role: 'Cybersecurity Architect · Mentor',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces',
  },
];

export default function Mentors() {
  return (
    <section className="section" id="mentors">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div>
            <div className="eyebrow">06 — Mentor Voices</div>
            <h2 className="display h2" style={{ marginTop: 8 }}>
              Why our mentors chose to <em>teach here.</em>
            </h2>
          </div>
          <p className="lede">
            Before we had students, we had mentors — senior practitioners who chose to teach
            at Nulyft because they believe in how we do it.
          </p>
        </motion.div>

        <div className="tq-grid">
          {QUOTES.map((q, i) => (
            <motion.div
              key={q.name}
              className="tq"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.1 }}
            >
              <blockquote>{q.quote}</blockquote>
              <div className="tq-who">
                <img src={q.img} alt={q.name} />
                <div>
                  <div className="tq-name">{q.name}</div>
                  <div className="tq-role">{q.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
