import './Teamwrap.css'

import React from 'react'

const TeamCards = () => {
    return (
        <div>
           <div className="card-wrapper">
                <div className="card">
                    <div className="card-image"><img src="https://image.ibb.co/dUTfmJ/profile_img.jpg" /></div>
                    <ul className="social-icons">
                    <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href=""><i className="fab fa-instagram"></i></a></li>
                    <li> <a href=""><i className="fab fa-twitter"></i></a></li>
                    <li><a href=""><i className="fab fa-dribbble"></i></a></li>
                     </ul>
                     <div className="details"><h2>John Smith<br/><span className="job-title">UI Developer</span></h2></div>
               </div>
            </div> 
            
        </div>
    )
}

export default TeamCards
