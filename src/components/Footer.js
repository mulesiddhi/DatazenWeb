import './Footer.css'

import { Link } from 'react-router-dom'
import React from 'react'

const Footer = () => {
    return (
        <div className='footer' id='contact' >
            <div className='fbox1'>
            <h1>DataZen</h1>
            <h3>Official Council for Data Science</h3>
            <ul classname='ilist'>
                <li>
                <Link to={{ pathname: "https://www.instagram.com/" }} target="_blank" className='flinks' >
                <i class="fab fa-instagram fa-2x"></i> 
                </Link>
                </li>
                <li>
                <Link to={{ pathname: "https://www.linkedin.com/company/datazen-somaiya" }} target="_blank" className='flinks' >
                <i class="fab fa-linkedin-in fa-2x"></i>
                </Link>
                </li>
                <li>
                <Link to={{ pathname: "https://discord.gg/tEfkPvDmBN" }} target="_blank" className='flinks' >
                <i class="fab fa-discord fa-2x"></i>
                </Link>
                </li>
            </ul>
            </div>
            <div className='fbox2'>
            <h2>Contact Us</h2>
            <div className='address'>
            <h3><i class="fas fa-map-marker-alt "></i>  KJ Somaiya College of Engineering </h3>
            <h3>Vidyanagar, Vidyavihar Mumbai, Maharashtra-400089</h3>
            </div>
            <div>
                <h3><i class="fas fa-envelope"></i>  datazen@somaiya.edu</h3>
            </div>
            </div>
        </div>
    )
}

export default Footer
