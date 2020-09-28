import React from "react";
import classes from "./App.module.css";
import { Switch, Route } from "react-router-dom";

import Music from "./components/Routes/Music/Music";
import Profile from "./components/Routes/Profile/Profile";
import Messages from "./components/Routes/Messages/Messages";
import Home from "./components/Routes/Home/Home";

import Navbar from "./components/Navbar/Navbar";
import ProfileInfo from "./components/Routes/Profile/ProfileInfo/ProfileInfo";
import Header from "./components/Header/Header";
import Clock from "./components/Clock/Clock";

class App extends React.Component {
  render(props) {
    return (
      <div className={classes.App}>
        <Header />
        <a href="/" className={classes.App_link}>
          <Navbar />
        </a>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/messages" component={Messages} />
        </Switch>

        {/* <Clock /> */}
      </div>
    );
  }
}

export default App;
