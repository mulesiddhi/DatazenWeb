import React from 'react'
import { useHistory } from 'react-router-dom'

const FormSignup = (props) => {

    const[user,setUser]=React.useState('');
    const[userErr,setUserErr]=React.useState({})
    const[ps,setPs]=React.useState('');
    const[psErr,setPsErr]=React.useState({})
    
    let history = useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const isValid=formValidation();
        if(isValid){
            history.push('/');
        }
    }
    const formValidation=()=>{
       const userErr={};
       const psErr={};
        let isValid=true;
        if(user.trim().length<5){
            userErr.userShort='UserName is too short';
            isValid=false;
        }
        if(ps.trim().length<5){
            psErr.pser='Password too short';
            isValid=false;
        }
        setUserErr(userErr);
        setPsErr(psErr);
        return isValid;
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
                        required onChange={(e)=>{setUser(e.target.value)}}/>
                </div>
                {Object.keys(userErr).map((key)=>{
                    return <div style={{color:'red'}}>{userErr[key]}</div>
                }
                )}
                <br/>
                <div className='form-input'>
                    <label htmlFor='email' className='form-label'>Email</label>
                        <input  id='email' type='email' name='email' className='form-input' placeholder='Enter Your Email' required
                       />
                </div>
                <div className='form-input password'>
                    <label htmlFor='password' className='form-label'>Password</label>
                        <input  id='password' type='password' name='password' className='form-input' placeholder='Enter Password' required
                       onChange={(e)=>{setPs(e.target.value)}}/>
                </div>
                {Object.keys(psErr).map((key)=>{
                    return <div style={{color:'red'}}>{psErr[key]}</div>
                }
                )}
                <br/>
                <button className='form-input-btn'
                type='submit'>Sign Up</button>
            </form>
            </div>
        </div>
    )
}

export default FormSignup
