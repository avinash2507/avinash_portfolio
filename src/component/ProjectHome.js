import React from "react";
import "./ProjectHome.css";

 import  { Component } from 'react'
 
 export class ProjectHome extends Component {
   render() {
     return (
        <div className="hero-img">
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
          </div>
     )
   }
 }
 
export default ProjectHome;
