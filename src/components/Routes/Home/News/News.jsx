import React, { Component } from "react";
import classes from "./News.module.css";
import New from "./New/New";

class News extends Component {
  render(props) {
    return (
      <div className={classes.News}>
        <h4>Смотри! Это - блок новости.</h4>
        <New NewText="Хело" />
        <New NewText="Теперь новости имееют свой компонент!" />
      </div>
    );
  }
}

export default News;
