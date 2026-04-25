import { motion } from 'framer-motion';

const FLAGSHIP = {
  kind: 'Flagship Workshop',
  title: 'Building AI Agents with LangChain — from prompts to production.',
  desc: 'A four-hour deep dive with a senior AI engineer. Walk away with a working agent, a private repo, and a framework you can apply at work on Monday.',
  img: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=900&h=600&fit=crop',
  date: 'April 12, 2026 · 2:00 PM IST',
  venue: 'Online (Zoom)',
};

const SIDE_EVENTS = [
  {
    kind: 'Masterclass',
    title: 'Design systems for modern products.',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b8?w=900&h=500&fit=crop',
    date: 'Apr 20 · 11:00 IST',
    venue: 'Online',
  },
  {
    kind: 'Workshop',
    title: 'Ethical hacking & web security essentials.',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&h=500&fit=crop',
    date: 'May 3 · 3:00 IST',
    venue: 'Offline · Hyderabad',
  },
];

function EventCard({ event, delay = 0, large = false }) {
  return (
    <motion.a
      href="#"
      className="event-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay }}
    >
      <div className="img-wrap">
        <img
          className="img-graded"
          src={event.img}
          alt={event.title}
          style={{ height: large ? 400 : 220, objectFit: 'cover' }}
        />
      </div>
      <div className="event-body">
        <span className="event-kind">{event.kind}</span>
        <h3 className="event-title" style={large ? { fontSize: 24 } : {}}>
          {event.title}
        </h3>
        {large && event.desc ? (
          <p style={{ color: 'var(--ink-muted)', fontSize: 15, lineHeight: 1.6, marginBottom: 16 }}>
            {event.desc}
          </p>
        ) : null}
        <div className="event-meta">
          <span>{event.date}</span>
          <span>{event.venue}</span>
        </div>
      </div>
    </motion.a>
  );
}

export default function Events() {
  return (
    <section className="section" id="events">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div>
            <div className="eyebrow">03 — Upcoming</div>
            <h2 className="display h2" style={{ marginTop: 8 }}>
              Workshops &amp; <em>masterclasses.</em>
            </h2>
          </div>
          <p className="lede">
            Short, expert-led sessions across our disciplines — a lower-commitment way to
            experience Nulyft before you join a full cohort.
          </p>
        </motion.div>

        <div className="events-grid">
          <EventCard event={FLAGSHIP} large delay={0} />
          <div className="event-stack">
            {SIDE_EVENTS.map((ev, i) => (
              <EventCard key={ev.title} event={ev} delay={0.1 + i * 0.08} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
