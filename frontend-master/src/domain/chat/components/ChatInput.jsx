import React, { useState } from "react";
import {
  ChatInputDiv,
  ChatMessageButton,
  ChatMessageInput,
} from "../styles/ChatPageDesign";

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
    <ChatInputDiv>
      <ChatMessageInput
        type="text"
        name="message"
        id="messageBox"
        className="input-message"
        value={message}
        placeholder="메시지를 입력하세요."
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key == "Enter" && onSumit()}
      />
      <ChatMessageButton type="button" onClick={onSumit}>
        보내기
      </ChatMessageButton>
    </ChatInputDiv>
  );
};

export default React.memo(ChatInput);
