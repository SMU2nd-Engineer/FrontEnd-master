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
  align-items: stretch;
  gap: 0.5rem;
  width: 100%;
  margin-bottom: 5px;
`;

export const RegistStyledInput = styled.input`
  flex: 1;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ $error }) => ($error ? "#e53e3e" : "#ddd")};
  border-radius: 5px;
  font-size: 1rem;
  height: 2.6rem;
  box-sizing: border-box;
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
  height: 2.6rem;

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

export const RegistEmailRow = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  width: 100%;
`;

export const RegistEmailDomainSelect = styled.select`
  height: 3rem;
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const RegistAtSymbol = styled.span`
  font-size: 1rem;
  line-height: 3rem;
  min-width: 1rem;
`;

export const RegistButton = styled.button`
  padding: 0.5rem 1.25rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  width: 10rem;

  &.cancel {
    background-color: #ff9a9a;
    color: #fff;

    &:hover {
      background-color: #fff;
      color: #ff9a9a;
    }
  }

  &.submit {
    background-color: #000000;
    color: #fff;

    &:hover {
      background-color: #fff;
      color: #000000;
    }
  }
`;

export const RegistrationContainer = styled.div`
  max-width: 640px;
  margin: 4rem auto;
  padding: 2rem;
  background-color: #fdfdfd;
  border: 1px solid #ddd;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export const RegistrationForm = styled.form`
  display: grid;
  grid-template-areas:
    "id"
    "name"
    "password"
    "nickname"
    "address"
    "email"
    "buttons";
  gap: 1.5rem;
  margin-left: 10px;
  line-height: 3rem;
`;

export const FormGridArea = styled.div`
  grid-area: ${(props) => props.area};
`;

export const ButtonWrapper = styled.div`
  grid-area: buttons;
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
`;
