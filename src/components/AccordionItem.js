import './Accordion.css'

import React,{useState} from 'react'

const AccordionItem = ({ info, title }) => {

    const [showInfo, setShowInfo] = useState(false)

    return (
        <article className='question'>
        <header className=''>
          <h4 className='h4txt'>{title}</h4>
          <button
            className='abtn'
            onClick={() => {
              setShowInfo(!showInfo)
            }}
          >
            {showInfo ?  <i class="fa fa-minus plus" aria-hidden="true"></i>:<i class="fa fa-plus plus" aria-hidden="true"></i>}
          </button>
        </header>
        <div>
        {showInfo && <p>{info}</p>}
        </div>
      </article>
    )
}

export default AccordionItem
