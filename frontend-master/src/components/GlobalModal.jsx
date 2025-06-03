import { useModalStore } from "@/store/useModalStore";
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
  user-select: none;
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
    &:active {
      transform: scale(0.95);
    }
  }

  button.cancle {
    background-color: #e0e0e0;
    color: #333;

    &:hover {
      background-color: #bdbdbd;
    }
    &:active {
      transform: scale(0.95);
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

const GlobalModal = () => {
  const { isOpen, type, text, close } = useModalStore();

  if (!isOpen) return null;

  const handleConfirm = () => close(true);
  const handleCancel = () => close(false);
  const handleAlert = () => close();

  return (
    <PopupOverlay>
      <PopupBox>
        <PopupContent>{text.message}</PopupContent>
        <PopupButtons>
          {type === "confirm" ? (
            <div>
              <button className="cancle" onClick={handleCancel}>
                취소
              </button>
              <button className="check" onClick={handleConfirm}>
                확인
              </button>
            </div>
          ) : (
            <div>
              <button className="check" onClick={handleAlert}>
                확인
              </button>
            </div>
          )}
        </PopupButtons>
      </PopupBox>
    </PopupOverlay>
  );
};

export default GlobalModal;
