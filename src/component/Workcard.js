import React from 'react'
import "./Workcard.css";
import { NavLink } from 'react-router-dom';


const Workcard = (props) => {
  return ( 
    <div className="project-card">
                <img src={props.imgsrc} alt="image" />
                <h2 className="project-title">{props.title }</h2>
                <div className="project-detail">{props.text}</div>
                <div className="project-btn">
                    <NavLink to = {props.view}className="btn">VIEW</NavLink>
                    <NavLink to = {props.source}className="btn">SOURCE</NavLink>
                </div>

            </div>
    
  )
}

export default Workcard