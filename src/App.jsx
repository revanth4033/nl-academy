import { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Courses from './components/Courses';
import Journey from './components/Journey';
import Events from './components/Events';
import Outcomes from './components/Outcomes';
import Environment from './components/Environment';
import BrandZone from './components/BrandZone';
import Promise from './components/Promise';
import Mentors from './components/Mentors';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ApplyModal from './components/ApplyModal';
import CoursePage from './pages/CoursePage';

const path = window.location.pathname;
const isCourse = path === '/course' || path.startsWith('/course/');

function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const open = () => setModalOpen(true);

  return (
    <>
      <Navbar onApply={open} />
      <Hero onApply={open} />
      <TrustStrip />
      <Courses />
      <Journey />
      <Events />
      <Outcomes />
      <Environment />
      <BrandZone />
      <Promise />
      <Mentors />
      <Pricing onApply={open} />
      <FAQ />
      <FinalCTA onApply={open} />
      <Footer />
      <ApplyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

export default function App() {
  return isCourse ? <CoursePage /> : <HomePage />;
}
