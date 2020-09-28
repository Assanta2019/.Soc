import React, { Component } from "react";
import classes from "./Messages.module.css";
import { Link } from "react-router-dom";

function DialogItem(props) {
  return (
    <div className={(classes.MessagesItem, classes.active)}>
      <Link to={"/messages/" + props.id}>{props.name}:</Link>
    </div>
  );
}

function Message(props) {
  return <div className={classes.Dialog}>{props.message}</div>;
}

class Messages extends Component {
  render() {
    return (
      <div className={classes.Message}>
        <div className={classes.Messages}>
          {/* Кода теперь гораздо меньше, чем было  */}
          {/* TODO: вынести DialogItem в отдельный Component */}
          <DialogItem name="Artem" id="1" />
          <DialogItem name="Kirill" id="2" />
          <DialogItem name="Anastasiya" id="3" />
        </div>

        <div className={classes.Dialogs}>
          <Message message="Kirill is gay?" />
          <Message message="How are you?" />
          <Message message="Im fine" />
        </div>
      </div>
    );
  }
}

export default Messages;
