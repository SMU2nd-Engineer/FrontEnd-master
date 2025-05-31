import React from "react";
import styled from "styled-components";

export const SubmitMain = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 32px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SubmitTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

//
export const SubmitMiddle = styled.div`
  min-height: 300px;
`;

export const SubmitBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

export const CategoryAndTitle = styled.div`
  display: flex;
  gap: 20px;
`;

export const ButtonMain = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
`;

export const SelectCategory = styled.div`
  select {
    width: 150px;
    height: 100%;
    /* border-color: transparent; */
  }
`;

export const SubmitTitle = styled.div`
  input {
    width: 720px;
    height: 35px;
  }
`;

export const SubmitButton = styled.div`
  button {
    height: 48px;
    padding: 0 20px;
    font-size: 16px;
    background-color: #f0b8b8;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      background-color: #ec7d7d;
    }
  }
`;

export const CancleButton = styled.div`
  button {
    height: 48px;
    padding: 0 20px;
    font-size: 16px;
    background-color: #f0b8b8;
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background-color: #ec7d7d;
    }
  }
`;

export const SubmitSubTitle = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #6b4b4b;
  gap: 6px;
  font-weight: bold;
`;
