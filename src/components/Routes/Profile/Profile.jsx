import React, { Component } from "react";
import classes from "./Profile.module.css";
import { Link } from "react-router-dom";

class Profile extends Component {
  render(props) {
    return (
      <div className={classes.Profile}>
        <h1>It Profile, Man!</h1>
        <h3>Это птица? Это самолет? Это - </h3>
      </div>
    );
  }
}

export default Profile;
