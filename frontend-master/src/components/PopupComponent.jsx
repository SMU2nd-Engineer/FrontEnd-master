import React from "react";
import styled from "styled-components";

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background-color: #fff;
  padding: 30px 50px;
  border-radius: 8px 8px 0 0;
  font-size: 18px;
  color: #333;
  min-width: 280px;
  text-align: center;
  white-space: pre-line;
`;

const PopupButtons = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 16px 0;
  border-radius: 0 0 8px 8px;

  button {
    cursor: pointer;
    border: none;
    margin: 0 10px;
    font-size: 1rem;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    height: 50px;
  }

  button.check {
    background-color: #f0b8b8;
    color: #fff;

    &:hover {
      background-color: #ec7d7d;
    }
  }

  button.cancle {
    background-color: #e0e0e0;
    color: #333;

    &:hover {
      background-color: #bdbdbd;
    }
  }
`;
const PopupBox = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  min-width: 280px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const PopupComponent = ({
  text,
  okOnClick,
  cancelClick,
  okShow = true,
  cancelShow = true,
  okType = "button",
  cancelType = "button",
}) => {
  return (
    <PopupOverlay>
      <PopupBox>
        <PopupContent>{text}</PopupContent>
        <PopupButtons>
          {okShow && (
            <button type={okType} className="check" onClick={okOnClick}>
              확인
            </button>
          )}
          {cancelShow && (
            <button type={cancelType} className="cancle" onClick={cancelClick}>
              취소
            </button>
          )}
        </PopupButtons>
      </PopupBox>
    </PopupOverlay>
  );
};

export default PopupComponent;
