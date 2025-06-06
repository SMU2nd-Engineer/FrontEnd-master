import Button from "@/components/Button";
import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  user-select: none;
  padding: 1rem;
  @media (max-width: 1024px) {
    max-width: 80%;
  }

  @media (max-width: 600px) {
    max-width: 90%;
    margin: 1rem;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin: 0.5rem;
  }
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

  @media (max-width: 1024px) {
    max-width: 80%;
  }

  @media (max-width: 600px) {
    max-width: 90%;
    margin: 1rem;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin: 0.5rem;
  }
`;

export const LoginForm = styled.form`
  display: grid;
  grid-template-areas:
    "input-id"
    "input-pw"
    "login-button";
  gap: 1rem;
  justify-content: center;

  @media (min-width: 601px) {
    grid-template-areas:
      "input-id login-button"
      "input-pw login-button";
  }
`;

export const InputId = styled.input`
  grid-area: input-id;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  height: 2rem;
`;

export const InputPw = styled.input`
  grid-area: input-pw;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  height: 2rem;
`;

export const LoginStyledButton = styled(Button)`
  grid-area: login-button;
  height: 100%;
  background-color: #f0b8b8;
  color: white;
  width: 100%;
  border: #ddd 1px solid;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;

  &:hover {
    background-color: #f8f8f8;
    color: #f0b8b8;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (min-width: 601px) {
    width: 6rem;
    grid-row: 1 / 3;
    grid-column: 2 / 4;
  }
`;

export const LoginOption = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-size: 14px;
  flex-wrap: wrap;
`;

export const LoginHelp = styled.div`
  text-align: center;
  font-size: 13px;
  color: #555;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;

  a {
    text-decoration: none;
    color: inherit;
    margin: 0 4px;
  }
`;

export const SocialLogin = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
  @media (max-width: 601px) {
    gap: 1.5rem;
  }
`;

export const SocialButton = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
`;

export const LoginOptionInput = styled.input`
  margin: 10px;
`;

export const LoginOptionLabel = styled.label``;
