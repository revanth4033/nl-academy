import { motion } from 'framer-motion';

const INCLUDES = [
  { icon: '🎥', title: '48 live sessions', desc: '4 sessions per week, all recorded for lifetime replay.' },
  { icon: '👨‍🏫', title: 'Weekly 1:1 mentorship', desc: 'Dedicated office hours with your assigned mentor.' },
  { icon: '🛠️', title: '6 capstone projects', desc: 'Every project is portfolio-ready and deploy-verified.' },
  { icon: '💼', title: 'Career support until hired', desc: "Resume reviews, mock interviews, and recruiter intros. We don't stop at graduation." },
  { icon: '👥', title: 'Private alumni community', desc: 'Lifetime access to a community of 340+ AI engineers.' },
  { icon: '♾️', title: 'Lifetime curriculum access', desc: 'Course materials and future module updates, forever.' },
  { icon: '🎓', title: 'Verified completion certificate', desc: 'Recognised by our hiring partners across India.' },
  { icon: '🔗', title: 'Hiring partner network', desc: 'Direct referrals to 60+ companies actively hiring AI engineers.' },
];

const DETAILS = [
  'June 22, 2026 — cohort start date',
  '12 weeks · 4 live sessions/week',
  'Limited to 25 seats per cohort',
  'EMI available: ₹5,000/month × 6',
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.2, 0.8, 0.2, 1], delay },
});

export default function CourseOffer({ onEnroll }) {
  return (
    <section className="cp-section cp-dark" id="offer">
      <div className="wrap">
        <motion.div {...fadeUp(0)}>
          <div className="cp-eyebrow cp-eyebrow-dark">09 — The Offer</div>
          <h2 className="cp-h2 cp-h2-light">
            Everything you need.<br /><em>Nothing you don't.</em>
          </h2>
          <p className="cp-lede cp-lede-light">
            We built this to be the only thing you need to go from where you are now
            to your first AI engineering role.
          </p>
        </motion.div>

        <div className="co-inner">
          <motion.div {...fadeUp(0.1)}>
            <div className="co-includes">
              {INCLUDES.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="co-include-item"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 + i * 0.06 }}
                >
                  <div className="co-include-icon">{item.icon}</div>
                  <div>
                    <div className="co-include-title">{item.title}</div>
                    <div className="co-include-desc">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
          >
            <div className="co-price-card">
              <div className="co-price-tag">
                <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1l1.5 3h3l-2.5 2 1 3L6 7.5 3 9l1-3L1.5 4h3z" fill="currentColor" />
                </svg>
                Most Popular · AI Track
              </div>

              <div className="co-price-amount">₹29,999</div>
              <div className="co-price-original">₹49,999</div>
              <div className="co-price-emi">or ₹5,000/month × 6 with 0% EMI</div>

              <div className="co-price-details">
                {DETAILS.map(detail => (
                  <div key={detail} className="co-price-detail">
                    <span className="co-price-detail-dot" />
                    {detail}
                  </div>
                ))}
              </div>

              <div className="co-price-urgency">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" /><path d="M12 8v4l2 2" />
                </svg>
                12 of 25 seats remaining — closes June 10
              </div>

              <button
                className="btn btn-primary co-price-cta"
                onClick={onEnroll}
              >
                Secure Your Seat
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>

              <p className="co-price-note">
                Instant confirmation · Secure payment via Razorpay<br />
                30-day refund if the cohort isn't right for you
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
