import './Footer.css'

import { Link } from 'react-router-dom'
import React from 'react'

const Footer = () => {
    return (
        <div className='bfooter'>
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
            <div className='fbox-3'> <div className='mb-2'><Link to='' smooth={true} className=''>
                    <img  src={process.env.PUBLIC_URL + "/images/svu.jpg"} alt='svu' className=''/>
                    </Link></div>
            </div>
            <div className='fbox2'>
            <h2 className='ftxt2'>Contact Us</h2>
            <div className='faddress'>
            <h3 className='ftxt'><i class="fas fa-map-marker-alt "></i> Somaiya Vidyavihar<br/>
Group of Somaiya Institutions,  </h3>
            <h3 className='ftxt'>Vidyanagar, Vidya Vihar East, Vidyavihar,<br/> Mumbai, Maharashtra 400077</h3>
            </div>
            <div>
                <h3 className='ftxt'><i class="fas fa-envelope"></i>  datazen@somaiya.edu</h3>
            </div>
            </div>
        </div>
        <div className='rightftpatch'></div>
        <div className='brightredbg'></div>
        <div className='darkredbg'></div>
        </div>
    )
}

export default Footer
