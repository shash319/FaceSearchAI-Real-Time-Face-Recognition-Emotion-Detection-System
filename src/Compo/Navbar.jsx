import "../index.css";
import web_logo from "../assets/download facesearch.jpeg";
import { Link } from 'react-router-dom';


const Navbar = () => {


  //   const handleDblClk = (e) => {
  //     e.preventDefault();
  // document.getElementById("features")
  //   ?.scrollIntoView({ behavior: "smooth" });
  //   }

  return (
    <>
        <div className="App">
            <img src={web_logo} alt="FaceSearch Image"/>
            <p className="nav"><b><Link to="/">Home</Link></b></p> 
            <p className="nav"><b><Link  to="/about">About</Link></b></p>
            <p className="nav"><b><Link  to="/features">Features</Link></b></p>
            <p className="nav"><b><Link to="/tokens">Tokens</Link></b></p>
            <p className="nav"><b><Link  to="/Contact">Contact</Link></b></p>
            <button><b><Link to="/login">Sign in</Link></b></button>
            <button><b><Link to="/register">Register</Link></b></button>
         </div>
    </>
  )
}

export default Navbar