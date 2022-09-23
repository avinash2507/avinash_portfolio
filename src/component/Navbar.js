import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { XSquare, Menu } from "react-feather";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const ClickHandler = () => {
    setClick(!click);
   
  };
  const [bg, setBg] = useState(false);
  const ChangeBg = () => {
    if (window.scrollY >= 100) {
      setBg(true);
    } else {
      setBg(false);
    }
  };
  window.addEventListener("scroll", ChangeBg);
  return (
    <div className = {bg?" header header-bg" : "header"}>
      <Link to="/">
        <h1>MY PORTFOLIO</h1>
      </Link>
      <ul className={click ? "nav-menu" : "nav-menu active"}>
        <li>
          <Link to="/"  onClick={ClickHandler}>HOME</Link>
        </li>
        <li>
          <Link to="/project"  onClick={ClickHandler}>PROJECT</Link>
        </li>
        <li>
          <Link to="/contact"  onClick={ClickHandler}>CONTACT</Link>
        </li>
        <li>
          <Link to="/about"  onClick={ClickHandler}>ABOUT</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={ClickHandler}>
        {click ? (
          <span>
            <Menu size="30px" color="white" />
            {/* <a href="https://drive.google.com/file/d/1kKl7fdjbNwNzIJ4Hv21wDWwU0aVCa06J/view?usp=sharing" target ="_blank"></a> */}
          </span>
        ) : (
          <XSquare size="30px" color="white" />
        )}
        {/* <Menu size = "30px" color="white"/>
         */}
      </div>
    </div>
  );
};

export default Navbar;
