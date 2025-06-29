import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  display: inline-block;
  /* align-items: center; */
  /* text-align: center; */
  justify-items: center;
`

export const PaymentBox = styled.div`
  width: 100%;
  max-width: 500px;
  display: block;
  margin: 10px;
  padding: 5px;
  @media (max-width: 768px) {
    /* padding: 0 0.5rem; */
    /* align-items: center; */
    max-width: 350px;
  }
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
  padding: 12px;
  margin-top: 10px;
  @media (max-width: 768px) {
    max-width: 300px;
  }
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
  padding-right: 20px;
  font-weight: bold;
  margin-left : 10px;
  margin-right: 12px;
`

export const PaymentBtn = styled.button`
  background-color: #f0b8b8;
  width: 105%;
  padding: 5px;
  /* margin: 5px; */
  margin-top: 5rem;
  font-weight: bold;
  @media (max-width: 768px) {
    max-width: 315px;
  }
`

export const ProductInfo = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  padding: 10px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  /* margin: 5px; */
  margin-top: 10px;
  @media (max-width: 768px) {
    max-width: 300px;
  }
`
export const Image = styled.div`
  display: flex;
  height: 120px;
  margin: 5px;
`

export const PriceTitle = styled.div`
  padding: 0px;
  margin-left: 15px;
  text-align: left;
  padding: 1px;
  h2, p{
    margin: 3px;
    padding-bottom: 5px;
  }
`

export const Price = styled.h2`
  font-weight: 600;
  font-size: 25px;
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
  margin-left: 1rem;
  margin-top: 2rem;
  font-weight: bold;
  @media (max-width: 768px) {
    max-width: 100px;
  }
`

export const Next = styled.button`
  background-color: #ddd;
  width: 130px;
  padding: 5px;
  height: 50px;
  margin-top: 2rem;
  font-weight: bold;
  @media (max-width: 768px) {
    max-width: 100px;
  }
`

export const ReviewBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 539px;
  @media (max-width: 768px) {
    max-width: 300px;
  }
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
  select{
  border-color: transparent;

  }
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