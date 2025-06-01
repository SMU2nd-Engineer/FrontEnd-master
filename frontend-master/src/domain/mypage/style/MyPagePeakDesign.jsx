import styled from "styled-components";

/**
 * 짬 판매 상품 컨테이너
 */
export const PeakContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 1rem;
  gap: 1rem;
  margin-top: 3rem;
`;

/**
 * 내 찜 스타일 헤더
 */
export const PeakHedear = styled.h2`
  font-weight: 500;
  display: flex;
  justify-content: baseline;
  align-items: center;
  color: #9a8a8a;
  gap: 1rem;
  margin: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

/**
 * 삭제 버튼
 */
export const PeakDeleteButton = styled.button`
  background-color: transparent;
  color: #ff4d4f;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: rotate(360deg);
    color: #d9363e; /* hover 시 더 진한 색 */
  }

  &:focus {
    outline: none;
  }
`;

export const PickListContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const CardAndButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
