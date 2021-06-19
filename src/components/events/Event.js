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
        <div class="container ">
  <div class="row">
   <EventCard
    title='Podcast'
    description='How design is implemented on the web.'
    href='#'
    icon='fa fa-podcast'/>
     <EventCard
    title='Ask The Experts'
    description='How design is implemented on the web.'
    href='#'
    icon='fa fa-question'/>
     <EventCard
    title='21 Days Challenge'
    description='How design is implemented on the web.'
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
