import '../App.css';

import About from '../components/About'
import Accordion from '../components/Accordion';
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import React from 'react';
import Team from '../components/Team'

function Home() {
  return (
    <>
    <Navbar/>
      <HeroSection />
      <About/>
      <Team/>
      <Accordion/>
      <Footer/>
    </>
  );
}

export default Home;