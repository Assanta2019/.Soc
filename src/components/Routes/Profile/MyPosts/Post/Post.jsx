import React, { Component } from "react";
import classes from "./Post.module.css";

class Post extends Component {
  render(props) {
    return (
      <div className={classes.Post}>
        <div>
          <img src="https://klike.net/uploads/posts/2018-11/1543132358_26.jpg" />
          <h3>{this.props.comment_name}</h3>
          <p>говорит:</p>
          <h4>{this.props.post}</h4>
        </div>
      </div>
    );
  }
}

export default Post;
