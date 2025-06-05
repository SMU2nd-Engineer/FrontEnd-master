import styled from "styled-components";

export const Product_list = styled.div `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  width: 100%;
  /* max-width: 1024px; */
  margin: 0 auto;
  padding: 0 10px;


  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    justify-content: center;
    gap: 23px
  }
`