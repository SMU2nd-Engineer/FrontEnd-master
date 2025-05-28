import styled from "styled-components";

export const hr = styled.hr`
  border: 0;
  width: 80%;
  height: 1px;
  background: #bbb;
`;

export const VerticalDivider = styled.div`
  width: 1px;
  background-color:#bbb;
  margin: 0 10px;
`
export const HorizontalDivider = styled.div`
  height: 1px;
  background-color: #bbb;
  margin: 10px 0;
`

export const DetailTop = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  padding: 20px; 
`
export const ThumbnailBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
// 상품명, 가격, 판매자명
export const Column = styled.div`
  flex : 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: first baseline;
  text-align: left;
`

export const DetailBottom = styled.div`
  height: auto;
  text-align: left;
  margin-top: 20px;
  padding: 10px;
  border: 1px dotted rgb(168, 168, 168);
`



// export const title



