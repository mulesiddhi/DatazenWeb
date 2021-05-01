import './HeroSection.css';
import '../App.css'

import  Button  from './Button'
import {Link as LinkS} from 'react-scroll'
import React from 'react'

const HeroSection = () => {
    return (
        <div id='home' >
           
        <div className='hero-container'>
            <video src='/videos/video.mp4'autoPlay loop muted/>
           
            <h1>Technology and Data</h1>
            <p>Get ready to think out of the box</p>
            <div className='hero-btns'>
            <LinkS to='about' smooth={true}>
                <Button
                classname='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                   Know More <i className='far fa-play-circle '/> 
                </Button>
                </LinkS>
            </div>
            </div>
        </div>
    )
}

export default HeroSection
