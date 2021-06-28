import "./Teamwrap.css";

import Intro from "../contact/Intro";
import React from "react";
import TeamCard from "./TeamCard";
import TeamCarousel from "./TeamCarousel";

// import "bootstrap/dist/css/bootstrap.min.css";

// import { Button, Card, Carousel } from "react-bootstrap";



const Team = () => {
  return (
    <div className='container mt-3'>
      <Intro intro='The Team'/>
      <h4>CORE TEAM</h4>
      <div className='container mb-2'>
       <TeamCarousel/>
     </div>
     <h4>HEADS</h4>
     <div className='container'>
       <TeamCarousel/>
     </div>
     </div>
  );
};

export default Team;
