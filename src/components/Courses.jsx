import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const COURSES = [
  {
    num: '01',
    name: 'AI & Automation Engineering',
    desc: 'Build production-grade AI systems — from APIs and agents to full deployment pipelines.',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=200&h=140&fit=crop',
    badge: 'live',
    badgeLabel: 'Live · Online',
    weeks: '12 Weeks',
    level: 'Intermediate',
    href: '/course/ai-automation',
  },
  {
    num: '02',
    name: 'Full-Stack Development',
    desc: 'Master modern web development — React, Node.js, databases, and deployment — end to end.',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=140&fit=crop',
    badge: 'live',
    badgeLabel: 'Live · Online',
    weeks: '16 Weeks',
    level: 'Beginner to Advanced',
  },
  {
    num: '03',
    name: 'UI / UX Design',
    desc: 'Design thinking, wireframing, prototyping in Figma, and building real product case studies.',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b8?w=200&h=140&fit=crop',
    badge: 'live',
    badgeLabel: 'Live · Online',
    weeks: '10 Weeks',
    level: 'Beginner',
  },
  {
    num: '04',
    name: 'Cybersecurity & Ethical Hacking',
    desc: 'Penetration testing, network security, vulnerability analysis, and defensive strategies that hold up.',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=140&fit=crop',
    badge: 'hybrid',
    badgeLabel: 'Hybrid',
    weeks: '12 Weeks',
    level: 'Intermediate',
  },
  {
    num: '05',
    name: 'RPA & Business Automation',
    desc: 'Automate workflows with UiPath, Power Automate, and custom Python bots — built for real business teams.',
    img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=200&h=140&fit=crop',
    badge: 'live',
    badgeLabel: 'Live · Online',
    weeks: '8 Weeks',
    level: 'Intermediate',
  },
  {
    num: '06',
    name: 'Data Science & Analytics',
    desc: 'Python, SQL, statistics, machine learning, and dashboards — turn raw data into decisions.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=140&fit=crop',
    badge: 'hybrid',
    badgeLabel: 'Hybrid',
    weeks: '14 Weeks',
    level: 'Intermediate',
  },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    <path d="M7 17L17 7M17 7H7M17 7v10"/>
  </svg>
);

export default function Courses() {
  return (
    <section className="section" id="courses">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div>
            <div className="eyebrow">01 — Courses</div>
            <h2 className="display h2" style={{ marginTop: 8 }}>
              Courses across every <em>discipline.</em>
            </h2>
          </div>
          <p className="lede">
            From AI and development to design, security, and automation — six industry-led tracks,
            each taught live by practitioners working in the field today.
          </p>
        </motion.div>

        <div className="courses-table">
          {COURSES.map((c, i) => (
            <motion.a
              key={c.num}
              href={c.href || '#'}
              className="course-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.06 }}
            >
              <span className="course-num">{c.num}</span>
              <div className="course-img">
                <img src={c.img} alt={c.name} />
              </div>
              <div className="course-info">
                <div className="course-name">{c.name}</div>
                <div className="course-desc">{c.desc}</div>
              </div>
              <span className={`course-badge badge-${c.badge}`}>{c.badgeLabel}</span>
              <div className="course-meta">
                <span className="course-weeks">{c.weeks}</span>
                <span className="course-level">{c.level}</span>
              </div>
              <div className="course-arrow">
                <ArrowIcon />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="courses-foot"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a className="link-arrow" href="#">
            Download full curriculum
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
          </a>
          <span style={{ fontFamily: 'var(--f-mono)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
            Not sure where to start?{' '}
            <a href="#" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>Book a 15-min consult →</a>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
