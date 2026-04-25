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

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar onApply={() => setModalOpen(true)} />
      <Hero onApply={() => setModalOpen(true)} />
      <TrustStrip />
      <Courses />
      <Journey />
      <Events />
      <Outcomes />
      <Environment />
      <BrandZone />
      <Promise />
      <Mentors />
      <Pricing onApply={() => setModalOpen(true)} />
      <FAQ />
      <FinalCTA onApply={() => setModalOpen(true)} />
      <Footer />
      <ApplyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
