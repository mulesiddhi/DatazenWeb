import './Footer.css'

import { Link } from 'react-router-dom'
import React from 'react'

const Footer = () => {
    return (
        <div className='footer' >
            <h1>Techno</h1>
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
    )
}

export default Footer
