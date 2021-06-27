import "./TeamCarousel.css";

import {useEffect, useState} from 'react';

import Carousel from "./carousel/Carousel";
import React from 'react'
import TeamCard from './TeamCard'
import throttle from 'lodash.throttle';

const TeamCarousel = () => {

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
                        <TeamCard/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard/>
                    </div>
                    </div>
                    </Carousel>
                    </div> 
        </div>
    )
}

export default TeamCarousel
