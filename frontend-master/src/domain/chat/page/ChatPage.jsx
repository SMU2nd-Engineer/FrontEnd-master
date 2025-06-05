import React, { useEffect, useState } from "react";
import ChatRoomList from "../components/ChatRoomList";
import ChatRoomMain from "../components/ChatRoomMain";
import { deleteChatRoom, getChatRooms } from "../services/ChatService";
import {
  ChatRoomDispatchContext,
  ChatRoomStateContext,
} from "../store/chatContext";
import { ChatPageDiv } from "../styles/ChatPageDesign";
import { useModalStore } from "@/store/useModalStore";

/**
 * 채팅 목록 컴포넌트
 * @returns
 */
const ChatPage = () => {
  const [chatRooms, setChatRooms] = useState([]);
  const [selectRoom, setSelectRoom] = useState(0);

  // 오픈 설정
  const openModal = useModalStore((state) => state.open);

  // 기능 구현 파라미터 받기 가능 => 삭제나 수정시 적용 가능
  const handleDelete = async (idx) => {
    const confirmed = await openModal("confirm", {
      title: "삭제 확인",
      message: "정말 삭제하시겠습니까? 채팅 내용은 복구되지 않습니다.",
    });

    // confirm 일때 확인 클릭시 적용됨
    if (confirmed) {
      await deleteChatRoom(idx);

      await getChatRooms().then((res) => setChatRooms(res.data));
    }
  };

  useEffect(() => {
    const fetchRooms = async () =>
      await getChatRooms().then((res) => setChatRooms(res.data));

    fetchRooms();
    const intervalId = setInterval(fetchRooms, 3000); // 3초마다 호출

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 정리
  }, []);

  const handleRoomClick = (id, nickname) => {
    setSelectRoom({ id, nickname });
  };

  // const handleRoomDeleteClick = (id) => {
  //   deleteChatRoom(id);
  // };

  return (
    <ChatPageDiv>
      <ChatRoomStateContext.Provider value={chatRooms}>
        <ChatRoomDispatchContext.Provider
          value={{ handleRoomClick, handleDelete }}
        >
          <ChatRoomList />
          <ChatRoomMain selectRoom={selectRoom} />
        </ChatRoomDispatchContext.Provider>
      </ChatRoomStateContext.Provider>
    </ChatPageDiv>
  );
};

export default ChatPage;
