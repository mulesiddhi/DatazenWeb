import React from 'react'

const EventCard = (props) => {
    return (
        <div className="col-md-6 col-lg-4 column">
      <div className="teamcard gr-1">
        <div className="txt">
          <h1>{props.title}</h1>
          <h3>{props.desc}</h3>
          <h3>{props.date}<br/>{props.time}</h3>
        </div>
        <a href={props.href} target='_blank' rel="noreferrer">Register</a>
        <div className="ico-card">
      <i className={props.icon}></i>
      </div>
      </div>
    </div>
    )
}

export default EventCard
