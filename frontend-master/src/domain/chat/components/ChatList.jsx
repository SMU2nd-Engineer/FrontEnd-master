import React from "react";
import ChatMessage from "./ChatMessage";

/**
 * 채팅 내역 컴포넌트
 * @param {[ChatDTO]} param0
 * @returns
 */
const ChatList = ({ chatList }) => {
  return (
    <div className="chatList">
      <h2>채팅 내역</h2>
      {chatList.map((chat) => {
        return chat.user_idx == 1 ? (
          <ChatMessage key={chat.id} type={"from"} {...chat} />
        ) : (
          <ChatMessage key={chat.id} type={"to"} {...chat} />
        );
      })}
    </div>
  );
};

export default ChatList;
