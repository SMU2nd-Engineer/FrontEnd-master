import React from "react";
import styled from "styled-components";

// import 명 이렇게 사용하시면 됩니다(경로는 각자 수정 필요!)
// import * as TranReview from "../style/TransactionReviewDesign";
// TransactionReview 넘 길어서 TR로 쓰겠습니다!

export const TRmain = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 2rem auto;
  padding: 1.5rem 1rem;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  box-sizing: border-box;
  user-select: none;
  h1 {
    font-size: 1.55rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    text-align: center;
    color: #333;
    line-height: 1.9;
  }
`;

export const ReviewMainForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-left: 0;
`;

export const ChoiceStarRating = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
`;

export const CheckReview = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.85rem;
`;

export const TextReview = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  textArea {
    width: 100%;
    height: 180px;
    resize: vertical;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 0.95rem;
    box-sizing: border-box;
  }
`;

export const CheckButton = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
  button {
    background-color: #f0b8b8;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 15px;
    cursor: pointer;
    font-size: medium;
    line-height: 42px;
    white-space: nowrap;
    min-width: 100px;
    &:hover {
      background-color: #ec7d7d;
    }
    &:disabled {
      background-color: #a5b4fc;
      cursor: not-allowed;
    }
  }
`;

export const TRecaluation = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4rem 0.8rem;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  height: 42px;
  font-size: 0.95rem;
  input[type="checkbox"] {
    margin-right: 0.5rem;
    width: 16px;
    height: 16px;
  }
  label {
    font-size: 1rem;
    flex-grow: 1;
    line-height: 1.2;
    cursor: pointer;
    user-select: none;
  }
`;

export const PaymentProductInfo = styled.div`
  display: flex;
  text-align: center;
  margin-left: 15px;
  margin-bottom: 20px;
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #ddd;
  margin-bottom: 15px;
`;
