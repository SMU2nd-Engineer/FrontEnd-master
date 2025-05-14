import { stringToTime } from "@/common/utils/Time";
import React, { useContext } from "react";
import { ChatRoomDispatchContext } from "../store/chatContext";

/**
 * 채팅방 요약 컴포넌트
 * @param {{id : number, title : string, time : DateTime}} param0
 * @returns
 */
const ChatRoomItem = ({ id, title, time }) => {
  const { handleRoomClick, handleRoomDeleteClick } = useContext(
    ChatRoomDispatchContext
  );

  const onClick = () => {
    if (confirm(`정말로 삭제하시겠습니까? 복구되지 않습니다.`))
      handleRoomDeleteClick(id);
  };

  return (
    <div
      className="chatRoom"
      onClick={() => {
        handleRoomClick(id);
      }}
    >
      {/* <img src="" alt="" /> */}
      <div className="roomInfo">
        <p>{title}</p>
        <p>{stringToTime(time)}</p>
        {/* <span>{toUser}</span> */}
      </div>
      <button type="button" onClick={onClick}>
        X
      </button>
    </div>
  );
};

export default React.memo(ChatRoomItem);
