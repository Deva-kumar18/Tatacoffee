import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Tata from '../../Assets/tatacoffee.png'
import Arrow from '../../Assets/arrow.png'
import visibility from '../../Assets/Vector.png'
import Invisibility from '../../Assets/Vector1.png'
import TATA from '../../Assets/Tatacoffeee.png'

const LoginPage = () => {
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    const [inputType, setInputType] = useState("password");
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [userIdError, setUserIdError] = useState('');
    const [passwordError, setPasswordError] = useState('')
console.log(userId);
    const handleSubmit = (e) => {
        e.preventDefault();
     if(userId === '' & password === ''){
        setUserIdError('Please enter the user ID');
        setPasswordError('Please enter the password');
     }else{

     }
    }
  return (
  <div className='login-page'>
    <div className='heading'><img  className='tata-icon' src={TATA}/></div>
    <div className='login-container'>
        <form onSubmit={(e)=>handleSubmit(e)}>   
                <p className='login-header'>Login</p>
                <p>Please Signin to continue</p>
                <div className='input-wrapper'>
                <label className='input-label'>User ID</label>
                <input className='form-input' onChange={(e)=> {setUserId(e.target.value);userId === '' && setUserIdError("Please enter the user ID")}} type='text'  />
                {userId === '' && <div className='validation'>{userIdError}</div>}
                </div>
                <div className='input-wrapper'>
                <label className='input-label'>Password</label>
                <input  className='form-input icon-rel' onChange={(e)=> {setPassword(e.target.value);password === '' && setPasswordError("Please enter the password");}}  type={inputType}   />  
                {password === '' && <div className='validation'>{passwordError}</div>}
                {inputType === 'password' ?<div className='visibility-ico' onClick={()=> setInputType('input')}><img className='visib-icon' src={visibility}/></div>:<div className='visibility-ico' onClick={()=> setInputType('password')}><img  className='visib-icon' src={Invisibility}/></div>}
                </div>
                <p className='forgot-p'>forgot password</p>
                <button type='submit' className='sign-in' onClick={()=> userId != '' && password != '' && navigate('/')}>Sign in <div className='icon-arrow'><img className='arrow-ico' src={Arrow}/></div></button>
        </form>
    </div>
    </div>
  )
}

export default LoginPage