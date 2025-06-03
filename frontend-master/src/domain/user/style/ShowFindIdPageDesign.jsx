import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  gap: 2rem;
`;

export const Header = styled.h1`
  color: #f0b8b8;
  font-weight: 500;
  user-select: none;
`;

export const BackButton = styled.button`
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
  width: fit-content;
  padding: 1rem;
  box-sizing: border-box;
  user-select: none;
  color: white;
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

export const Message = styled.p`
  font-size: 1.1rem;
  text-align: center;
  color: #444;
  white-space: pre-line;
`;

export const EmphasizedId = styled.span`
  font-weight: bold;
  color: #f57c7c;
  font-size: 1.25rem;
`;
