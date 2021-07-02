import "./TeamCarousel.css";

import {useEffect, useState} from 'react';

import Carousel from "./carousel/Carousel";
import React from 'react'
import TeamCard from './TeamCard'
import throttle from 'lodash.throttle';

const TeamMem = () => {

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
                        src='team/BurhanuddinPlumber.png'
                        name='Burhanuddin Plumber'
                        position='Technical Team'/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                         src='team/DevanshiPatel.png'
                         name='Devanshi Patel'
                         position='Technical Team'/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                        src='team/hinal.png'
                        name='Hinal Pujara'
                        position='Technical Team'/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                        src='team/Nishant.png'
                        name='Nishant Rajadhyaksha'
                        position='Technical Team'/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                        src='team/Iftekar.png'
                        name='Iftekar Patel'
                        position='Technical Team'/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                        src='team/Pathik.png'
                        name='Pathik Ghugare'
                        position='Technical Team'/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                        src='team/Raj.png'
                        name='Raj Sinha'
                        position='Technical Team'/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                       src='team/siddhi.png'
                       name='Siddhi Mule'
                       position='Technical Team'/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                        src='team/Anjali.png'
                        name='Anjali Tiwari'
                        position='Finance Team'/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                        src='team/aqsa.png'
                        name='Khan Aqsa'
                        position='Event Team'/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                        src='team/Kinjal.png'
                        name='Kinjal Mehta'
                        position='Event Team'/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                        src='team/mitali.png'
                        name='Mitali Mehta'
                        position='Creative Team'/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                        src='team/Mohini.png'
                        name='Mohini Dayani'
                        position='Creative Team'/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                       src='team/saikrishna.png'
                       name='Saikrishna Karra'
                       position='PR Team'/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                        src='team/Khushi.png'
                        name='Khushi Kenia'
                        position='DataZen Representive'/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                       src='team/kavya.png'
                       name='Kavya Jaiswal'
                       position='DataZen Representive'/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                        src='team/Shrushti.png'
                        name='Shrushti Gadani'
                        position='DataZen Representive'/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                        src='team/Durgesh.png'
                        name='Durgesh Singh Rathore'
                        position='DataZen Representive'/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                       src='team/sindhu.png'
                       name='Sindhu Alagappan'
                       position='DataZen Representive'/>
                    </div>
                    </div>
                    </Carousel>
                    </div> 
        </div>
    )
}

export default TeamMem;
