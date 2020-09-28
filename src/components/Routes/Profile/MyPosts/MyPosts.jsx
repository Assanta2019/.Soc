import React, { Component } from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";

class MyPosts extends Component {
  render(props) {
    return (
      <div className={classes.MyPosts}>
        <h2>Посты</h2>
        <Post
          comment_name="Artem Morozov"
          post="Думаю, весьма важно писать то, что думаешь."
        />
      </div>
    );
  }
}

export default MyPosts;
