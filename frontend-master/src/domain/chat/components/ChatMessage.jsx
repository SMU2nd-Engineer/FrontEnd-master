import { stringToTime } from "@/common/utils/Time";
import React from "react";

/**
 * 채팅 메시지 컴포넌트
 * @param {{type : string, content : string, sendTime : DateTime}} param0
 * @returns
 */
const ChatMessage = ({ type = "", content = " ", sendTime = "" }) => {
  return (
    <div className={type == "from" ? "from" : "to"}>
      <span>{content}</span>
      <span> - {stringToTime(sendTime)}</span>
    </div>
  );
};

export default React.memo(ChatMessage);
