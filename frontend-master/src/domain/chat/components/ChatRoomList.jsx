import React, { useContext } from "react";
import ChatRoomItem from "./ChatRoomItem";
import { ChatRoomStateContext } from "../store/chatContext";

/**
 * 채팅방 목록 컴포넌트
 * @returns
 */
const ChatRoomList = () => {
  const chatRooms = useContext(ChatRoomStateContext);

  if (!chatRooms) return <div>데이터가 없습니다.</div>;

  return (
    <div className="roomList">
      <div className="chatTitle">채팅 목록</div>
      <div className="rooms">
        {chatRooms.map((chatRoom) => (
          <ChatRoomItem key={chatRoom.id} {...chatRoom} />
        ))}
      </div>
    </div>
  );
};

export default ChatRoomList;
