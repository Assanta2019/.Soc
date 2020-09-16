import React from "react";
import classes from "./App.module.css";
import { Switch, Route } from "react-router-dom";

import Music from "./components/Routes/Music/Music";
import Profile from "./components/Routes/Profile/Profile";
import Messages from "./components/Routes/Messages/Messages";

import Navbar from "./components/Navbar/Navbar";

class App extends React.Component {
  render() {
    return (
      <div className={classes.App}>
        <a className={classes.App_First} href="/">
          <h1 className={classes.App_bold_text}>.Soc</h1>
        </a>
        <a href="/" className={classes.App_link}>
          <Navbar />
        </a>

        <Switch>
          <Route exact path="/music" component={Music} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/messages" component={Messages} />
        </Switch>
      </div>
    );
  }
}

export default App;
