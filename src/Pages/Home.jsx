import React from "react";
import "../css/Home.css";
import { HeroIcon } from "../assets";

function Home() {
  return (
    <>
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
          <div className="iconImg"><img src={HeroIcon} alt="icon" /></div>
        </div>
      </div>
    </>
  );
}

export default Home;
