import { stringToTime } from "@/utils/Time";
import React, { useContext } from "react";
import { FaUser } from "react-icons/fa6";
import { ChatRoomDispatchContext } from "../store/chatContext";
import {
  ChatRoomItemDiv,
  InfoBoxDiv,
  InfoLastMessageBoxDiv,
  InfoLastMessageDiv,
  InfoNickNameDiv,
  InfoTextDiv,
  InfoTitleDiv,
  InfoTitleTextDiv,
  InfoUserDiv,
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
      <RoomInfoDiv>
        <InfoTitleDiv>
          {title.length > 0 ? (
            <InfoBoxDiv>
              <InfoUserDiv>
                <FaUser style={{ marginRight: "7px", fontSize: "17px" }} />
                <InfoNickNameDiv>{nickname}</InfoNickNameDiv>
              </InfoUserDiv>
              <InfoTitleTextDiv>{title}</InfoTitleTextDiv>
            </InfoBoxDiv>
          ) : (
            `${nickname}과(와)의 대화방`
          )}
        </InfoTitleDiv>
        <InfoLastMessageBoxDiv>
          <InfoLastMessageDiv>
            {lastMessage.length > 20
              ? lastMessage.substring(0, 20) + " ....."
              : lastMessage}
          </InfoLastMessageDiv>
          <InfoTextDiv>{stringToTime(lastMessageAt)}</InfoTextDiv>
        </InfoLastMessageBoxDiv>
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
