import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../course.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ApplyModal from '../components/ApplyModal';

import CourseHero from '../components/course/CourseHero';
import CourseIdentity from '../components/course/CourseIdentity';
import CourseProblem from '../components/course/CourseProblem';
import CourseJourney from '../components/course/CourseJourney';
import CourseProjects from '../components/course/CourseProjects';
import CourseIndustry from '../components/course/CourseIndustry';
import CourseAuthority from '../components/course/CourseAuthority';
import CourseSocialProof from '../components/course/CourseSocialProof';
import CourseOffer from '../components/course/CourseOffer';
import CourseFinalPush from '../components/course/CourseFinalPush';

export default function CoursePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  const openEnroll = () => setModalOpen(true);

  useEffect(() => {
    const onScroll = () => setShowStickyBar(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Navbar onApply={openEnroll} />

      <CourseHero onEnroll={openEnroll} />
      <CourseIdentity />
      <CourseProblem />
      <CourseJourney />
      <CourseProjects />
      <CourseIndustry />
      <CourseAuthority />
      <CourseSocialProof />
      <CourseOffer onEnroll={openEnroll} />
      <CourseFinalPush onEnroll={openEnroll} />

      <Footer />

      <ApplyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <AnimatePresence>
        {showStickyBar ? (
          <motion.div
            className="cp-sticky-bar"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <span className="cp-sticky-text">
              AI Automation Engineer · June 22 ·{' '}
              <span className="cp-sticky-seats">12 seats left</span>
            </span>
            <button className="btn btn-primary cp-sticky-btn" onClick={openEnroll}>
              Enroll Now
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
