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
  height: auto;
  padding: 2rem;

  @media (max-width: 600px) {
    gap: 1rem;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
    padding: 1rem;
  }
`;

/**
 * 로딩화면에 사용할 텍스트 스타일
 */
export const SocialLoginLodingText = styled.h1`
  color: #f0b8b8;
  font-size: 1.5rem;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
