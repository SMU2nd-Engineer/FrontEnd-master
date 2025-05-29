import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  display: inline-block;
  align-items: center;
  text-align: center;
  justify-items: center;
  /* margin: 1rem; */
  /* padding: 5px; */
`

export const PaymentBox = styled.div`
  width: 55%;
  display: block;
  margin: 10px;
  padding: 5px;
`

export const PaymentInfo = styled.p`
  color: #f0b8b8;
  text-align: left;
  padding: 1px;
  margin-left: 8px;
  margin-bottom: 5px;
  font-weight: bold;
`

export const Adderss = styled.div`
  width: 100%;
  height: 100%;
  border: #ddd solid 1px;
  border-radius: 5px;
  text-align: center;
  padding: 20px;
  margin: 10px;
`

export const AddressP = styled.p`
  background-color: #ddd;
  padding-bottom: 20px;
  font-weight: bold;
  margin: 5px;
  margin-bottom: 10px;
  padding: 10px;
`

export const AddressComponent = styled.div`
  text-align: left;
  margin-top: 30px;
  padding: 5px;
  line-height: 25px;
`

export const Paymethod = styled.div`
  width: 100%;
  text-align: left;
  padding: 5px;
`

export const PaymentMethod = styled.label`
  border-right: 1px solid #ddd;
  /* padding: 5px; */
  padding-right: 20px;
  font-weight: bold;
  margin-left : 10px;
  margin-right: 20px;
`

export const PaymentBtn = styled.button`
  background-color: #f0b8b8;
  width: 100%;
  padding: 5px;
  margin: 5px;
  margin-top: 5rem;
  font-weight: bold;
`

export const ProductInfo = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  /* margin: 5px; */
  padding: 10px;
  /* height: 10rem; */
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-radius: 5px;
  margin: 5px;
  margin-top: 10px;
`
export const Img = styled.div`
  width: 70px;
  margin: 5px;
  /* padding: 5px; */
`

export const PriceTitle = styled.div`
  padding: 5px;
  margin-left: 15px;
  text-align: left;
`

export const Price = styled.h2`
  font-weight: 500;
  font-size: 20px;
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
`

export const Review = styled.button`
  background-color: #f0b8b8;
  width: 125px;
  height: 50px;
  padding: 5px;
  margin-left: 5px;
  margin-top: 2rem;
  font-weight: bold;
`

export const Next = styled.button`
  background-color: #ddd;
  width: 125px;
  padding: 5px;
  height: 50px;
  /* margin: 5px; */
  margin-top: 2rem;
  font-weight: bold;
`

export const ReviewBox = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PaySuccess = styled.h2`
  text-align: center;
  font-size: large;
  font-weight: bold;
  margin-bottom: 1rem;
`

export const PayError = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
`

export const OrderProduct = styled.p`
  color: #f0b8b8;
  text-align: left;
  margin-top: 30px;
  margin-left: 10px;
  font-weight: bold;
`

export const Select = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 10px;
  grid-area: ${(props) => props.area};
`

export const DeliveryFee = styled.p`
  font-size: 12px;
  font-weight: 300;
  padding: 1px;
  color: #b8b8b8;
`

export const Total = styled.p`
  padding-top: 10px;
  font-weight: bold;
`