import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TRACKS = [
  { name: 'AI & Automation Engineering', meta: '12 Weeks · Intermediate' },
  { name: 'Full-Stack Development', meta: '16 Weeks · Beginner–Advanced' },
  { name: 'UI / UX Design', meta: '10 Weeks · Beginner' },
  { name: 'Cybersecurity & Ethical Hacking', meta: '12 Weeks · Intermediate' },
  { name: 'RPA & Business Automation', meta: '8 Weeks · Intermediate' },
  { name: 'Data Science & Analytics', meta: '14 Weeks · Intermediate' },
];

const LEVELS = ['Beginner', 'Some experience', 'Intermediate', 'Advanced'];

const COHORT_DATES = [
  'June 15, 2026 — UI/UX Design',
  'June 22, 2026 — AI & Automation',
  'July 6, 2026 — Full-Stack Dev',
  'July 20, 2026 — Data Science',
];

const STEP_META = [
  { label: 'Tell us about yourself', sub: 'Just the basics to get started.' },
  { label: 'What are you here to build?', sub: 'Help us match you to the right track and cohort.' },
  { label: 'Lock in your seat.', sub: 'Final details to confirm your application.' },
];

const INITIAL_FORM = {
  name: '', email: '', phone: '', city: '',
  track: '', level: '',
  why: '', source: '',
  cohortDate: '', payment: '', agreed: false,
};

export default function ApplyModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

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

  const canNext = () => {
    if (step === 1) return form.name && form.email && form.phone && form.city;
    if (step === 2) return form.track && form.level && form.why;
    if (step === 3) return form.cohortDate && form.payment && form.agreed;
    return true;
  };

  const handleNext = () => {
    if (step < 3) setStep(s => s + 1);
    else setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => { setStep(1); setForm(INITIAL_FORM); setSubmitted(false); }, 400);
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
            className="modal"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Apply for a cohort"
          >
            {/* LEFT PANEL */}
            <div className="modal-left">
              <div className="modal-brand">
                <span className="brand-mark">n</span>
                <span className="brand-wordmark">nulyft<em>.</em>academy</span>
              </div>

              <div className="modal-cohort-card">
                <div className="mcc-label">Founding Cohort · 2026</div>
                <div className="modal-cohort-stat">
                  {[
                    { key: 'Next start', val: "Jun 22, '26" },
                    { key: 'Seats left', val: '12 remaining', accent: true },
                    { key: 'Format', val: 'Live · Online' },
                    { key: 'Duration', val: '8 – 16 Weeks' },
                  ].map(row => (
                    <div key={row.key} className="modal-cohort-row">
                      <span className="mcr-key">{row.key}</span>
                      <span className={`mcr-val${row.accent ? ' accent' : ''}`}>{row.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-mentor-card">
                <blockquote>
                  The only thing worth graduating with is proof you can do the work.
                </blockquote>
                <div className="modal-mentor-who">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=faces"
                    alt="Arjun Kapoor"
                  />
                  <div>
                    <div className="modal-mentor-name">Arjun Kapoor</div>
                    <div className="modal-mentor-role">Senior AI Engineer · Mentor</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="modal-right">
              <div className="modal-right-head">
                <span className="modal-step-indicator">
                  {submitted ? 'Application sent' : `Step 0${step} of 03`}
                </span>
                <button className="modal-close" onClick={handleClose} aria-label="Close">×</button>
              </div>

              {!submitted ? (
                <>
                  <div className="modal-progress">
                    <div className="modal-progress-bar" style={{ width: `${(step / 3) * 100}%` }} />
                  </div>

                  <div className="modal-form-body">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
                      >
                        <div className="modal-step-title">
                          {STEP_META[step - 1].label}
                        </div>
                        <div className="modal-step-sub">{STEP_META[step - 1].sub}</div>

                        {step === 1 && <Step1 form={form} set={set} />}
                        {step === 2 && <Step2 form={form} set={set} />}
                        {step === 3 && <Step3 form={form} set={set} />}
                      </motion.div>
                    </AnimatePresence>

                    <div className="modal-foot">
                      {step > 1 ? (
                        <button className="modal-back" onClick={() => setStep(s => s - 1)}>
                          ← Back
                        </button>
                      ) : <span />}
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={handleNext}
                        disabled={!canNext()}
                        style={{ opacity: canNext() ? 1 : 0.45, cursor: canNext() ? 'pointer' : 'not-allowed' }}
                      >
                        {step === 3 ? 'Submit Application' : 'Continue'}
                        {step < 3 ? (
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                        ) : null}
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <SuccessState onClose={handleClose} name={form.name} />
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function Step1({ form, set }) {
  return (
    <>
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
    </>
  );
}

function Step2({ form, set }) {
  return (
    <>
      <div className="field" style={{ marginBottom: 14 }}>
        <label>Which track are you applying for?</label>
      </div>
      <div className="track-grid">
        {TRACKS.map(t => (
          <button
            key={t.name}
            type="button"
            className={`track-pill${form.track === t.name ? ' selected' : ''}`}
            onClick={() => set('track', t.name)}
          >
            <span className="track-pill-dot" />
            <div>
              <div className="track-pill-name">{t.name}</div>
              <div className="track-pill-meta">{t.meta}</div>
            </div>
          </button>
        ))}
      </div>

      <div className="field" style={{ marginBottom: 8, marginTop: 6 }}>
        <label>Your experience level</label>
      </div>
      <div className="level-row" style={{ marginBottom: 14 }}>
        {LEVELS.map(l => (
          <button
            key={l}
            type="button"
            className={`level-pill${form.level === l ? ' selected' : ''}`}
            onClick={() => set('level', l)}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="form-row full">
        <div className="field">
          <label>Why are you applying?</label>
          <textarea
            placeholder="Tell us what you're hoping to build or achieve..."
            value={form.why}
            onChange={e => set('why', e.target.value)}
          />
        </div>
      </div>

      <div className="form-row full">
        <div className="field">
          <label>How did you hear about us?</label>
          <select value={form.source} onChange={e => set('source', e.target.value)}>
            <option value="">Select one...</option>
            {['LinkedIn', 'Instagram', 'Twitter / X', 'Google Search', 'Friend or colleague', 'YouTube', 'Other'].map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

function Step3({ form, set }) {
  return (
    <>
      <div className="field" style={{ marginBottom: 8 }}>
        <label>Preferred cohort start</label>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
        {COHORT_DATES.map(d => (
          <button
            key={d}
            type="button"
            className={`track-pill${form.cohortDate === d ? ' selected' : ''}`}
            onClick={() => set('cohortDate', d)}
            style={{ justifyContent: 'flex-start' }}
          >
            <span className="track-pill-dot" />
            <div className="track-pill-name">{d}</div>
          </button>
        ))}
      </div>

      <div className="field" style={{ marginBottom: 8 }}>
        <label>Payment preference</label>
      </div>
      <div className="payment-row" style={{ marginBottom: 20 }}>
        {[
          { key: 'full', title: 'Full payment', sub: 'Pay once — no installments.' },
          { key: 'emi', title: 'EMI plan', sub: '2–3 installments available.' },
        ].map(p => (
          <button
            key={p.key}
            type="button"
            className={`payment-pill${form.payment === p.key ? ' selected' : ''}`}
            onClick={() => set('payment', p.key)}
          >
            <div className="payment-pill-title">{p.title}</div>
            <div className="payment-pill-sub">{p.sub}</div>
          </button>
        ))}
      </div>

      <div className="check-row">
        <input
          type="checkbox"
          id="agree"
          checked={form.agreed}
          onChange={e => set('agreed', e.target.checked)}
        />
        <label htmlFor="agree">
          I understand this is an application, not a confirmed seat. I agree to the{' '}
          <a href="#">terms & conditions</a> and consent to being contacted by the Nulyft team.
        </label>
      </div>
    </>
  );
}

function SuccessState({ onClose, name }) {
  const firstName = name.trim().split(' ')[0];
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
      style={{ padding: '48px 32px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', flex: 1 }}
    >
      <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand-soft)', border: '1px solid var(--brand-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div style={{ fontFamily: 'var(--f-mono)', fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand)', marginBottom: 12 }}>
        Application received
      </div>
      <h3 style={{ fontFamily: 'var(--f-display)', fontSize: 26, fontWeight: 500, fontStyle: 'italic', letterSpacing: '-0.025em', color: 'var(--ink)', lineHeight: 1.2, marginBottom: 14 }}>
        You're on the list, {firstName}.
      </h3>
      <p style={{ fontSize: 15, color: 'var(--ink-muted)', lineHeight: 1.65, maxWidth: '38ch', marginBottom: 32 }}>
        We'll review your application and reach out within 2 business days to schedule a quick 15-min intro call. Keep an eye on your inbox.
      </p>
      <button className="btn btn-ghost btn-sm" onClick={onClose}>Back to site</button>
    </motion.div>
  );
}
