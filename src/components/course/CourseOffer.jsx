import { motion } from 'framer-motion';

const INCLUDES = [
  { icon: '🎥', title: '48 live sessions', desc: '4 sessions/week, all recorded for lifetime replay' },
  { icon: '👨‍🏫', title: 'Weekly 1:1 mentorship', desc: 'Dedicated office hours with your assigned mentor' },
  { icon: '🛠️', title: '6 capstone projects', desc: 'Every project is portfolio-ready and deploy-verified' },
  { icon: '💼', title: 'Career support until hired', desc: "Resume reviews, mock interviews, recruiter intros" },
  { icon: '👥', title: 'Private alumni community', desc: 'Lifetime access to a community of 340+ AI engineers' },
  { icon: '♾️', title: 'Lifetime curriculum access', desc: 'All course materials and future updates, forever' },
  { icon: '🎓', title: 'Verified certificate', desc: 'Recognised by our hiring partners across India' },
  { icon: '🔗', title: 'Hiring partner network', desc: 'Direct referrals to 60+ companies actively hiring' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay },
});

export default function CourseOffer({ onEnroll }) {
  return (
    <section className="cp-section cp-light" id="offer">
      <div className="wrap">

        <div className="co3-layout">

          {/* Left: heading + includes */}
          <motion.div {...fadeUp(0)}>
            <div className="cp-eyebrow">09 — The Offer</div>
            <h2 className="cp-h2">
              Everything you need.<br /><em>Nothing you don't.</em>
            </h2>
            <p className="co3-sub">
              One program. Everything to go from where you are to your first AI engineering role.
            </p>
            <div className="co3-includes">
              {INCLUDES.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="co3-include"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 + i * 0.05 }}
                >
                  <div className="co3-check">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="var(--brand)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="co3-include-title">{item.icon} {item.title}</div>
                    <div className="co3-include-desc">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: price card */}
          <motion.div
            className="co3-card-wrap"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 }}
          >
            <div className="co3-card">

              <div className="co3-badge">
                <svg width="9" height="9" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 1l1.5 3h3l-2.5 2 1 3L6 7.5 3 9l1-3L1.5 4h3z" />
                </svg>
                AI Automation Engineer · Cohort 03
              </div>

              <div className="co3-price">₹29,999</div>
              <div className="co3-price-meta">
                <span className="co3-original">₹49,999</span>
                <span className="co3-saving">Save ₹20,000</span>
              </div>
              <div className="co3-emi">or ₹5,000 × 6 months · 0% EMI</div>

              <div className="co3-details">
                <div className="co3-detail"><span>📅</span> June 22, 2026 · Cohort start</div>
                <div className="co3-detail"><span>⏱️</span> 12 weeks · 4 sessions/week</div>
                <div className="co3-detail"><span>🪑</span> Limited to 25 seats</div>
              </div>

              <div className="co3-urgency">
                <span className="co3-urgency-dot" />
                <span><strong>12 of 25 seats left</strong> — closes June 10</span>
              </div>

              <button className="btn btn-primary co3-cta" onClick={onEnroll}>
                Secure Your Seat
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>

              <p className="co3-trust">
                30-day money-back guarantee · Secure payment via Razorpay
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
