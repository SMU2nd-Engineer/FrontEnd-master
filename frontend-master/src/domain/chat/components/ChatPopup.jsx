import React from "react";
import ChatRoomMain from "./ChatRoomMain";
import Button from "@/components/Button";

const ChatPopup = ({ selectRoom, handleClose = (f) => f }) => {
  return (
    <div className="chat-popup">
      <div className="popup-overlay" onClick={handleClose}>
        <Button text={"×"} onClick={handleClose} className="popup-close-btn" />
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <ChatRoomMain selectRoom={selectRoom} />
        </div>
      </div>
    </div>
  );
};

export default ChatPopup;
