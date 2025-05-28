import React, { useContext } from "react";
import ChatRoomItem from "./ChatRoomItem";
import { ChatRoomStateContext } from "../store/chatContext";
import { ChatTitle, RoomListDiv, RoomsDiv } from "../styles/ChatPageDesign";

/**
 * 채팅방 목록 컴포넌트
 * @returns
 */
const ChatRoomList = () => {
  const chatRooms = useContext(ChatRoomStateContext);

  if (!chatRooms) return <div>데이터가 없습니다.</div>;

  return (
    <RoomListDiv>
      <ChatTitle>채팅 목록</ChatTitle>
      <RoomsDiv>
        {chatRooms.map((chatRoom) => (
          <ChatRoomItem key={chatRoom.id} {...chatRoom} />
        ))}
      </RoomsDiv>
    </RoomListDiv>
  );
};

export default ChatRoomList;
