import styled from "styled-components";

// import 명 이렇게 사용하시면 됩니다(경로는 각자 수정 필요!)
// import * as Favorite from "../style/FavoriteDesign";

export const FavoriteMain = styled.div`
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  transition: background-color 0.2s ease;
  height: 100%;
  cursor: pointer;
  justify-content: center;
  width: 100%;
`;

export const FavoriteCheckbox = styled.input`
  display: none; /* 숨김 처리 */
`;

export const FavoriteLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  border-radius: 8px;
  background-color: white;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  padding: 10px;

  /* 박스처럼 보이게 */
  box-shadow: 0 0 0 1px #ccc;

  &:hover {
    box-shadow: 0 0 0 2px #999;
  }

  /* 체크되었을 때 스타일 */
  input[type="checkbox"]:checked + & {
    background-color: #f0b8b8;
    color: white;
    box-shadow: 0 0 0 2px #f0b8b8;
  }
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 한 줄에 5개 */
  margin-top: 1rem;
  gap: 1rem;
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
  font-size: 15px;
  border-radius: 8px;
  background-color: #f0b8b8;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  padding: 0 20px;
  transition: transform 0.2s ease, box-shadow 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    transform: scale(1.05); /* 크기 확대 */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); /* 그림자 강조 */
    background-color: #e89191; /* 좀 더 진한 색상으로 */
  }

  &:active {
    transform: scale(0.98); /* 눌림 효과 */
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2); /* 눌렸을 때 그림자 */
  }
`;

export const CategoryForm = styled.form`
  width: 90%;
  line-height: 400%;
  user-select: none;
`;

export const MyEditFavoritePage = styled.div`
  padding-bottom: 30px;
`;
