import styled, {css} from "styled-components";

export const Box = styled.div`
  width: 100%;
  display: inline-block;
  align-items: center;
  justify-items: center;
  text-align: center;
  justify-items: center;
  padding: 5px;
`

export const Container = styled.div`
  width: 50%;
  align-items: center;
  text-align: center;
  margin: 1rem;
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
  margin: 1px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  display: flex;
  text-align: left;
`;

export const ImgDiv = styled.div`
  padding: 5px;
  margin-right: 15px;
  display: flex;
  height: 100px;
`;

export const PriceTitle = styled.div`
  text-align: left;
  display: block;
`

export const TradeTitle = styled.p`
  font-size: 15px;
  margin-left: 1px;
`

export const TradePrice = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 1px;
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
  text-align: center;
  width: 100%;
  margin-top: 15rem;
  justify-content: space-between;
  height: 20px;
`

export const NextBotton = styled.button`
  background-color: #f0b8b8;
`