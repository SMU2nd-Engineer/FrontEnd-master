import React from "react";
import ChatMessage from "./ChatMessage";
import { useRef } from "react";
import { useEffect } from "react";
import { ChatListDiv } from "../styles/ChatPageDesign";

/**
 * 채팅 내역 컴포넌트
 * @param {[ChatDTO]} param0
 * @returns
 */
const ChatList = ({ chatList = [], fromUser = 0 }) => {
  const messagesEndRef = useRef(null);

  // 메시지가 업데이트되면 스크롤 아래로 이동
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [chatList]);

  if (typeof chatList == typeof "") return;
  return (
    <ChatListDiv ref={messagesEndRef}>
      {chatList.map((chat) => {
        return chat.userIdx != fromUser ? (
          <ChatMessage key={chat.id} type={"from"} {...chat} />
        ) : (
          <ChatMessage key={chat.id} type={"to"} {...chat} />
        );
      })}
    </ChatListDiv>
  );
};

export default ChatList;
