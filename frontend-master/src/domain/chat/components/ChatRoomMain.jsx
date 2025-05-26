import React, { useEffect, useState } from "react";
import ChatList from "./ChatList";
import ChatInput from "./ChatInput";
import { getChatRoomMessage, postChatMessage } from "../services/ChatService";
import { useChatSocket } from "../hooks/useChatSocket";

/**
 * 채팅방 컴포넌트
 * @param {Object} obj
 * @param {number} obj.selectRoom 선택한 채팅방 idx
 * @returns
 */
const ChatRoomMain = ({ selectRoom }) => {
  const [room, setRoom] = useState(selectRoom);
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    if (selectRoom == 0) return;
    setRoom(selectRoom);
  }, [selectRoom]);

  // 새 메시지 수신 시 처리
  useChatSocket(room, (msg) => {
    chatList.setChatList([...chatList, msg]);
  });

  useEffect(() => {
    if (room == 0) return;
    getChatRoomMessage(room).then((res) => setChatList(res.data));
  }, [room]);

  /**
   * 채팅 보내기 함수
   * @param {chatDTO} chat
   * @returns
   */
  const handleMessageSend = (chat) => {
    if (room === 0) return;
    if (!chat.content.trim()) return;
    chat.chatRoomId = room;
    postChatMessage(chat).then((res) => setChatList([...chatList, res.data]));
  };

  if (selectRoom == 0) {
    return (
      <div className="chatMain">
        <div className="chatTitle">채팅 내역</div>
        <div className="nullchat">
          <div>채팅방을 선택해주세요.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="chatMain">
      <div className="chatTitle">채팅 내역</div>
      <ChatList chatList={chatList} />
      <ChatInput handleMessageSend={handleMessageSend} />
    </div>
  );
};

export default ChatRoomMain;
