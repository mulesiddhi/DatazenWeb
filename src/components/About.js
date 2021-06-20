import './About.css'

import React from 'react'

const About = () => {
    return (
        <div className='cards' id='about' >
            <h1 className='bg-white' >About Us</h1>
            <hr/>
            <div className='cards_Container bg-white'>
                <div className='cards_Wrapper bg-white'>
                  <div className='box1 bg-white' >
                  <p className='bg-white'>We are the official data science council of KJSCE and we want to help everyone understand and work with data irrespective of their current current knowledge and field. </p>
                  

<p className='bg-white'>We organize activities that help the youth grow, have speaker sessions to gain current world knowledge and finally competitions to check one's progress and lastly a discord community that's available for everyone at all times to post their queries or achievements or just to interact with people who have the same interest as yours.</p>
                      </div>  
                </div>
            </div>
            
        </div>
    )
}

export default About
