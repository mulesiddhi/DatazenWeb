import './HeroSection.css';
import '../App.css'

import  Button  from './Button'
import React from 'react'
import Typing from 'react-typing-animation';

const HeroSection = () => {
    return (
        <div id='home' >
           
        {/* <div className='hero-container'>
            
            <h1>DataZen</h1>
            <Typing className='htxt' loop='true' speed={80}>
            Need help to kickstart your Data Science Journey?
            <Typing.Reset count={1} delay={1000} />
            </Typing>
            <div className='hero-btns'>
            
                <Button
                classname='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                path='/survey'
                > 
                   Take The Survey<i className='far fa-play-circle bg-white'/> 
                </Button>
               
            </div>
            </div> */}
            <div className='hero-container'>
                <div className='banner-red-left '>   
                </div>
                <div className='banner-red-left-alt '></div>
                <div className='inner-cont'>
                    <div className='content-des'>
                    <img className=' w-100 con-img' src='https://th.bing.com/th/id/OIP.32NfUXDAnph5QirsnWmLUAHaEK?w=302&h=180&c=7&o=5&dpr=1.5&pid=1.7' alt='hero-img'/>
                    {/* <div className='img-div d-none d-sm-block d-xs-block' style={{
          backgroundImage: `url('https://th.bing.com/th/id/OIP.GK5nzmCXn99oKGlCSvUnwAHaE8?w=268&h=180&c=7&o=5&dpr=1.5&pid=1.7')`,
          backgroundSize: 'cover',
        }}></div> */}
                <div className='herocaption d-md-block d-flex'>
                    <div className='d-flex head-div'>
                     <img className='logoimg' alt='logo' src={process.env.PUBLIC_URL + "/images/Brain Logo Transparent.png"}/>
                    {/* <div> */}
                    <h1 className='cap-title'>DataZen</h1>
                    </div>
                    <Typing className='htxt cap-text mt-3 mb-2' loop='true' speed={80}>
             The official DATA SCIENCE council of Somaiya Vidhyavihar University.
            <Typing.Reset count={1} delay={1000} />
            </Typing>
            {/* <h2  className='htxt cap-text mt-3 mb-2'> The official DATA SCIENCE council of Somaiya Vidhyavihar University.</h2> */}
            {/* </div> */}
           
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
