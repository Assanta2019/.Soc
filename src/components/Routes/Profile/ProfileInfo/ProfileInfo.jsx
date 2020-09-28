import React, { Component } from "react";
import Description from "./Description/Description";
import classes from "./ProfileInfo.module.css";

class ProfileInfo extends Component {
  render(props) {
    return (
      <div className={classes.ProfileInfo}>
        <h1>Это птица? Это самолет? Это - {this.props.name}!</h1>
        <div className={classes.descriptionBlock}>
          <img src="https://www.iphones.ru/wp-content/uploads/2016/10/sierraheader.jpg" />

          <Description description="Описание фронтендера - как часть души." />
        </div>
      </div>
    );
  }
}

export default ProfileInfo;
