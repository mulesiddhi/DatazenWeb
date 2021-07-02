import "./TeamCarousel.css";

import {useEffect, useState} from 'react';

import Carousel from "./carousel/Carousel";
import React from 'react'
import TeamCard from './TeamCard'
import throttle from 'lodash.throttle';

const TeamHeads = () => {

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
                        src='heads/aditi.png'
                        name='Aditi Pawar'
                        position='Event Head'/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                        src='heads/aditya.png'
                        name='Aditya Shenoy'
                        position='Social Media Manager'/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                        src='heads/hetul.png'
                        name='Hetul Mehta'
                        position='Technical Head'/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                        src='heads/kshitij.png'
                        name='Kshitij Shah'
                        position='Creative Head'/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                        src='heads/siddharth.png'
                        name='Siddharth Thakkar'
                        position='Finance Head'/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                        src='heads/sneha.png'
                        name='Sneha Kothi'
                        position='Coordinator Head'/>
                    </div>
                    </div>
                    <div>
                    <div style={{padding: 8}}>
                        <TeamCard
                        src='heads/VivekPandey.png'
                        name='Vivek Pandey'
                        position='Public Relations Head'/>
                    </div>
                    </div>
                    </Carousel>
                    </div> 
        </div>
    )
}

export default TeamHeads;
