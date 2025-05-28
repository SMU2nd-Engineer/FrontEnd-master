import { stringToTime } from "@/utils/Time";
import React, { useContext } from "react";
import { ChatRoomDispatchContext } from "../store/chatContext";
import {
  ChatRoomItemDiv,
  InfoLastMessageDiv,
  InfoTextDiv,
  InfoTitleDiv,
  RoomInfoDiv,
} from "../styles/ChatPageDesign";

/**
 * 채팅방 요약 컴포넌트
 * @param {{id : number, title : string, time : DateTime}} param0
 * @returns
 */
const ChatRoomItem = ({ id, title, lastMessageAt, lastMessage, count }) => {
  const { handleRoomClick, handleRoomDeleteClick } = useContext(
    ChatRoomDispatchContext
  );

  const onClick = () => {
    if (confirm(`정말로 삭제하시겠습니까? 복구되지 않습니다.`))
      handleRoomDeleteClick(id);
  };

  return (
    <ChatRoomItemDiv
      onClick={() => {
        handleRoomClick(id);
      }}
    >
      {/* <img src="" alt="" /> */}
      <RoomInfoDiv>
        <InfoTitleDiv>{title}</InfoTitleDiv>
        <div>
          <InfoLastMessageDiv>{lastMessage}</InfoLastMessageDiv>
          <InfoTextDiv>{stringToTime(lastMessageAt)}</InfoTextDiv>
        </div>
        {/* <span>{toUser}</span> */}
      </RoomInfoDiv>
      {count > 0 ? <div>count</div> : ""}
      <button type="button" onClick={onClick}>
        X
      </button>
    </ChatRoomItemDiv>
  );
};

export default React.memo(ChatRoomItem);
