import "../index.css";
import web_logo from "../assets/download facesearch.jpeg";
import business_ai from "../assets/BusinessAI.jpg";
import ai from "../assets/ai.png";
import ai_generated from "../assets/ai-generated-8331364_640.jpg";
import vfl from "../assets/VFLt5vHV7aCoLrLGjP9Qwm-1200-80.jpg";
import ai_article from "../assets/AI-article.png";
import ai_artificial from "../assets/ai-artificial-intelligence-concept-businessman-600nw-2464071963.jpg";
import ai_powered from "../assets/ai-powered-tools-concept-adoption-predictation-forecasting-decision-making-automation-process-optimize-operations-increase-281653180 (1).jpg";
import explore from "../assets/explore-btn.png";
import { Link } from 'react-router-dom';
import { IoIosArrowDropupCircle  } from "react-icons/io";


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

    <div className="banner">
        <img src={business_ai} alt="AI header-image"/>
        <div className="front">
            <h1 style={{ fontSize: '80px' }}>FaceSearchAI</h1>
            <h2 style={{ fontSize: '40px' }}>for Business success</h2>
            <p>Our times are, fortunately or unfortunately, about to get very <br/>interesting. In this blog, we unveil how you can win <br/> in the upcoming golden dawn of A.I</p>
            <br/><br/>

          <div className="btn-group">
            <Link to="/faceai" className="premium-btn ai-btn glow-cta">
              Get Started
            </Link>

            <Link to="/vip" className="premium-btn secondary">
              Become VIP Member
            </Link>
          </div>
            <h1 className="explore-nav" onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth"})}>
               Explore Features
               <div className="explore-arrow">
                  <img className="blur-overlay" src={explore} alt="explore-feature" />
               </div>
            </h1>
        </div>
    </div>

    <div id="features" style={{ backgroundColor: '#020205', padding: '30px 0', marginTop: "-3px" }}>
        <h2 style={{ backgroundColor: '#020205', textAlign: 'center', color: '#fff', height: '25px', width: '30%', padding: '40px 9px', fontSize: '50px', textShadow: '8px 8px 16px rgba(240, 232, 232, 0.91)' }}><u>FEATURES</u></h2>
        <ul>
            <li className="content1">
              <h1><b>⦿&nbsp;Overview of AI</b></h1>
              <p style={{ margin: "50px 50px 10px -560px"}}>Artificial Intelligence ( AI ) is a branch of computer science focused on creating machines and systems that can perform tasks requiring human intelligence. These tasks include learning from data, recognizing patterns, understanding language, solving problems, and making decisions. AI technologies such as machine learning, natural language processing, and computer vision are widely used today to automate processes, improve accuracy, and help organizations make smarter, faster decisions.</p>
              <img src={vfl} alt=""/>
            </li>
            <li className="content2">
              <h1><b>⦿ Explore & Thrive with AI</b></h1>
              <p style={{}}>AI provides individuals and organizations with powerful tools to explore new possibilities and thrive in a technology-driven world. By leveraging AI, businesses and professionals can analyze complex data, automate repetitive tasks, enhance creativity, and discover innovative solutions. As industries rapidly adopt intelligent systems, understanding and utilizing AI helps people stay competitive, adapt to change, and unlock new opportunities for growth and development.</p>
              <img src={ai} alt=""/>
            </li>
            <li className="content1">
              <h1><b>⦿ AI-driven Business world</b></h1>
              <p style={{margin: '30px 30px 0 -650px' }}>In today’s digital economy, AI is transforming the way businesses operate. Companies use AI to analyze customer behavior, automate operations, optimize supply chains, and improve decision-making. AI-powered tools help organizations deliver personalized experiences, predict trends, and increase efficiency. As a result, businesses that adopt AI gain a competitive advantage by making smarter strategic decisions and responding quickly to market changes.</p>
              <img src={ai_generated} alt=""/>
            </li>
            <li className="content2">
              <h1 ><b>⦿ Given headstart to Business</b></h1>
              <p style={{ width: "1700px", margin: '0 50px 0 -1000px' }}>Artificial Intelligence gives businesses a strong head start by enabling automation, predictive analytics, and intelligent decision-making. With AI, companies can reduce operational costs, improve productivity, and identify market opportunities earlier than competitors. From customer service chatbots to advanced data analytics, AI helps businesses streamline processes and develop innovative strategies that drive long-term growth and success.</p>
              <img src={ai_artificial} alt=""/>
            </li>
            <li className="content1">
              <h1 ><b>⦿ Summary</b></h1>
              <p style={{ margin: '30px 100px 0 -660px' }}>Artificial Intelligence has become a transformative technology that influences almost every industry. It enhances productivity, supports innovation, and enables smarter decision-making by analyzing large amounts of data quickly and accurately. As AI continues to evolve, it will play an increasingly important role in shaping the future of businesses, technology, and society.</p>
              <img src={ai_article} alt=""/>
            </li>
            <li className="content2 last-card">
              <h1><b>⦿ Future scope</b></h1>
              <p style={{margin: '30px 50px 0 -450px' }}>The future scope of AI is vast and continuously expanding. AI is expected to revolutionize sectors such as healthcare, education, finance, transportation, and manufacturing. With advancements in machine learning, robotics, and intelligent automation, AI will help solve complex global challenges, improve quality of life, and create new career opportunities. As technology progresses, AI will become even more integrated into everyday life and business operations.</p>
              <img src={ai_powered} alt=""/>
            </li>
        </ul>
        {/* <img src="https://biz.bot/game.jpeg" className="img-fluid" alt="AI Business Video Game"/> */}
    </div>

      <div className="contact-us">
        <div>
          <p>Get more questions?</p>
          <h3>Talk to our team directly</h3>
          <p> A program advisor will get in touch <br/> with you shortly. </p>
        </div>
       <button><b><Link  to="/Contact">CONTACT US</Link></b></button>
      </div>
  
      <div>
       <a href="#"><div className="bottom-part">{<IoIosArrowDropupCircle  />}Back to top</div></a> 
        <footer>
          <div className="footer-container">
            <div className="footer-section">
              <h3>About Us</h3>
              <ul>
                <li>
                  <a href="#"
                    >As numerously we trust everyone should have the
                    liberty to build progress through technical knowledge and
                    enhancing the trending skills. The coures are designed by
                    experienced working professionals . Our platform helps
                    business and indiviuals
                  </a>
                </li>
                {/* <!-- Add more links as needed --> */}
              </ul>
            </div>
            <div className="footer-section">
              <h3>Browse Courses</h3>
              <ul>
                <li><a href="#">Artificial Intelligence Courses</a></li>
                <li><a href="#">Cloud Computing Courses</a></li>
                <li><a href="#">Cyber Security Courses</a></li>
                <li><a href="#">Software Engineering Courses</a></li>
              
                {/* <!-- Add more links as needed --> */}
              </ul>
            </div>
            <div className="footer-section">
              <h3>PG Programs</h3>
              <ul>
                <li><a href="#">AWS Certification for Cloud Architecture</a></li>
                <li><a href="#">IBM Storwize V7000 Implementation</a></li>
                <li><a href="#">Oracle BI 12c: Build Repositories</a></li>
                <li><a href="#">DATA 1GCP Engineer Certification program</a></li>
                                {/* <!-- Add more links as needed --> */}
              </ul>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">About US</a></li>
                <li><a href="#">Careers at FaceSearchAI</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Career Support</a></li>
                {/* <!-- Add more links as needed --> */}
              </ul>
            </div>
            <div className="footer-section">
              <h3>Legal</h3>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                {/* <!-- Add more links as needed --> */}
              </ul>
            </div>
          </div>
        </footer>
       </div> 
  
        <div className="bottom-part3">
          Customer care | Privacy policy | Conditions of use | About FaceSearchAI |
          India |<p style={{marginLeft: "-10px"}}>© 2020 - {new Date().getFullYear()} FaceSearchAI - All rights reserved.</p>
        </div>
    </>
  )
}

export default Navbar