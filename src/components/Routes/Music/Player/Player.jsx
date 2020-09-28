import React, { Component } from "react";
import classes from "./Player.module.css";
import ReactAudioPlayer from "react-audio-player";
//import { Link } from "react-router-dom";

class Player extends Component {
  render(props) {
    return (
      <div className={classes.Player}>
        <ReactAudioPlayer
          src="./MusFiles/Wolfgang Amadeus Mozart - Allegro Molto (Symphony No. 40 In G Minor, K. 550).mp3"
          controls
          autoPlay
        />
      </div>
    );
  }
}

export default Player;
