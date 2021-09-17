import "./navbar.css";
import { Link } from "react-router-dom";
import MediaQuery, { useMediaQuery } from "react-responsive";
import React, { useState } from "react";

const Navbar = () => {
  const [dropped, setDropped] = useState(false);
  const dropHandler = () => {
    setDropped(!dropped);
  };
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 845px)" });

  return (
    <div className="navbar-main">
      <div className="navbar-first">
        <div className="website-title">IIC BLOG</div>
        <MediaQuery maxWidth={845}>
          <div className="dropdown" onClick={() => dropHandler()}>
            <div
              style={dropped ? { transform: "rotateZ(50deg)" } : {}}
              className="dropdown-line"
            />
            <div
              style={dropped ? { transform: "translateX(-1em)" } : {}}
              className="dropdown-line"
            />
            <div
              style={dropped ? { transform: "rotateZ(-50deg)" } : {}}
              className="dropdown-line"
            />
          </div>
        </MediaQuery>
      </div>
      <div
        className="navbar-links"
        style={
          isTabletOrMobile
            ? dropped
              ? { height: "15em", paddingBottom: "1em" }
              : { height: "0" }
            : {}
        }
      >
        <Link to="/" className="navbar-link">
          <p>home</p>
          <span className="navlink-hover"></span>
        </Link>
        <Link to="/" className="navbar-link">
          <p>about</p>
          <span className="navlink-hover"></span>
        </Link>
        <Link to="/" className="navbar-link">
          <p>services</p>
          <span className="navlink-hover"></span>
        </Link>
        <Link to="/login" className="navbar-link">
          <p>login</p>
          <span className="navlink-hover"></span>
        </Link>
        <Link to="/signup" className="navbar-link">
          <p>signup</p>
          <span className="navlink-hover"></span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
