import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Our Story is a crazy one. we started off in shadowport of the asair
            kingdom, we went on to slay the lich king and even steal from a
            dragons treasury. We are the craziest adventurers in the world.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>123-456-7890</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Store</span>
          <span className="copyright">© 2021 Store</span>
        </div>
        <div className="right">
          <h1>Placeholder text</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
