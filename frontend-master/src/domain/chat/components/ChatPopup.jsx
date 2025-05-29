import React from "react";
import ChatRoomMain from "./ChatRoomMain";
import Button from "@/components/Button";
import {
  ChatPopupContentDiv,
  ChatPopupDiv,
  ChatPopupOverlayDiv,
} from "../styles/ChatPageDesign";

const ChatPopup = ({ selectRoom, handleClose = (f) => f }) => {
  return (
    <ChatPopupDiv>
      <ChatPopupOverlayDiv onClick={handleClose}>
        <Button text={"×"} onClick={handleClose} className="popup-close-btn" />
        <ChatPopupContentDiv onClick={(e) => e.stopPropagation()}>
          <ChatRoomMain selectRoom={selectRoom} type={"popup"} />
        </ChatPopupContentDiv>
      </ChatPopupOverlayDiv>
    </ChatPopupDiv>
  );
};

export default React.memo(ChatPopup);
