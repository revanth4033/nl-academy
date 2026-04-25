import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function StickyCTA({ onApply }) {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (v) => setVisible(v > 600));
  }, [scrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="sticky-cta-bar"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="sticky-cta-inner">
            <div className="sticky-cta-info">
              <span className="sticky-price">₹29,999</span>
              <span className="sticky-sep">·</span>
              <span className="sticky-batch">Starts June 22, 2026</span>
              <span className="sticky-sep">·</span>
              <span className="sticky-seats">12 seats left</span>
            </div>
            <button className="btn btn-primary btn-sm" onClick={onApply}>
              Enroll Now
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
