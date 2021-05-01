import { Link } from 'react-router-dom'
import React from 'react'

const FormSignup = () => {

    
    const handleSubmit=(e)=>{
        e.preventDefault();
        
    }

    return (
        <div className='split-screen'>
            <div className='right'>
                
            <form classNmae='form' onSubmit={handleSubmit}>
                <h2>
                    Get Started With Us Today! 
                </h2>
                <div className='form-input'>
                    <label htmlFor='username' className='form-label'> UserName</label>
                        <input id='username' type='text'  name='username' className='form-input' placeholder='Enter Your UserName'
                        />
                </div>
                <div className='form-input'>
                    <label htmlFor='email' className='form-label'>Email</label>
                        <input  id='email' type='email' name='email' className='form-input' placeholder='Enter Your Email'
                       />
                </div>
                <div className='form-input password'>
                    <label htmlFor='password' className='form-label'>Password</label>
                        <input  id='password' type='password' name='password' className='form-input' placeholder='Enter Password'
                       />
                </div>
                <Link to='/'>
                <button className='form-input-btn'
                type='submit'>Sign Up</button>
                </Link>
            </form>
            </div>
        </div>
    )
}

export default FormSignup
