import './Navbar.css';

import { Link, useLocation } from 'react-router-dom'
import React,{useState} from 'react'

import {Link as LinkS} from 'react-scroll'

function Navbar() {

    const[click,setClick]=useState(false);
    // const [button,setButton]=useState(true);

    const handleClick=()=>{
        setClick(!click);
    }

    const closeMobileMenu=()=>{
        setClick(false); 
    }

    // const showButton=()=>{
    //     if(window.innerWidth<=960){
    //         setButton(false);
    //     }
    //     else{
    //         setButton(true);
    //     }
    // }

    // window.addEventListener('resize',showButton);
    
    //finding out current url
    const location = useLocation();
    const url=(location.pathname);

    return (
          <div className='navBar '>
              <Link to='/' className='navBar-logo '>
              <img className='navlogo ' alt='logo' src={process.env.PUBLIC_URL + "/images/Brain Logo Transparent.png"}/>
              <h2 className={`ml-3 mb-3 navBar-logo nav-title ${url==='/'? 'd-none':'d-block'}`}>DataZen</h2>
              </Link>
              <div className='menu-Icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times':'fas fa-bars'}/>

              </div>
              <ul className={click? 'nav-Menu active':'nav-Menu'}>
                <li className='nav-Item'>
                    {url==='/'? <LinkS to='about' smooth={true}  className='nav-Links' onClick={closeMobileMenu}>
                        About Us
                    </LinkS>:<Link to='/' smooth={true} className='nav-Links' onClick={closeMobileMenu}>
                        About Us
                    </Link>}
                </li>  
                <li className='nav-Item'>
                    {url==='/'? <LinkS to='events' smooth={true} className='nav-Links' onClick={closeMobileMenu}>
                        Events
                    </LinkS>:<Link to='/' smooth={true} className='nav-Links' onClick={closeMobileMenu}>
                        Events
                    </Link>}
                </li> 
                {/* <li className='nav-Item'>
                     {url==='/'? <LinkS to='contact' smooth={true} className='nav-Links' onClick={closeMobileMenu}>
                        Contact
                    </LinkS>:<Link to='/' smooth={true} className='nav-Links' onClick={closeMobileMenu}>
                       Contact
                    </Link>}
                </li>  */}
                <li className='nav-Item'>
                    <Link to='/contact' smooth={true} className='nav-Links' onClick={closeMobileMenu}>
                    Contact Us
                    </Link>
                </li> 
                <li className='nav-Item'>
                    <Link to='/teams' smooth={true} className='nav-Links' onClick={closeMobileMenu}>
                    Team
                    </Link>
                </li> 
                {/* <li className='nav-Item'>
                    <Link to='' smooth={true} className='nav-Links' onClick={closeMobileMenu}>
                    <img  src={process.env.PUBLIC_URL + "/images/svu.jpg"} alt='svu' className=''/>
                    </Link>
                </li>  */}
               
              </ul>
              </div>
        
    )
}
export default Navbar
