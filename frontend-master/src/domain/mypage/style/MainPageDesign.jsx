import React from "react";
import styled from "styled-components";

export const MainTool = styled.div`
  width: 100vw;
  max-width: 100%;
  overflow-y: auto;
  box-sizing: border-box;
`;

export const MyPageContainer = styled.div`
  display: grid;
  grid-template-areas:
    "header header  header"
    "products products rating"
    "products products reviews"
    "peak peak reviews"
    "button button button";
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 2rem;

  @media (max-width: 1024px) {
    grid-template-areas:
      "header"
      "products"
      "rating"
      "reviews"
      "peak"
      "button";
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    gap: 0.75rem;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
    padding: 0.5rem;
  }
`;

export const Header = styled.div`
  grid-area: header;
`;
export const Products = styled.div`
  grid-area: products;
  .sell-container {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  }
`;
export const Peak = styled.div`
  grid-area: peak;
`;
export const Rating = styled.div`
  grid-area: rating;
  justify-self: center;
`;
export const Reviews = styled.div`
  grid-area: reviews;
`;
export const HomeButton = styled.div`
  grid-area: button;
`;
