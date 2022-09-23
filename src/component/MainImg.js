import React from 'react'
import "./MainImg.css"
import introbg from "./../assets/study.jpg"
import { Link } from 'react-router-dom'
import {Download } from "react-feather";

const MainImg = () => {
  return (
    <div className='main-image'>
        <div className="mask">
        <img className = "into-img" src={introbg}/>
        </div>
        <div className="content">
            <p className='para'>
                I AM JOB SEEKER ......
            </p>
            <h1>FRONTEND DEVELOPER </h1>
            {/* <p className='cover'>I believe that I have the characteristics that Startup Companies needs and deserves.
The value I will bring to your organization includes a comprehensive skill set developed through 
my academic and Practice experiences. I am well-versed in JavaScript and ReactJs while 
offering proficiency in Frontend Web Development. I have contributed to positive 
improvements and team achievements through my communication and interpersonal abilities.</p> */}
          <div className="btn-position">

         <a  className="btn" href="https://drive.google.com/file/d/1kKl7fdjbNwNzIJ4Hv21wDWwU0aVCa06J/view?usp=sharing" target="_blank">  RESUME</a> 
           
          
            <Link to = "/project" className='btn btn-light'>PROJECTS</Link>
          </div>
        </div>
    </div>
  )
}

export default MainImg;