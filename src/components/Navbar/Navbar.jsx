import React, { Component } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className={classes.Navbar}>
        <h3>
          <Link to={{ pathname: "/profile" }}>Profile</Link>
          <div></div>
          <Link to={{ pathname: "/music" }}>Music</Link>
          <div></div>
          <Link to={{ pathname: "/messages" }}>Messages</Link>
        </h3>
      </div>
    );
  }
}

export default Navbar;
