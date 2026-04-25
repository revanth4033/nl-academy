import { motion } from 'framer-motion';

const FEATS = [
  { n: '/ 01', title: 'Portfolio-first', desc: 'Graduate with deployed, documented work you can point to in any hiring conversation.' },
  { n: '/ 02', title: 'Industry-led', desc: 'Every mentor is actively working in the field they teach. No part-time instructors.' },
  { n: '/ 03', title: 'Cohort pace', desc: 'Small live cohorts keep you accountable, connected, and genuinely moving forward.' },
  { n: '/ 04', title: 'Freelance-ready', desc: 'The skills we teach are ones businesses will pay for — on day one, not someday.' },
];

export default function BrandZone() {
  return (
    <section className="brand-zone">
      <div className="wrap">
        <motion.div
          className="eyebrow eyebrow-plain"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          Why Nulyft
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.08 }}
        >
          The only thing worth graduating with is{' '}
          <em>proof you can do the work.</em>
        </motion.h2>
        <motion.p
          className="brand-zone-lede"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.14 }}
        >
          We don't build courses around hype cycles or certificates that expire. Every Nulyft
          program is designed around a single question — "Can you actually do this, under
          real-world conditions, by the end?" — and we don't stop teaching until the answer is yes.
        </motion.p>
        <div className="brand-feats">
          {FEATS.map((f, i) => (
            <motion.div
              key={f.n}
              className="brand-feat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.08 }}
            >
              <span className="bn">{f.n}</span>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
