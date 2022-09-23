import React from 'react'
import Footer from '../component/Footer'
import MainImg from '../component/MainImg'
import Navbar from '../component/Navbar'
import Projectcard1 from '../component/Projectcard1'
import ProjectHome from '../component/ProjectHome'
import Work from '../component/Work'
import Workcard from '../component/Workcard'
const Project = () => {
  return (
    <div>
      <Navbar/>
      <ProjectHome heading="Projects  Section " text=" There is Good  Projects  for  show "/>
      <Work/>
      <Projectcard1/>
      <Footer/>
    </div>
  )
}

export default Project