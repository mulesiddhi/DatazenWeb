import './contactform.css'
import axios from "axios";

import React from 'react'
import { useRef } from 'react'




const Form = () => {

  const nameRef = useRef(null);
  const telRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);


  const formInputs = [
    { id: 'name', type: 'text', label: 'Your name', placeholder: 'John Doe', ref: nameRef },
    {
      id: 'tel',
      type: 'tel',
      label: 'Phone number',
      placeholder: '+01 234 567 8900',
      ref: telRef
    },
    {
      id: 'email',
      type: 'email',
      label: 'Email address',
      placeholder: 'you@example.com',
      ref: emailRef
    },
    {
      id: 'message',
      type: 'textarea',
      label: 'Your message',
      placeholder: 'How can we help you? Or you us?',
      ref: messageRef
    },
  ]

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(telRef.current.value);
    console.log(emailRef.current.value);
    console.log(messageRef.current.value);
    axios.post("http://datazen.somaiya.edu:5000/api/post/", {

      name: nameRef.current.value,
      phone_number: telRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    })



  }

  return (
    <form className="Form" onSubmit={onFormSubmit}>
      <h2 className="Form-h2">Send us a message</h2>

      {formInputs.map(input => (
        <label key={input.label} id={input.id} className="Form-label">
          {input.label}

          {input.type === 'textarea' ? (
            <textarea className="Form-textarea" placeholder={input.placeholder} ref={input.ref} />
          ) : (
            <input
              className="Form-input"
              type={input.type}
              placeholder={input.placeholder}
              ref={input.ref}
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
}

export default Form
