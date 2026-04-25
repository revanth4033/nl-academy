import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ApplyModal from '../components/ApplyModal';
import CourseHero from '../components/course/CourseHero';
import FutureIdentity from '../components/course/FutureIdentity';
import CourseProblem from '../components/course/CourseProblem';
import CourseTimeline from '../components/course/CourseTimeline';
import CourseProjects from '../components/course/CourseProjects';
import CourseIndustry from '../components/course/CourseIndustry';
import CourseMentor from '../components/course/CourseMentor';
import CourseOutcomes from '../components/course/CourseOutcomes';
import CourseOffer from '../components/course/CourseOffer';
import CourseFinalCTA from '../components/course/CourseFinalCTA';
import StickyCTA from '../components/course/StickyCTA';

export default function CoursePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  return (
    <div className="course-page">
      <Navbar onApply={open} />
      <CourseHero onApply={open} />
      <FutureIdentity />
      <CourseProblem />
      <CourseTimeline />
      <CourseProjects />
      <CourseIndustry />
      <CourseMentor />
      <CourseOutcomes />
      <CourseOffer onApply={open} />
      <CourseFinalCTA onApply={open} />
      <Footer />
      <StickyCTA onApply={open} />
      <ApplyModal isOpen={modalOpen} onClose={close} />
    </div>
  );
}
