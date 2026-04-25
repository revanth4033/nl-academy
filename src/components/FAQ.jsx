import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  {
    q: 'Who are these courses for?',
    a: 'Our academy is designed for aspiring engineers, designers, analysts, and professionals across AI, development, design, cybersecurity, RPA, and more. Every track has a beginner-to-advanced path, so learners at any stage can find a fit.',
  },
  {
    q: 'Do I need prior experience?',
    a: 'Requirements vary by course. Foundational tracks like UI/UX Design and RPA Basics start from scratch. Intermediate tracks like AI Engineering or Full-Stack Development recommend basic programming familiarity — we\'ll guide you on what\'s right during the consultation.',
  },
  {
    q: "What's the class schedule like?",
    a: 'Live sessions are held on weekends (Saturday & Sunday) for 2–3 hours each. You also get recorded sessions, weekly assignments, and mentor office hours during the week.',
  },
  {
    q: 'Will I get a certificate?',
    a: "Yes, upon successful completion of your course and capstone project. But more importantly, you'll have a portfolio of real projects to show — which is what actually gets you hired.",
  },
  {
    q: 'Are there payment plans?',
    a: "Yes — we offer flexible EMI plans across 2–3 installments on every course. Reach out and we'll set it up for your cohort start date.",
  },
  {
    q: 'What happens after the program ends?',
    a: 'You retain lifetime access to the community, recorded sessions, and alumni network. We also provide career support including portfolio reviews, mock interviews, and freelancing guidance.',
  },
];

function FAQItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={`faq-item${open ? ' open' : ''}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <button className="faq-q" onClick={() => setOpen(!open)} aria-expanded={open}>
        {item.q}
        <span className="faq-ic" aria-hidden="true">+</span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ paddingBottom: 22, fontSize: 16, color: 'var(--ink-muted)', lineHeight: 1.65 }}>
              {item.a}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="section" id="faq" style={{ background: 'var(--canvas-alt)' }}>
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div>
            <div className="eyebrow">08 — Questions</div>
            <h2 className="display h2" style={{ marginTop: 8 }}>
              Frequently <em>asked.</em>
            </h2>
          </div>
          <div />
        </motion.div>

        <div style={{ maxWidth: 760 }}>
          {FAQS.map((item) => (
            <FAQItem key={item.q} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
