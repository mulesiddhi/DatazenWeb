import './contactsection.css'

import Form from './ContactForm'
import Info from './Info'
import React from 'react'

const ContactSection = () => {
    return (
        <>
           <div className="contact-section">
               <Form/>
               <Info/>
               </div>  
        </>
    )
}

export default ContactSection
