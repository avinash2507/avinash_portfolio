import React from 'react'
import { Link } from 'react-router-dom'
import study1 from './../assets/aaron-burden-QJDzYT_K8Xg-unsplash.jpg'
import study6 from './../assets/study6.jpg'
import './AboutData.css'

const AboutData = () => {
  return (
   <div className="about">
    
    <div className="left">
        <h1>Who Am I?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima saepe maxime nemo distinctio nobis voluptas in quo tenetur!</p>
        <Link to ="/contact">
        <button className ="btn">CONTACT</button>
        </Link>


    </div>
    <div className="right"> 
    <div className="img-container">
        <div className="img-stack top">
            <img src={study6} alt="ajihaaan"  className='img'/>
        </div>
        <div className="img-stack bottom">
            <img src={study1} alt="true" className='img' />
        </div>
    </div>

    </div>
   </div>
  )
}

export default AboutData