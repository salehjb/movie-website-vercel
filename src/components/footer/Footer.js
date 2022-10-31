import React from "react";
import { Link } from "react-router-dom";
// Images
import Background from "../../assets/footer-bg.jpg";
import Logo from "../../assets/tmovie.png";
// Styles 
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${Background})` }}>
      <div className="footer-content container">
        <div className="footer-content-logo">
          <div className="logo">
            <img src={Logo} alt="logo" />
            <Link to="/">tMovies</Link>
          </div>
        </div>
        <div className="footer-content-menus">
          <div className="footer-content-menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
          <div className="footer-content-menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Pravacy policy</Link>
          </div>
          <div className="footer-content-menu">
            <Link to="/">You must watch</Link>
            <Link to="/">Recent release</Link>
            <Link to="/">Top IMDB</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
