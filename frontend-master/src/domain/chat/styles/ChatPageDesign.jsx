import styled from "styled-components";

export const ChatPageDiv = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  height: 100%;
  border-left: 1px solid rgb(246, 246, 246);
  border-right: 1px solid rgb(246, 246, 246);
  overflow: hidden;
  min-width: 280px;
  max-width: 1024px;
  width: 100%;
  min-height: 700px;
  position: relative;
  word-break: break-all;
`;

export const RoomListDiv = styled.div`
  width: 50%;
  height: 730px;
  border-right: 1px solid rgb(246, 246, 246);
  padding-bottom: 0px;
  background-color: rgb(255, 255, 255);
`;

export const RoomsDiv = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  overflow: hidden scroll;
  padding-bottom: 0px;
  background-color: rgb(255, 255, 255);
`;

export const ChatTitle = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  color: rgb(25, 25, 25);
  font-size: 22px;
  font-weight: bold;
  padding: 20px 20px 10px;
  line-height: 33px;
  border-bottom: 1px solid rgb(246, 246, 246);
`;

export const ChatRoomItemDiv = styled.div`
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  height: 80px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 20px;
  user-select: none;
  position: relative;
  left: 0px;
  unicode-bidi: isolate;
  border-top: 1px solid rgb(246, 246, 246);
  border-bottom: 1px solid rgb(246, 246, 246);
  &:hover {
    background-color: rgb(246, 246, 246);
  }
`;

export const RoomInfoDiv = styled.div`
  width: 100%;
  display: block;
  -webkit-box-pack: justify;
  justify-content: space-between;
  letter-spacing: -0.5px;
  -webkit-box-align: center;
  align-items: center;
`;

export const InfoTitleDiv = styled.div`
  display: flex;
  width: 100%;
  -webkit-box-align: center;
  align-items: center;
  width: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  unicode-bidi: isolate;
  font-size: 15px;
  font-weight: 500;
`;

export const InfoTextDiv = styled.div`
  display: flex;
  margin-top: 6px;
  width: 50%;
  display: flex;
  font-size: 12px;
  line-height: 1.3;
  color: rgb(153, 153, 153);
  unicode-bidi: isolate;
`;

export const InfoLastMessageDiv = styled.div`
  display: flex;
  margin-top: 6px;
  width: 60%;
  display: flex;
  font-size: 12px;
  line-height: 1.3;
  unicode-bidi: isolate;
`;

export const ChatRoomMainDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.type === "popup" ? `100%` : `50%`)};
  height: 100%;
  overflow: hidden;
`;

export const NullChatDiv = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChatListDiv = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: 600px;
  background-color: white;
  perspective: 1px;
  font-size: 15px;
  line-height: 1.4;
  font-weight: 300;
  margin: 0px 0px auto;
  margin-left: 16px;
  max-height: 600px;
`;

export const MessageDiv = styled.div`
  margin: 6px 0px;
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 15px;
  margin-right: 24px;
`;

export const MessageFromDiv = styled.div`
  display: flex;
  -webkit-box-align: end;
  align-items: end;
  unicode-bidi: isolate;
  font-weight: 500;
  font-size: 15px;
  line-height: 145%;
`;

export const MessageFromTextSpan = styled.span`
  display: flex;
  -webkit-box-align: end;
  align-items: end;
  font-weight: 500;
  font-size: 15px;
  line-height: 145%;
`;

export const MessageFromTextP = styled.p`
  width: fit-content;
  padding: 14px 18px;
  white-space: pre-line;
  border-radius: 10px;
  color: rgb(25, 25, 25);
  background-color: white;
  border: 1px solid rgb(229, 229, 229);
  text-align: left;
`;

export const MessageFromTimeDiv = styled.span`
  color: rgb(178, 178, 178);
  font-size: 11px;
  white-space: nowrap;
  letter-spacing: -0.5px;
  margin-top: 6px;
  text-align: left;
  margin-left: 8px;
`;

export const MessageToDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 15px;
  align-items: flex-end;
  margin-left: 24px;
  -webkit-box-align: end;
  align-items: end;
  flex-direction: row-reverse;
`;

export const MessageToTextSpan = styled.span`
  display: flex;
  -webkit-box-align: end;
  align-items: end;
  font-weight: 500;
  font-size: 15px;
  line-height: 145%;
`;

export const MessageToTextP = styled.p`
  width: fit-content;
  padding: 14px 18px;
  white-space: pre-line;
  border-radius: 10px;
  color: rgb(25, 25, 25);
  background-color: rgb(246, 246, 246);
  text-align: left;
`;

export const MessageToTimeSpan = styled.span`
  white-space: nowrap;
  margin-left: 8px;
  color: rgb(178, 178, 178);
  font-size: 11px;
  white-space: nowrap;
  letter-spacing: -0.5px;
  margin-top: 6px;
  text-align: right;
  margin-right: 8px;
`;

export const ChatInputDiv = styled.div`
  position: relative;
  border-top: 1px solid rgb(246, 246, 246);
  display: flex;
  align-items: flex-end;
  margin: 12px 0px;
  background-color: rgb(250, 250, 250);
`;

export const ChatMessageInput = styled.input`
  background-color: rgb(250, 250, 250);
  position: relative;
  display: flex;
  align-items: flex-end;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  max-height: 120px;
  height: 35px !important;
  margin-bottom: 12px;
  margin-left: 20px;
`;

export const ChatMessageButton = styled.button`
  position: relative;
  padding: 15px 0px 13px;
`;

export const ChatPopupDiv = styled.div`
  width: 500px;
`;

export const ChatPopupOverlayDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
export const ChatPopupContentDiv = styled.div`
  background-color: #fefefe;
  border-radius: 12px;
  width: 95%;
  max-width: 500px;
  padding: 40px 50px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  position: relative;
  max-height: 90vh;
`;

// export const

// /* 닫기 버튼 */
// .popup-close-btn {
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   background: transparent;
//   border: none;
//   font-size: 1.8rem;
//   cursor: pointer;
//   font-weight: bold;
//   color: #333;
//   transition: color 0.3s;
// }
// .popup-close-btn:hover {
//   color: #ff4d4d;
// }
export const InfoBoxDiv = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 5px;
`;

export const InfoUserDiv = styled.div`
  display: flex;
  text-align: left;
  font-weight: 900;
`;

export const InfoNickNameDiv = styled.div`
  font-size: 18px;
`;

export const InfoTitleTextDiv = styled.div`
  margin-left: 10px;
  font-size: 13px;
  color: #818080;
`;

export const InfoLastMessageBoxDiv = styled.div`
  display: flex;
  margin-left: 24px;
`;
