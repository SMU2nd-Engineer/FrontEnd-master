import Button from "@/components/Button";
import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  user-select: none;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 1rem;
  margin: 3rem;
  width: 100%;
  max-width: 40%;
`;

export const LoginForm = styled.form`
  grid-area: form;
  display: grid;
  grid-template-areas:
    "input-id login-button"
    "input-pw login-button";
  gap: 1rem;
  margin-left: 10px;
  justify-content: center;
`;

export const InputId = styled.input`
  grid-area: input-id;
  justify-self: end;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  height: 2rem;
`;

export const InputPw = styled.input`
  grid-area: input-pw;
  justify-self: end;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  height: 2rem;
`;

export const LoginStyledButton = styled(Button)`
  grid-area: login-button;
  grid-row: 1 / 3;
  grid-column: 2 / 4;
  height: 100%;
  background-color: #f0b8b8;
  color: white;
  width: 6rem;
  border: #ddd 1px solid;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  transform-origin: center center;
  font-size: 1rem;
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
`;

export const LoginOption = styled.div`
  grid-area: options;
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-size: 14px;
`;

export const LoginHelp = styled.div`
  grid-area: helps;
  text-align: center;
  font-size: 13px;
  color: #555;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;

  a {
    text-decoration: none; // 밑줄 제거
    color: inherit; // 글자 색상 상속
    margin: 0 4px;
  }
`;

export const SocialLogin = styled.div`
  grid-area: socials;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3rem;
`;

export const SocialButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: none;
    outline: none;
  }

  button {
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 50%;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
    &:hover {
      border: none;
      outline: none;
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
      border: none;
    }
    &:focus {
      border: none;
      outline: none;
    }
    img {
      width: auto;
      height: auto;
      overflow: hidden;
      border-radius: 50%;
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
`;

export const LoginOptionInput = styled.input`
  width: auto;
  margin: 10px;
`;

export const LoginOptionLabel = styled.label`
  width: auto;
`;
