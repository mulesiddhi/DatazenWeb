import '../App.css';

import About from '../components/About'
import Accordion from '../components/Accordion';
import Event from '../components/events/Event';
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import React from 'react';

function Home() {
  return (
    <>
    <Navbar/>
      <HeroSection />
      <About/>
      <Event/>
      <Accordion/>
      <Footer/>
    </>
  );
}

export default Home;