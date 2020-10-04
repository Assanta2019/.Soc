import React, { Component } from "react";
import classes from "./Home.module.css";

import News from "./News/News";

class Home extends Component {
  render(props) {
    return (
      <div className={classes.Home}>
        <h1>Привет! Это главная страница сайта .Soc!</h1>
        <h3>
          .Soc - это абсолютно заурядная соц сеть, которую надо будет выкинуть
          на GitHub
        </h3>
        <News />
      </div>
    );
  }
}

export default Home;
