import { motion } from 'framer-motion';

const PLEDGES = [
  {
    n: '/ 01 · Teaching',
    title: 'Practitioner mentors, never pre-recorded videos.',
    desc: 'Every class is live, taught by someone actively working in the field. You learn from people still doing the work — not retired instructors.',
  },
  {
    n: '/ 02 · Cohort',
    title: 'Small cohorts, capped at 25 per track.',
    desc: 'Real mentorship needs small rooms. We cap every cohort intentionally so feedback stays personal and the work stays serious.',
  },
  {
    n: '/ 03 · Output',
    title: "You'll ship two production projects, minimum.",
    desc: "Every track is built around shipping. By the end of your program, you'll have deployed, documented work you can point to in any interview.",
  },
  {
    n: '/ 04 · Access',
    title: 'Lifetime access to community & recordings.',
    desc: 'Alumni keep full access to recordings, updated curriculum, the community channel, and future cohort sessions — forever, at no extra cost.',
  },
];

export default function Promise() {
  return (
    <section className="section">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div>
            <div className="eyebrow eyebrow-plain">— The Nulyft Promise</div>
            <h2 className="display h2" style={{ marginTop: 8 }}>
              What every cohort <em>gets,</em> no exceptions.
            </h2>
          </div>
          <p className="lede">
            We're a new academy. Instead of inflated numbers, here's exactly what every student
            signs up for — and what we hold ourselves to on day one.
          </p>
        </motion.div>

        <div className="promise-grid">
          {PLEDGES.map((p, i) => (
            <motion.div
              key={p.n}
              className="pledge"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.08 }}
            >
              <span className="pn">{p.n}</span>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
