import React from 'react'
import '../css/Contact.css'
import '../css/Home.css'
import {
  HeroIcon,
  image8,Google,Call,Location,contacthero
} from "../assets";
import {MapComponent} from '../components'

function Contact() {
  return (
    <>
      <div className="contact-hero">
        <div className="contact-hero-content"><p className='contact-heroheading'>Contact Us</p>
        <p className='contact-text'>Any question or remarks? Just write us a message!</p></div>
        <div className="contact-hero-img"><img src={contacthero} alt="" /></div>
      </div>
      <div className="contact-info">
        <h1 className='contact-info-heading'>Contact Information</h1>
        <p className='contact-info-text'>Say something to start a live chat!</p>
        <div className="contact-info-cols">
          <div className="contact-info-col">
            <img src={Location} alt="" />
            <p>USA, Washington DC</p>
          </div>
          <div className="contact-info-col">
            <img src={Call} alt="" />
            <p>1234-5678</p>
          </div>
          <div className="contact-info-col">
            <img src={Google} alt="" />
            <p>fitnesstraining123@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="contact-home" style={{marginBottom:'0'}}>
        <div className="contact-content">
          <h3 className="contact-heading">Contact Us</h3>
          <h1 className="contact-mainheading">Send Us A Message
          & Join Our Team!</h1>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea className="textarea" id="message" />
          <div className="submit-btn">
          <p>Send Now</p>
          <div className="iconImg">
            <img src={HeroIcon} alt="icon" />
          </div>
        </div>
        </div>
        <img src={image8} alt="" />
      </div>
      <div className="map-image">
        <MapComponent /> 
      </div>


    </>
  )
}

export default Contact
