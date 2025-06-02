import styled from "styled-components";
import PeakButton from "../components/PeakButton";

// export const hr = styled.hr`
//   border: 0;
//   width: 80%;
//   height: 1px;
//   background: #bbb;
// `;

export const VerticalDivider = styled.div`
  width: 1px;
  background-color:#d4d4d4;
  margin: 0 10px;
`
export const HorizontalDivider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #d4d4d4;
  margin: 10px 0;
`

export const DetailTop = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
  padding: 20px; 
`
export const ThumbnailBox = styled.div`
  flex: 1;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`
export const OtherImages = styled.div`
  display: flex;
  gap: 12px; /* 이미지 사이 간격 */
  flex-wrap: nowrap; /* 줄바꿈 없이 한 줄에 나열 */
  overflow-x: auto;

  img{
    width: 60px;
  }
`


// 상품명, 가격, 판매자명
export const Column = styled.div`
  flex : 1;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: first baseline;
  text-align: left;

   .title {
    font-size: 3em;
    font-weight: 500;
    margin-top: 30px;
  }

  .price {
    font-size: 1.8em;
    /* margin-bottom: 30px; */
  }
`
export const NickNDate = styled.div`
  display: flex ;
  justify-content: space-between;
  align-items: center;
  gap: 150px;

  font-size: 18px;
  color: #c4c4c4 ;
`
export const Buttonbox = styled.div`
  width: auto;
  display: flex;
  gap: 20px;
  margin-top: 60px;

  justify-content: center;
  font-size: 20px;
  color: rgb(85, 77, 68);
  
.pickbutton {
  width: 50px !important; 
}
  

.chatbutton {
  border-color: rgb(121, 182, 233);
  width: 90px;
  height: 50px;
  color: rgb(85, 77, 68);
  font-size: 20px;

  &:hover {
    background-color: rgb(121, 182, 233);
    color: #ffffff;
  }
}

.orderbutton {
  border-color: rgb(151, 157, 245);
  width: 90px;
  height: 50px;
  color: rgb(85, 77, 68);
  font-size: 20px;

  &:hover {
    background-color: rgb(151, 157, 245);
    color: #ffffff;
  }
}
`

export const Pickbutton = styled.div`
  button {
    width: 100%;
    padding: 0;
    }
`


export const DetailBottom = styled.div`
  width: 100%;
  height: auto;
  text-align: left;
  margin-top: 20px;
  padding: 10px;
  border-top: 1px dotted rgb(168, 168, 168);

  img{
    width: 500px;
  }

  p{
    margin-top: 30px;
  }
`

export const PDetailLabel = styled.p`
    background-size: contain;
    font-size: 35px;
    font-weight: bold;
    color: rgb(111, 111, 112);
`

export const PDetailContent = styled.p`
  font-size: 25px;
  margin-top: 10px;
`

export const EditDeleteBox = styled.div`
  display: flex;
  gap: 10px;

  .product_editbutton{
    border-color: #acc7ab;

    width: 60px ;
    height: 50px;
    color: rgb(85, 77, 68);

    &:hover {
      background-color: #acc7ab;
      color: #ffffff;
    }
  }  

  .product_deletebutton {
    border-color: #ffaba8;
    width: 60px ;
    height: 50px;
    color: rgb(85, 77, 68);

    &:hover {
      background-color: #ffaba8;
      color: #ffffff;
    }
  }
`






