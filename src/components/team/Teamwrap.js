import "./Teamwrap.css";

import Intro from "../contact/Intro";
import React from "react";
import TeamAlumini from "./TeamAlumini";
import TeamCore from "./TeamCore";
import TeamHeads from "./TeamHeads";
import TeamMem from "./TeamMember";

// import "bootstrap/dist/css/bootstrap.min.css";

// import { Button, Card, Carousel } from "react-bootstrap";



const Team = () => {
  return (
    <div className='container mt-3'>
      <Intro intro='The Team'/>
      <h4 className='desc'>CORE TEAM</h4>
      <div className='container mb-2'>
       <TeamCore
       />
     </div>
     <h4 className='desc'>ALUMINI</h4>
     <div className='container'>
       <TeamAlumini/>
     </div>
     <h4 className='desc'>HEADS</h4>
     <div className='container'>
       <TeamHeads/>
     </div>
     <h4 className='desc'>TEAM-MEMBERS</h4>
     <div className='container'>
       <TeamMem/>
     </div>
     </div>
  );
};

export default Team;
