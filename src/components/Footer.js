import './Footer.css'

import { Link } from 'react-router-dom'
import React from 'react'

const Footer = () => {
    return (
        <div className='footer-con' id='contact' >
            <div className='fbox1'>
            <h1 className='ftitle'>DataZen</h1>
            <h3 className='ftxt'>Official Council for Data Science</h3>
            <ul className='ilist'>
                <li className='ili'>
                <Link to={{ pathname: "https://www.instagram.com/datazensomaiya/" }} target="_blank" className='flinks' >
                <i class="fab fa-instagram fa-2x"></i> 
                </Link>
                </li>
                <li className='ili'>
                <Link to={{ pathname: "https://www.linkedin.com/company/datazen-somaiya" }} target="_blank" className='flinks' >
                <i class="fab fa-linkedin-in fa-2x"></i>
                </Link>
                </li>
                <li className='ili'>
                <Link to={{ pathname: "https://discord.gg/tEfkPvDmBN" }} target="_blank" className='flinks' >
                <i class="fab fa-discord fa-2x"></i>
                </Link>
                </li>
            </ul>
            </div>
            <div className='fbox2'>
            <h2 className='ftxt2'>Contact Us</h2>
            <div className='faddress'>
            <h3 className='ftxt'><i class="fas fa-map-marker-alt "></i>  KJ Somaiya College of Engineering </h3>
            <h3 className='ftxt'>Vidyanagar, Vidyavihar Mumbai, Maharashtra-400089</h3>
            </div>
            <div>
                <h3 className='ftxt'><i class="fas fa-envelope"></i>  datazen@somaiya.edu</h3>
            </div>
            </div>
        </div>
    )
}

export default Footer
