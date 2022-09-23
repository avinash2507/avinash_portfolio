import React from 'react'
import AboutData from '../component/AboutData'
import Footer from '../component/Footer'
import MainImg from '../component/MainImg'
import Navbar from '../component/Navbar'
import ProjectHome from '../component/ProjectHome'

const About = () => {
  return (
    <div>
      <Navbar/>
      <ProjectHome heading="ABOUT  Section " text=" There is Good  Abouts  me  for  show "/>
      <AboutData/>
      <Footer/>
    </div>
  )
}

export default About