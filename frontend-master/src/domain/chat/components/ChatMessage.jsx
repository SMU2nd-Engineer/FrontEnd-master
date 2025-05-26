import { stringToTime } from "@/utils/Time";
import React from "react";

/**
 * 채팅 메시지 컴포넌트
 * @param {{type : string, content : string, sendTime : DateTime}} param0
 * @returns
 */
const ChatMessage = ({ type = "", content = " ", createdAt = "" }) => {
  const messageType = type == "from" ? "message-from" : "message-to";
  return (
    <div className={"message"}>
      <div className={messageType}>
        <span className={messageType + "-text"}>
          <p>{content}</p>
        </span>
        <span className={messageType + "-time"}>{stringToTime(createdAt)}</span>
      </div>
    </div>
  );
};

export default React.memo(ChatMessage);
