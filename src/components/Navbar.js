import './Navbar.css';

import React,{useState} from 'react'

import Button from './Button';
import { Link } from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

function Navbar() {

    const[click,setClick]=useState(false);
    const [button,setButton]=useState(true);

    const handleClick=()=>{
        setClick(!click);
    }

    const closeMobileMenu=()=>{
        setClick(false);
    }

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }

    window.addEventListener('resize',showButton);

    return (
        <div>
          <nav className='navbar'>
              <div className='navbar-container'> 
              <Link to='/' className='navbar-logo'>
                TECHNO
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times':'fas fa-bars'}/>

              </div>
              <ul className={click? 'nav-menu active':'nav-menu'}>
                <li className='nav-item'>
                    <LinkS to='about' smooth={true} className='nav-links' onClick={closeMobileMenu}>
                        About Us
                    </LinkS>
                </li>  
                <li className='nav-item'>
                    <LinkS to='team' smooth={true} className='nav-links' onClick={closeMobileMenu}>
                       Team
                    </LinkS>
                </li> 
                <li className='nav-item'>
                    <LinkS to='contact' smooth={true} className='nav-links' onClick={closeMobileMenu}>
                    Contact Us
                    </LinkS>
                </li> 
                <li className='nav-item'>
                    <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                       Sign Up
                    </Link>
                </li> 
              </ul>
              {button && <Button buttonStyle='btn--outline' path='/signup' >SIGNUP</Button>}
              </div>
          </nav>  
        </div>
    )
}
export default Navbar
