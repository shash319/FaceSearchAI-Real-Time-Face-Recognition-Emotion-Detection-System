import React from 'react'
import '../Compo/Compo.css'
import web_logo from "../assets/download facesearch.jpeg";
import { Link } from 'react-router-dom';


const Register = () => {
  return (
   <div className="box">

      <div className="title-box">      
        <img src={web_logo} alt="company-logo" style={{ width: '360px', display: 'flex' }} />

        
        <p>WELCOME TO FaceSearchAI</p>
        
      </div>
      <div className="form-box2">
        <form action="#">
          <input type="text" placeholder="First Name"/>
          <input type="text" placeholder="Last Name"/>
          <input type="text" placeholder="Email Address"/>
          <input type="password" placeholder="Password"/>
          <input type="number" placeholder="Contact"/>
         <button type="submit"> <Link to="/register">Sign Up</Link> </button> 
         <div id="login_forget">
            <Link to="/register">Forgotten password?</Link>
         </div>
       

        </form>
        <hr/>
        <div className="create-btn">
          <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  )
}

export default Register