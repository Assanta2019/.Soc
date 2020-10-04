import React, { Component } from "react";
import classes from "./New.module.css";

class New extends Component {
  render(props) {
    return (
      <div className={classes.New}>
        <h5>{this.props.NewText}</h5>
      </div>
    );
  }
}

export default New;
