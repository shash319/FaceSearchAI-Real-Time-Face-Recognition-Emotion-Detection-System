import React from 'react'
import {Link} from "react-router-dom";
import "../pages/pages.css";

const Features = () => {
  return (
    <div id="features">
      <header className="header-f">
          <div className="container">
              <h1><Link to="/">FaceSearchAI</Link></h1>
              <nav>
                  <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About Us</Link></li>
                      <li><Link to="/features" className="active">Features</Link></li>
                      <li><Link to="/tokens">Tokens</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                  </ul>
              </nav>
          </div>
      </header>
       <section className="features-section">
        <h2 className="section-title">Our Features</h2>
        <div className="features-container">

            {/* <!-- Feature Card 1 --> */}
            <div className="feature-card">
                <div className="card-icon">🔍</div>
                <h3>Face Recognition</h3>
                <p>Identify faces accurately using advanced AI-powered recognition technology.</p>
            </div>

            {/* <!-- Feature Card 2 --> */}
            <div className="feature-card">
                <div className="card-icon">⚙️</div>
                <h3>Automated Search</h3>
                <p>Automate your face searches to streamline workflow and improve efficiency.</p>
            </div>

            {/* <!-- Feature Card 3 --> */}
            <div className="feature-card">
                <div className="card-icon">📊</div>
                <h3>Data Insights</h3>
                <p>Gain actionable insights and analytics on detected faces and patterns.</p>
            </div>

            {/* <!-- Feature Card 4 --> */}
            <div className="feature-card">
                <div className="card-icon">🔐</div>
                <h3>Secure Storage</h3>
                <p>Safeguard your data with top-notch security and privacy protocols.</p>
            </div>

        </div>
    </section>
    <footer className="footer-f">
        <div className="container">
      <p>© {new Date().getFullYear()} FaceSearchAI. All rights reserved.</p>
        </div>
    </footer>
    </div>
  )
}

export default Features