import React, { Component } from "react";
import classes from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <div className={classes.Header}>
        <a className={classes.Header_First} href="/">
          <h1 className={classes.Header_bold_text}>.Soc</h1>
        </a>
        <a href="#"></a>
      </div>
    );
  }
}

export default Header;
