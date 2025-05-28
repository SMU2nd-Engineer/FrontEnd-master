import styled from "styled-components";

export const RegistFormContainer = styled.div`
  width: 100%;
`;

export const RegistFormLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
`;

export const RegistInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RegistStyledInput = styled.input`
  flex: 1;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ $error }) => ($error ? "#e53e3e" : "#ddd")};
  border-radius: 5px;
  font-size: 1rem;
  height: 3rem;
`;

export const RegistHelperText = styled.p`
  font-size: 0.875rem;
  margin-top: 0.25rem;
  color: ${({ color }) => color || "#555"};
`;

export const RegistFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const RegistFormControl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RegistFormError = styled.span`
  font-size: 0.875rem;
  color: #e53e3e;
  margin-top: 0.25rem;
`;

export const RegistStyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200%;

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
    height: 3rem;
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
  }
`;

export const RegistHelperMessage = styled.p`
  font-size: 0.875rem;
  margin-top: 0.25rem;
  height: 0.875rem;
  color: ${({ color }) => color || "#555"};
`;
