import "./TeamCarousel.css";

import {useEffect, useState} from 'react';

import Carousel from "./carousel/Carousel";
import React from 'react'
import TeamCard from './TeamCard'
import throttle from 'lodash.throttle';

const TeamAlumini = () => {

    const getDeviceConfig = (width) => {
        if(width < 320) {
          return 'xs';
        } else if(width >= 320 && width < 720 ) {
          return 'sm';
        } else if(width >= 720 && width < 1024) {
          return 'md';
        } else if(width >= 1024) {
          return 'lg';
        }
      };
      const [brkPnt, setBrkPnt] = useState(() => getDeviceConfig(window.innerWidth));
  
  useEffect(() => {
    const calcInnerWidth = throttle(function() {
      setBrkPnt(getDeviceConfig(window.innerWidth))
    }, 200); 
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

    
    return (
        <div>
            <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 10,marginBottom:20 }}>
            <Carousel
                show={brkPnt==='lg'?3:brkPnt==='md'?2:1}
            >
                <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                        src='alumini/ruchi.png'
                        name='Ruchi Bhatia'
                        position=''
                        in='https://www.linkedin.com/in/ruchi798/'
                        icon="fab fa-linkedin-in fa-2x"/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                        src='alumini/harshal.png'
                        name='Harshal Shah'
                        position=''
                        in='https://www.linkedin.com/in/harshalharishshah/'
                        icon="fab fa-linkedin-in fa-2x"/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                        src='alumini/darshan.png'
                        name='Darshan Gandhi'
                        position=''
                        in='https://www.linkedin.com/in/gandhi-darshan/'
                        icon="fab fa-linkedin-in fa-2x"/>
                    </div>
                    </div>
                   
                    </Carousel>
                    </div> 
        </div>
    )
}

export default TeamAlumini;
