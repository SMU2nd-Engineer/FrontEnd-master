import React from "react";
import styled from "styled-components";

// import 명 이렇게 사용하시면 됩니다(경로는 각자 수정 필요!)
// import * as Main from "../style/MainPageDesign";

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
`;

export const Header = styled.div`
  grid-area: header;
`;
export const Products = styled.div`
  grid-area: products;
  grid-column: 1/3;
  .sell-container {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  }
  /* .sell-options {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  } */
`;
export const Peak = styled.div`
  grid-area: peak;
  grid-column: 1/3;
`;
export const Rating = styled.div`
  grid-area: rating;
  justify-self: center;
`;
export const Reviews = styled.div`
  grid-area: reviews;
  grid-row: 4/6;
`;
export const HomeButton = styled.div`
  grid-area: button;
`;
