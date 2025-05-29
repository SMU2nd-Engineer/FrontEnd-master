import React from "react";
import styled from "styled-components";

// import 명 이렇게 사용하시면 됩니다(경로는 각자 수정 필요!)
// import * as Favorite from "../style/FavoriteDesign";

export const FavoriteMain = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 6px;
  transition: background-color 0.2s ease;
  height: 100%;
  cursor: pointer;
  justify-content: center;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const FavoriteCheckbox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #2563eb;
`;

export const FavoriteLabel = styled.label`
  font-size: 14px;
  color: #333;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 한 줄에 5개 */
  gap: 12px;
  background-color: #f0f0f0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const FormActions = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const FormTitle = styled.h2`
  background-color: #f0b8b8;
  color: white;
  border-bottom: 2px solid #ffffff;

  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 0;
`;

export const EndButton = styled.button`
  font-size: 16px;
  border-radius: 8px;
  background-color: #f0b8b8;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CategoryForm = styled.form`
  width: 100%;
  line-height: 400%;
`;

export const MyEditFavoritePage = styled.div`
  padding-bottom: 30px;
`;
