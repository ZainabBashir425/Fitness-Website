import React from 'react'
import {blog1,blog2,blog3,blogA1,blogA2,blogA3,blogA4,blogA5,blogA6,arrowUpRightIcon} from '../assets'
import '../css/Blogs.css'
function Blogs() {
  return (
    <>
      <div className="blog-hero">
        <p className='blog-hero-text'>Our Blogs</p>
        <h2 className='blog-hero-heading'>Resources&Insights</h2>
        <p className='blog-hero-text'>Explore expert articles and guides on fitness and nutrition
        to help you achieve your health goals!</p>
      </div>
      <div className="blog-cards">
        <div className="blog-card">
        <div className="blog-card-content">
          <img src={blog1} alt="" />
          <div className="blog-card-title">
            <h5 className="blog-card-heading">Nutrition Basics for Beginners</h5>
            <img src={arrowUpRightIcon} alt="" />
          </div>
          <p className="blog-card-text">
          An introductory guide to understanding macronutrients and meal planning, perfect for users just starting their fitness journey.
          </p>
          </div>
          <div className="blog-card-author">
            <img src={blogA1} alt="" />
            <div className="blog-card-authorInfo">
              <p className="blog-card-authorName">Olivia Rhye</p>
              <p className="blog-card-date">20 Oct 2024</p>
            </div>
          </div>
        </div>
        <div className="blog-card">
        <div className="blog-card-content">
          <img src={blog2} alt="" />
          <div className="blog-card-title">
            <h5 className="blog-card-heading">Healthy Eating on a Budget</h5>
            <img src={arrowUpRightIcon} alt="" />
          </div>
          <p className="blog-card-text">
          Strategies for meal planning and nutrition tracking without breaking the bank, appealing to cost-conscious users.
          </p>
          </div>
          <div className="blog-card-author">
            <img src={blogA2} alt="" />
            <div className="blog-card-authorInfo">
              <p className="blog-card-authorName">Phoenix Baker</p>
              <p className="blog-card-date">19 Jan 2024</p>
            </div>
          </div>
        </div>
        <div className="blog-card">
        <div className="blog-card-content">
          <img src={blog3} alt="" />
          <div className="blog-card-title">
            <h5 className="blog-card-heading">The Benefits of Tracking Your Fitness Progress</h5>
            <img src={arrowUpRightIcon} alt="" />
          </div>
          <p className="blog-card-text">
          An exploration of why logging workouts and nutrition can lead to better results and how to interpret progress graphs and statistics.
          </p>
          </div>
          <div className="blog-card-author">
            <img src={blogA3} alt="" />
            <div className="blog-card-authorInfo">
              <p className="blog-card-authorName">Lana Steiner</p>
              <p className="blog-card-date">18 Jan 2022</p>
            </div>
          </div>
        </div>
        <div className="blog-card">
        <div className="blog-card-content">
          <img src={blog1} alt="" />
          <div className="blog-card-title">
            <h5 className="blog-card-heading">Healthy Eating on a Budget</h5>
            <img src={arrowUpRightIcon} alt="" />
          </div>
          <p className="blog-card-text">
          Strategies for meal planning and nutrition tracking without breaking the bank, appealing to cost-conscious users.
          </p>
          </div>
          <div className="blog-card-author">
            <img src={blogA4} alt="" />
            <div className="blog-card-authorInfo">
              <p className="blog-card-authorName">Sarah Olivia</p>
              <p className="blog-card-date">20 Aug 2024</p>
            </div>
          </div>
        </div>
        <div className="blog-card">
        <div className="blog-card-content">
          <img src={blog2} alt="" />
          <div className="blog-card-title">
            <h5 className="blog-card-heading">Navigating Fitness Myths: What You Need to Know</h5>
            <img src={arrowUpRightIcon} alt="" />
          </div>
          <p className="blog-card-text">
          Debunking common fitness myths and misconceptions, providing users with reliable information to support their journey.
          </p>
          </div>
          <div className="blog-card-author">
            <img src={blogA5} alt="" />
            <div className="blog-card-authorInfo">
              <p className="blog-card-authorName">Dr John</p>
              <p className="blog-card-date">19 Jun 2021</p>
            </div>
          </div>
        </div>
        <div className="blog-card">
          <div className="blog-card-content">
          <img src={blog3} alt="" />
          <div className="blog-card-title">
            <h5 className="blog-card-heading">Top 10 Home Workouts You Can Do Anywhere</h5>
            <img src={arrowUpRightIcon} alt="" />
          </div>
          <p className="blog-card-text">
          A curated list of effective workouts that require minimal equipment, catering to users looking for flexibility in their fitness routines.
          </p>
          </div>
          <div className="blog-card-author">
            <img src={blogA6} alt="" />
            <div className="blog-card-authorInfo">
              <p className="blog-card-authorName">Joseph Care</p>
              <p className="blog-card-date">18 Jan 2023</p>
            </div>
          </div>
        </div>
      </div>
      <div className="blogs-trending">
        <h1 className='trending-heading'>Trending</h1>
        <p className='trending-content'>Stay updated with the latest fitness trends, tips, and insights to elevate your health journey!</p>
        <div className="blog-cards">
        <div className="blog-card">
        <div className="blog-card-content">
          <img src={blog1} alt="" />
          <div className="blog-card-title">
            <h5 className="blog-card-heading">The Rise of Hybrid Workouts</h5>
            <img src={arrowUpRightIcon} alt="" />
          </div>
          <p className="blog-card-text">
          Explore how hybrid workouts are gaining popularity and how to incorporate them into your routine for maximum benefits.
          </p>
          </div>
          <div className="blog-card-author">
            <img src={blogA1} alt="" />
            <div className="blog-card-authorInfo">
              <p className="blog-card-authorName">Natali Craig</p>
              <p className="blog-card-date">20 Oct 2024</p>
            </div>
          </div>
        </div>
        <div className="blog-card">
        <div className="blog-card-content">
          <img src={blog2} alt="" />
          <div className="blog-card-title">
            <h5 className="blog-card-heading">Mindfulness in Fitness</h5>
            <img src={arrowUpRightIcon} alt="" />
          </div>
          <p className="blog-card-text">
          Learn about the growing trend of integrating mindfulness practices into fitness routines to enhance both mental and physical health.
          </p>
          </div>
          <div className="blog-card-author">
            <img src={blogA5} alt="" />
            <div className="blog-card-authorInfo">
              <p className="blog-card-authorName">Drew Cano</p>
              <p className="blog-card-date">13 Oct 2024</p>
            </div>
          </div>
        </div>
        <div className="blog-card">
        <div className="blog-card-content">
          <img src={blog3} alt="" />
          <div className="blog-card-title">
            <h5 className="blog-card-heading">Nutrition Hacks</h5>
            <img src={arrowUpRightIcon} alt="" />
          </div>
          <p className="blog-card-text">
          Discover practical meal prep tips inspired by fitness influencers to simplify your nutrition tracking and stay on track.
          </p>
          </div>
          <div className="blog-card-author">
            <img src={blogA3} alt="" />
            <div className="blog-card-authorInfo">
              <p className="blog-card-authorName">Orlando Diggs</p>
              <p className="blog-card-date">10 Jan 2024</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Blogs
