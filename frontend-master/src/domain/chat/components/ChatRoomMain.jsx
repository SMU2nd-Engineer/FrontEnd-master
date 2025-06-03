import React, { useEffect, useState } from "react";
import ChatList from "./ChatList";
import ChatInput from "./ChatInput";
import { getChatRoomMessage, postChatMessage } from "../services/ChatService";
import { useChatSocket } from "../hooks/useChatSocket";
import {
  ChatRoomMainDiv,
  ChatTitle,
  NullChatDiv,
} from "../styles/ChatPageDesign";
import { useCallback } from "react";

/**
 * 채팅방 컴포넌트
 * @param {Object} obj
 * @param {number} obj.selectRoom 선택한 채팅방 idx
 * @returns
 */
const ChatRoomMain = ({ selectRoom, type = "default" }) => {
  const [room, setRoom] = useState(selectRoom);
  const [chatList, setChatList] = useState([]);
  const [fromUser, setFromUser] = useState(0);

  const onMessage = useCallback((msg) => {
    // 메시지 처리 로직
    setChatList((prevMessages) => [...prevMessages, msg]);
  }, []);

  useEffect(() => {
    if (selectRoom == 0) return;
    setRoom(selectRoom);
  }, [selectRoom]);

  // 새 메시지 수신 시 처리
  useChatSocket(room.id, onMessage);

  useEffect(() => {
    if (room.id == 0) return;
    getChatRoomMessage(room.id).then((res) => {
      setChatList(res.data.chatList);
      setFromUser(res.data.fromidx);
    });
  }, [room]);

  /**
   * 채팅 보내기 함수
   * @param {chatDTO} chat
   * @returns
   */
  const handleMessageSend = (chat) => {
    if (room === 0) return;
    if (!chat.content.trim()) return;
    chat.chatRoomId = room.id;
    chat.userIdx = fromUser;
    postChatMessage(chat).then((res) => setChatList([...chatList, res.data]));
  };

  if (selectRoom == 0) {
    return (
      <ChatRoomMainDiv type={type}>
        <ChatTitle>채팅 내역</ChatTitle>
        <NullChatDiv>
          <div>채팅방을 선택해주세요.</div>
        </NullChatDiv>
      </ChatRoomMainDiv>
    );
  }

  return (
    <ChatRoomMainDiv type={type}>
      <ChatTitle>채팅 내역{` - ${room.nickname}`}</ChatTitle>
      <ChatList chatList={chatList} fromUser={fromUser} />
      <ChatInput handleMessageSend={handleMessageSend} />
    </ChatRoomMainDiv>
  );
};

export default ChatRoomMain;
