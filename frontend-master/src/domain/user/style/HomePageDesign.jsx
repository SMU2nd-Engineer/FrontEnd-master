import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 90.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 2rem;
  user-select: none;

  @media (max-width: 1024px) {
    width: 95%;
    padding: 1.5rem;
    max-width: 90%;
  }

  @media (max-width: 600px) {
    padding: 1rem;
    max-width: 95%;
  }

  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0.5rem;
    padding: 0rem;
  }
`;

export const HomeProductContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    max-width: 80%;
    gap: 0rem;
  }

  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0%;
    gap: 0rem;
  }
`;

export const HomeBoardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 80%;
    gap: 0.5rem;
  }
`;

export const HomeHedear = styled.h1`
  font-weight: 500;
  display: flex;
  justify-content: baseline;
  align-items: center;
  color: #9a8a8a;
  gap: 1rem;
  margin: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #ddd;

  @media (max-width: 600px) {
    font-size: 1.1rem;
    padding: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.5rem;
    margin: 0.5rem;
  }
`;

export const HomeProductList = styled.div`
  > div {
    gap: 0.5rem;
    padding: 0rem;

    @media (max-width: 600px) {
      gap: 0.75rem;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;
