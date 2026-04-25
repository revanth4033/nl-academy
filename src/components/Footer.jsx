import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <motion.div
          className="footer-top"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span className="brand-mark" style={{ background: 'linear-gradient(135deg, #9B6BFF 0%, #834DFB 42%, #4A1FB8 100%)' }}>n</span>
              <span className="brand-wordmark" style={{ color: '#FAFAF7' }}>nulyft<em>.</em>academy</span>
            </div>
            <p className="footer-about">
              A premium educational academy. Industry-led. Portfolio-first. Cohort-based.
              Built for people who want real skills, not just credentials.
            </p>
          </div>

          <div className="footer-col">
            <h5>Courses</h5>
            <ul>
              {['AI & Automation', 'Full-Stack Development', 'UI / UX Design', 'Cybersecurity', 'RPA & Automation', 'Data Science'].map(c => (
                <li key={c}><a href="#courses">{c}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>Academy</h5>
            <ul>
              {['About Us', 'Our Mentors', 'Events & Workshops', 'The Nulyft Promise', 'Careers'].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>Apply</h5>
            <ul>
              {['Browse Cohorts', 'Book a Consult', 'Payment Plans', 'FAQs', 'Contact'].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <span className="footer-copy">© 2026 Nulyft Academy · Hyderabad, India</span>
          <div className="footer-socials">
            {['in', 'tw', 'ig', 'yt'].map(s => (
              <a key={s} href="#" aria-label={s}>{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
