import React from "react";
import { Link } from "react-router-dom";
import "../pages/pages.css";
import web_logo from "../assets/download facesearch.jpeg";

const Tokens = () => {
  return (
    <div id="tokens">

      <header className="header-f">
        <div className="container">
          <h1><Link to="/">FaceSearchAI</Link></h1>

          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/tokens" className="active">Tokens</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="token-section">
        <h2 className="section-title">VIP Tokens</h2>
         <img src={web_logo} alt="company-logo" style={{ width: '360px', display: 'flex' }} />

        <div className="token-container">

          <div className="token-card">
            <h3>Basic Token</h3>
            <p>Access limited AI search features.</p>
            <button>Buy Token</button>
          </div>

          <div className="token-card">
            <h3>Premium Token</h3>
            <p>Unlock advanced face search features.</p>
            <button>Buy Token</button>
          </div>

          <div className="token-card">
            <h3>Enterprise Token</h3>
            <p>Unlimited AI search with analytics.</p>
            <button>Buy Token</button>
          </div>

        </div>
      </section>

      <footer className="footer-f">
        <p>© {new Date().getFullYear()} FaceSearchAI. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Tokens;
