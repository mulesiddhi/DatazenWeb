import './Team.css'

import React from 'react'
import TeamCards from './TeamCards'

const Team = () => {
    return (
        <div className='team_container'>
            <h1>Meet the Team</h1>
            <div className='team_cards'>
            <div className='team_wrapper'>
            
                <TeamCards
                src='images/img1.jpeg'
                title='Founder'
                body='XYZ '
                />
                <TeamCards
                src='images/img1.jpeg'
                title='Co-Founder'
                body='ABC '
                />
                <TeamCards
                src='images/img1.jpeg'
                title='Tech Head'
                body=' ABC'
                />
                <TeamCards
                src='images/img1.jpeg'
                title='PR Head'
                body='XYZ '
                />
            </div>
            </div>
        </div>
    )
}

export default Team;
