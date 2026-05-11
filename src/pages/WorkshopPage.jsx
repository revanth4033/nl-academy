import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../workshop.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ApplyModal from '../components/ApplyModal';

const FADE_UP = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay },
});

const OUTCOMES = [
  {
    num: '01',
    title: 'Understand LangChain architecture',
    desc: 'Chains, agents, tools, memory — how each piece fits in a production AI system.',
  },
  {
    num: '02',
    title: 'Build a working AI agent from scratch',
    desc: 'Prompt → tool call → output loop with real API integrations.',
  },
  {
    num: '03',
    title: 'Connect agents to real data sources',
    desc: 'Attach agents to databases, files, and web APIs through tool calling.',
  },
  {
    num: '04',
    title: 'Add memory and context management',
    desc: 'Make agents that remember across sessions and reason over history.',
  },
  {
    num: '05',
    title: 'Deploy to production',
    desc: 'Package your agent, expose it via an API, and push to a live environment.',
  },
  {
    num: '06',
    title: 'Debug and evaluate agent behaviour',
    desc: 'Trace, test, and iterate on agents that behave unexpectedly in the wild.',
  },
];

const BUILDS = [
  {
    tag: 'Project 01',
    title: 'Autonomous Research Agent',
    desc: 'An agent that takes a query, searches the web, synthesises information, and returns a structured report — no human in the loop.',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=320&fit=crop',
  },
  {
    tag: 'Project 02',
    title: 'Document Q&A Bot',
    desc: 'A RAG-powered agent that reads your PDFs and answers questions with source citations — deployable in under 30 minutes.',
    img: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&h=320&fit=crop',
  },
  {
    tag: 'Project 03',
    title: 'Multi-step Workflow Orchestrator',
    desc: 'Chain multiple agents together to complete complex tasks — write to databases, send emails, trigger APIs in sequence.',
    img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=320&fit=crop',
  },
];

const WHY_POINTS = [
  {
    title: 'AI agents are being deployed everywhere',
    text: '87% of enterprise software teams are building or evaluating AI agent systems in 2025.',
  },
  {
    title: 'LangChain is the industry standard',
    text: 'Used by companies from startups to Fortune 500 — knowing it puts you in a different category.',
  },
  {
    title: 'Most tutorials stop at demos',
    text: 'This workshop goes production-level: real APIs, real deployments, real code you keep.',
  },
  {
    title: 'Four hours, one working system',
    text: 'No fluff. You will have a deployed, running AI agent by the time the session ends.',
  },
];

const DETAILS = [
  { key: 'Date', val: 'April 12, 2026', note: 'Saturday' },
  { key: 'Time', val: '2:00 PM IST', note: '10:30 AM CEST · 9:30 AM BST' },
  { key: 'Duration', val: '4 Hours', note: 'With two 10-min breaks' },
  { key: 'Mode', val: 'Live · Online', note: 'Zoom — link sent 24h before' },
  { key: 'Level', val: 'Intermediate', note: 'Python basics required' },
  { key: 'Seats', val: '60 Max', note: 'Small group for better learning' },
];

const TESTIMONIALS = [
  {
    text: '"Left the session with a fully working agent I deployed on the same day. Worth every minute."',
    name: 'Arjun Mehta',
    role: 'Backend Engineer',
    initial: 'A',
  },
  {
    text: '"The production deployment part was what I needed. Every other tutorial stops at localhost."',
    name: 'Priya Sharma',
    role: 'ML Engineer',
    initial: 'P',
  },
  {
    text: '"Dense, practical, zero fluff. I came in knowing Python and left with a real AI product."',
    name: 'Rohan Das',
    role: 'Founding Engineer',
    initial: 'R',
  },
];

const FAQS = [
  {
    q: 'Is this beginner-friendly?',
    a: 'You should be comfortable writing Python (functions, classes, async basics). No prior LangChain or LLM experience needed — we start from zero with agents.',
  },
  {
    q: 'Will a recording be available?',
    a: 'Yes. A full recording is shared with all registered attendees within 48 hours after the session ends. It stays accessible for 30 days.',
  },
  {
    q: 'What do I need before the workshop?',
    a: 'A laptop, Python 3.10+ installed, and an OpenAI API key (free tier works). We send a full pre-workshop checklist 3 days before the session.',
  },
  {
    q: 'Is the code mine to keep?',
    a: 'Absolutely. All code, notebooks, and project templates are yours. You get access to a private GitHub repo at the start of the session.',
  },
  {
    q: 'What if I miss the live session?',
    a: 'The recording covers everything taught live. You also keep access to the repo and can drop questions in the community Slack.',
  },
];

const RELATED = [
  {
    kind: 'Masterclass',
    title: 'Design systems for modern products.',
    date: 'Apr 20 · 11:00 IST',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b8?w=600&h=280&fit=crop',
  },
  {
    kind: 'Workshop',
    title: 'Ethical hacking & web security essentials.',
    date: 'May 3 · 3:00 IST',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=280&fit=crop',
  },
  {
    kind: 'Workshop',
    title: 'Full-stack deployment on modern infra.',
    date: 'May 17 · 2:00 IST',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=280&fit=crop',
  },
];

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function PlusIcon({ open }) {
  return (
    <svg className={`wf-icon${open ? ' open' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="wf-item">
      <button className="wf-q" onClick={() => setOpen(o => !o)}>
        {q}
        <PlusIcon open={open} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="wf-a">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function WorkshopPage() {
  const [modalOpen, setModalOpen] = useState(false);

  function scrollToReg() {
    document.getElementById('wp-register')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Navbar onApply={() => setModalOpen(true)} />

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="wh-hero">
        <div className="wh-grid-bg" />
        <div className="wrap">
          <div className="wh-inner">
            <motion.div {...FADE_UP(0)}>
              <div className="wh-badge">
                <span className="wh-badge-dot" />
                <span className="wh-badge-text">Flagship Workshop · April 2026</span>
              </div>
              <h1 className="wh-title">
                Build AI Agents with <em>LangChain.</em>
              </h1>
              <p className="wh-sub">
                A four-hour live session with a senior AI engineer. Walk away with three working
                agents, a private repo, and a deployment you can show on Monday.
              </p>
              <div className="wh-meta-row">
                <div className="wh-meta-item">
                  <svg className="wh-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  April 12, 2026
                </div>
                <span className="wh-meta-sep" />
                <div className="wh-meta-item">
                  <svg className="wh-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                  4 Hours · 2:00 PM IST
                </div>
                <span className="wh-meta-sep" />
                <div className="wh-meta-item">
                  <svg className="wh-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14" /><rect x="3" y="6" width="12" height="12" rx="2" />
                  </svg>
                  Live · Online
                </div>
              </div>
              <div className="wh-cta-row">
                <button className="btn btn-primary" onClick={scrollToReg}>
                  Register Now — Free
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </button>
                <a href="#wp-outline" className="btn btn-ghost">
                  See what's covered
                </a>
              </div>
            </motion.div>

            <motion.div {...FADE_UP(0.12)}>
              <div className="wh-panel">
                <div className="wh-panel-img-wrap">
                  <img
                    className="wh-panel-img img-graded"
                    src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=440&fit=crop"
                    alt="Workshop session"
                  />
                </div>
                <div className="wh-panel-body">
                  <div className="wh-panel-label">Workshop at a glance</div>
                  <div className="wh-stat-row">
                    <div className="wh-stat">
                      <div className="wh-stat-val">3</div>
                      <div className="wh-stat-key">Agents built</div>
                    </div>
                    <div className="wh-stat">
                      <div className="wh-stat-val">4h</div>
                      <div className="wh-stat-key">Live session</div>
                    </div>
                    <div className="wh-stat">
                      <div className="wh-stat-val">60</div>
                      <div className="wh-stat-key">Max seats</div>
                    </div>
                    <div className="wh-stat">
                      <div className="wh-stat-val">Free</div>
                      <div className="wh-stat-key">Entry</div>
                    </div>
                  </div>
                  <div className="wh-seats">
                    <span style={{ fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      43 / 60 seats filled
                    </span>
                    <span style={{ fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--brand)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      17 left
                    </span>
                  </div>
                  <div className="wh-seats-bar">
                    <div className="wh-seats-fill" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. WHAT YOU'LL LEARN ────────────────────────────── */}
      <section className="wp-section wp-alt" id="wp-outline">
        <div className="wrap">
          <motion.div {...FADE_UP(0)}>
            <div className="wp-eyebrow">What you'll learn</div>
            <h2 className="wp-h2">Six skills. <em>One session.</em></h2>
            <p className="wp-body">
              Concrete, output-focused outcomes — not concepts. Every item on this list
              is something you will build or implement during the workshop.
            </p>
          </motion.div>
          <div className="wl-grid">
            {OUTCOMES.map((o, i) => (
              <motion.div key={o.num} className="wl-item" {...FADE_UP(i * 0.06)}>
                <div className="wl-num">{o.num}</div>
                <div className="wl-title">{o.title}</div>
                <div className="wl-desc">{o.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHY THIS WORKSHOP ────────────────────────────── */}
      <section className="wp-section wp-light">
        <div className="wrap">
          <div className="ww-inner">
            <motion.div {...FADE_UP(0)}>
              <div className="wp-eyebrow">Why this workshop</div>
              <h2 className="wp-h2">The skill that's actually <em>in demand.</em></h2>
              <p className="wp-body" style={{ marginTop: 12 }}>
                AI agent development is the fastest-growing engineering capability of 2025.
                Most workshops teach you theory. This one puts a real system in your hands.
              </p>
              <div className="ww-points">
                {WHY_POINTS.map((p) => (
                  <div key={p.title} className="ww-point">
                    <div className="ww-check"><CheckIcon /></div>
                    <div className="ww-point-text">
                      <strong>{p.title}</strong>
                      {p.text}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...FADE_UP(0.1)}>
              <div className="ww-stat-block">
                <div className="ww-stat-card">
                  <div className="num">87<span>%</span></div>
                  <div className="label">of engineering teams evaluating or shipping AI agents in 2025</div>
                </div>
                <div className="ww-stat-card">
                  <div className="num">4<span>×</span></div>
                  <div className="label">salary premium for engineers who can ship production AI systems</div>
                </div>
                <div className="ww-stat-card">
                  <div className="num">2<span>M+</span></div>
                  <div className="label">developers now using LangChain — the ecosystem you're joining</div>
                </div>
                <div className="ww-stat-card">
                  <div className="num">1<span> day</span></div>
                  <div className="label">to go from zero to deployed AI agent with the right foundation</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. WHAT YOU'LL BUILD ────────────────────────────── */}
      <section className="wp-section wp-deep">
        <div className="wrap">
          <motion.div {...FADE_UP(0)}>
            <div className="wp-eyebrow">What you'll build</div>
            <h2 className="wp-h2">Three agents. <em>All production-ready.</em></h2>
            <p className="wp-body">
              Not toy demos. Real systems you can adapt and ship. Each one teaches a
              different agent pattern you'll use in actual work.
            </p>
          </motion.div>
          <div className="wb-grid">
            {BUILDS.map((b, i) => (
              <motion.div key={b.tag} className="wb-card" {...FADE_UP(i * 0.08)}>
                <img className="wb-card-img img-graded" src={b.img} alt={b.title} />
                <div className="wb-card-body">
                  <div className="wb-card-tag">{b.tag}</div>
                  <div className="wb-card-title">{b.title}</div>
                  <div className="wb-card-desc">{b.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. INSTRUCTOR ───────────────────────────────────── */}
      <section className="wp-section wp-light">
        <div className="wrap">
          <motion.div {...FADE_UP(0)}>
            <div className="wp-eyebrow">Instructor</div>
            <h2 className="wp-h2">Taught by someone who <em>ships agents.</em></h2>
          </motion.div>
          <motion.div className="wi-card" {...FADE_UP(0.08)}>
            <div className="wi-avatar-placeholder">K</div>
            <div>
              <div className="wi-name">Kiran Reddy</div>
              <div className="wi-role">Senior AI Engineer · Nulyft Academy</div>
              <p className="wi-bio">
                6 years building production ML systems — from recommendation engines at scale to
                multi-agent pipelines for enterprise automation. Previously at a YC-backed AI startup
                where he led the agent infrastructure team. He doesn't teach from slides. He teaches
                from the systems he has actually broken and fixed.
              </p>
              <div className="wi-tags">
                <span className="wi-tag">LangChain</span>
                <span className="wi-tag">OpenAI</span>
                <span className="wi-tag">FastAPI</span>
                <span className="wi-tag">RAG</span>
                <span className="wi-tag">Production AI</span>
                <span className="wi-tag">6 Years Engineering</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. WORKSHOP DETAILS ─────────────────────────────── */}
      <section className="wp-section wp-alt">
        <div className="wrap">
          <motion.div {...FADE_UP(0)}>
            <div className="wp-eyebrow">Workshop details</div>
            <h2 className="wp-h2">Everything you need to <em>decide.</em></h2>
          </motion.div>
          <motion.div className="wd-grid" {...FADE_UP(0.08)}>
            {DETAILS.map((d) => (
              <div key={d.key} className="wd-cell">
                <div className="wd-key">{d.key}</div>
                <div className="wd-val">{d.val}</div>
                <div className="wd-note">{d.note}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 7. SOCIAL PROOF ─────────────────────────────────── */}
      <section className="wp-section wp-light">
        <div className="wrap">
          <motion.div {...FADE_UP(0)}>
            <div className="wp-eyebrow">Social proof</div>
            <h2 className="wp-h2">What past attendees <em>said.</em></h2>
          </motion.div>
          <motion.div className="ws-bar" {...FADE_UP(0.06)}>
            <div className="ws-bar-stat">
              <div className="n">320+</div>
              <div className="l">Past attendees</div>
            </div>
            <div className="ws-sep" />
            <div className="ws-bar-stat">
              <div className="n">4.9/5</div>
              <div className="l">Avg. rating</div>
            </div>
            <div className="ws-sep" />
            <div className="ws-bar-stat">
              <div className="n">91%</div>
              <div className="l">Would recommend</div>
            </div>
            <div className="ws-sep" />
            <div className="ws-bar-stat">
              <div className="n">78%</div>
              <div className="l">Applied at work within a week</div>
            </div>
          </motion.div>
          <div className="ws-quotes">
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={t.name} className="ws-quote" {...FADE_UP(i * 0.08)}>
                <p className="ws-quote-text">{t.text}</p>
                <div className="ws-quote-author">
                  <div className="ws-quote-avatar">{t.initial}</div>
                  <div>
                    <div className="ws-quote-name">{t.name}</div>
                    <div className="ws-quote-role">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. REGISTRATION ─────────────────────────────────── */}
      <section className="wp-section wr-section" id="wp-register">
        <div className="wrap">
          <div className="wr-inner">
            <motion.div className="wr-left" {...FADE_UP(0)}>
              <div className="wp-eyebrow">Register</div>
              <h2 className="wp-h2">Secure your <em>seat now.</em></h2>
              <p>
                60 seats max. Small group format by design — more interaction,
                more feedback, more learning per hour.
              </p>
              <div className="wr-includes">
                {[
                  '4-hour live workshop with Kiran Reddy',
                  'Full session recording (30-day access)',
                  'Private GitHub repo with all code',
                  'Community Slack access for follow-up Qs',
                  'Certificate of completion',
                ].map((item) => (
                  <div key={item} className="wr-include-item">
                    <div className="wr-include-check"><CheckIcon /></div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...FADE_UP(0.1)}>
              <div className="wr-form">
                <div className="wr-form-title">Reserve your spot</div>
                <div className="wr-form-sub">Takes 30 seconds. No payment required.</div>
                <div className="wr-field">
                  <label className="wr-label">Full name</label>
                  <input className="wr-input" type="text" placeholder="Your name" />
                </div>
                <div className="wr-field">
                  <label className="wr-label">Work email</label>
                  <input className="wr-input" type="email" placeholder="you@company.com" />
                </div>
                <div className="wr-field">
                  <label className="wr-label">Your background</label>
                  <input className="wr-input" type="text" placeholder="e.g. Backend engineer, 3 years Python" />
                </div>
                <div className="wr-price-row">
                  <div className="wr-price">Free</div>
                  <div className="wr-price-orig">₹999</div>
                  <div className="wr-price-note">— Early access offer</div>
                </div>
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Register for Free
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </button>
                <p className="wr-form-note">No spam. You'll only receive a confirmation and Zoom link.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 9. FAQs ─────────────────────────────────────────── */}
      <section className="wp-section wp-light">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <motion.div {...FADE_UP(0)}>
            <div className="wp-eyebrow">FAQs</div>
            <h2 className="wp-h2">Common <em>questions.</em></h2>
          </motion.div>
          <motion.div className="wf-list" {...FADE_UP(0.08)}>
            {FAQS.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 10. RELATED WORKSHOPS ───────────────────────────── */}
      <section className="wp-section wp-alt">
        <div className="wrap">
          <motion.div {...FADE_UP(0)} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 0 }}>
            <div>
              <div className="wp-eyebrow">More sessions</div>
              <h2 className="wp-h2">Related <em>workshops.</em></h2>
            </div>
            <a href="/#events" className="link-arrow" style={{ marginBottom: 6 }}>
              View all events
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </a>
          </motion.div>
          <div className="wrw-grid">
            {RELATED.map((r, i) => (
              <motion.a key={r.title} href="#" className="wrw-card" {...FADE_UP(i * 0.08)}>
                <img className="wrw-card-img img-graded" src={r.img} alt={r.title} />
                <div className="wrw-card-body">
                  <div className="wrw-card-kind">{r.kind}</div>
                  <div className="wrw-card-title">{r.title}</div>
                  <div className="wrw-card-date">{r.date}</div>
                  <div className="wrw-card-arrow">
                    View details
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ApplyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
