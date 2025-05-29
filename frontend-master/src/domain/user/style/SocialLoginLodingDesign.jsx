import styled from "styled-components";

/**
 * 로딩 화면 컨테이너
 */
export const SocialLoginLodingContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  height: 100vh;
`;

/**
 * 로딩화면에 사용할 텍스트 스타일
 */
export const SocialLoginLodingText = styled.h1`
  color: #f0b8b8;
  font-size: 1.5rem;
  text-align: center;
`;
