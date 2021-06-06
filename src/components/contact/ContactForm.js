import './contactform.css'

import React from 'react'

const formInputs = [
  { id: 'name', type: 'text', label: 'Your name', placeholder: 'John Doe' },
  {
    id: 'tel',
    type: 'tel',
    label: 'Phone number',
    placeholder: '+01 234 567 8900',
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email address',
    placeholder: 'you@example.com',
  },
  {
    id: 'message',
    type: 'textarea',
    label: 'Your message',
    placeholder: 'How can we help you? Or you us?',
  },
]

const Form = () => (
  <form className="Form">
    <h2 className="Form-h2">Send us a message</h2>

    {formInputs.map(input => (
      <label key={input.label} id={input.id} className="Form-label">
        {input.label}

        {input.type === 'textarea' ? (
          <textarea className="Form-textarea" placeholder={input.placeholder} />
        ) : (
          <input
            className="Form-input"
            type={input.type}
            placeholder={input.placeholder}
          />
        )}
      </label>
    ))}

    {/* <Icon className="form-submit" icon={sendCircle} /> */}
    
    {/* <i className="fa fa-send Form-submit " ></i> */}
    <button className='form-input-btn Form-submit'
                type='submit'>SEND</button>

    {/* <button className="form-submit" type="submit">
      Send message
    </button> */}
  </form>
  
)

export default Form