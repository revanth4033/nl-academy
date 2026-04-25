import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ onApply }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`nav ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="nav-inner">
        <a href="#" className="brand-lockup">
          <span className="brand-mark">n</span>
          <span className="brand-wordmark">nulyft<em>.</em>academy</span>
        </a>
        <div className="nav-links">
          <a href="#courses">Courses</a>
          <a href="#events">Events</a>
          <a href="#mentors">Mentors</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="nav-cta">
          <a href="#pricing" className="btn btn-ghost btn-sm">See Pricing</a>
          <button className="btn btn-primary btn-sm" onClick={onApply}>
            Apply Now
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
