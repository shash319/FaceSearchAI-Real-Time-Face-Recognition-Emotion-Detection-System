import React from 'react'
import '../Compo/Compo.css'
import web_logo from "../assets/download facesearch.jpeg";


const Login = () => {
  return (
    <div className='box'>
        <div className="title-box">
            <img src={web_logo} alt="company-logo" style={{ width: '360px', display: 'flex' }} />
            <p>WELCOME TO FaceSearchAI</p>
        </div>
        <div className="form-box">
            <form action="#">
            <input type="text" placeholder="Email address or phone number"/>
            <input type="password" placeholder="Password"/>
            <button type="submit"> Log in </button> 
            <a href="#"> Forgotten password?</a>
            </form>
            <hr/>
            <div className='create-btn'>
                <a href="#">Create New Account</a>
            </div>    
        </div>    
    </div>
  )
}

export default Login