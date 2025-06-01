import styled from "styled-components";
/**
 * 판매/구매 메인 컨테이너(네비 제외)
 */
export const SellAndBuyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 1.5rem;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 1rem;
`;

/**
 * 구매 / 판매 헤더 스타일
 */

export const SellAndBuyHeader = styled.h1`
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
 * 내 구매 스타일 헤더
 */
export const BuyHedear = styled.h2`
  font-weight: 500;
  display: flex;
  justify-content: baseline;
  align-items: center;
  color: #9a8a8a;
  margin-left: 1rem;
`;

/**
 * 마이 메인 구매 상품 컨테이너
 */
export const BuyContainer = styled.div`
  width: 100;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 1rem;
  gap: 1rem;
`;
