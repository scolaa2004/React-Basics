import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/User icon.jpeg'
import pwd_icon from '../Assets/pwd icon.jpeg'
import email_icon from '../Assets/email icon.jpeg'


export const LoginSignup = () => {
    const [action,setAction] = useState("Login");
  return (
    <div className='Container'>
        <div className='Header'>
            <div className='Text'>{action}</div>
            <div className='Underline'></div>   
        </div>
        <div className="Inputs">
            {action==="Login"?<div></div>:<div className="Input">
                <img src={user_icon} alt=""/>
                <input type="text" placeholder='Name'/>
            </div>}
            <div className="Input">
                <img src={email_icon} alt=""/>
                <input type="email" placeholder='Email' />
            </div>
            <div className="Input">
                <img src={pwd_icon} alt=""/>
                <input type="password" placeholder='Password' />
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}
