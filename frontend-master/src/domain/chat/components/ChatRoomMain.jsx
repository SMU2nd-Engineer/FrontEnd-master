import React, { useEffect, useState } from "react";
import ChatList from "./ChatList";
import ChatInput from "./ChatInput";
import { getChatRoomMessage, postChatMessage } from "../services/ChatService";

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

  useEffect(() => {
    getChatRoomMessage(room).then((res) => setChatList(res.data));
  }, [room]);

  /**
   * 채팅 보내기 함수
   * @param {chatDTO} chat
   * @returns
   */
  const handleMessageSend = (chat) => {
    if (selectRoom === 0) return;
    chat.chatRoom_id = selectRoom;
    chat.user_idx = 1;
    postChatMessage(chat).then((res) => setChatList([...chatList, res.data]));
  };

  return (
    <div className="chatMain">
      <ChatList chatList={chatList} />
      <ChatInput handleMessageSend={handleMessageSend} />
    </div>
  );
};

export default ChatRoomMain;
