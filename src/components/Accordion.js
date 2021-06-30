import './Accordion.css';

import React,{useState} from 'react'

import AccordionItem from './AccordionItem'
import Data from '../data/FaqData'

const Accordion = () => {

    const [questions, setQuestions] = useState(Data);

    return (
        <div className='faqc'>
        <div className='acontainer'>
        {/* <div className='d-flex  p-5 align-items-center text-white flex-wrap justify-content-between'> */}
            <div className='awrap'>
            <div className='abox1'>
            <h1 className=' mr-5 pr-3'>Frequently asked questions</h1>
            </div>
            <div className='flex-grow qbox'>
                {questions.map((question) => {
            return <AccordionItem key={question.id} {...question} />
          })}
            </div>
        {/* </div> */}
        </div>
        </div>
        <div className='red-left-aft'></div>
        <div className='red-left'></div>
        </div>
    )
}

export default Accordion
