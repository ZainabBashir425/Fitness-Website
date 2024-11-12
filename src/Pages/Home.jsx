import React from "react";
import "../css/Home.css";
import {
  HeroIcon,
  card1,
  card2,
  card3,
  card4,
  purpose,
  starIcon,
  starIcon2,
  testImg1,
  testImg2,
  image5,
  image6,
  image7,
  image8,
} from "../assets";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="heroSection">
        <h3 className="welcomeMsg">Welcome To</h3>
        <h1 className="brand">Fitness Training</h1>
        <h3 className="qoute">
          Transform Your Fitness Journey with Expert Guidance!.
        </h3>
        <h4 className="description">
          At Fitness Training, we offer personalized training programs designed
          to help you achieve your fitness goals. From strength training to
          wellness coaching, we’re here to support you every step of the way.
        </h4>
        <div className="session-btn">
          <p>Schedule Your Free Session Today</p>
          <div className="iconImg">
            <img src={HeroIcon} alt="icon" />
          </div>
        </div>
      </div>
      {/* Key Features */}
      <div className="key-features">
        <h1 className="keyHeading">Key Features</h1>
        <div className="cards">
        <Swiper
        spaceBetween={45}
        slidesPerView={'1.2'}
        centeredSlides={false}
        loop={false}
        pagination={{ clickable: true }}
        breakpoints={{
          576: {
            slidesPerView: 2.1,
            spaceBetween: 55,
          },
          640: {
            slidesPerView: 2.1,
            spaceBetween: 45,
          },
          768: {
            slidesPerView: 2.1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.3,
            spaceBetween: 45,
          },
          1440: {
            slidesPerView: 3.3,
            spaceBetween: 30,
          }
        }}
      >
        <SwiperSlide>
          <div className="card">
            <img src={card1} alt="card1" />
            <h4 className="card-heading">Track Progress</h4>
            <button className="card-btn">Read More</button>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card">
            <img src={card2} alt="card2" />
            <h4 className="card-heading">Community Engagement</h4>
            <button className="card-btn">Read More</button>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card">
            <img src={card3} alt="card3" />
            <h4 className="card-heading">Health Metrics Monitoring</h4>
            <button className="card-btn">Read More</button>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card">
            <img src={card4} alt="card4" />
            <h4 className="card-heading">Nutritional Tracking</h4>
            <button className="card-btn">Read More</button>
          </div>
          </SwiperSlide>
          </Swiper>
          </div>
        </div>
        
      {/* Purpose */}
      <div className="purpose">
        <h1 className="purpose-heading">Purpose</h1>
        <div className="purpose-content">
          <img src={purpose} alt="" />
          <div className="purpose-text">
            <p>
              It is designed to empower users in achieving their health and
              fitness goals through comprehensive tracking and personalized
              guidance.
            </p>
            <h5>
              By integrating fitness tracking, nutrition management, and
              progress monitoring, the it allows users to seamlessly maintain a
              healthy lifestyle. The inclusion of community features and
              personalized coaching provides users with the support and
              motivation they need to achieve their fitness goals
            </h5>
            <p>The Fitness Website is designed for a wide range of users</p>
            <ul>
              <li>Fitness Enthusiasts</li>
              <li>Beginners</li>
            </ul>
            <ul>              
            <li>Busy Professionals</li>
              <li>Individuals</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="testimonials">
        <h1 className="test-mainheading">Customer Testimonials</h1>
        <div className="testimonial-cards">
          <div className="test-card">
            <img src={testImg1} alt="" />
            <h3 className="test-heading">Sara D., Lost 20 lbs in 3 months</h3>
            <p className="test-content">
              This website has kept me consistent and motivated! The workout
              plans are easy to follow, and the progress tracking is a huge
              help. The community challenges make it even more fun – I’ve met
              great people who keep me accountable.
            </p>
            <div className="test-stars">
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
            </div>
          </div>
          <div className="test-card">
            <img src={testImg2} alt="" />
            <h3 className="test-heading">Ayra M., Marathon Runner</h3>
            <p className="test-content">
              The personalized workout plans kept me on track for my race and
              made training so much easier. The app tailored everything to my
              schedule and fitness level, which was a huge help. I also loved
              the progress tracking and reminders that kept me motivated along
              the way. Highly recommend!
            </p>
            <div className="test-stars">
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="test-div"></div>
      {/* Website overview*/}
      <div className="website-overview">
        <h1 className="overview-mainheading">See How Our Website Works</h1>
        <p className="overview-maincontent">
          Explore our easy-to-use tools designed to help you stay on track.
        </p>
        <div className="overview-cards">
          <div className="overview-card">
          <div className="img"><div className="imgWrap"></div><img src={image5} alt="" /></div>
            <div className="overview-card-content">
            <h3 className="overview-heading">Workout Log</h3>
            <p className="overview-content">
              Easily track your sets, reps, and exercises, customize routines,
              and monitor your progress to stay on top of your fitness goals.
            </p>
            </div>
          </div>
          <div className="overview-card">
          <div className="img"><div className="imgWrap"></div><img src={image6} alt="" /></div>
            <div className="overview-card-content">
            <h3 className="overview-heading">Nutrition Tracker</h3>
            <p className="overview-content">
              Log your meals, track calories, and monitor your macronutrients to
              stay on top of your nutrition and reach your fitness goals.
            </p>
            </div>
          </div>
          <div className="overview-card">
            <div className="img"><div className="imgWrap"></div><img src={image7} alt="" /></div>
            <div className="overview-card-content">
              <h3 className="overview-heading">Community Challenges</h3>
              <p className="overview-content">
                Join fun fitness challenges, compete with friends, and stay
                motivated with a supportive community
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className="contact-home">
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
    </>
  );
}

export default Home;
