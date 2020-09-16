import React, { Component } from "react";
import classes from "./Music.module.css";
import { Link } from "react-router-dom";

class Music extends Component {
  render() {
    return (
      <div className={classes.Music}>
        <h1>It Music, Man!</h1>
        <p></p>
      </div>
    );
  }
}

export default Music;
