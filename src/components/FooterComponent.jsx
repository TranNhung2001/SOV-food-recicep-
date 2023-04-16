import React from "react";
import logo from "../assets/images/LogoOpacity.png";

const FooterComponent = () => {
  return (
    <>
      <footer className="footer">
        <div>
          <img className="footer-logo" src={logo} />
        </div>
        <p className="footer-slogan">
          "On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasuare of
          the moment"
        </p>
      </footer>
    </>
  );
};

export default FooterComponent;
