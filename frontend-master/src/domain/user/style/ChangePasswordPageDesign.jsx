import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 99.5%;
  user-select: none;
  flex-direction: column;
  gap: 1rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 2rem;
`;

export const PwdButton = styled.button`
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
  width: fit-content;
  padding: 1rem;
  margin: 1rem;
  user-select: none;
  color: #f8f8f8;
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

export const ChangePwdForm = styled.form`
  gap: 1.5rem;
  margin-left: 10px;
  line-height: 3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 3rem;
`;

export const ChangeHedear = styled.h1`
  font-weight: 500;
  display: flex;
  justify-content: baseline;
  align-items: center;
  color: #9a8a8a;
  gap: 1rem;
  margin: 1rem;
  padding: 1rem;
`;
