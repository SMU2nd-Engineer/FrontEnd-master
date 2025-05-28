import React, { useEffect, useState } from "react";
import ChatRoomList from "../components/ChatRoomList";
import ChatRoomMain from "../components/ChatRoomMain";
import { deleteChatRoom, getChatRooms } from "../services/ChatService";
import {
  ChatRoomDispatchContext,
  ChatRoomStateContext,
} from "../store/chatContext";
import "../styles/chatPage.css";
import { ChatPageDiv } from "../styles/ChatPageDesign";

/**
 * 채팅 목록 컴포넌트
 * @returns
 */
const ChatPage = () => {
  const [chatRooms, setChatRooms] = useState([]);
  const [selectRoom, setSelectRoom] = useState(0);

  useEffect(() => {
    getChatRooms().then((res) => setChatRooms(res.data));
  }, []);

  const handleRoomClick = (id) => {
    setSelectRoom(id);
  };

  const handleRoomDeleteClick = (id) => {
    deleteChatRoom(id);
  };

  return (
    <ChatPageDiv>
      <ChatRoomStateContext.Provider value={chatRooms}>
        <ChatRoomDispatchContext.Provider
          value={{ handleRoomClick, handleRoomDeleteClick }}
        >
          <ChatRoomList />
          <ChatRoomMain selectRoom={selectRoom} />
        </ChatRoomDispatchContext.Provider>
      </ChatRoomStateContext.Provider>
    </ChatPageDiv>
  );
};

export default ChatPage;
