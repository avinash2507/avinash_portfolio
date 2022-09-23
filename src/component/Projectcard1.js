import "./Projectcard1.css";
import React from "react";
import { Link } from "react-router-dom";

const Projectcard1 = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        < div className="card">
          <h3>Basics</h3>
          <span className="bar"></span>
          <p className="btc">
            $100
          </p>
          <p>3 pages</p>
          <p>3 days</p>
          <p>Featured</p>
          <p>Responsive Design--</p>
           <Link to ="/contact" className ="btn">PURCHASE NOW</Link> 
        </div>
        <div className="card">
          <h3>Basics</h3>
          <span className="bar"></span>
          <p className="btc">
            $100
          </p>
          <p>3 pages</p>
          <p>3 days</p>
          <p>Featured</p>
          <p>Responsive Design--</p>
          <Link to ="/contact" className ="btn">PURCHASE NOW</Link>
        </div>
        <div className="card">
          <h3>Basics</h3>
          <span className="bar"></span>
          <p className="btc">
            $100
          </p>
          <p>3 pages</p>
          <p>3 days</p>
          <p>Featured</p>
          <p>Responsive Design--</p>
          <Link to ="/contact" className ="btn ">PURCHASE NOW</Link>
        </div>
      </div>
    </div>
  );
};

export default Projectcard1;
