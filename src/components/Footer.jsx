import React from 'react'
import {Facebook,Instagram,Youtube,Google,Call,Location,FooterImg} from '../assets';
import "../css/Footer.css"
import { Link } from "react-router-dom"


function Footer() {
  return (
    <>
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-section about">
          <div className="footer-logo">
            <div className="logo-circle"></div>
            <h2 className='brandName'>Fitness Training</h2>
          </div>
          <p>
            Transform your body with Fitness Training, Your Trusted in Fitness with over <span className="highlight">5 Years</span> of Experience.
            We offer Workout Tracking, Nutrition Tracking, Progress Tracking, Challenges and Achievements, Community Features.
            <span className="highlight"> Join Our Community</span> Start your Journey Towards a Healthier, Stronger You. Ready to make a Change?
          </p>
          <div className="social-icons">
            <img src={Facebook} alt="Facebook" />
            <img src={Instagram} alt="Instagram" />
            <img src={Youtube} alt="YouTube" />
          </div>
        </div>

        <div className="footer-section links">
          <h3 className='col-heading'>Company</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3 className='highlight col-heading'>Contact Us</h3>
          <p><img src={Location} alt="Location" /> USA, Washington DC</p>
          <p><img src={Call} alt="Phone" /> 1234-5678</p>
          <p><img src={Google} alt="Email" /> fitnesstraining123@gmail.com</p>
        </div>

        <div className="footer-section image">
          <img src={FooterImg} alt="Weightlifting" />
        </div>
      </div>

      
    </footer>
    <div className="footer-bottom">
    <p>Fitness Training © 2024 All Copyrights Reserved</p>
  </div></>
  )
}

export default Footer
