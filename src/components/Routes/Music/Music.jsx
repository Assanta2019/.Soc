import React, { Component } from "react";
import classes from "./Music.module.css";
import Player from "./Player/Player";
import ReactAudioPlayer from "react-audio-player";

class Music extends Component {
  render() {
    return (
      <div className={classes.Music}>
        <h1>Тут находится музыка, которую ты слушаешь.</h1>
        <Player />
      </div>
    );
  }
}

export default Music;
