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
const ChatRoomItem = ({
  id,
  title,
  lastMessageAt,
  lastMessage,
  count,
  nickname,
}) => {
  const { handleRoomClick, handleDelete } = useContext(ChatRoomDispatchContext);

  const onClick = () => {
    handleDelete(id);
  };

  return (
    <ChatRoomItemDiv
      onClick={() => {
        handleRoomClick(id, nickname);
        count = 0;
      }}
    >
      {/* <img src="" alt="" /> */}
      <RoomInfoDiv>
        <InfoTitleDiv>
          {title.length > 0
            ? `${title} - ${nickname}`
            : `${nickname}과(와)의 대화방`}
        </InfoTitleDiv>
        <div>
          <InfoLastMessageDiv>{lastMessage}</InfoLastMessageDiv>
          <InfoTextDiv>{stringToTime(lastMessageAt)}</InfoTextDiv>
        </div>
        {/* <span>{toUser}</span> */}
      </RoomInfoDiv>
      {count > 0 ? <div>{count}</div> : ""}
      <button type="button" onClick={onClick}>
        X
      </button>
    </ChatRoomItemDiv>
  );
};

export default React.memo(ChatRoomItem);
