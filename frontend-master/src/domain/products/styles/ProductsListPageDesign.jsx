import styled from "styled-components";

export const Product_top = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

  .pluploadbutton{
  text-decoration: underline;
  font-size: 90%;
  color: #666666;

  &:hover{
    font-weight: 700;
    color: #f0b8b8 ;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
`
export const Product_list = styled.div `
  /* display: grid;
  grid-template-columns: repeat(4,  1fr);
  gap: 32px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 2fr;
    margin-left: 0;
  } */
`

export const MoreButton = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  button{
    border-color: #ddd;
    width: 80px;
    height: 30px;
    color: #666666;
  }
`
