import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROGRAMS = [
  {
    id: 'ai-beginner',
    label: 'AI Automation Program',
    sub: 'Beginner',
    name: 'AI Automation Engineering — Beginner Track',
    desc: 'Build your first AI systems from the ground up. No prior ML experience needed — just curiosity and commitment.',
    duration: '12 Weeks',
    format: 'Live · Online',
    level: 'Beginner',
    starts: 'June 22, 2026',
    seats: '12 seats left',
    price: '₹29,999',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=300&fit=crop',
  },
  {
    id: 'fullstack-ai',
    label: 'Full Stack AI Program',
    sub: 'Intermediate',
    name: 'Full Stack + AI Integration',
    desc: 'Master modern web development and layer AI on top — build production apps that actually use LLMs intelligently.',
    duration: '16 Weeks',
    format: 'Live · Online',
    level: 'Intermediate',
    starts: 'July 6, 2026',
    seats: '20 seats left',
    price: '₹34,999',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop',
  },
  {
    id: 'product-design',
    label: 'Product Designing',
    sub: 'Beginner',
    name: 'UI / UX & Product Design',
    desc: 'From wireframe to polished Figma prototype — learn design thinking, systems, and how to build real case studies.',
    duration: '10 Weeks',
    format: 'Live · Online',
    level: 'Beginner',
    starts: 'June 15, 2026',
    seats: '18 seats left',
    price: '₹19,999',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b8?w=600&h=300&fit=crop',
  },
  {
    id: 'cybersecurity',
    label: 'Cybersecurity Essentials',
    sub: 'Intermediate',
    name: 'Cybersecurity & Ethical Hacking',
    desc: 'Penetration testing, network defence, and real-world attack/defence labs — taught by a practising security architect.',
    duration: '12 Weeks',
    format: 'Hybrid',
    level: 'Intermediate',
    starts: 'July 20, 2026',
    seats: '15 seats left',
    price: '₹27,999',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=300&fit=crop',
  },
  {
    id: 'rpa',
    label: 'RPA & Automation',
    sub: 'Intermediate',
    name: 'RPA & Business Automation',
    desc: 'Automate enterprise workflows using UiPath, Power Automate, and custom Python bots — built for real business teams.',
    duration: '8 Weeks',
    format: 'Live · Online',
    level: 'Intermediate',
    starts: 'August 3, 2026',
    seats: '22 seats left',
    price: '₹17,999',
    img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=300&fit=crop',
  },
  {
    id: 'data-science',
    label: 'Data Science & Analytics',
    sub: 'Intermediate',
    name: 'Data Science & Analytics',
    desc: 'Python, SQL, machine learning, and dashboards — turn raw data into decisions that businesses actually act on.',
    duration: '14 Weeks',
    format: 'Hybrid',
    level: 'Intermediate',
    starts: 'July 13, 2026',
    seats: '19 seats left',
    price: '₹24,999',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop',
  },
];

const INITIAL_FORM = { name: '', email: '', phone: '', city: '', message: '' };

export default function ApplyModal({ isOpen, onClose }) {
  const [selectedId, setSelectedId] = useState(PROGRAMS[0].id);
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const program = PROGRAMS.find(p => p.id === selectedId);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));
  const canSubmit = form.name && form.email && form.phone && form.city;

  const handleSubmit = () => {
    if (canSubmit) setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setForm(INITIAL_FORM);
      setSubmitted(false);
      setSelectedId(PROGRAMS[0].id);
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          <motion.div
            className="modal modal-v2"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Apply for a program"
          >
            {/* SIDEBAR */}
            <div className="modal-sidebar">
              <div className="modal-sidebar-brand">
                <span className="brand-mark">n</span>
                <span className="brand-wordmark">nulyft<em>.</em>academy</span>
              </div>
              <div className="modal-sidebar-label">Programs</div>
              <nav className="modal-nav">
                {PROGRAMS.map(p => (
                  <button
                    key={p.id}
                    className={`modal-nav-item${selectedId === p.id ? ' active' : ''}`}
                    onClick={() => setSelectedId(p.id)}
                  >
                    <span className="modal-nav-dot" />
                    <span className="modal-nav-text">
                      <span className="modal-nav-name">{p.label}</span>
                      <span className="modal-nav-sub">{p.sub}</span>
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* MAIN */}
            <div className="modal-main">
              {/* CLOSE */}
              <button className="modal-close modal-close-v2" onClick={handleClose} aria-label="Close">×</button>

              {!submitted ? (
                <>
                  {/* PROGRAM DETAILS — top */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedId}
                      className="modal-program"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                      <div className="modal-program-img">
                        <img src={program.img} alt={program.name} className="img-graded" />
                        <div className="modal-program-img-overlay" />
                        <div className="modal-program-badge">{program.format}</div>
                      </div>
                      <div className="modal-program-info">
                        <div className="modal-program-name">{program.name}</div>
                        <div className="modal-program-desc">{program.desc}</div>
                        <div className="modal-program-stats">
                          {[
                            { k: 'Duration', v: program.duration },
                            { k: 'Starts', v: program.starts },
                            { k: 'Level', v: program.level },
                            { k: 'Seats', v: program.seats, accent: true },
                            { k: 'Fee', v: program.price },
                          ].map(s => (
                            <div key={s.k} className="modal-program-stat">
                              <span className="mps-key">{s.k}</span>
                              <span className={`mps-val${s.accent ? ' accent' : ''}`}>{s.v}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* FORM — bottom */}
                  <div className="modal-form-section">
                    <div className="modal-form-head">
                      <div className="modal-step-title">Your details</div>
                      <div className="modal-step-sub">We'll reach out within 2 business days to confirm your seat.</div>
                    </div>
                    <div className="form-row">
                      <div className="field">
                        <label>Full name</label>
                        <input type="text" placeholder="e.g. Revanth Reddy" value={form.name} onChange={e => set('name', e.target.value)} />
                      </div>
                      <div className="field">
                        <label>Email address</label>
                        <input type="email" placeholder="you@example.com" value={form.email} onChange={e => set('email', e.target.value)} />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="field">
                        <label>Phone number</label>
                        <input type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={e => set('phone', e.target.value)} />
                      </div>
                      <div className="field">
                        <label>City</label>
                        <input type="text" placeholder="Hyderabad" value={form.city} onChange={e => set('city', e.target.value)} />
                      </div>
                    </div>
                    <div className="form-row full">
                      <div className="field">
                        <label>Message <span style={{ color: 'var(--ink-faint)', fontWeight: 400 }}>(optional)</span></label>
                        <textarea
                          placeholder="Any questions, goals, or context you'd like us to know before the call..."
                          value={form.message}
                          onChange={e => set('message', e.target.value)}
                          style={{ minHeight: 72 }}
                        />
                      </div>
                    </div>
                    <div className="modal-foot">
                      <span style={{ fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
                        Applying for: <strong style={{ color: 'var(--brand)', fontWeight: 500 }}>{program.label}</strong>
                      </span>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={handleSubmit}
                        disabled={!canSubmit}
                        style={{ opacity: canSubmit ? 1 : 0.45, cursor: canSubmit ? 'pointer' : 'not-allowed' }}
                      >
                        Submit Application
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <SuccessState onClose={handleClose} name={form.name} program={program.label} />
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function SuccessState({ onClose, name, program }) {
  const firstName = name.trim().split(' ')[0];
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
      style={{ padding: '56px 48px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', flex: 1 }}
    >
      <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand-soft)', border: '1px solid var(--brand-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div style={{ fontFamily: 'var(--f-mono)', fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand)', marginBottom: 12 }}>
        Application received
      </div>
      <h3 style={{ fontFamily: 'var(--f-display)', fontSize: 28, fontWeight: 500, fontStyle: 'italic', letterSpacing: '-0.025em', color: 'var(--ink)', lineHeight: 1.15, marginBottom: 14 }}>
        You're on the list, {firstName}.
      </h3>
      <p style={{ fontSize: 15, color: 'var(--ink-muted)', lineHeight: 1.7, maxWidth: '40ch', marginBottom: 8 }}>
        We've received your application for <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>{program}</strong>.
      </p>
      <p style={{ fontSize: 15, color: 'var(--ink-muted)', lineHeight: 1.7, maxWidth: '40ch', marginBottom: 36 }}>
        Expect a message from us within 2 business days to schedule a quick intro call and confirm your seat.
      </p>
      <button className="btn btn-ghost btn-sm" onClick={onClose}>Back to site</button>
    </motion.div>
  );
}
