import styled from "styled-components";

export const MyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
`;

export const MyPageInfoContainer = styled.div`
  max-width: 640px;
  margin: 4rem auto;
  padding: 2rem;
  background-color: #fdfdfd;
  border: 1px solid #ddd;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  user-select: none;
`;

export const MyPageInfoForm = styled.form`
  display: grid;
  grid-template-areas:
    "id"
    "name"
    "password"
    "nickname"
    "address"
    "email"
    "buttons"
    "wbutton";
  gap: 1.5rem;
  margin-left: 10px;
  line-height: 3rem;
`;

export const WithdrawalButtonWrapper = styled.div`
  grid-area: wbutton;
  display: flex;
  justify-content: end;
  gap: 3rem;

  transition: all 0.2s ease-in-out;
  cursor: pointer;

  button {
    border: 1px solid red;
    color: red;
    background-color: transparent;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    text-align: center;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      border-color: white;
      background-color: red;
      color: white;
    }

    &:active {
      transition: all 0.2s ease-in-out;
      transform: scale(0.9);
    }
  }
`;

export const MyInfoFormGridArea = styled.div`
  grid-area: ${(props) => props.area};
`;

export const MyInfoButtonWrapper = styled.div`
  grid-area: buttons;
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
  font-size: auto;
  button {
    width: 10rem;
  }
`;

export const MyInfoPasswordCheckContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  gap: 2rem;
`;

export const MyInfoPasswordCheckHeader = styled.h2`
  color: #f0b8b8;
  font-weight: 500;
  user-select: none;
`;

export const MyInfoPasswordCheckInputLebelContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 50%;
  height: 2rem;
`;

export const MyInfoPasswordCheckInput = styled.input`
  justify-self: end;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  width: 100%;
`;

export const MyInfoPasswordCheckLabel = styled.label`
  font-weight: bold;
  display: flex;
  width: 30%;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

export const MyInfoPasswordCheckButton = styled.button`
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
  user-select: none;
  &:hover {
    background-color: #f8f8f8;
    color: #f0b8b8;
    transform: scale(1.1);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(1.05);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

/**
 * 개인 정보 수정 스타일 헤더
 */
export const UserInfoHedear = styled.h1`
  font-weight: 500;
  display: flex;
  justify-content: baseline;
  align-items: center;
  color: #9a8a8a;
  gap: 1rem;
  margin: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  user-select: none;
`;
