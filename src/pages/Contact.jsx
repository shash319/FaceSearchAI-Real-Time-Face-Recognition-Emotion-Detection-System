import React from "react";
import { Link } from "react-router-dom";
import "../pages/pages.css";
import web_logo from "../assets/download facesearch.jpeg";
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contact">

      <header className="header-f">
        <div className="container">
          <h1><Link to="/">FaceSearchAI</Link></h1>

          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/tokens">Tokens</Link></li>
              <li><Link to="/contact" className="active">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="contact-section">

        <h2 className="section-title">Connect With Us</h2>
         <img src={web_logo} alt="company-logo" style={{ width: '360px', display: 'flex' }} />

        <div className="social-container">

          <a href="https://www.instagram.com/shasawat_ak47/" className="social-card insta"><FaInstagram/>Instagram</a>
          <a href="https://www.linkedin.com/in/shasawat-pal-9506781a9/" className="social-card linkedin"><FaLinkedin/>LinkedIn</a>
          <a href="https://www.youtube.com/@ClickNCodeShas" className="social-card youtube"><FaYoutube/>YouTube</a>
          <a href="https://www.facebook.com/shasawat.pal.1" className="social-card facebook"><FaFacebook/>Facebook</a>
          <a href="https://x.com/p_shasawat_bro" className="social-card x"><FaXTwitter/>X (Twitter)</a>

        </div>

      </section>

      <footer className="footer-f">
            <p>© {new Date().getFullYear()} FaceSearchAI. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Contact;
