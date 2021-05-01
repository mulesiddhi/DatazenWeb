import './Team.css'

import React from 'react'

const TeamCards = (props) => {
    return (
        <div className='card_container'>
            <div className='card_wrap'>
            <div className='img-container'>
                <img src={props.src} alt='img' className='card_img'/>
            </div>
            <div className='card_content'>
            <div className='card_title'>
                <h2>{props.title}</h2>
            </div>
            <div className='card_body'>
                <h3>{props.body}</h3>
            </div>
            </div>
            </div>
        </div>
    )
}

export default TeamCards
