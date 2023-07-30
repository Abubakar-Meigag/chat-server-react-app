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
            {` ${msg.from},`}
          </div>
          <br />
          <div className="message">{` ${msg.text}`}</div>
          <br />
          {/* <br /> */}
          <div>{msg.timeSent}</div>
          <dive>
            <DeleteMessage id={msg.id} onDelete={onDeleteHandler} />
          </dive>
        </div>
      ))}
      <div>
        <PostNewMessage onActionHandler={onActionHandler} />
      </div>
    </div>
  );
};

export default DisplayBox;

