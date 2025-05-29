import { stringToTime } from "@/utils/Time";
import React from "react";
import {
  MessageDiv,
  MessageFromDiv,
  MessageFromTextSpan,
  MessageFromTextP,
  MessageToDiv,
  MessageToTextP,
  MessageToTextSpan,
  MessageToTimeSpan,
  MessageFromTimeDiv,
} from "../styles/ChatPageDesign";

/**
 * 채팅 메시지 컴포넌트
 * @param {{type : string, content : string, sendTime : DateTime}} param0
 * @returns
 */
const ChatMessage = ({ type = "", content = " ", createdAt = "" }) => {
  return (
    <MessageDiv>
      {type == "from" ? (
        <MessageFromDiv>
          <MessageFromTextSpan>
            <MessageFromTextP>{content}</MessageFromTextP>
          </MessageFromTextSpan>
          <MessageFromTimeDiv>{stringToTime(createdAt)}</MessageFromTimeDiv>
        </MessageFromDiv>
      ) : (
        <MessageToDiv>
          <MessageToTextSpan>
            <MessageToTextP>{content}</MessageToTextP>
          </MessageToTextSpan>
          <MessageToTimeSpan>{stringToTime(createdAt)}</MessageToTimeSpan>
        </MessageToDiv>
      )}
    </MessageDiv>
  );
};

export default React.memo(ChatMessage);
