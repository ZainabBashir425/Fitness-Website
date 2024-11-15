import React from "react";
import {
  FAQ,
  FAQHeroLeft,
  FAQHeroRight,
  DownArrow,
  SearchIcon,
} from "../assets";
import "../css/FAQs.css";
import { Link } from "react-router-dom";

function FAQs() {
  return (
    <>
      <div className="FAQ-hero">
        <img src={FAQHeroLeft} alt="" className="leftImg" />
        <h1 className="Faq-hero-heading">How can we help?</h1>
        <div className="search">
          <input type="text" placeholder="Ask a Question" />
          <Link>
            <img src={SearchIcon} alt="" />
          </Link>
        </div>
        <img src={FAQHeroRight} alt="" className="rightImg" />
      </div>
      <div className="FAQ-Categories">
        <h1 className="FAQcategory-heading">FAQ Categories</h1>
        <div className="categories">
          <div className="category">
            <div className="category-content">
              <h3 className="category-heading">Common Questions</h3>
              <p className="category-text">
                Frequently asked questions about features, user expectations,
                and engagement strategies in fitness website.
              </p>
            </div>
            <p className="more">Learn more</p>
          </div>
          <div className="category">
            <div className="category-content">
              <h3 className="category-heading">Technical Questions</h3>
              <p className="category-text">
                Critical technical queries on integration, security,
                scalability, and performance optimization for the app.
              </p>
            </div>
            <p className="more">Learn more</p>
          </div>
          <div className="category">
            <div className="category-content">
              <h3 className="category-heading">Related Topics</h3>
              <p className="category-text">
                Key themes related to website design, wearables, data security,
                monetization, and community building
              </p>
            </div>
            <p className="more">Learn more</p>
          </div>
          <div className="category">
            <div className="category-content">
              <h3 className="category-heading">Topic Navigation</h3>
              <p className="category-text">
                A guide for exploring the structure, features, and technical
                requirements of the fitness website.
              </p>
            </div>
            <p className="more">Learn more</p>
          </div>
        </div>
      </div>
      <div className="general-faqs">
        <div className="faqs">
          <h1 className="general-faq-heading">Gernal FAQs</h1>
          <div className="faqs-list">
          <div className="faq">
            <p>What platforms will the Fitness App be available on</p>
            <img src={DownArrow} alt="" />
          </div>
          <div className="faq">
            <p>How does the app website with tracking progress?</p>
            <img src={DownArrow} alt="" />
          </div>
          <div className="faq">
            <p>Is there personalized coaching available in the website?</p>
            <img src={DownArrow} alt="" />
          </div>
          <div className="faq">
            <p>What premium features does the website offer?</p>
            <img src={DownArrow} alt="" />
          </div>
          </div>
        </div>
        <img src={FAQ} alt="" />
      </div>
    </>
  );
}

export default FAQs;
