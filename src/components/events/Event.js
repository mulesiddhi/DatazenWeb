import './Event.css';

import React, { useState } from 'react'

import EventCard from './EventCard';

const Event = () => {

    const [box,setBox]=useState('upcoming');
    
    const setShowUpcoming=()=>{
           setBox('upcoming');
    }
    const setShowPast=()=>{
        setBox('past');
 }
    return (
        <div  id='events' className='d-flex flex-column'>
          <div className='headerContainer d-flex flex-wrap'>
              <div className={`uEvents ${box==='upcoming'?'eBorder':'normalB'}`} onClick={setShowUpcoming}> <h1 >Upcoming Events</h1>
              </div>
              <div className={`pEvents ${box==='past'?'eBorder':'normalB'}`} onClick={setShowPast}> <h1>Past Events</h1>
              </div>
        </div> 
        <div className={`upcomingE ${box==='past'?'d-none':''}`}>
        <div class="container mt-0 ">
  <div class="row">
   <EventCard
    title='Podcast'
    date='Date:'
    time='Time: 4:30pm-6:00pm'
    href='#'
    icon='fa fa-podcast'/>
     <EventCard
    title='Ask The Experts'
    date='Date: July 4th, 2021' 
    time='Time: 4:30pm-6:00pm'
    href='https://forms.gle/zLSEpZW8biP2RP2p8'
    icon='fa fa-question'/>
     <EventCard
    title='21 Days Challenge'
    date='Date:'
    time='Time: 4:30pm-6:00pm'
    href='#'
    icon='fa fa-clock-o'/>
    
    
  </div>
</div>
        </div>
        <div className={`pastE ${box==='upcoming'?'d-none':''}`}><h1>no past events</h1></div>
        </div>
    )
}

export default Event
