import React from 'react'
import './LandingPage.css'
import bg from '../bg-1.png'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className='landingContainer' style={{ backgroundImage: `url(${bg})` }}>
      <div className="header">
      Best Choice to 
        Learn and Test 
        your Korean Skill.
      </div>
      <p className='slogan'>Solve <span className='orange-text'>Quiz</span> and Earn <span className='orange-text'>Points</span></p>
      <Link to='/login'><div className="button-primary">Get Started </div></Link>
    
    </div>
  )
}

export default LandingPage
