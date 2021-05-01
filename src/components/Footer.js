import './Footer.css'

import { Link } from 'react-router-dom'
import React from 'react'

const Footer = () => {
    return (
        <div className='footer' id='contact' >
            <div className='fbox1'>
            <h1>DataZen</h1>
            <h3>Strive for greatness.</h3>
            <ul classname='ilist'>
                <li>
                <Link to={{ pathname: "https://www.instagram.com/" }} target="_blank" className='flinks' >
                <i class="fab fa-instagram fa-2x"></i> 
                </Link>
                </li>
                <li>
                <Link to={{ pathname: "https://www.linkedin.com/" }} target="_blank" className='flinks' >
                <i class="fab fa-linkedin-in fa-2x"></i>
                </Link>
                </li>
                <li>
                <Link to={{ pathname: "https://discord.com/" }} target="_blank" className='flinks' >
                <i class="fab fa-discord fa-2x"></i>
                </Link>
                </li>
            </ul>
            </div>
            <div className='fbox2'>
            <h2>Contact Us</h2>
            <div className='address'>
            <i class="fas fa-map-marker-alt fa-2x"></i>
            </div>
            </div>
        </div>
    )
}

export default Footer
