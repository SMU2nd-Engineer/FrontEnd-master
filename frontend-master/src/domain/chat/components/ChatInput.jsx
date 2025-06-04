import React, { useEffect, useRef, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const onSumit = () => {
    var chat = { content: message };
    handleMessageSend(chat);
    setMessage("");
    handleFocus();
  };

  const keyHandler = (e) => {
    e.key == "Enter" && onSumit();
  };

  useEffect(() => {
    if (!isLoading) {
      handleFocus();
      setIsLoading(true);
    }
    return setIsLoading(false);
  }, []);

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
        onKeyDown={keyHandler}
        ref={inputRef}
        autoComplete="off"
      />
      <ChatMessageButton type="button" onClick={onSumit}>
        보내기
      </ChatMessageButton>
    </ChatInputDiv>
  );
};

export default React.memo(ChatInput);
