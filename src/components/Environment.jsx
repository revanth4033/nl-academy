import { motion } from 'framer-motion';

const TILES = [
  { img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&h=1200&fit=crop', label: 'Collaborative studios', sub: 'Live, cohort-based sessions', big: true },
  { img: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=700&h=500&fit=crop', label: 'Workshops', sub: 'Weekly deep dives' },
  { img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=700&h=500&fit=crop', label: '1:1 mentoring', sub: 'Practitioner feedback' },
  { img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=700&h=500&fit=crop', label: 'Demo days', sub: 'Present your work' },
  { img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=700&h=500&fit=crop', label: 'Build time', sub: 'Ship something real' },
];

function EnvTile({ tile, delay }) {
  return (
    <motion.div
      className={`env-tile${tile.big ? ' env-big' : ''}`}
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay }}
    >
      <img className="img-graded" src={tile.img} alt={tile.label} />
      <div className="env-caption">
        <b>{tile.label}</b>
        <span>{tile.sub}</span>
      </div>
    </motion.div>
  );
}

export default function Environment() {
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
            <div className="eyebrow">— Inside Nulyft</div>
            <h2 className="display h2" style={{ marginTop: 8 }}>
              The <em>environment</em> we build in.
            </h2>
          </div>
          <p className="lede">
            Small cohorts. Close mentorship. Real work alongside people who care as much as you do.
          </p>
        </motion.div>

        <div className="env-grid">
          {TILES.map((tile, i) => (
            <EnvTile key={tile.label} tile={tile} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}
