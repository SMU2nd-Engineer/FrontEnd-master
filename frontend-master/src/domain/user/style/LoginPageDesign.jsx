import Button from "@/components/Button";
import styled from "styled-components";

export const LoginContainer = styled.div`
  display: grid;
  grid-template-areas:
    "form"
    "options"
    "helps"
    "socials";
  grid-template-rows: auto auto auto auto;
  gap: 2rem;
  max-width: fit-content;
  margin: 4rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 1rem;
`;

export const LoginForm = styled.form`
  grid-area: form;
  display: grid;
  grid-template-areas:
    "input-id login-button"
    "input-pw login-button";
  gap: 1rem;
  margin-left: 10px;
  line-height: 3rem;
`;

export const InputId = styled.input`
  grid-area: input-id;
  justify-self: end;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  width: 100%;
`;

export const InputPw = styled.input`
  grid-area: input-pw;
  justify-self: end;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  width: 100%;
`;

export const LoginStyledButton = styled(Button)`
  grid-area: login-button;
  grid-row: 1 / 3;
  grid-column: 2 / 4;
  height: 100%;
  background-color: #f0b8b8;
  color: black;
  width: 6rem;
`;

export const LoginOption = styled.div`
  grid-area: options;
  display: flex;
  justify-content: space-evenly;
  font-size: 14px;
`;

export const LoginHelp = styled.div`
  grid-area: helps;
  text-align: center;
  font-size: 13px;
  color: #555;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
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

  button {
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 50%;
    overflow: hidden;
  }
`;

export const LoginOptionInput = styled.input`
  width: auto;
  margin: 10px;
`;

export const LoginOptionLabel = styled.label`
  width: auto;
`;
