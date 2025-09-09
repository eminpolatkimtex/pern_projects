import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div>
      <div id='home' className="hero">
        <img src={profile_img} alt="" />
        <h1><span>I am Alex Bennett,</span> full-stack developer based in USA.</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt dolores cupiditate, maiores possimus rerum officiis, dolorum aliquam libero quisquam praesentium architecto voluptates a, facere debitis iusto. Vitae atque dolorem eum!</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
      </div>
    </div>
  )
}

export default Hero
