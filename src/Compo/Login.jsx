import React from 'react'
import '../Compo/Compo.css'
import web_logo from "../assets/download facesearch.jpeg";
import { Link } from 'react-router-dom';


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
            <button type="submit"><Link to="/login">Log in</Link></button> 
            <Link to="/login">Forgotten password?</Link>
            </form>
            <hr/>
            <div className='create-btn'>
                <Link to="/register">Create New Account</Link>
            </div>    
        </div>    
    </div>
  )
}

export default Login