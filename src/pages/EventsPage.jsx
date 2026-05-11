import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../events-page.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ApplyModal from '../components/ApplyModal';

/* ── Data ────────────────────────────────────────────────── */
const ALL_ITEMS = [
  // COURSES
  {
    id: 'c1', type: 'course', topic: 'AI',
    title: 'AI & Automation Engineering',
    desc: 'Build production-grade AI systems — from APIs and agents to full deployment pipelines.',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=240&fit=crop',
    meta1: '12 Weeks', meta2: 'Intermediate · Online',
    cta: 'View Program', href: '/course',
  },
  {
    id: 'c2', type: 'course', topic: 'Development',
    title: 'Full-Stack Development',
    desc: 'React, Node.js, databases, and deployment — end to end, from beginner to ship-ready.',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=240&fit=crop',
    meta1: '16 Weeks', meta2: 'Beginner–Advanced · Online',
    cta: 'View Program', href: '/course',
  },
  {
    id: 'c3', type: 'course', topic: 'Design',
    title: 'UI / UX Design',
    desc: 'Design thinking, wireframing, prototyping in Figma, and building real product case studies.',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b8?w=400&h=240&fit=crop',
    meta1: '10 Weeks', meta2: 'Beginner · Online',
    cta: 'View Program', href: '/course',
  },
  {
    id: 'c4', type: 'course', topic: 'Security',
    title: 'Cybersecurity & Ethical Hacking',
    desc: 'Penetration testing, network security, vulnerability analysis, and defensive strategies.',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=240&fit=crop',
    meta1: '12 Weeks', meta2: 'Intermediate · Hybrid',
    cta: 'View Program', href: '/course',
  },
  {
    id: 'c5', type: 'course', topic: 'AI',
    title: 'RPA & Business Automation',
    desc: 'Automate workflows with UiPath, Power Automate, and custom Python bots.',
    img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=240&fit=crop',
    meta1: '8 Weeks', meta2: 'Intermediate · Online',
    cta: 'View Program', href: '/course',
  },
  {
    id: 'c6', type: 'course', topic: 'Data',
    title: 'Data Science & Analytics',
    desc: 'Python, SQL, statistics, machine learning, and dashboards — turn raw data into decisions.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop',
    meta1: '14 Weeks', meta2: 'Intermediate · Hybrid',
    cta: 'View Program', href: '/course',
  },
  // WORKSHOPS
  {
    id: 'w1', type: 'workshop', topic: 'AI', featured: true,
    title: 'Build AI Agents with LangChain — From Prompts to Production',
    desc: 'Walk away with three working agents, a private repo, and a deployment you can show on Monday.',
    img: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=240&fit=crop',
    meta1: 'Apr 12 · 2PM IST', meta2: '4 Hours · Free · Live Online',
    cta: 'Register', href: '/workshop',
  },
  {
    id: 'w2', type: 'workshop', topic: 'Design',
    title: 'Design Systems for Modern Products',
    desc: 'Build a scalable component library from scratch — tokens, variants, and documentation.',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b8?w=400&h=240&fit=crop',
    meta1: 'Apr 20 · 11AM IST', meta2: '3 Hours · Live Online',
    cta: 'Register', href: '#',
  },
  {
    id: 'w3', type: 'workshop', topic: 'Security',
    title: 'Ethical Hacking & Web Security Essentials',
    desc: 'Hands-on recon, XSS, SQLi, and CSRF — real vulnerabilities on a practice target.',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=240&fit=crop',
    meta1: 'May 3 · 3PM IST', meta2: '3 Hours · Offline · HYD',
    cta: 'Register', href: '#',
  },
  {
    id: 'w4', type: 'workshop', topic: 'Development',
    title: 'Full-Stack Deployment on Modern Infra',
    desc: 'Docker, CI/CD, cloud hosting — ship a production app end-to-end in one session.',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=240&fit=crop',
    meta1: 'May 17 · 2PM IST', meta2: '4 Hours · Live Online',
    cta: 'Register', href: '#',
  },
  // WEBINARS
  {
    id: 'wb1', type: 'webinar', topic: 'AI',
    title: 'State of AI in 2026 — What Engineers Actually Need to Know',
    desc: "A no-BS breakdown of what's real, what's hype, and where to focus your learning.",
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=240&fit=crop',
    meta1: 'Recorded · 60 min', meta2: 'Watch anytime · Free',
    cta: 'Watch Now', href: '#',
  },
  {
    id: 'wb2', type: 'webinar', topic: 'Data',
    title: 'From Data Analyst to Data Scientist — The Real Path',
    desc: 'Career clarity: skills to build, mistakes to avoid, and the actual hiring bar in 2026.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop',
    meta1: 'May 8 · 45 min', meta2: 'Live · Free',
    cta: 'Register', href: '#',
  },
  {
    id: 'wb3', type: 'webinar', topic: 'Development',
    title: 'React in Production — Patterns That Actually Scale',
    desc: 'State management, performance, and architecture from teams shipping at scale.',
    img: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=240&fit=crop',
    meta1: 'Recorded · 55 min', meta2: 'Watch anytime · Free',
    cta: 'Watch Now', href: '#',
  },
];

const FEATURED = ALL_ITEMS.find(i => i.featured);

const CATEGORIES = [
  { label: 'All',       key: 'all' },
  { label: 'Courses',   key: 'course' },
  { label: 'Workshops', key: 'workshop' },
  { label: 'Webinars',  key: 'webinar' },
];

const TOPICS = ['All', 'AI', 'Development', 'Design', 'Data', 'Security'];

const TYPE_LABELS = { course: 'Course', workshop: 'Workshop', webinar: 'Webinar' };

/* ── Row item ────────────────────────────────────────────── */
function Row({ item, index }) {
  return (
    <motion.a
      href={item.href}
      className="ep-row"
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.36, ease: [0.2, 0.8, 0.2, 1], delay: Math.min(index * 0.04, 0.24) }}
      layout
    >
      <div className="ep-row-img">
        <img className="img-graded" src={item.img} alt={item.title} />
      </div>

      <div className="ep-row-info">
        <div className="ep-row-title">{item.title}</div>
        <div className="ep-row-desc">{item.desc}</div>
      </div>

      <div className="ep-row-meta">
        <div className="ep-row-meta-info">
          {item.meta1}<br />{item.meta2}
        </div>
      </div>

      <div className="ep-row-arrow">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </div>
    </motion.a>
  );
}

/* ── Page ────────────────────────────────────────────────── */
export default function EventsPage() {
  const [modalOpen, setModalOpen]  = useState(false);
  const [activeCategory, setCategory] = useState('all');
  const [activeTopic, setTopic]    = useState('All');

  const filtered = useMemo(() => ALL_ITEMS.filter(item => {
    const catMatch   = activeCategory === 'all' || item.type === activeCategory;
    const topicMatch = activeTopic === 'All' || item.topic === activeTopic;
    return catMatch && topicMatch;
  }), [activeCategory, activeTopic]);

  // Group by type for section headers
  const grouped = useMemo(() => {
    const order = ['course', 'workshop', 'webinar'];
    const groups = {};
    filtered.forEach(item => {
      if (!groups[item.type]) groups[item.type] = [];
      groups[item.type].push(item);
    });
    return order.filter(t => groups[t]).map(t => ({ type: t, items: groups[t] }));
  }, [filtered]);

  const counts = {
    all:      ALL_ITEMS.length,
    course:   ALL_ITEMS.filter(i => i.type === 'course').length,
    workshop: ALL_ITEMS.filter(i => i.type === 'workshop').length,
    webinar:  ALL_ITEMS.filter(i => i.type === 'webinar').length,
  };

  const isFiltered = activeCategory !== 'all' || activeTopic !== 'All';
  let globalIdx = 0;

  return (
    <>
      <Navbar onApply={() => setModalOpen(true)} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="ep-hero">
        <div className="wrap">
          <div className="ep-hero-inner">

            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}>
              <div className="ep-hero-eyebrow">Programs &amp; Events</div>
              <h1 className="ep-hero-title">
                Everything you need<br />to <em>build real skills.</em>
              </h1>
              <p className="ep-hero-sub">
                Courses, workshops, and expert sessions — each taught by practitioners actively working in the field.
              </p>
              <div className="ep-hero-stats">
                <div className="ep-hero-stat">
                  <span className="n">{counts.course}</span>
                  <span className="l">Courses</span>
                </div>
                <div className="ep-hero-stat-sep" />
                <div className="ep-hero-stat">
                  <span className="n">{counts.workshop}</span>
                  <span className="l">Workshops</span>
                </div>
                <div className="ep-hero-stat-sep" />
                <div className="ep-hero-stat">
                  <span className="n">{counts.webinar}</span>
                  <span className="l">Webinars</span>
                </div>
              </div>
            </motion.div>

            {/* Right — single image */}
            <motion.div className="ep-hero-visual" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}>
              <img className="img-graded" src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=900&h=680&fit=crop" alt="Workshop session" />
              <div className="ep-hero-visual-badge">
                <span className="ep-hero-visual-tag">Upcoming Workshop</span>
                <span className="ep-hero-visual-live">
                  <span className="ep-hero-visual-dot" />
                  Apr 12
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────── */}
      <div className="wrap" style={{ padding: 0 }}>
        <div className="ep-body">

          {/* ── Sidebar ────────────────────────────────── */}
          <aside className="ep-sidebar">
            <div className="ep-sidebar-section">
              <div className="ep-sidebar-label">Category</div>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.key}
                  className={`ep-cat-btn${activeCategory === cat.key ? ' active' : ''}`}
                  onClick={() => setCategory(cat.key)}
                >
                  {cat.label}
                  <span className="ep-cat-count">{counts[cat.key]}</span>
                </button>
              ))}
            </div>

            <div className="ep-sidebar-section">
              <div className="ep-sidebar-label">Topic</div>
              {TOPICS.map(t => (
                <button
                  key={t}
                  className={`ep-topic-btn${activeTopic === t ? ' active' : ''}`}
                  onClick={() => setTopic(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </aside>

          {/* ── Content ────────────────────────────────── */}
          <div className="ep-content">

            {/* Results bar */}
            <div className="ep-results-bar">
              <span className="ep-results-count">
                {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
              </span>
              {isFiltered && (
                <button
                  className="ep-clear-btn"
                  onClick={() => { setCategory('all'); setTopic('All'); }}
                >
                  Clear filters ×
                </button>
              )}
            </div>

            {/* Row list */}
            <div className="ep-list">
              <AnimatePresence mode="popLayout">
                {filtered.length === 0 ? (
                  <motion.div
                    key="empty"
                    className="ep-empty"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  >
                    No results for these filters.{' '}
                    <button
                      onClick={() => { setCategory('all'); setTopic('All'); }}
                      style={{ color: 'var(--brand)', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
                    >
                      Clear
                    </button>
                  </motion.div>
                ) : (
                  grouped.map(group => (
                    <motion.div key={group.type} layout>
                      {/* Only show type header when showing multiple types */}
                      {activeCategory === 'all' && (
                        <div className="ep-type-header">
                          <span className={`ep-type-header-label ${group.type}`}>
                            {TYPE_LABELS[group.type]}s
                          </span>
                          <div className="ep-type-header-line" />
                          <span className="ep-type-header-count">{group.items.length}</span>
                        </div>
                      )}
                      {group.items.map(item => {
                        const idx = globalIdx++;
                        return <Row key={item.id} item={item} index={idx} />;
                      })}
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom CTA ───────────────────────────────────── */}
      <section className="ep-bottom">
        <div className="wrap">
          <div className="ep-bottom-inner">
            <div className="ep-bottom-label">Not sure where to start?</div>
            <div className="ep-bottom-title">Pick a path that fits your goal.</div>
            <div className="ep-nav-cards">
              <a href="/course" className="ep-nav-card">
                <div>
                  <div className="ep-nav-card-kind">Full Program</div>
                  <div className="ep-nav-card-name">AI Automation Engineering</div>
                  <div className="ep-nav-card-sub">12 weeks · Live cohort · Career-track</div>
                </div>
                <div className="ep-nav-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </div>
              </a>
              <a href="/workshop" className="ep-nav-card">
                <div>
                  <div className="ep-nav-card-kind">Quick Entry</div>
                  <div className="ep-nav-card-name">Build AI Agents with LangChain</div>
                  <div className="ep-nav-card-sub">4 hours · Live workshop · Free</div>
                </div>
                <div className="ep-nav-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ApplyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
