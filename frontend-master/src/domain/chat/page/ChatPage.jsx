import React, { useEffect, useState } from "react";
import ChatRoomList from "../components/ChatRoomList";
import ChatRoomMain from "../components/ChatRoomMain";
import { deleteChatRoom, getChatRooms } from "../services/ChatService";
import {
  ChatRoomDispatchContext,
  ChatRoomStateContext,
} from "../store/chatContext";

/**
 * 채팅 목록 컴포넌트
 * @returns
 */
const ChatPage = () => {
  const [chatRooms, setChatRooms] = useState([]);
  const [selectRoom, setSelectRoom] = useState(0);

  useEffect(() => {
    // user id 전송 필요
    getChatRooms(1).then((res) => setChatRooms(res.data));
  }, []);

  const handleRoomClick = (id) => {
    setSelectRoom(id);
  };

  const handleRoomDeleteClick = (id) => {
    deleteChatRoom(id);
  };

  return (
    <div>
      <ChatRoomStateContext.Provider value={chatRooms}>
        <ChatRoomDispatchContext
          value={{ handleRoomClick, handleRoomDeleteClick }}
        >
          <ChatRoomList />
        </ChatRoomDispatchContext>
      </ChatRoomStateContext.Provider>

      <ChatRoomMain selectRoom={selectRoom} />
    </div>
  );
};

export default ChatPage;
