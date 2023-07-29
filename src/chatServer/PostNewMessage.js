import React, { useState } from "react";
import axios from "axios";

const PostNewMessage = ({ onActionHandler }) => {
  const [from, setFrom] = useState("");
  const [text, setText] = useState("");

  const url = "https://beko-meigag-chat-server.glitch.me/messages/cerate";

  const postMessage = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(url, { from, text });
      if (res.status === 200) {
        console.log("message sent successfully");
      } else {
        console.error("message sent failed");
      }
    } catch (error) {
      console.log(error);
    }
    setFrom("");
    setText("");
    onActionHandler()
  };

  const handleName = (e) => {
    setFrom(e.target.value);
  };
  const handleMessage = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div className="input-item">
        <form>
          <p>
            Name:
            <input
              type="text"
              value={from}
              onChange={handleName}
              className="name-input"
              placeholder="Your Name"
            />
            <br />
            Message:
            <input
              type="text"
              value={text}
              onChange={handleMessage}
              className="msg-input"
              placeholder="The message..."
            />
            <br />
          </p>
          <button onClick={postMessage} className="send-btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default PostNewMessage;
