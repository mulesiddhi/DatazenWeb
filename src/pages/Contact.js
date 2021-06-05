import ContactSection from '../components/ContactSection';
import Intro from '../components/Intro';
import Map from '../components/Map';
import Navbar from '../components/Navbar'
import React from 'react'

const Contact = () => {
    return (
        <>
        <Navbar/>
        <Intro/>
        <ContactSection/>
        <Map/>
        {/* <Footer/>   */}
        </>
    )
}

export default Contact
