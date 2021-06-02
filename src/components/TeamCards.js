import './Team.css'

import React from 'react'

const TeamCards = (props) => {
    return (
        <div className='card_Container'>
            <div className='card_Wrap'>
            <div className='img-Container'>
                <img src={props.src} alt='img' className='card_Img'/>
            </div>
            <div className='card_Content'>
            <div className='card_Title'>
                <h2>{props.title}</h2>
            </div>
            <div className='card_Body'>
                <h3>{props.body}</h3>
            </div>
            </div>
            </div>
        </div>
    )
}

export default TeamCards
