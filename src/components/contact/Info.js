import './info.css'

import { Link } from 'react-router-dom'
import React from 'react'

const contactDetails = [
  {
    value: 'KJ Somaiya College of Engineering, Vidyanagar, Vidyavihar Mumbai, Maharashtra-400089',
    icon: 'fas fa-map-marker-alt',
  },
  { value: '0123456789', icon: 'fas fa-phone-alt' },
  { value: ' datazen@somaiya.edu', icon: 'fas fa-envelope ' },
]

const renderContactDetails = () =>
  contactDetails.map(detail => (
    <p key={detail.value} className="info-detail">
      <i className={detail.icon} /> {detail.value}
    </p>
  ))

  const IconDetails = [
    {
      link: 'https://discord.gg/tEfkPvDmBN',
      icon: 'fab fa-discord fa-2x',
      key:'1'
    },
    { link: 'https://www.linkedin.com/company/datazen-somaiya', icon: 'fab fa-linkedin-in fa-2x',key:'2' },
    { link: ' https://www.instagram.com/datazensomaiya/', icon: 'fab fa-instagram fa-2x',key:'3' },
  ]

const renderIcons = () =>
    IconDetails.map(detail => (
        <Link to={{ pathname:`${detail.link}` }} target="_blank" className='info-icon'><i className={detail.icon} key={detail.key}  /></Link>
  ))

const Info = () => (
  <section className="info">
    <h2 className="info-h2">Contact information</h2>

    <div className="info-details-container">{renderContactDetails()}</div>

    <div className="info-icons-container">{renderIcons()}</div>
  </section>
)

export default Info