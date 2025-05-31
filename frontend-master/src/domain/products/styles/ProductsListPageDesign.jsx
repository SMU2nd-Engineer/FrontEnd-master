import styled from "styled-components";

export const Product_top = styled.div`
  display: flex;
  justify-content: space-between;

  .pluploadbutton{
  text-decoration: underline;
  font-size: 90%;
  color: #666666;
}
`
export const Product_list = styled.div `
  display: grid;
  grid-template-columns: repeat(4,  1fr);
  gap: 32px;
  width: 100%;
  margin: 0 auto;
`

