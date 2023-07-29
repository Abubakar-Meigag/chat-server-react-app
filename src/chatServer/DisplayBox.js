import React, { useEffect, useState } from "react";
import PostNewMessage from "./PostNewMessage";
import DeleteMessage from "./DeleteMessage";
import axios from "axios";

const DisplayBox = () => {
  const [messages, setMessages] = useState([]);
  const url = "https://beko-meigag-chat-server.glitch.me/messages";

  const dataShowing = async () => {
    try {
      const res = await axios.get(url);
      setMessages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dataShowing();
  }, []);

  const onDeleteHandler = () => {
    dataShowing();
  };

  const onActionHandler = () => {
    dataShowing();
  }

  return (
    <div>
      {messages.map((msg, index) => (
        <div className="message-box">
          <div key={msg.id} className="name">
            {` ${msg.from}`}
          </div>
          <div className="message">{` ${msg.text}`}</div>
          <PostNewMessage onActionHandler={onActionHandler} />
          <DeleteMessage id={msg.id} onDelete={onDeleteHandler} />
        </div>
      ))}
    </div>
  );
};

export default DisplayBox;

