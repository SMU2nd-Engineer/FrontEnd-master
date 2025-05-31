import styled, { keyframes } from "styled-components";

/**
 * 추천받은 fadeInUp 효과
 */
const fadeInUp = keyframes`
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

/**
 * 전체 컨테이너 디자인
 */
export const WithdrawalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 1rem;
  margin: 3rem;
  width: 100%;
  max-width: 80%;
  justify-content: center;
  align-items: center;
  animation: ${fadeInUp} 0.5s ease-in-out;
`;

/**
 * 문구 스타일
 */
export const MessageBubble = styled.div`
  background-color: #fff4f4;
  color: #333;
  border: 1px solid #f5c2c2;
  border-radius: 1rem;
  padding: 1.5rem 2rem;
  text-align: center;
  max-width: 80%;
  line-height: 1.6;
  font-size: 1.2rem;
  position: relative;
  animation: ${fadeInUp} 0.5s ease-in-out;
  animation-delay: 0.3s;
  animation-fill-mode: both;

  span {
    display: block;
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #888;
  }
`;

/**
 * 체크박스와 문구 가로 배치
 */
export const CheckBoxContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  animation: ${fadeInUp} 0.5s ease-in-out;
  animation-delay: 0.6s;
  animation-fill-mode: both;
`;

/**
 * 버튼 가로 배치
 */
export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  justify-content: space-between;
  width: 100%;
  max-width: 30%;
  animation: ${fadeInUp} 0.5s ease-in-out;
  animation-delay: 0.9s;
  animation-fill-mode: both;
`;

/**
 * 취소 버튼
 */
export const CancelButtonWrapper = styled.div`
  button {
    background-color: #f0b8b8;
    border: #ddd 1px solid;
    border-radius: 0.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    transition: all 0.2s ease-in-out;
    transform-origin: center center;
    font-size: 1rem;
    height: 100%;
    box-sizing: border-box;
    &:hover {
      background-color: #f8f8f8;
      color: #f0b8b8;
      border: 1px solid #f0b8b8;
      transform: scale(1.1);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    }

    &:active {
      transform: scale(1.05);
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }
`;

/**
 * 탈퇴 버튼
 */
export const WithdrawButtonWrapper = styled.div`
  button {
    background-color: red;
    color: white;
    transition: background-color 0.3s ease, opacity 0.3s ease,
      transform 0.3s ease;
    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
      opacity: 0.6;
      transform: scale(0.95); // 비활성일 땐 크기 변화 없음
    }
    &:not(:disabled):hover {
      transform: scale(1); // 활성화 상태일 때 살짝 커짐
      background-color: white;
      color: red;
      border: 1px solid red;
      transform: scale(1.1);
    }
  }
`;
