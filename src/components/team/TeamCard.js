import "./Teamwrap.css";

import React from 'react'

const TeamCard = (props) => {
    return (
        <div className=' d-flex '>
            <section className='card card-column bg-transparent rounded-0 border-0 align-items-stretch w-100 pos-rel'>
                <section className='card-body pb-1 pos-rel z-4'>
                    <figure className='section-img text-center mb-2'>
                    <img width="451" height="451" src={process.env.PUBLIC_URL + `/images/${props.src}`} className="attachment-square size-square team-img" alt="TeamImg" sizes="(max-width: 451px) 100vw, 451px"/>
                    </figure>
                    <div className='column-text mt-1'>
                        <h4 className='h5 mb-1'>{props.name}</h4>
                        <p>{props.position}</p>
                    </div>
                </section>
            </section>
       
    </div>
    )
}

export default TeamCard
