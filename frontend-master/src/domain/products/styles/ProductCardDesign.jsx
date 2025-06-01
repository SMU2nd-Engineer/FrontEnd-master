import styled from "styled-components";
import PeakButton from "../components/PeakButton";

export const Thumbnail = styled.div`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  overflow: hidden;

  img{
    width: 100%;
  }

`

export const Product_card = styled.div `
  width: 210px;
  height: 340px;
  border: 1px solid #ddd;
  border-radius: 8px;
  /* overflow: hidden; */
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`

export const Button = styled.div`
    display: flex;
    justify-content: end;
    padding: 0 10px;
`

export const CardPeakButton = styled(PeakButton)`
  width: 30px !important;
  height: 30px !important;
  display: flex;
  justify-content: end;
  /* padding: 0 10px; */
  
  
`




  

