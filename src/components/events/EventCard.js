import React from 'react'

const EventCard = (props) => {
    return (
        <div className="col-md-6 col-lg-4 column">
      <div className="teamcard gr-1">
        <div className="txt">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
        <a href={props.href}>Register</a>
        <div className="ico-card">
      <i className={props.icon}></i>
      </div>
      </div>
    </div>
    )
}

export default EventCard
