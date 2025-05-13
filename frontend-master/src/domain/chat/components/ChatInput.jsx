import React, { useState } from "react";

/**
 * 채팅 입력 컴포넌트
 * @param {function} param0
 * @returns
 */
const ChatInput = ({ handleMessageSend }) => {
  const [message, setMessage] = useState("");

  const onSumit = () => {
    var chat = { content: message };
    handleMessageSend(chat);
    setMessage("");
  };

  return (
    <div className="chatInput">
      <input
        type="text"
        name="message"
        id="messageBox"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="button" onClick={onSumit}>
        보내기
      </button>
    </div>
  );
};

export default ChatInput;
