import styled, {css} from "styled-components";

export const Box = styled.div`
  width: 100%;
  display: inline-block;
  align-items: center;
  text-align: center;
  justify-items: center;
  /* margin: 1rem; */
  /* padding: 5px; */
`

export const Container = styled.div`
  width: 50%;
  align-items: center;
  text-align: center;
  margin: 1rem;
  /* margin-left: 12rem; */
`;

export const Test = styled.span`
  color: #816b6b;
  padding: 0.5rem;
  margin: 5px;
  font-weight: bold;
  text-align: left;
  display: flex;
`;

export const ProductInfo = styled.div`
  border-bottom: 1px #ddd solid;
  width: 100%;
  height: auto;
  margin: 5px;
  padding-bottom: 18px;
  display: flex;
  text-align: left;
`;

export const ImgDiv = styled.div`
  /* padding: 5px; */
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
  width: 100px;
  height: auto;
`;

export const PriceTitle = styled.div`
  margin-top: 5px;
  text-align: left;
  /* padding: 5px; */
  font-size: 20px;
`
export const Price = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  margin-left: 15px;
`

export const ExpectedAmount = styled.span`
  font-size: 13px;
  text-align: left;
`

export const Total = styled.div`
  text-align: left;
  font-weight: bold;
`

export const BottomSection = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 15rem;
  justify-content: space-between;
  height: 20px;
`

export const NextBotton = styled.button`
  background-color: #f0b8b8;
`

export const Title = styled.p`
  font-size: 15px;
`