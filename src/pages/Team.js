import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import React from 'react'
import Scroll from '../components/scrollToTop/Scroll';
import Teams from '../components/team/Teamwrap';

const Team = () => {
    return (
        <>
        <Navbar/>
        <Teams/>
        <Scroll/>
        <Footer/>  
        </>
    )
}

export default Team
