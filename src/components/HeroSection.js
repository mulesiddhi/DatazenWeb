import './HeroSection.css';
import '../App.css'

import  Button  from './Button'
import React from 'react'

const HeroSection = () => {
    return (
        <div >
           
        <div className='hero-container'>
            <video src='/videos/video.mp4'autoPlay loop muted/>
           
            <h1>Technology and Data</h1>
            <p>Get ready to think out of the box</p>
            <div className='hero-btns'>
                <Button
                classname='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                path='/about'
                >
                   Learn More <i className='far fa-play-circle '/> 
                </Button>
            </div>
            </div>
        </div>
    )
}

export default HeroSection
