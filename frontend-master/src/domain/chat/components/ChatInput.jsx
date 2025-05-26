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
        className="input-message"
        value={message}
        placeholder="메시지를 입력하세요."
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="input-message-button" type="button" onClick={onSumit}>
        보내기
      </button>
    </div>
  );
};

export default ChatInput;
