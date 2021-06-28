import Cfooter from '../components/contact/Cfooter';
import ContactSection from '../components/contact/ContactSection';
import Intro from '../components/contact/Intro';
import Map from '../components/contact/Map';
import Navbar from '../components/Navbar'
import React from 'react'
import Scroll from '../components/scrollToTop/Scroll';

const location = {
    address: 'KJ Somaiya College of Engineering, Vidyanagar, Vidyavihar Mumbai, Maharashtra-400089',
    lat: 19.072720,
    lng: 72.900550,
  } 



const Contact = () => {
    return (
        <>
        <Navbar/>
        <Intro intro='Contact Us'/>
        <ContactSection/>
        <Map location={location} zoomLevel={17}/>
        <Scroll/>
        <Cfooter/>
        {/* <Footer/>   */}
        </>
    )
}

export default Contact
