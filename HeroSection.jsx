import React from 'react'
import './HeroSection.css'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate=useNavigate();
    const redirectToParent = () => {
        navigate('/destination');
    }
  return (
    <>
    <div className='heroSection_container'>
        <div className='heroSection'>  
             <h1>Welcome to <span>Travel</span><span className='X'>X</span>!</h1>
             <p>Discover new adventures and unforgettable experiences. Explore the World with us at affordable rates✨</p>
             <button className='heroSection_button' onClick={()=>redirectToParent()}>Explore Destinations</button>
        </div>
    </div>
    </>
  )
}

export default HeroSection
