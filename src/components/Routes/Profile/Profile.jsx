import React, { Component } from "react";
import classes from "./Profile.module.css";
import { Link } from "react-router-dom";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

function Profile(props) {
  return (
    <div className={classes.Profile}>
      <ProfileInfo name="Artem Morozov" />
      <MyPosts />
    </div>
  );
}

export default Profile;
