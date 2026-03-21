import React from 'react'
import "../pages/pages.css";
import {Link} from "react-router-dom";

const About = () => {
  return (
      <div id='about'>
        <header className="header">
        <div className="container">
            <h1><Link to="/">FaceSearchAI</Link></h1>
            <nav>
                <ul >
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about" className="active">About Us</Link></li>
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/tokens">Tokens</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    </header>

    <section className="about">
        <div className="container">
            <h2>About Us</h2>
            <p className='about-text'>FaceSearchAI is a leading innovator in AI-driven face recognition technology. We specialize in providing identity verification solutions that prioritize accuracy, speed, and security. Our technology powers various sectors, including security, banking, and healthcare, ensuring seamless integration and high performance across applications.</p>
            
            <h3>Our Mission</h3>
            <p>Our mission is to revolutionize the way the world authenticates identity by leveraging cutting-edge AI. We aim to make security smarter, faster, and more reliable, allowing businesses to enhance trust and efficiency while protecting user privacy.</p>
            
            <h3>Our Vision</h3>
            <p>We envision a future where advanced face recognition technology seamlessly integrates into everyday life, providing peace of mind and enhanced security for individuals and organizations globally.</p>
            
            <h3>Why Choose Us?</h3>
            <ul id='bottom-ul'>
                <li>State-of-the-art face recognition technology</li>
                <li>Unmatched accuracy and performance</li>
                <li>Commitment to privacy and ethical AI practices</li>
                <li>Experienced team of AI and cybersecurity experts</li>
            </ul>
        </div>
    </section>

    <footer className="footer-about">
        <div className="container">
            {/*<p>© {new Date().getFullYear()} FaceSearchAI. All rights reserved.</p>*/}
            <p>© {new Date().getFullYear()} FaceSearchAI. All rights reserved.</p>
        </div>
    </footer>
    </div>
  )
}

export default About