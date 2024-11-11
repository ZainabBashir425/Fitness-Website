import React from "react";
import "../css/About.css";
import { aboutmission, aboutvision } from "../assets";

function About() {
  return (
    <div className="aboutPage">
      <div className="about-hero">
      <div className="overlay">
        <h1 className="about-heading" style={{textAlign:"center"}}>About Us</h1>
        <p className="about-text">
          At fitness training, we’re dedicated to helping everyone achieve their
          fitness goals, whether you're just starting out or an experienced
          athlete. Our app offers personalized workout plans, nutrition
          tracking, and a supportive community to keep you motivated. We believe
          in making fitness accessible, fun, and effective for everyone. Join us
          in transforming your health and wellness journey!
        </p>
        <button className="aboutBtn">Get Started</button>
        </div>
      </div>
      <div className="about-mission">
        <div className="about-content">
          <h1 className="about-heading">Our Mission</h1>
          <p className="about-text">
            To empower individuals on their fitness journey by offering a
            comprehensive, user-friendly platform that helps track workouts,
            monitor nutrition, and measure progress. Our mission is to foster a
            supportive community where users can connect, stay motivated, and
            achieve their health goals with personalized coaching, engaging
            challenges, and seamless integration of modern fitness tools and
            wearable devices.
          </p>
        </div>
        <img src={aboutmission} alt="" />
      </div>
      <div className="about-vision">
        <img src={aboutvision} alt="" />
        <div className="about-content">
          <h1 className="about-heading">Our Vision</h1>
          <p className="about-text">
            To be the foremost fitness platform that inspires and empowers
            individuals to lead healthier lives by providing a comprehensive,
            personalized experience. We envision a world where everyone,
            regardless of their fitness level, has access to the tools,
            knowledge, and community support they need to reach their health and
            wellness goals. Through innovation, continuous improvement, and
            integration with modern technologies, we aim to create a platform
            that not only tracks progress but motivates, educates, and fosters
            meaningful connections within a global fitness community. Our vision
            is to make fitness a sustainable, enjoyable, and life-changing
            journey for all.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
