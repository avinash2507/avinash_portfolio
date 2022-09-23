import { replace } from "feather-icons";
import React from "react";
import "./Footer.css";
import {
  Facebook,
  Instagram,
  Mail,
  PhoneCall,
  Home,
  Twitter,
  GitHub,
  Linkedin,
  User,
} from "react-feather";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <Home style={{ marginRight: "2rem" }} color="white" size="30px" />
            Flat No.202 Neha Primier  Roopena Agrahara 4TH Main <br />
            Benguluru,Bangalore
            Pin-560068
          </div>
          <div className="phone">
            <h4>
              <PhoneCall size="30px" style={{ marginRight: "1rem" }} />
              7860935160
            </h4>
          </div>
          <div className="mail">
            <h4>
              <Mail size="30px" style={{ marginRight: "1rem" }} />
              avinash2632@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Us</h4>
          <User />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Fugit culpa facilis exercitationem sed quo repellat?
          <div className="icons">
          <Facebook size="30px" style={{ marginRight: "1rem" }} />
          <a href="https://www.linkedin.com/in/avinash-vishwakarma-6b0a7918b/">
            <Linkedin size="30px" style={{ marginRight: "1rem" }} />
            <Twitter size="30px" style={{ marginRight: "1rem" }} />{" "}
          </a>
          <a href="https://github.com/avinash2507">
            {" "}
            <GitHub size="30px" style={{ marginRight: "1rem" }} />
          </a></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
