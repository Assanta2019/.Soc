import React, { Component } from "react";
import classes from "./Description.module.css";

class Description extends Component {
  render(props) {
    return (
      <div className={classes.Description}>
        <div className="descriptionBlock">{this.props.description}</div>
      </div>
    );
  }
}

export default Description;
