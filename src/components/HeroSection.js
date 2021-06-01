import './HeroSection.css';
import '../App.css'

import  Button  from './Button'
import {Link as LinkS} from 'react-scroll'
import React from 'react'
import Typing from 'react-typing-animation';

const HeroSection = () => {
    return (
        <div id='home' >
           
        <div className='hero-container'>
            {/* <video src='/videos/video.mp4'autoPlay loop muted/> */}
            <h1>DataZen</h1>
            <Typing className='htxt' loop='true' speed={80}>
            Need help to kickstart your Data Science Journey?
            <Typing.Reset count={1} delay={1000} />
            </Typing>
            <div className='hero-btns'>
            <LinkS to='about' smooth={true}>
                <Button
                classname='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                   Take The Survey<i className='far fa-play-circle '/> 
                </Button>
                </LinkS>
            </div>
            </div>
        </div>
    )
}

export default HeroSection
